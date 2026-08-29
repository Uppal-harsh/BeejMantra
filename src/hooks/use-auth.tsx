"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  AppUser,
  AuthResult,
  clearStoredSession,
  createTransaction as createSupabaseTransaction,
  deleteTransaction as deleteSupabaseTransaction,
  restoreStoredSession,
  signInWithEmail as signInWithEmailRequest,
  signInWithGoogle as signInWithGoogleRequest,
  signOut as signOutRequest,
  signUpWithEmail as signUpWithEmailRequest,
  supabaseConfigured,
  Transaction as SupabaseTransaction,
  TransactionData,
  updateAuthMetadata,
  updateTransaction as updateSupabaseTransaction,
  upsertProfile,
  uploadProfileImage as uploadProfileImageRequest,
} from "@/lib/supabase";
import { AppTimestamp } from "@/lib/app-timestamp";
import { toast } from "./use-toast";

export interface UserProfile extends Record<string, any> {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  location?: string;
  language?: string;
  crops?: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: SupabaseTransaction["date"];
}

interface AuthContextType {
  user: AppUser | null;
  userProfile: UserProfile | null;
  transactions: Transaction[];
  sessionToken: string | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  uploadProfileImage: (file: File) => Promise<void>;
  addTransaction: (data: TransactionData) => Promise<void>;
  updateTransaction: (id: string, data: Partial<TransactionData>) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
}

const DEFAULT_DEMO_USER: AppUser = {
  id: "demo-farmer-001",
  email: "farmer@beejmantra.in",
  displayName: "Ram Kishan",
  photoURL: null,
};

const DEFAULT_DEMO_PROFILE: UserProfile = {
  uid: "demo-farmer-001",
  displayName: "Ram Kishan",
  email: "farmer@beejmantra.in",
  photoURL: null,
  location: "Haryana, India",
  language: "hi",
  crops: "Wheat, Mustard, Paddy",
};

const INITIAL_DEMO_TRANSACTIONS: Transaction[] = [
  {
    id: "tx-1",
    description: "Wheat crop sale (Mandi)",
    amount: 85000,
    type: "income",
    category: "Crop Sale",
    date: AppTimestamp.now(),
  },
  {
    id: "tx-2",
    description: "Fertilizer & Seeds purchase",
    amount: 14500,
    type: "expense",
    category: "Inputs",
    date: AppTimestamp.now(),
  },
  {
    id: "tx-3",
    description: "Tractor diesel & servicing",
    amount: 6200,
    type: "expense",
    category: "Machinery",
    date: AppTimestamp.now(),
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(DEFAULT_DEMO_USER);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(DEFAULT_DEMO_PROFILE);
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_DEMO_TRANSACTIONS);
  const [loading, setLoading] = useState(false);
  const [sessionToken, setSessionToken] = useState<string | null>("demo-session-token");

  useEffect(() => {
    let mounted = true;

    const bootstrap = async () => {
      try {
        if (supabaseConfigured) {
          const result = await restoreStoredSession();
          if (!mounted) return;

          if (result) {
            setSessionToken(result.session.access_token);
            setUser(result.user);
            setUserProfile(result.profile);
            setTransactions(result.transactions);
            return;
          }
        }
      } catch (error) {
        console.warn("Supabase session restore skipped, using demo session", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    bootstrap();

    return () => {
      mounted = false;
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      if (supabaseConfigured) {
        await signInWithGoogleRequest();
        return;
      }
    } catch (err) {
      console.warn("Supabase Google sign-in failed, using demo auth", err);
    }
    setUser(DEFAULT_DEMO_USER);
    setUserProfile(DEFAULT_DEMO_PROFILE);
    setSessionToken("demo-google-token");
  };

  const signInWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      if (supabaseConfigured) {
        const result = await signInWithEmailRequest(email, pass);
        hydrateAuthState(result);
        return;
      }
    } catch (error) {
      console.warn("Supabase email sign-in failed, using demo auth", error);
    }

    const demoUser: AppUser = {
      id: "farmer-" + Math.random().toString(36).slice(2, 7),
      email: email || "farmer@beejmantra.in",
      displayName: email ? email.split("@")[0] : "Ram Kishan",
      photoURL: null,
    };
    const demoProfile: UserProfile = {
      uid: demoUser.id,
      displayName: demoUser.displayName,
      email: demoUser.email,
      photoURL: null,
      location: "Haryana, India",
      language: "hi",
      crops: "Wheat, Mustard",
    };
    setUser(demoUser);
    setUserProfile(demoProfile);
    setSessionToken("demo-token-" + Date.now());
    setLoading(false);
  };

  const signUpWithEmail = async (email: string, pass: string) => {
    await signInWithEmail(email, pass);
  };

  const signOut = async () => {
    setLoading(true);
    try {
      if (supabaseConfigured) {
        await signOutRequest();
      }
    } catch (error) {
      console.warn("Sign-out failed", error);
    }
    setUser(DEFAULT_DEMO_USER);
    setUserProfile(DEFAULT_DEMO_PROFILE);
    setSessionToken("demo-session-token");
    setLoading(false);
  };

  const updateUserProfile = async (data: Partial<UserProfile>) => {
    const nextProfile: UserProfile = {
      uid: user?.id || "demo-farmer-001",
      email: data.email ?? user?.email ?? "farmer@beejmantra.in",
      displayName: data.displayName ?? userProfile?.displayName ?? user?.displayName ?? "Ram Kishan",
      photoURL: data.photoURL ?? userProfile?.photoURL ?? null,
      location: data.location ?? userProfile?.location ?? "Haryana, India",
      language: data.language ?? userProfile?.language ?? "hi",
      crops: data.crops ?? userProfile?.crops ?? "Wheat, Mustard",
    };

    if (supabaseConfigured && sessionToken && user) {
      try {
        await updateAuthMetadata(sessionToken, {
          displayName: nextProfile.displayName,
          photoURL: nextProfile.photoURL,
        });
        await upsertProfile(sessionToken, nextProfile);
      } catch (err) {
        console.warn("Supabase profile update skipped", err);
      }
    }

    if (user) {
      setUser({ ...user, displayName: nextProfile.displayName, photoURL: nextProfile.photoURL });
    }
    setUserProfile(nextProfile);
  };

  const uploadProfileImage = async (file: File): Promise<void> => {
    if (!user || !sessionToken) {
      throw new Error("No user is currently signed in.");
    }

    try {
      if (supabaseConfigured) {
        const downloadURL = await uploadProfileImageRequest(sessionToken, user.id, file);
        await updateUserProfile({ photoURL: downloadURL });
        return;
      }
    } catch (error: any) {
      console.warn("Remote upload failed, using local object url", error);
    }

    const localUrl = URL.createObjectURL(file);
    await updateUserProfile({ photoURL: localUrl });
  };

  // Transaction Management
  const addTransaction = async (data: TransactionData) => {
    const newTx: Transaction = {
      id: "tx-" + Date.now(),
      description: data.description,
      amount: data.amount,
      type: data.type,
      category: data.category,
      date: AppTimestamp.fromDate(data.date),
    };

    if (supabaseConfigured && sessionToken && user) {
      try {
        const created = await createSupabaseTransaction(sessionToken, user.id, data);
        setTransactions((current) => [created, ...current].sort((a, b) => b.date.toMillis() - a.date.toMillis()));
        return;
      } catch (err) {
        console.warn("Supabase transaction save failed, falling back to local", err);
      }
    }

    setTransactions((current) => [newTx, ...current].sort((a, b) => b.date.toMillis() - a.date.toMillis()));
  };

  const updateTransaction = async (id: string, data: Partial<TransactionData>) => {
    if (supabaseConfigured && sessionToken && user) {
      try {
        const updated = await updateSupabaseTransaction(sessionToken, id, data);
        setTransactions((current) =>
          current
            .map((transaction) => (transaction.id === id ? updated : transaction))
            .sort((a, b) => b.date.toMillis() - a.date.toMillis()),
        );
        return;
      } catch (err) {
        console.warn("Supabase transaction update failed", err);
      }
    }

    setTransactions((current) =>
      current.map((tx) =>
        tx.id === id
          ? {
              ...tx,
              description: data.description ?? tx.description,
              amount: data.amount ?? tx.amount,
              type: data.type ?? tx.type,
              category: data.category ?? tx.category,
              date: data.date ? AppTimestamp.fromDate(data.date) : tx.date,
            }
          : tx,
      ),
    );
  };

  const deleteTransaction = async (id: string) => {
    if (supabaseConfigured && sessionToken && user) {
      try {
        await deleteSupabaseTransaction(sessionToken, id);
      } catch (err) {
        console.warn("Supabase transaction delete failed", err);
      }
    }

    setTransactions((current) => current.filter((transaction) => transaction.id !== id));
  };

  const hydrateAuthState = (result: AuthResult) => {
    setSessionToken(result.session.access_token);
    setUser(result.user);
    setUserProfile(result.profile);
    setTransactions(result.transactions);
    setLoading(false);
  };

  const value = {
    user,
    userProfile,
    transactions,
    sessionToken,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    updateUserProfile,
    uploadProfileImage,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const bootstrap = async () => {
      try {
        const result = await restoreStoredSession();
        if (!mounted) return;

        if (result) {
          setSessionToken(result.session.access_token);
          setUser(result.user);
          setUserProfile(result.profile);
          setTransactions(result.transactions);
        } else {
          setSessionToken(null);
          setUser(null);
          setUserProfile(null);
          setTransactions([]);
        }
      } catch (error) {
        console.error("Failed to restore Supabase session", error);
        if (mounted) {
          clearStoredSession();
          setSessionToken(null);
          setUser(null);
          setUserProfile(null);
          setTransactions([]);
        }
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
    await signInWithGoogleRequest();
  };

  const signInWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      const result = await signInWithEmailRequest(email, pass);
      hydrateAuthState(result);
    } catch (error) {
      console.error("Error during email sign-in", error);
      setLoading(false);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      const result = await signUpWithEmailRequest(email, pass);
      if (result) {
        hydrateAuthState(result);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during email sign-up", error);
      setLoading(false);
      throw error;
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await signOutRequest();
    } catch (error) {
      console.warn("Best-effort sign-out failed", error);
    }
    setUser(null);
    setUserProfile(null);
    setSessionToken(null);
    setTransactions([]);
    setLoading(false);
  };
  
  const updateUserProfile = async (data: Partial<UserProfile>) => {
    if (!user || !sessionToken) {
       throw new Error("No user is currently signed in.");
    }

    const nextProfile: UserProfile = {
      uid: user.id,
      email: data.email ?? user.email,
      displayName: data.displayName ?? user.displayName ?? null,
      photoURL: data.photoURL ?? user.photoURL ?? null,
      location: data.location ?? userProfile?.location ?? "Pune, Maharashtra",
      language: data.language ?? userProfile?.language ?? "en",
      crops: data.crops ?? userProfile?.crops ?? "",
    };

    await updateAuthMetadata(sessionToken, {
      displayName: nextProfile.displayName,
      photoURL: nextProfile.photoURL,
    });

    await upsertProfile(sessionToken, nextProfile);
    setUser({ ...user, displayName: nextProfile.displayName, photoURL: nextProfile.photoURL });
    setUserProfile(nextProfile);
  };

  const uploadProfileImage = async (file: File): Promise<void> => {
    if (!supabaseConfigured) {
       toast({
        variant: "destructive",
        title: "Supabase Not Configured",
        description:
          "Image upload requires a configured Supabase project. Please set your .env.local values.",
      });
      throw new Error("Supabase not configured");
    }

    if (!user || !sessionToken) {
      throw new Error("No user is currently signed in.");
    }

    try {
        const downloadURL = await uploadProfileImageRequest(sessionToken, user.id, file);
        await updateUserProfile({ photoURL: downloadURL });
    } catch(error: any) {
        console.error("Error uploading profile image:", error);
        toast({
            variant: "destructive",
            title: "Upload Failed",
            description: error?.message || "Could not upload profile image. Please try again later.",
        });
        throw error;
    }
  };
  
  // Transaction Management
  const addTransaction = async (data: TransactionData) => {
    if (!user || !sessionToken) throw new Error("User not authenticated");
    const created = await createSupabaseTransaction(sessionToken, user.id, data);
    setTransactions((current) => [created, ...current].sort((a, b) => b.date.toMillis() - a.date.toMillis()));
  };

  const updateTransaction = async (id: string, data: Partial<TransactionData>) => {
    if (!user || !sessionToken) throw new Error("User not authenticated");
    const updated = await updateSupabaseTransaction(sessionToken, id, data);
    setTransactions((current) =>
      current
        .map((transaction) => (transaction.id === id ? updated : transaction))
        .sort((a, b) => b.date.toMillis() - a.date.toMillis()),
    );
  };

  const deleteTransaction = async (id: string) => {
    if (!user || !sessionToken) throw new Error("User not authenticated");
    await deleteSupabaseTransaction(sessionToken, id);
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

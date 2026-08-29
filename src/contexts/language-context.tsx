
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useAuth } from '@/hooks/use-auth';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';
import kn from '@/locales/kn.json';
import bn from '@/locales/bn.json';
import bho from '@/locales/bho.json';
import pa from '@/locales/pa.json';

const translations: Record<string, any> = { en, hi, kn, bn, bho, pa };

export type Language = 'en' | 'hi' | 'kn' | 'bn' | 'bho' | 'pa';

const LANGUAGE_STORAGE_KEY = 'beejmantra_preferred_lang';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { userProfile, loading: authLoading } = useAuth();
  const [language, setLanguageState] = useState<Language>('hi');

  // 1. Initial hydration from localStorage on client
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (savedLang && ['en', 'hi', 'kn', 'bn', 'bho', 'pa'].includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch {
      // Storage access blocked or SSR
    }
  }, []);

  // 2. Sync with userProfile language if available
  useEffect(() => {
    if (!authLoading) {
      const preferredLanguage = userProfile?.language as Language | undefined;
      if (preferredLanguage && ['en', 'hi', 'kn', 'bn', 'bho', 'pa'].includes(preferredLanguage)) {
        setLanguageState(preferredLanguage);
        try {
          localStorage.setItem(LANGUAGE_STORAGE_KEY, preferredLanguage);
        } catch {}
      }
    }
  }, [userProfile, authLoading]);

  // 3. Central setLanguage that updates state and localStorage
  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    } catch {}
  }, []);

  const t = useCallback((key: string, replacements: Record<string, string | number> = {}): string => {
    const langFile = translations[language] || translations.hi || translations.en;
    
    const keys = key.split('.');
    let result = keys.reduce((acc, currentKey) => {
        if (acc && typeof acc === 'object' && acc[currentKey] !== undefined) {
            return acc[currentKey];
        }
        return undefined;
    }, langFile as any);

    // Fallback to English if missing in current language
    if (result === undefined && language !== 'en') {
      result = keys.reduce((acc, currentKey) => {
        if (acc && typeof acc === 'object' && acc[currentKey] !== undefined) {
          return acc[currentKey];
        }
        return undefined;
      }, translations.en as any);
    }

    if (result === undefined) {
        return key;
    }
    
    if (typeof result === 'string') {
        Object.keys(replacements).forEach(placeholder => {
            const regex = new RegExp(`{{${placeholder}}}`, 'g');
            result = result.replace(regex, String(replacements[placeholder]));
        });
    }

    return result;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};

    
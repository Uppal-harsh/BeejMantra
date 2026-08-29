
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation, Language } from "@/contexts/language-context";
import { useAuth } from "@/hooks/use-auth";
import { Languages } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const languages: { code: Language; name: string }[] = [
  { code: 'hi', name: 'हिंदी (Hindi)' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'bho', name: 'भोजपुरी (Bhojpuri)' },
  { code: 'en', name: 'English' },
];

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();
  const { user, updateUserProfile } = useAuth();

  const handleLanguageChange = async (newLang: string) => {
    const langCode = newLang as Language;
    setLanguage(langCode);

    if (user && updateUserProfile) {
      try {
        await updateUserProfile({ language: langCode });
      } catch (error) {
        console.error("Failed to sync language preference with profile:", error);
      }
    }

    const selected = languages.find((l) => l.code === langCode);
    toast({
      title: t('landing.languageStrip.toastTitle', { name: selected?.name || newLang }),
      description: t('landing.languageStrip.toastDesc', { name: selected?.name || newLang }),
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium">
          <Languages className="h-4 w-4 text-emerald-600" />
          <span className="text-xs font-semibold uppercase">{language}</span>
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-emerald-100 shadow-xl rounded-2xl p-1 min-w-[170px]">
        <DropdownMenuRadioGroup value={language} onValueChange={handleLanguageChange}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="rounded-xl font-medium text-xs sm:text-sm py-2 cursor-pointer focus:bg-emerald-50 focus:text-emerald-800"
            >
              {lang.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

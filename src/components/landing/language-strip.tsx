"use client";

import { Globe, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation, Language } from "@/contexts/language-context";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "@/hooks/use-toast";

interface LanguageStripProps {
  onOpenVoice: () => void;
}

export function LanguageStrip({ onOpenVoice }: LanguageStripProps) {
  const { language, setLanguage, t } = useTranslation();
  const { user, updateUserProfile } = useAuth();

  const languages: { code: Language; label: string; name: string }[] = [
    { code: "hi", label: "हिंदी", name: "Hindi" },
    { code: "kn", label: "ಕನ್ನಡ", name: "Kannada" },
    { code: "bn", label: "বাংলা", name: "Bengali" },
    { code: "bho", label: "भोजपुरी", name: "Bhojpuri" },
    { code: "en", label: "English", name: "English" },
  ];

  const handleSelectLanguage = async (code: Language, name: string) => {
    setLanguage(code);

    if (user && updateUserProfile) {
      try {
        await updateUserProfile({ language: code });
      } catch (error) {
        console.error("Failed to sync profile language:", error);
      }
    }

    toast({
      title: t("landing.languageStrip.toastTitle", { name }),
      description: t("landing.languageStrip.toastDesc", { name }),
    });
  };

  return (
    <section id="languages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
      <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-emerald-100 shadow-md shadow-emerald-950/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-between">
          
          {/* Left Side: 5 Indian Languages */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center flex-shrink-0 text-emerald-700 shadow-xs">
              <Globe className="h-6 w-6 stroke-[2]" />
            </div>
            
            <div className="space-y-2">
              <div>
                <h3 className="font-headline font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                  {t("landing.languageStrip.title")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {t("landing.languageStrip.subtitle")}
                </p>
              </div>

              {/* Language Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {languages.map((lang) => {
                  const isSelected = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang.code, lang.name)}
                      className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs cursor-pointer ${
                        isSelected
                          ? "bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20 scale-105"
                          : "bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/60"
                      }`}
                    >
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider on large screens */}
          <div className="hidden lg:block lg:col-span-1 h-12 w-px bg-emerald-100 mx-auto" />

          {/* Right Side: Voice First, Kisan First */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center flex-shrink-0 text-emerald-700 shadow-xs">
                <Mic className="h-6 w-6 stroke-[2] animate-pulse" />
              </div>
              
              <div>
                <h3 className="font-headline font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                  {t("landing.languageStrip.voiceTitle")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {t("landing.languageStrip.voiceSubtitle")}
                </p>
              </div>
            </div>

            {/* Voice CTA Button */}
            <Button
              type="button"
              onClick={onOpenVoice}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-6 rounded-full shadow-md shadow-emerald-600/25 transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              <Mic className="h-4 w-4 stroke-[2.5]" />
              <span>{t("landing.languageStrip.voiceCta")}</span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

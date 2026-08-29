"use client";

import Link from "next/link";
import Image from "next/image";
import { Sprout, Mic, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnnapurnaChatCard } from "./annapurna-chat-card";
import { useTranslation } from "@/contexts/language-context";

interface HeroProps {
  onOpenVoice: () => void;
  onOpenAuth: () => void;
}

export function Hero({ onOpenVoice, onOpenAuth }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-[#EEF8F1]/70 via-white to-[#FAFCFA] min-h-[750px] lg:min-h-[780px] flex items-center border-b border-emerald-100/60">
      
      {/* Background Container with Authentic Indian Farmer Photo on the Right */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Real Farmer Image - occupies right hero area */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full">
          <Image
            src="/hero-farmer.jpg"
            alt="Indian farmer in agricultural field using smartphone"
            fill
            priority
            className="object-cover object-[center_top] lg:object-[center_center] opacity-85 lg:opacity-90 mix-blend-multiply"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Seamless Light Gradient Overlay from Left into Clean White/Sage Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFCFA] via-[#FAFCFA]/95 lg:via-[#FAFCFA]/90 to-transparent w-full lg:w-[65%]" />
        
        {/* Soft Mobile Bottom/Top Gradient */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#FAFCFA] via-[#FAFCFA]/90 to-transparent" />
      </div>

      {/* Hero Content Container (Two Columns: ~45% Left, ~55% Right) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 max-w-xl text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Sprout className="h-4 w-4 text-emerald-600" />
              <span>{t("landing.hero.badge")}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-slate-900 leading-[1.02]">
                {t("landing.hero.titleLine1")}
              </h1>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-emerald-600 leading-[1.02]">
                {t("landing.hero.titleLine2")}
              </h2>
            </div>

            {/* Subheadline Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {t("landing.hero.description")}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 text-xs sm:text-sm font-medium text-slate-800 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 stroke-[2.5]" />
                <span>{t("landing.hero.pills.ai")}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 text-xs sm:text-sm font-medium text-slate-800 shadow-xs">
                <Mic className="h-3.5 w-3.5 text-emerald-600 stroke-[2.5]" />
                <span>{t("landing.hero.pills.voice")}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 text-xs sm:text-sm font-medium text-slate-800 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600 stroke-[2.5]" />
                <span>{t("landing.hero.pills.mandi")}</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:scale-[1.02] group flex items-center justify-center gap-2"
              >
                <Link href="/dashboard">
                  <span>{t("landing.hero.getStarted")}</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                type="button"
                onClick={onOpenVoice}
                variant="outline"
                size="lg"
                className="bg-white hover:bg-emerald-50 border-2 border-emerald-600 text-emerald-700 font-bold text-base px-7 py-6 rounded-full shadow-xs transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mic className="h-5 w-5 text-emerald-600 animate-pulse" strokeWidth={2.5} />
                <span>{t("landing.hero.askAnnapurna")}</span>
              </Button>
            </div>

            {/* Trust Line */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>{t("landing.hero.trustLine")}</span>
            </div>

          </div>

          {/* Right Column: Floating Annapurna AI Chat Card */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end pt-6 lg:pt-0">
            <AnnapurnaChatCard onOpenVoice={onOpenVoice} />
          </div>

        </div>

      </div>

    </section>
  );
}

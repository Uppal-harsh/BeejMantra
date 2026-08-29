"use client";

import Link from "next/link";
import Image from "next/image";
import { Sprout, Mic, ArrowRight, ShieldCheck, Cpu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnnapurnaChatCard } from "./annapurna-chat-card";
import { useTranslation } from "@/contexts/language-context";
import { DesiSunMotif, DesiFolkTree } from "./desi-folk-art";

interface HeroProps {
  onOpenVoice: () => void;
  onOpenAuth: () => void;
}

export function Hero({ onOpenVoice, onOpenAuth }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#F7EFD9] pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-[#D8CABA]/70">
      
      {/* Background Village Landscape Layer (Faded into parchment on the left) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 lg:opacity-55 overflow-hidden">
        <div className="absolute right-0 top-0 w-full lg:w-[65%] h-full">
          <Image
            src="/desi-village-bg.jpg"
            alt="Indian Village Landscape"
            fill
            className="object-cover object-right mix-blend-multiply filter contrast-105"
            priority
          />
          {/* Gradient fade to seamless parchment cream on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7EFD9] via-[#F7EFD9]/70 to-transparent w-full" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column (45% - 5 Cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5 pt-2">
            
            {/* Hand-drawn Style Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5E8] border border-[#C7B99E] shadow-xs">
              <span className="text-xs font-bold font-devanagari text-[#245B35] tracking-wide">
                🌿 {t("landing.hero.badge")} 🌿
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-0.5">
              <h1 className="font-headline font-black text-4xl sm:text-5xl lg:text-[52px] text-[#281E15] leading-[1.1] tracking-tight">
                {t("landing.hero.titleLine1")}
              </h1>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-headline font-black text-4xl sm:text-5xl lg:text-[52px] text-[#245B35] leading-[1.1] tracking-tight">
                  {t("landing.hero.titleLine2")}
                </h1>
                <span className="inline-flex items-center text-[#245B35]">
                  <Sprout className="w-8 h-8 sm:w-10 sm:h-10 text-[#245B35]" />
                </span>
              </div>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base text-[#3F2918] font-normal leading-relaxed max-w-lg">
              {t("landing.hero.description")}
            </p>

            {/* 3 Outlined Feature Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF5E8] border border-[#D8CABA] text-[#281E15] text-xs sm:text-sm font-semibold shadow-xs">
                <Cpu className="w-4 h-4 text-[#245B35]" />
                <span>{t("landing.hero.pillAi")}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF5E8] border border-[#D8CABA] text-[#281E15] text-xs sm:text-sm font-semibold shadow-xs">
                <Mic className="w-4 h-4 text-[#245B35]" />
                <span>{t("landing.hero.pillVoice")}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF5E8] border border-[#D8CABA] text-[#281E15] text-xs sm:text-sm font-semibold shadow-xs">
                <Languages className="w-4 h-4 text-[#245B35]" />
                <span>{t("landing.hero.pillLanguages")}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1.5 w-full sm:w-auto">
              <Button
                asChild
                className="bg-[#245B35] hover:bg-[#1A4A28] active:scale-95 text-[#FAF5E8] font-bold rounded-full px-6 py-5 text-sm sm:text-base shadow-md border border-[#194A28] transition-all hover:scale-105"
              >
                <Link href="/dashboard" className="flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-[#FAF5E8]" />
                  <span>{t("landing.hero.ctaGetStarted")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={onOpenVoice}
                className="bg-[#FAF5E8] hover:bg-[#F0E6CE] active:scale-95 text-[#245B35] border-2 border-[#245B35] font-bold rounded-full px-6 py-5 text-sm sm:text-base shadow-xs transition-all hover:scale-105"
              >
                <Mic className="w-4 h-4 text-[#245B35] mr-1.5" />
                <span>{t("landing.hero.ctaVoice")}</span>
              </Button>
            </div>

            {/* Trust Message */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4A3B2E] pt-0.5">
              <ShieldCheck className="w-4 h-4 text-[#245B35]" />
              <span>{t("landing.hero.trustLine")}</span>
            </div>

            {/* Illustrated Woman Farmer on Left Edge */}
            <div className="hidden xl:flex items-end gap-2 pt-2 select-none pointer-events-none opacity-95">
              <div className="relative w-40 h-52">
                <Image
                  src="/desi-woman-farmer.jpg"
                  alt="Indian Woman Farmer"
                  fill
                  className="object-contain object-bottom mix-blend-multiply"
                />
              </div>
            </div>

          </div>

          {/* Right Column (55% - 7 Cols on desktop) */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]">
            
            {/* Traditional Folk Sun Motif at Upper Right */}
            <div className="absolute top-0 right-2 sm:right-6 z-10 hidden sm:block">
              <DesiSunMotif className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>

            {/* Smiling Indian Farmer in White Turban on Right */}
            <div className="absolute right-0 bottom-0 z-0 hidden md:block w-64 lg:w-80 h-full pointer-events-none select-none">
              <Image
                src="/desi-farmer-hero.jpg"
                alt="Indian Farmer with Smartphone"
                fill
                className="object-contain object-bottom mix-blend-multiply opacity-95"
              />
            </div>

            {/* Centered Floating Annapurna Chat Card */}
            <div className="relative z-20 w-full flex justify-center lg:justify-start lg:pl-2 xl:pl-6">
              <AnnapurnaChatCard onOpenVoice={onOpenVoice} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

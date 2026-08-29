"use client";

import Link from "next/link";
import { Camera, Cpu, BadgeCheck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      step: t("landing.howItWorks.step1.number"),
      title: t("landing.howItWorks.step1.title"),
      subtitle: t("landing.howItWorks.step1.subtitle"),
      desc: t("landing.howItWorks.step1.desc"),
      icon: Camera,
      badge: t("landing.howItWorks.step1.badge"),
      badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
      iconBg: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      step: t("landing.howItWorks.step2.number"),
      title: t("landing.howItWorks.step2.title"),
      subtitle: t("landing.howItWorks.step2.subtitle"),
      desc: t("landing.howItWorks.step2.desc"),
      icon: Cpu,
      badge: t("landing.howItWorks.step2.badge"),
      badgeColor: "bg-amber-50 text-amber-700 border border-amber-200/80",
      iconBg: "bg-amber-50 text-amber-700 border border-amber-200/60",
    },
    {
      step: t("landing.howItWorks.step3.number"),
      title: t("landing.howItWorks.step3.title"),
      subtitle: t("landing.howItWorks.step3.subtitle"),
      desc: t("landing.howItWorks.step3.desc"),
      icon: BadgeCheck,
      badge: t("landing.howItWorks.step3.badge"),
      badgeColor: "bg-sky-50 text-sky-700 border border-sky-200/80",
      iconBg: "bg-sky-50 text-sky-700 border border-sky-200/60",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F4F9F5] py-20 sm:py-28 border-y border-emerald-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>{t("landing.howItWorks.badge")}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {t("landing.howItWorks.title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {t("landing.howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[28px] p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-black text-3xl sm:text-4xl text-emerald-600/20">
                      {item.step}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                    <IconComp className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-headline font-bold text-lg sm:text-xl text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              <span>{t("landing.howItWorks.startFree")}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

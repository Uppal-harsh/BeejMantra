"use client";

import Link from "next/link";
import { Sprout, TrendingUp, CloudSun, Landmark, ShoppingBag, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function FeatureCards() {
  const { t } = useTranslation();

  const cards = [
    {
      id: "fasal-doctor",
      title: t("landing.features.fasalDoctor.title"),
      description: t("landing.features.fasalDoctor.desc"),
      cta: t("landing.features.fasalDoctor.cta"),
      href: "/dashboard/crop-doctor",
      iconBg: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
      ctaColor: "text-emerald-700",
      icon: Sprout,
    },
    {
      id: "mandi-bhav",
      title: t("landing.features.mandiBhav.title"),
      description: t("landing.features.mandiBhav.desc"),
      cta: t("landing.features.mandiBhav.cta"),
      href: "/dashboard/market-analyst",
      iconBg: "bg-amber-50 text-amber-700 border border-amber-200/80",
      ctaColor: "text-amber-700",
      icon: TrendingUp,
    },
    {
      id: "mausam",
      title: t("landing.features.mausam.title"),
      description: t("landing.features.mausam.desc"),
      cta: t("landing.features.mausam.cta"),
      href: "/dashboard/weather",
      iconBg: "bg-sky-50 text-sky-700 border border-sky-200/80",
      ctaColor: "text-sky-700",
      icon: CloudSun,
    },
    {
      id: "sarkari-yojana",
      title: t("landing.features.sarkariYojana.title"),
      description: t("landing.features.sarkariYojana.desc"),
      cta: t("landing.features.sarkariYojana.cta"),
      href: "/dashboard/schemes",
      iconBg: "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
      ctaColor: "text-emerald-800",
      icon: Landmark,
    },
    {
      id: "agri-store",
      title: t("landing.features.agriStore.title"),
      description: t("landing.features.agriStore.desc"),
      cta: t("landing.features.agriStore.cta"),
      href: "/dashboard/shop",
      iconBg: "bg-emerald-100/80 text-emerald-700 border border-emerald-200",
      ctaColor: "text-emerald-700",
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="features" className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {cards.map((card) => {
          const IconComp = card.icon;
          return (
            <Link
              key={card.id}
              href={card.href}
              className="group bg-white rounded-[24px] p-5 sm:p-6 shadow-md shadow-emerald-950/5 hover:shadow-xl hover:shadow-emerald-950/10 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Colored Circular Icon Container */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-slate-900 leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Text CTA with Arrow */}
              <div className="pt-4 mt-auto">
                <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${card.ctaColor} group-hover:gap-2.5 transition-all`}>
                  <span>{card.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

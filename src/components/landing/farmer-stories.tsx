"use client";

import { Star, MapPin, Quote, Award } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function FarmerStories() {
  const { t } = useTranslation();

  const stories = [
    {
      name: t("landing.farmerStories.story1.name"),
      location: t("landing.farmerStories.story1.location"),
      crop: t("landing.farmerStories.story1.crop"),
      quote: t("landing.farmerStories.story1.quote"),
      rating: 5,
    },
    {
      name: t("landing.farmerStories.story2.name"),
      location: t("landing.farmerStories.story2.location"),
      crop: t("landing.farmerStories.story2.crop"),
      quote: t("landing.farmerStories.story2.quote"),
      rating: 5,
    },
    {
      name: t("landing.farmerStories.story3.name"),
      location: t("landing.farmerStories.story3.location"),
      crop: t("landing.farmerStories.story3.crop"),
      quote: t("landing.farmerStories.story3.quote"),
      rating: 5,
    },
  ];

  return (
    <section id="for-farmers" className="bg-white py-20 sm:py-28 border-y border-emerald-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
            <Award className="h-3.5 w-3.5 text-emerald-700" />
            <span>{t("landing.farmerStories.badge")}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {t("landing.farmerStories.title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            {t("landing.farmerStories.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCFA] rounded-[28px] p-6 sm:p-7 border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-emerald-600/25" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &quot;{story.quote}&quot;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {story.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{story.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                  {story.crop}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

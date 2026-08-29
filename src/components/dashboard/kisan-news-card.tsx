"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Newspaper, 
  ExternalLink, 
  Flame, 
  Clock, 
  ArrowUpRight, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";

interface NewsItem {
  id: string;
  category: "msp" | "subsidy" | "advisory" | "tech";
  badgeKey: string;
  badgeColor: string;
  isHot?: boolean;
  timeAgoKey: string;
  source: string;
  titleKey: string;
  descKey: string;
  link: string;
}

const AGRI_NEWS: NewsItem[] = [
  {
    id: "kharif-msp-2026",
    category: "msp",
    badgeKey: "dashboard.news.badges.msp",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    isHot: true,
    timeAgoKey: "dashboard.news.time.hoursAgo2",
    source: "PIB Krishi",
    titleKey: "dashboard.news.items.kharifMsp.title",
    descKey: "dashboard.news.items.kharifMsp.desc",
    link: "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2025732",
  },
  {
    id: "pm-kisan-17th",
    category: "subsidy",
    badgeKey: "dashboard.news.badges.subsidy",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    isHot: true,
    timeAgoKey: "dashboard.news.time.hoursAgo5",
    source: "PM-KISAN DBT",
    titleKey: "dashboard.news.items.pmKisan.title",
    descKey: "dashboard.news.items.pmKisan.desc",
    link: "https://pmkisan.gov.in/",
  },
  {
    id: "icar-monsoon-sowing",
    category: "advisory",
    badgeKey: "dashboard.news.badges.advisory",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    timeAgoKey: "dashboard.news.time.dayAgo1",
    source: "ICAR - IARI",
    titleKey: "dashboard.news.items.icarAdvisory.title",
    descKey: "dashboard.news.items.icarAdvisory.desc",
    link: "https://icar.org.in/",
  },
  {
    id: "pm-kusum-solar",
    category: "tech",
    badgeKey: "dashboard.news.badges.tech",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    timeAgoKey: "dashboard.news.time.daysAgo2",
    source: "MNRE Portal",
    titleKey: "dashboard.news.items.kusumSolar.title",
    descKey: "dashboard.news.items.kusumSolar.desc",
    link: "https://mnre.gov.in/solar/pm-kusum-scheme",
  },
  {
    id: "nano-urea-dap",
    category: "subsidy",
    badgeKey: "dashboard.news.badges.inputs",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    timeAgoKey: "dashboard.news.time.daysAgo3",
    source: "IFFCO / AgriDept",
    titleKey: "dashboard.news.items.nanoDap.title",
    descKey: "dashboard.news.items.nanoDap.desc",
    link: "https://enam.gov.in/web/",
  },
];

export function KisanNewsCard() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<"all" | "msp" | "subsidy" | "advisory" | "tech">("all");

  const filteredNews = filter === "all" 
    ? AGRI_NEWS 
    : AGRI_NEWS.filter((n) => n.category === filter);

  return (
    <Card className="h-full flex flex-col border border-border/80 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3 border-b border-border/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Newspaper className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-headline font-bold">
                  {t("dashboard.news.title")}
                </CardTitle>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("dashboard.news.liveBadge")}
                </span>
              </div>
              <CardDescription className="text-xs mt-0.5">
                {t("dashboard.news.description")}
              </CardDescription>
            </div>
          </div>

          <Button asChild variant="ghost" size="sm" className="text-xs h-7 px-2 text-primary hover:text-primary">
            <Link href="/dashboard/schemes">
              {t("dashboard.news.allNewsBtn")} <ChevronRight className="h-3 w-3 ml-0.5" />
            </Link>
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar text-xs">
          <button
            onClick={() => setFilter("all")}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {t("dashboard.news.filters.all")}
          </button>
          <button
            onClick={() => setFilter("msp")}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              filter === "msp"
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {t("dashboard.news.filters.msp")}
          </button>
          <button
            onClick={() => setFilter("subsidy")}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              filter === "subsidy"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {t("dashboard.news.filters.subsidy")}
          </button>
          <button
            onClick={() => setFilter("advisory")}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              filter === "advisory"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {t("dashboard.news.filters.advisory")}
          </button>
        </div>
      </CardHeader>

      <CardContent className="pt-3 px-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/40 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-medium ${item.badgeColor}`}>
                    {t(item.badgeKey)}
                  </Badge>
                  {item.isHot && (
                    <span className="flex items-center gap-0.5 text-[10px] font-bold text-red-500 bg-red-500/10 px-1.5 py-0 rounded border border-red-500/20">
                      <Flame className="h-2.5 w-2.5 fill-red-500" />
                      HOT
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-muted-foreground shrink-0">
                  <Clock className="h-3 w-3" />
                  <span>{t(item.timeAgoKey)}</span>
                </div>
              </div>

              <h4 className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {t(item.titleKey)}
              </h4>

              <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                {t(item.descKey)}
              </p>

              <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-border/40 text-[11px]">
                <span className="text-muted-foreground font-medium flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  {item.source}
                </span>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-primary hover:underline font-semibold"
                >
                  {t("dashboard.news.readSource")}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            {t("dashboard.news.verifiedSources")}
          </span>
          <Button asChild variant="link" size="sm" className="h-auto p-0 text-xs text-primary font-medium">
            <Link href="/dashboard/schemes">
              {t("dashboard.news.exploreGovtPortals")} &rarr;
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

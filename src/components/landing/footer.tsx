"use client";

import Link from "next/link";
import {
  Sprout,
  PhoneCall,
  Heart,
  Leaf,
  TrendingUp,
  Landmark,
  CloudSun,
  Wallet,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0B2417] text-emerald-100/70 pt-20 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Top Helpline Banner */}
        <div className="bg-white rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-200 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs sm:text-sm">
              <PhoneCall className="h-4 w-4" />
              <span>{t("landing.footer.helplineBadge")}</span>
            </div>
            <h3 className="font-headline font-extrabold text-xl sm:text-2xl text-slate-900">
              {t("landing.footer.helplineTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t("landing.footer.helplineSubtitle")} <strong className="text-emerald-700 font-bold">1800-180-1551</strong>
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-full shadow-md shadow-emerald-600/25 text-base transition-transform hover:scale-105"
          >
            <a href="tel:18001801551" className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              <span>{t("landing.footer.callButton")}</span>
            </a>
          </Button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-xs">
                <Sprout className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-headline font-bold text-2xl text-white">BeejMantra</span>
            </Link>
            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
              {t("landing.footer.brandDesc")}
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-white">
              {t("landing.footer.servicesTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/70">
              <li>
                <Link href="/dashboard/crop-doctor" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <Leaf className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.cropDoctor")}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/market-analyst" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.mandiPrices")}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/schemes" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <Landmark className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.schemes")}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/weather" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <CloudSun className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.weather")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tools */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-white">
              {t("landing.footer.toolsTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/70">
              <li>
                <Link href="/dashboard/crop-recommender" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <Sprout className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.recommender")}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/tracker" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <Wallet className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.tracker")}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/traceability" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <PackageCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.traceability")}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/shop" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <ShoppingBag className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{t("landing.footer.agriStore")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Support */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-white">
              {t("landing.footer.supportTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/70">
              <li>
                <Link href="/dashboard/privacy" className="hover:text-emerald-300 transition-colors">
                  {t("landing.footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/terms" className="hover:text-emerald-300 transition-colors">
                  {t("landing.footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/community" className="hover:text-emerald-300 transition-colors">
                  {t("landing.footer.community")}
                </Link>
              </li>
              <li>
                <a href="tel:18001801551" className="text-emerald-400 hover:underline font-semibold flex items-center gap-1.5">
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>1800-180-1551</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div>
            © {new Date().getFullYear()} {t("landing.footer.copyright")}
          </div>
          <div className="flex items-center gap-1.5 text-emerald-100">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-emerald-400 fill-current" />
            <span>{t("landing.footer.builtFor")}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

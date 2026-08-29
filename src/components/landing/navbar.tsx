"use client";

import Link from "next/link";
import { useState } from "react";
import { Sprout, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/hooks/use-auth";
import { useTranslation } from "@/contexts/language-context";

interface NavbarProps {
  onOpenAuth: () => void;
  onOpenVoice: () => void;
}

export function Navbar({ onOpenAuth, onOpenVoice }: NavbarProps) {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const navLinks = [
    { id: "home", label: t("landing.nav.home"), href: "#home" },
    { id: "features", label: t("landing.nav.features"), href: "#features" },
    { id: "how-it-works", label: t("landing.nav.howItWorks"), href: "#how-it-works" },
    { id: "languages", label: t("landing.nav.languages"), href: "#languages" },
    { id: "for-farmers", label: t("landing.nav.forFarmers"), href: "#for-farmers" },
    { id: "about-us", label: t("landing.nav.aboutUs"), href: "#about-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-emerald-100/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[84px] sm:h-[88px] flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200">
            <Sprout className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
              BeejMantra
            </span>
            <span className="text-xs font-sans text-emerald-800 font-medium mt-1">
              {t("landing.nav.tagline")}
            </span>
          </div>
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`text-[15px] font-semibold transition-all relative py-2 ${
                  isActive
                    ? "text-emerald-700 font-bold"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-600 rounded-full shadow-xs" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="text-slate-600 hover:text-emerald-700 transition-colors">
            <LanguageSwitcher />
          </div>

          {user ? (
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-full px-6 py-2.5 shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02]"
            >
              <Link href="/dashboard" className="flex items-center gap-2 text-[15px]">
                <span>{t("landing.nav.goToDashboard")}</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={onOpenAuth}
                className="text-[15px] font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-full px-4"
              >
                {t("landing.nav.signIn")}
              </Button>
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-full px-6 py-2.5 shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02]"
              >
                <Link href="/dashboard" className="flex items-center gap-2 text-[15px]">
                  <span>{t("landing.nav.getStarted")}</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-800 hover:bg-emerald-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-emerald-100 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3.5 py-2.5 text-base font-semibold rounded-xl ${
                  activeNav === link.id
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-emerald-100 flex flex-col gap-2.5">
            <Button
              asChild
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl py-3 shadow-sm"
            >
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                {t("landing.nav.getStarted")}
              </Link>
            </Button>
            {!user && (
              <Button
                variant="outline"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full border-emerald-200 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 font-semibold rounded-xl py-3"
              >
                {t("landing.nav.signIn")}
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  HeartPulse,
  LayoutGrid,
  LineChart,
  Banknote,
  CloudSun,
  Users,
  ShoppingCart,
  Wallet,
  Leaf,
  User,
  Settings,
  Link2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { SheetClose } from "@/components/ui/sheet";
import { useTranslation } from "@/contexts/language-context";

interface MainNavProps {
  isSheet?: boolean;
}

export function MainNav({ isSheet = false }: MainNavProps) {
  const pathname = usePathname();
  const { isExpanded } = useSidebar();
  const { t } = useTranslation();

  const navItems = [
    { href: "/dashboard/profile", icon: User, label: t("nav.profile") || "Farmer Profile" },
    { href: "/dashboard", icon: LayoutGrid, label: t("nav.dashboard") || "Dashboard" },
    { href: "/dashboard/crop-doctor", icon: HeartPulse, label: t("nav.cropDoctor") || "Crop Doctor" },
    { href: "/dashboard/crop-recommender", icon: Leaf, label: t("nav.cropRecommender") || "Crop Recommender" },
    { href: "/dashboard/market-analyst", icon: LineChart, label: t("nav.marketAnalyst") || "Market Analyst" },
    { href: "/dashboard/schemes", icon: Banknote, label: t("nav.govtSchemes") || "Govt Schemes" },
    { href: "/dashboard/tracker", icon: Wallet, label: t("nav.tracker") || "Finance Tracker" },
    { href: "/dashboard/fasal-certificate", icon: Link2, label: t("nav.fasalCertificate") || "Fasal Certificate" },
    { href: "/dashboard/weather", icon: CloudSun, label: t("nav.weather") || "Weather" },
    { href: "/dashboard/community", icon: Users, label: t("nav.community") || "Community" },
    { href: "/dashboard/shop", icon: ShoppingCart, label: t("nav.shop") || "Agri Store" },
    { href: "/dashboard/learn", icon: BookOpen, label: t("nav.eLearning") || "Learning Hub" },
    { href: "/dashboard/settings", icon: Settings, label: t("nav.settings") || "Settings" },
  ];

  const renderLink = (item: (typeof navItems)[0]) => {
    const isActive =
      pathname === item.href ||
      (item.href !== "/dashboard" && pathname.startsWith(item.href));
    const isShopActive =
      pathname.startsWith("/dashboard/shop") && item.href === "/dashboard/shop";
    const isDashboardActive =
      pathname === "/dashboard" && item.href === "/dashboard";
    const isSelected = isActive || isShopActive || isDashboardActive;

    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3.5 rounded-xl text-sm font-semibold transition-all duration-200 group relative select-none",
          isSelected
            ? "bg-primary text-primary-foreground shadow-md"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/70 active:scale-98",
          !isExpanded && !isSheet
            ? "justify-center h-11 w-11 mx-auto px-0"
            : "justify-start px-3.5 py-2.5 w-full"
        )}
      >
        <item.icon
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110",
            isSelected ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
          )}
        />

        {/* Text Label with smooth width & opacity transition on sidebar hover */}
        <span
          className={cn(
            "truncate transition-all duration-300 ease-in-out whitespace-nowrap",
            !isExpanded && !isSheet
              ? "opacity-0 w-0 max-w-0 pointer-events-none hidden"
              : "opacity-100 w-auto max-w-full block"
          )}
        >
          {item.label}
        </span>

        {/* Active indicator bar when expanded */}
        {isExpanded && isSelected && (
          <span className="ml-auto w-1.5 h-4 rounded-full bg-white/70" />
        )}
      </Link>
    );
  };

  return (
    <nav className="flex flex-col gap-1.5 p-2 transition-all duration-300">
      {navItems.map((item) => {
        if (isSheet) {
          return (
            <SheetClose asChild key={item.href}>
              {renderLink(item)}
            </SheetClose>
          );
        }

        return (
          <Tooltip key={item.href} delayDuration={0}>
            <TooltipTrigger asChild>{renderLink(item)}</TooltipTrigger>
            {!isExpanded && (
              <TooltipContent
                side="right"
                sideOffset={12}
                className="font-bold text-xs py-1.5 px-3 shadow-xl bg-popover text-popover-foreground border"
              >
                <p>{item.label}</p>
              </TooltipContent>
            )}
          </Tooltip>
        );
      })}
    </nav>
  );
}

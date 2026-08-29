"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/contexts/language-context";

export function FAQSection() {
  const { t } = useTranslation();

  const faqs = [
    {
      q: t("landing.faq.q1"),
      a: t("landing.faq.a1"),
    },
    {
      q: t("landing.faq.q2"),
      a: t("landing.faq.a2"),
    },
    {
      q: t("landing.faq.q3"),
      a: t("landing.faq.a3"),
    },
    {
      q: t("landing.faq.q4"),
      a: t("landing.faq.a4"),
    },
    {
      q: t("landing.faq.q5"),
      a: t("landing.faq.a5"),
    },
  ];

  return (
    <section id="about-us" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
          <HelpCircle className="h-3.5 w-3.5 text-emerald-700" />
          <span>{t("landing.faq.badge")}</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-slate-900">
          {t("landing.faq.title")}
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          {t("landing.faq.subtitle")}
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3.5">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="bg-white border border-emerald-100/90 hover:border-emerald-300 rounded-2xl px-6 shadow-xs transition-colors"
          >
            <AccordionTrigger className="font-headline font-bold text-base text-slate-900 hover:text-emerald-700 hover:no-underline py-4.5 text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pb-4.5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

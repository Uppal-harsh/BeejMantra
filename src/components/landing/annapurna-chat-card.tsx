"use client";

import Image from "next/image";
import { useState } from "react";
import { Mic, Sparkles, CheckCheck } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

interface AnnapurnaChatCardProps {
  onOpenVoice?: () => void;
}

export function AnnapurnaChatCard({ onOpenVoice }: AnnapurnaChatCardProps) {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleSpeakSample = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(t("landing.chatCard.botResponse"));
      utterance.lang = "hi-IN";
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else if (onOpenVoice) {
      onOpenVoice();
    }
  };

  return (
    <div className="relative w-full max-w-[390px] sm:max-w-[420px] mx-auto select-none animate-float">
      
      {/* Main Floating Chat Card Container */}
      <div className="bg-white rounded-[30px] shadow-2xl shadow-emerald-950/15 border border-emerald-200/80 overflow-hidden backdrop-blur-md transition-all duration-300">
        
        {/* Card Header (Deep Emerald Gradient) */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 text-white px-5 py-4 flex items-center justify-between border-b border-emerald-600/30">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs flex-shrink-0 bg-emerald-900">
              <Image
                src="/annapurna-avatar.jpg"
                alt="Annapurna AI"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80";
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline font-bold text-base tracking-tight text-white leading-tight">
                  {t("landing.chatCard.name")}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_#86efac] animate-pulse" />
              </div>
              <span className="text-xs font-sans text-emerald-100/90 leading-tight mt-0.5">
                {t("landing.chatCard.role")}
              </span>
            </div>
          </div>

          {/* Sound Waveform & Sparkle Icons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleSpeakSample}
              className="p-1.5 rounded-full hover:bg-white/10 text-emerald-200 transition-colors cursor-pointer"
              title="Listen to Annapurna"
              aria-label="Listen audio sample"
            >
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1 h-5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1 h-2.5 bg-white rounded-full animate-bounce" />
              </div>
            </button>
            <Sparkles className="h-4 w-4 text-emerald-200" />
          </div>
        </div>

        {/* Chat Message Body */}
        <div className="p-5 space-y-4 bg-emerald-50/30 min-h-[190px] flex flex-col justify-end">
          
          {/* User Message Bubble */}
          <div className="self-end max-w-[85%] bg-emerald-600 text-white p-3.5 rounded-2xl rounded-tr-xs shadow-sm text-xs sm:text-[13px] leading-relaxed">
            <div className="text-[10px] font-bold text-emerald-100 mb-1">
              You
            </div>
            <p className="font-medium text-white">
              {t("landing.chatCard.userQuery")}
            </p>
            <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-100/80 mt-1.5">
              <span>10:30 AM</span>
              <CheckCheck className="h-3.5 w-3.5 text-white" />
            </div>
          </div>

          {/* Annapurna Response Bubble */}
          <div className="self-start max-w-[90%] bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-xs shadow-sm border border-emerald-100 text-xs sm:text-[13px] leading-relaxed">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0 bg-emerald-700">
                <Image
                  src="/annapurna-avatar.jpg"
                  alt="A"
                  width={16}
                  height={16}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-bold text-emerald-700">
                {t("landing.chatCard.name")}
              </span>
            </div>
            <p className="font-normal text-slate-700 leading-relaxed">
              {t("landing.chatCard.botResponse")}
            </p>
            <div className="flex items-center justify-end text-[10px] text-slate-400 mt-1">
              <span>10:31 AM</span>
            </div>
          </div>

        </div>

        {/* Chat Input Bar */}
        <div className="p-3.5 bg-white border-t border-emerald-100 flex items-center gap-2.5">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t("landing.chatCard.placeholder")}
            className="flex-1 bg-slate-50 text-xs sm:text-sm px-4 py-2.5 rounded-full border border-emerald-200/70 outline-none text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:bg-white transition-colors"
          />
          <button
            onClick={onOpenVoice || handleSpeakSample}
            className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 transition-all group cursor-pointer"
            title={t("landing.chatCard.speakButton")}
            aria-label="Microphone"
          >
            <Mic className="h-4 w-4 stroke-[2.5] group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>

      {/* Floating Pill Below Card */}
      <div className="flex justify-center -mt-3 relative z-10">
        <button
          onClick={onOpenVoice || handleSpeakSample}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-emerald-700 font-semibold text-xs shadow-lg border border-emerald-200 hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer"
        >
          <Mic className="h-3.5 w-3.5 text-emerald-600 animate-pulse" strokeWidth={2.5} />
          <span>{t("landing.chatCard.speakButton")}</span>
        </button>
      </div>

    </div>
  );
}

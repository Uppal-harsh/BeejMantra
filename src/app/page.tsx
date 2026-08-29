"use client";

import { useState } from "react";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeatureCards } from "@/components/landing/feature-cards";
import { LanguageStrip } from "@/components/landing/language-strip";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FarmerStories } from "@/components/landing/farmer-stories";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { VoiceModal } from "@/components/landing/voice-modal";
import { AuthModal } from "@/components/landing/auth-modal";

export default function LandingPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block relative">
        <Image
          src="https://placehold.co/1200x900.png"
          alt={t('login.imageAlt')}
          data-ai-hint="lush indian farm sunset"
          width="1200"
          height="900"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-4xl font-bold font-headline">{t('login.tagline')}</h2>
          <p className="text-lg mt-2 max-w-lg">{t('login.subTagline')}</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 bg-background">
        <div className="mx-auto grid w-[380px] gap-8">
          <div className="grid gap-2 text-center">
            <Link href="/" className="flex items-center justify-center gap-2 font-semibold font-headline text-2xl text-primary">
              <Image
                src="/favicon.ico"
                alt="BeejMantra Logo"
                width={28}
                height={28}
              />
              <span>BeejMantra</span>
            </Link>
            <p className="text-balance text-muted-foreground">
              {isSignUp ? t('login.createAccountPrompt') : t('login.signInPrompt')}
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={async () => {
              try {
                await signInWithGoogle();
              } catch (error: any) {
                toast({
                  title: t('toast.signInFailed'),
                  description: error?.message || t('toast.unexpectedError'),
                  variant: "destructive",
                });
              }
            }}
            className="w-full"
          >
            <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px] font-bold">
              G
            </span>
            Continue with Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{t('login.emailLabel')}</Label>
              <Input id="email" type="email" placeholder="name@example.com" {...register('email')} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">{t('login.passwordLabel')}</Label>
              <Input id="password" type="password" placeholder="••••••••" {...register('password')} />
              {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full mt-2 py-3 text-base">
              {isSubmitting ? t('login.processing') : (isSignUp ? t('login.createAccountButton') : t('login.signInButton'))}
            </Button>
          </form>

          <div className="mt-2 text-center text-sm">
            {isSignUp ? t('login.alreadyHaveAccount') : t('login.dontHaveAccount')}
            <Button variant="link" onClick={() => setIsSignUp(!isSignUp)} className="pl-1 text-primary">
              {isSignUp ? t('login.signInLink') : t('login.signUpLink')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

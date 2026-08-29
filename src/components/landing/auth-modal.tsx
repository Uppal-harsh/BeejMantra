"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sprout } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useTranslation } from "@/contexts/language-context";
import { toast } from "@/hooks/use-toast";
import { DesiSproutLogo } from "./desi-folk-art";

const authSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
  password: z.string().min(6, { message: "Min 6 characters required" }),
});

type AuthFormValues = z.infer<typeof authSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth();
  const { t } = useTranslation();
  const [isSignUp, setIsSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormValues) => {
    try {
      if (isSignUp) {
        await signUpWithEmail(data.email, data.password);
        toast({
          title: "Account Created Successfully",
          description: "Please sign in to proceed.",
        });
        setIsSignUp(false);
      } else {
        await signInWithEmail(data.email, data.password);
        toast({
          title: "Sign In Successful",
          description: "Welcome to BeejMantra!",
        });
        onClose();
      }
      reset();
    } catch (error: any) {
      toast({
        title: isSignUp ? "Sign Up Failed" : "Sign In Failed",
        description: error?.message || "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[420px] rounded-3xl p-6 bg-[#FAF5E8] border-2 border-[#D8CABA] shadow-2xl text-[#281E15]">
        <DialogHeader>
          <div className="w-12 h-12 rounded-2xl bg-[#245B35] text-[#FAF5E8] flex items-center justify-center mx-auto mb-2 shadow-md border border-[#194A28]">
            <DesiSproutLogo className="w-7 h-7" />
          </div>
          <DialogTitle className="font-headline font-black text-center text-2xl text-[#281E15]">
            {isSignUp ? t("landing.authModal.createAccount") : t("landing.authModal.signIn")}
          </DialogTitle>
          <DialogDescription className="text-center text-xs text-[#5D4A3A]">
            {isSignUp
              ? t("landing.authModal.createDesc")
              : t("landing.authModal.signInDesc")}
          </DialogDescription>
        </DialogHeader>

        {/* Google OAuth Button */}
        <Button
          type="button"
          variant="outline"
          onClick={async () => {
            try {
              await signInWithGoogle();
            } catch (err: any) {
              toast({ title: "Google Sign In Failed", description: err?.message, variant: "destructive" });
            }
          }}
          className="w-full mt-2 font-bold border-[#D8CABA] bg-[#FFFFFF] hover:bg-[#E8F3EB] text-[#281E15] rounded-xl py-5 shadow-xs"
        >
          <span className="mr-2 font-bold text-base text-[#245B35]">G</span> {t("landing.authModal.google")}
        </Button>

        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#D8CABA]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#FAF5E8] px-2 text-[#756653] font-semibold">
              {t("landing.authModal.orContinueWith")}
            </span>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5 text-left">
            <Label htmlFor="email" className="text-xs font-bold text-[#281E15]">
              {t("landing.authModal.emailLabel")}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="kisan@beejmantra.in"
              {...register("email")}
              className="bg-[#FFFFFF] border-[#D8CABA] text-[#281E15] placeholder-[#8C7A68] rounded-xl focus-visible:ring-[#245B35]"
            />
            {errors.email && (
              <p className="text-[11px] text-[#B85C38]">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5 text-left">
            <Label htmlFor="password" className="text-xs font-bold text-[#281E15]">
              {t("landing.authModal.passwordLabel")}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="bg-[#FFFFFF] border-[#D8CABA] text-[#281E15] placeholder-[#8C7A68] rounded-xl focus-visible:ring-[#245B35]"
            />
            {errors.password && (
              <p className="text-[11px] text-[#B85C38]">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#245B35] hover:bg-[#1A4A28] active:scale-95 text-[#FAF5E8] font-bold py-5 rounded-xl shadow-md border border-[#194A28] text-sm"
          >
            {isSubmitting
              ? t("landing.authModal.pleaseWait")
              : isSignUp
              ? t("landing.authModal.signUpButton")
              : t("landing.authModal.signInButton")}
          </Button>
        </form>

        {/* Toggle Sign In / Sign Up */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs text-[#245B35] hover:text-[#1A4A28] font-bold hover:underline"
          >
            {isSignUp
              ? t("landing.authModal.alreadyHaveAccount")
              : t("landing.authModal.needAccount")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

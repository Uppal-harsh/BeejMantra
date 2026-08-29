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
      <DialogContent className="sm:max-w-[420px] rounded-[28px] p-6 bg-white border border-emerald-100 shadow-2xl text-slate-900">
        <DialogHeader>
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 shadow-md shadow-emerald-600/25">
            <Sprout className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <DialogTitle className="font-headline font-bold text-center text-2xl text-slate-900">
            {isSignUp ? t("landing.authModal.createAccount") : t("landing.authModal.signIn")}
          </DialogTitle>
          <DialogDescription className="text-center text-xs text-slate-500">
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
          className="w-full mt-2 font-semibold border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-slate-800 rounded-xl py-5"
        >
          <span className="mr-2 font-bold text-base text-emerald-700">G</span> {t("landing.authModal.google")}
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-500">{t("landing.authModal.orEmail")}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
          <div className="space-y-1">
            <Label htmlFor="modal-email" className="text-xs font-semibold text-slate-800">{t("landing.authModal.emailLabel")}</Label>
            <Input id="modal-email" type="email" placeholder="kisan@example.com" {...register("email")} className="rounded-xl border-slate-200 bg-white text-slate-900 focus:border-emerald-600" />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="modal-password" className="text-xs font-semibold text-slate-800">{t("landing.authModal.passwordLabel")}</Label>
            <Input id="modal-password" type="password" placeholder="••••••••" {...register("password")} className="rounded-xl border-slate-200 bg-white text-slate-900 focus:border-emerald-600" />
            {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl shadow-md shadow-emerald-600/25 text-sm"
          >
            {isSubmitting ? t("landing.authModal.processing") : isSignUp ? t("landing.authModal.createBtn") : t("landing.authModal.signInBtn")}
          </Button>
        </form>

        <div className="text-center text-xs text-slate-500 mt-2">
          {isSignUp ? t("landing.authModal.alreadyHave") : t("landing.authModal.noAccount")}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-emerald-700 font-bold underline underline-offset-2 ml-1 cursor-pointer"
          >
            {isSignUp ? t("landing.authModal.loginLink") : t("landing.authModal.registerLink")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

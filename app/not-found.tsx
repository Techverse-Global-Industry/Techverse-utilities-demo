"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="grid min-h-screen place-items-center bg-brand-paper px-6">
      <div className="surface-card max-w-xl p-8 text-center sm:p-12">
        <p className="eyebrow">{t("error.notFoundEyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{t("error.notFoundTitle")}</h1>
        <p className="mt-3 text-brand-950/55">{t("error.notFoundBody")}</p>
        <Link className="button-primary mt-7" href="/"><ArrowLeft className="h-4 w-4" /> {t("error.backHome")}</Link>
      </div>
    </main>
  );
}

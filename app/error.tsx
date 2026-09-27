"use client";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();
  return (
    <main className="grid min-h-screen place-items-center bg-brand-paper px-6">
      <div className="surface-card max-w-xl p-8 text-center sm:p-12">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-500"><AlertTriangle /></div>
        <h1 className="text-3xl font-semibold tracking-tight">{t("error.title")}</h1>
        <p className="mt-3 text-brand-950/55">{t("error.body")}</p>
        <button className="button-primary mt-7" onClick={reset}><RotateCcw className="h-4 w-4" /> {t("error.retry")}</button>
      </div>
    </main>
  );
}

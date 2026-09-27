"use client";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className={`inline-flex items-center rounded-full border p-1 text-xs font-bold ${dark ? "border-white/15 bg-white/5" : "border-brand-950/10 bg-white/80"}`} aria-label={t("common.switchLanguage")}>
      {(["en", "fr"] as const).map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
          className={`rounded-full px-2.5 py-1.5 transition ${language === item ? "bg-brand-500 text-white" : dark ? "text-white/60 hover:text-white" : "text-brand-950/50 hover:text-brand-950"}`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

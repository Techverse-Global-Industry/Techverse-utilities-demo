"use client";
import Link from "next/link";
import { Zap } from "lucide-react";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();
  const links = [
    ["footer.services", "/#services"], ["footer.portal", "/customer"], ["footer.support", "/customer/service-requests"],
    ["footer.platform", "/platform"], ["footer.reports", "/platform/reporting"], ["footer.contact", "/#contact"],
  ];
  return (
    <footer className="bg-brand-950 text-white">
      <div className="page-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="flex items-center gap-2.5 font-semibold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500"><Zap className="h-4 w-4 fill-current" /></span> Aurelia Utilities</div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">{t("footer.note")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-white/60 transition hover:text-brand-300">{t(label)}</Link>)}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Aurelia Utilities · {t("common.uiConcept")}</span>
          <div className="flex items-center gap-4"><span>{t("footer.privacy")}</span><span>{t("footer.terms")}</span><span>{t("footer.disclaimer")}</span><LanguageSwitcher dark /></div>
        </div>
      </div>
    </footer>
  );
}

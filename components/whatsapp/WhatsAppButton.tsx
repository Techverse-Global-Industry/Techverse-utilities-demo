"use client";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import { companyConfig } from "@/lib/config";

function messageKey(pathname: string) {
  if (pathname.includes("billing")) return "whatsapp.billing";
  if (pathname.includes("service-requests")) return "whatsapp.service";
  if (pathname.includes("installations")) return "whatsapp.installation";
  if (pathname.includes("maintenance")) return "whatsapp.maintenance";
  return "whatsapp.general";
}

export function WhatsAppButton() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const href = `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(t(messageKey(pathname)))}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t("whatsapp.label")}
      className="group fixed bottom-4 right-4 z-50 flex h-14 max-w-[calc(100vw-2rem)] items-center overflow-hidden rounded-full border border-white/20 bg-brand-950 text-white shadow-2xl transition-all hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <span className="relative grid h-14 w-14 shrink-0 place-items-center">
        <span className="pulse-ring absolute h-9 w-9 rounded-full bg-brand-500/30" />
        <MessageCircle className="relative h-5 w-5 text-brand-300" />
      </span>
      <span className="w-0 whitespace-nowrap text-xs font-semibold opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100">{t("whatsapp.label")}</span>
    </a>
  );
}

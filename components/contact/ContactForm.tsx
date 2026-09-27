"use client";
import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={submit} className="surface-card p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-brand-950/60">{t("contact.name")}<input required name="name" className="form-field mt-2" /></label>
        <label className="text-xs font-semibold text-brand-950/60">{t("contact.email")}<input required type="email" name="email" className="form-field mt-2" /></label>
        <label className="text-xs font-semibold text-brand-950/60">{t("contact.phone")}<input name="phone" className="form-field mt-2" /></label>
        <label className="text-xs font-semibold text-brand-950/60">{t("contact.service")}<select name="service" className="form-field mt-2"><option value="Energy">{t("marketing.energyShort")}</option><option value="Water">{t("marketing.waterShort")}</option><option value="Infrastructure">{t("marketing.infrastructure")}</option><option value="Maintenance">{t("marketing.maintenanceShort")}</option></select></label>
      </div>
      <label className="mt-4 block text-xs font-semibold text-brand-950/60">{t("contact.message")}<textarea required name="message" rows={5} className="form-field mt-2 resize-none" /></label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button className="button-primary" type="submit"><Send className="h-4 w-4" /> {t("contact.send")}</button>
        {sent ? <span className="inline-flex items-center gap-2 text-xs text-emerald-700"><CheckCircle2 className="h-4 w-4" /> {t("contact.sent")}</span> : null}
      </div>
    </form>
  );
}

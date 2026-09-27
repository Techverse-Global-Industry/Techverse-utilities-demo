"use client";
import { useApp } from "@/components/motion/AppProviders";
export function useLanguage() {
  const { language, setLanguage, t } = useApp();
  return { language, setLanguage, t };
}

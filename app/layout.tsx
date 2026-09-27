import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/motion/AppProviders";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { ScrollToTop } from "@/components/motion/ScrollToTop";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export const metadata: Metadata = {
  title: {
    default: "Smart Utility Services & Customer Platform | Aurelia Utilities",
    template: "%s | Aurelia Utilities",
  },
  description: "A cinematic front-end demonstration of smart utility services, customer self-service and connected infrastructure operations.",
  openGraph: {
    title: "Aurelia Utilities · Reliable Infrastructure. Smarter Living.",
    description: "A front-end-only smart utility and infrastructure platform demonstration.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <ScrollToTop />
          <ScrollProgress />
          {children}
          <WhatsAppButton />
          <CustomCursor />
        </AppProviders>
      </body>
    </html>
  );
}

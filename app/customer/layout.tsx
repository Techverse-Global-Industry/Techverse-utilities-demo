import type { Metadata } from "next";
import { CustomerShell } from "@/components/customer/CustomerShell";

export const metadata: Metadata = { title: "Customer Portal" };
export default function Layout({ children }: { children: React.ReactNode }) { return <CustomerShell>{children}</CustomerShell>; }

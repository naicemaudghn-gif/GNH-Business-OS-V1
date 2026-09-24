import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = { title: "GNH Business OS", description: "Votre système central de gestion d'activité." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><div className="flex min-h-screen"><Sidebar /><main className="flex-1">{children}</main></div></body></html>;
}

"use client";

import { LanguageProvider } from "@/lib/i18n";
import { SidebarProvider } from "@/lib/SidebarContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </SidebarProvider>
  );
}

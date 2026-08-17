"use client";

import { ReactNode } from "react";
import WikiSidebar from "@/components/WikiSidebar";
import { useSidebar } from "@/lib/SidebarContext";

export default function LayoutShell({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex flex-1 pt-14">
      <WikiSidebar />
      <main 
        className={`flex-1 min-w-0 transition-all duration-300 ease-in-out flex justify-center bg-white dark:bg-neutral-950 px-4 sm:px-6 md:px-8 ${
          isOpen ? "lg:pl-64" : "lg:pl-0"
        }`}
      >
        <div className="w-full max-w-4xl py-12">
          {children}
        </div>
      </main>
    </div>
  );
}

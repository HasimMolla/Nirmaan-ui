import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Components | nirmaanUI ",
};
export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex gap-4 p-4">
      <SidebarProvider className="w-max hidden md:block">
        <AppSidebar className="h-[80vh] fixed top-20 left-0 0" />
        <SidebarTrigger className="md:hidden " />
      </SidebarProvider>

      <div className="flex-1 px-4 py-4">{children}</div>
    </main>
  );
}

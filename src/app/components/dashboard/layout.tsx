import {
  SidebarProvider,
  SidebarTrigger,
} from "@/app/components/shadcn/sidebar";
import { AppSidebar } from "@/app/components/common/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

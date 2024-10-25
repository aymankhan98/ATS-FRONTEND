import { SidebarProvider, useSidebar } from "./sidebarContext";
import { Header } from "./header";
import Sidebar from "./sidebar";
import { CoreSidebarProps } from "@/app/interfaces/sidebarInterface";

export const CoreSidebar = ({ sections, headerContent }: CoreSidebarProps) => (
  <SidebarProvider>
    <div className="flex">
      <Header headerContent={headerContent} />
      <Sidebar sections={sections} />
      <div
        className={`flex-1 mt-16 transition-all duration-500 ease-in-out transform ${
          useSidebar().isCollapsed ? "ml-16" : "ml-64"
        }`}
      ></div>
    </div>
  </SidebarProvider>
);

import React from "react";
import { CoreSidebar } from "../layout/aside";
import { SidebarProvider } from "../layout/aside"; // Make sure to import SidebarProvider
import { sidebarData } from "@/app/dummy data/DbSidebarData";

interface DbSidebarProps {
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
}

export const Dbsidebar: React.FC<DbSidebarProps> = ({
  children,
  headerContent = <div className="text-white text-lg font-semibold"></div>, // Default header
}) => {
  return (
    <SidebarProvider>
      <CoreSidebar sections={sidebarData} headerContent={headerContent}>
        {children}
      </CoreSidebar>
    </SidebarProvider>
  );
};

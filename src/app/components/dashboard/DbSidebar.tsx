// Dbsidebar.tsx
import { CoreSidebar } from "../layout/aside";
import { sidebarData } from "@/app/dummy data/DbSidebarData";

export const Dbsidebar = () => {
  return <CoreSidebar sections={sidebarData} />;
};

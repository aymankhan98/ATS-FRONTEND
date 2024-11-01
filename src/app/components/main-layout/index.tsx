"use client";
import React, { useState } from "react";
import UpperNav from "./navbarUpper";
import BottomNav from "./navbarBottom";
import Aside from "./aside";
import { CoreSidebarProps } from "@/app/interfaces/sidebarInterface";
import DbWelcomeBanner from "../dashboard/DbWelcomeBanner";
import StatCard from "../dashboard/DbCards";
import TimeSeriesChart from "../common/lineGraph";
import App from "../common/dataTable";

const CombinedNavbar = ({ sections }: CoreSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex flex-col min-h-screen">
      <UpperNav />
      <BottomNav toggleCollapse={toggleCollapse} />
      <div className="flex flex-1">
        <div className="mt-4">
          <Aside sections={sections} isCollapsed={isCollapsed} />
        </div>
        <div className="flex-1 p-10">
          <div
            className={`transition-all duration-300 ${
              isCollapsed ? "ml-16" : "ml-0"
            }`}
          >
            <DbWelcomeBanner />
            <StatCard />
            <div className="grid grid-cols-3 gap-4 mt-6">
              <TimeSeriesChart />
              <App />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedNavbar;

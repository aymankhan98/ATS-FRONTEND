"use client";

import App from "./components/common/dataTable";
import TimeSeriesChart from "./components/common/lineGraph";
import StatCard from "./components/dashboard/DbCards";
import DbNavbar from "./components/dashboard/DbNavbar";
import { Dbsidebar } from "./components/dashboard/DbSidebar";
import DbWelcomeBanner from "./components/dashboard/DbWelcomeBanner";

export default function Home() {
  return (
    <div className="  flex flex-col ">
      <DbNavbar />

      <div className="flex flex-1">
        <Dbsidebar />

        <div className="flex-1 p-6 mt-10">
          <DbWelcomeBanner />
          <StatCard />
        </div>
      </div>
      <div className="ml-[280px]  flex gap-4">
        <TimeSeriesChart />
        <App />
      </div>
    </div>
  );
}

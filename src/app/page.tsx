"use client";
import App from "./components/common/dataTable";
import TimeSeriesChart from "./components/common/lineGraph";
import StatCard from "./components/dashboard/DbCards";
import DbNavbar from "./components/dashboard/DbNavbar";
import { Dbsidebar } from "./components/dashboard/DbSidebar";
import DbWelcomeBanner from "./components/dashboard/DbWelcomeBanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <DbNavbar />
      <div className="flex flex-1">
        <Dbsidebar />
        <main className="flex-1 p-6 mt-10">
          <DbWelcomeBanner />
          <StatCard />
          <div className="grid grid-cols-3 gap-4 mt-6">
            <TimeSeriesChart />
            <App />
          </div>
        </main>
      </div>
    </div>
  );
}

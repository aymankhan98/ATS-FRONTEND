"use client";

import StatCard from "./components/dashboard/DbCards";
import DbNavbar from "./components/dashboard/DbNavbar";
import { Dbsidebar } from "./components/dashboard/DbSidebar";
import DbWelcomeBanner from "./components/dashboard/DbWelcomeBanner";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Navbar */}
      <DbNavbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Dbsidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 mt-10">
          <DbWelcomeBanner />
          <StatCard />
          {/* Additional components or content can be added here */}
        </div>
      </div>
    </div>
  );
}

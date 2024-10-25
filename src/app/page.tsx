"use client";
// import { CoreSidebar } from "./components/asideBar/coreSidebar";
import App from "./components/common/dataTable";
import TimeSeriesChart from "./components/common/lineGraph";
import StatCard from "./components/dashboard/DbCards";
import DbNavbar from "./components/dashboard/DbNavbar";
import { Dbsidebar } from "./components/dashboard/DbSidebar";
import DbWelcomeBanner from "./components/dashboard/DbWelcomeBanner";
import MainLayout from "./components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-blue-500 w-full h-full text-black text-lg">
        Hello world
      </div>
    </MainLayout>
    // <div className="flex flex-col">
    //   <DbNavbar />
    //   <div className="flex flex-1">
    //     <Dbsidebar />
    //     <main className="flex-1 p-6 mt-10">
    //       <DbWelcomeBanner />
    //       <StatCard />
    //       <div className="flex gap-4 mt-6">
    //         <TimeSeriesChart />
    //         <App />
    //         {/* <CoreSidebar /> */}
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
}

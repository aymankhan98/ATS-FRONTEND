"use client";

import { sidebarData } from "../app/dummy data/DbSidebarData";
import CombinedNavbar from "./components/main-layout";

export default function Home() {
  return (
    <main>
      <CombinedNavbar sections={sidebarData} />
    </main>
  );
}

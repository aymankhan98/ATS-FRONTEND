"use client";

import { sidebarData } from "../app/dummy data/DbSidebarData";
import CombinedNavbar from "./components/main-layout";
import { Button } from "./components/shadcn/button";
import { Toaster } from "./components/shadcn/toaster";
import { toast } from "./components/shadcn/use-toast";

export default function Home() {
  return (
    <main>
      <CombinedNavbar sections={sidebarData} />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </main>
  );
}

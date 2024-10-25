import React from "react";
import { Navbar } from "../navbar";

const MainLayout = (props: React.PropsWithChildren) => {
  return (
    <div className="w-full min-h-screen flex-row gap-0">
      <Navbar className="bg-blue-500 w-full h-16" />
      {props.children}
    </div>
  );
};

export default MainLayout;

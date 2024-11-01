" use client";
import React from "react";
import Image from "next/image";

const BottomNav = ({ toggleCollapse }: { toggleCollapse: () => void }) => (
  <div className="w-full h-16 bg-[#363BC9] flex items-center justify-between px-6 z-20 ">
    <button
      onClick={toggleCollapse}
      className="h-full flex items-center justify-center transition-colors duration-200 text-white font-medium"
    >
      <Image
        width={16}
        height={16}
        src="/CollapseIcon.png"
        alt="Collapse Icon"
        className="object-contain transform transition-transform"
      />
    </button>
  </div>
);

export default BottomNav;

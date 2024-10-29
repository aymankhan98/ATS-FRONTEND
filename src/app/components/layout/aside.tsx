import React, { useState } from "react";
import Image from "next/image";
import {
  CoreSidebarProps,
  SidebarItem,
  SidebarSection,
} from "@/app/interfaces/sidebarInterface";

export const CoreSidebar = ({ sections, headerContent }: CoreSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderItem = (item: SidebarItem) => (
    <a
      key={item.title}
      href={item.href ?? "#"}
      onClick={item.onClick}
      className={`flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 ${
        isCollapsed ? "justify-center" : "pl-[30px]"
      }`}
    >
      {item.icon}
      {!isCollapsed && (
        <span className="ml-3 text-sm font-medium">{item.title}</span>
      )}
    </a>
  );

  const renderSection = (section: SidebarSection) => (
    <div key={section.title} className="mb-8">
      <h2
        className={`text-xs font-semibold text-gray-400 mb-4 ${
          isCollapsed ? "hidden" : "pl-[30px]"
        }`}
      >
        {section.title}
      </h2>
      <nav className="space-y-2">
        {section.items.map((item) => renderItem(item))}
      </nav>
    </div>
  );

  return (
    <div className="flex">
      <div className="w-full h-16 bg-[#363BC9] flex items-center justify-between px-6 z-20 fixed">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-full flex items-center justify-center transition-colors duration-200 text-white font-medium"
        >
          <Image
            width={16}
            height={16}
            src="/CollapseIcon.png"
            alt=""
            className={`object-contain transform transition-transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
        {headerContent}
      </div>

      <div
        className={`${
          isCollapsed ? "w-16" : "w-64"
        } bg-white shadow-lg pt-24 transition-all duration-300 min-h-screen fixed top-16 z-10`}
      >
        {sections.map((section) => renderSection(section))}
      </div>

      <div
        className={`flex-1 mt-16 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      ></div>
    </div>
  );
};

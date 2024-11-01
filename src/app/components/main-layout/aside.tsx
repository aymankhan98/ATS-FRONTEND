import React from "react";
import {
  CoreSidebarProps,
  SidebarSection,
} from "@/app/interfaces/sidebarInterface";

const Aside = ({
  sections,
  isCollapsed,
}: CoreSidebarProps & { isCollapsed: boolean }) => (
  <div
    className={`transition-all duration-300  ${
      isCollapsed ? "w-16" : "w-64"
    } bg-white shadow-lg pt-[40px]  min-h-screen h-screen  top-16`}
  >
    {sections.map((section: SidebarSection) => (
      <div key={section.title} className="mb-8">
        <h2
          className={`text-xs font-semibold text-gray-400 mb-4 ${
            isCollapsed ? "hidden" : "pl-[30px]"
          }`}
        >
          {section.title}
        </h2>
        <nav className="space-y-2">
          {section.items.map((item) => (
            <a
              key={item.title}
              href={item.href ?? "#"}
              onClick={item.onClick}
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
            >
              {item.icon}
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">{item.title}</span>
              )}
            </a>
          ))}
        </nav>
      </div>
    ))}
  </div>
);

export default Aside;

import React, { createContext, useContext, useReducer } from "react";
import Image from "next/image";
import {
  CoreSidebarComponentProps,
  SidebarAction,
  SidebarContextType,
  SidebarItem,
  SidebarProviderProps,
  SidebarSection,
  SidebarState,
} from "@/app/interfaces/sidebarInterface";

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const sidebarReducer = (
  state: SidebarState,
  action: SidebarAction
): SidebarState => {
  switch (action.type) {
    case "TOGGLE_COLLAPSE":
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      };
    default:
      return state;
  }
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  initialCollapsed = false,
}) => {
  const [state, dispatch] = useReducer(sidebarReducer, {
    isCollapsed: initialCollapsed,
  });

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  const toggleCollapsed = () => {
    context.dispatch({ type: "TOGGLE_COLLAPSE" });
  };

  return {
    isCollapsed: context.state.isCollapsed,
    toggleCollapsed,
  };
};

export const CoreSidebar = ({
  sections,
  headerContent,
  children,
}: CoreSidebarComponentProps) => {
  const { isCollapsed, toggleCollapsed } = useSidebar();

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
          onClick={toggleCollapsed}
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
      >
        {children}
      </div>
    </div>
  );
};

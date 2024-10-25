import { useSidebar } from "./sidebarContext";
import {
  SidebarItem,
  SidebarSection,
  CoreSidebarProps,
} from "@/app/interfaces/sidebarInterface";

const Sidebar = ({ sections }: Pick<CoreSidebarProps, "sections">) => {
  const { isCollapsed } = useSidebar();

  const renderItem = (item: SidebarItem) => (
    <a
      key={item.title}
      href={item.href ?? "#"}
      onClick={item.onClick}
      className={`flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 
        rounded-lg transition-all duration-500 ease-in-out transform
        ${isCollapsed ? "justify-center" : "pl-[30px]"}`}
    >
      <div className="flex items-center transition-transform duration-500 ease-in-out">
        {item.icon}
      </div>
      <span
        className={`ml-3 text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out
          ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
      >
        {item.title}
      </span>
    </a>
  );

  const renderSection = (section: SidebarSection) => (
    <div key={section.title} className="mb-8">
      <h2
        className={`text-xs font-semibold text-gray-400 mb-4 transition-all duration-500 ease-in-out
          ${isCollapsed ? "opacity-0 h-0 mb-0" : "opacity-100 h-auto mb-4"} 
          ${isCollapsed ? "hidden" : "pl-[30px]"}`}
      >
        {section.title}
      </h2>
      <nav className="space-y-2 transition-all duration-500 ease-in-out">
        {section.items.map((item) => renderItem(item))}
      </nav>
    </div>
  );

  return (
    <div
      className={`fixed top-16 z-10 h-screen bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden transform
        ${isCollapsed ? "w-16" : "w-64"} pt-24`}
    >
      <div className="overflow-hidden">
        {sections.map((section) => renderSection(section))}
      </div>
    </div>
  );
};

export default Sidebar;

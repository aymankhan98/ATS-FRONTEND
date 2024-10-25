import { useSidebar } from "./sidebarContext";
import Image from "next/image";

interface HeaderProps {
  headerContent: React.ReactNode;
}

export const Header = ({ headerContent }: HeaderProps) => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="w-full h-16 bg-[#363BC9] flex items-center justify-between px-6 z-20 fixed">
      <button
        onClick={toggleSidebar}
        className="h-full flex items-center justify-center transition-all duration-500 ease-in-out text-white font-medium"
      >
        <Image
          width={16}
          height={16}
          src="/CollapseIcon.png"
          alt=""
          className={`object-contain transition-all duration-500 ease-in-out transform 
            ${isCollapsed ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isCollapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        {headerContent}
      </div>
    </div>
  );
};

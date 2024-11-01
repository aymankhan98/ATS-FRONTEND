import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../shadcn/avatar";
import {
  dropdownItems,
  navLinks,
  actionIcons,
} from "../../dummy data/DbNavbarData";

const UpperNav: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#242ACD] px-4 py-2 text-white text-[13px] font-[500] z-30">
      <div className="grid grid-cols-5 items-center">
        <div className="col-span-3 flex items-center">
          <div className="relative flex items-center mr-8">
            <Image src="/pnLogo.png" alt="Logo" width={120} height={120} />
            <button
              className="flex items-center space-x-1 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 left-3 w-40 bg-white text-black shadow-md rounded-md">
                <ul>
                  {dropdownItems.map((item, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-[31px] ml-[67px]">
            {navLinks.map((link, index) => (
              <button
                key={index}
                className={`p-[9px] rounded-[100px] transition-colors ${
                  link.active
                    ? "bg-[#4348E4] rounded-[100px]"
                    : "hover:bg-blue-700"
                }`}
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-1" />

        <div className="col-span-1 justify-self-end flex items-center  space-x-4">
          <div className="relative flex items-center mr-[32px]">
            <Search className="h-4 w-4 text-white" />
          </div>

          {actionIcons.map((action, index) => (
            <button
              key={index}
              className="flex items-center space-x-1 hover:bg-blue-700 px-2 py-1 rounded-md"
            >
              {action.icon && <action.icon className="h-4 w-4" />}
              {action.label && <span>{action.label}</span>}
            </button>
          ))}

          <Avatar className="h-[30px] w-[30px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default UpperNav;

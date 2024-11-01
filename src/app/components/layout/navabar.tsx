"use client";

import {
  ActionButtonProps,
  ActionsProps,
  BrandProps,
  NavbarProps,
  NavLinkProps,
  NavLinksProps,
} from "@/app/interfaces/navbar";
import { Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../shadcn/avatar";
import React, { useState } from "react";

const Navbar = ({ children, className = "" }: NavbarProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <nav
      className={`flex items-center justify-between bg-[#242ACD] px-4 py-2 text-white text-[13px] font-[500]    w ${className}`}
    >
      <div className="flex items-center space-x-8">
        {childrenArray[0]}
        {childrenArray[1]}
      </div>
      <div className="flex items-center space-x-4">
        {childrenArray.slice(2)}
      </div>
    </nav>
  );
};

const Brand = ({ children }: BrandProps) => (
  <div className="flex items-center space-x-2 mr-[67px]">{children}</div>
);

const NavLinks = ({ children }: NavLinksProps) => (
  <div className="flex items-center space-x-[31px]">{children}</div>
);

const NavLink = ({ active, children }: NavLinkProps) => (
  <button
    className={`p-[9px] rounded-[100px] transition-colors ${
      active ? "bg-[#4348E4] rounded-[100px]" : "hover:bg-blue-700"
    }`}
  >
    {children}
  </button>
);

const SearchBar = () => (
  <div className="relative flex items-center mr-[32px]">
    <Search className="absolute h-4 w-4 text-white" />
  </div>
);

const Actions = ({ children }: ActionsProps) => (
  <div className="flex items-center space-x-4">
    {children}
    <Avatar className="h-[30px] w-[30px]">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
);

const ActionButton = ({ icon: Icon, label }: ActionButtonProps) => (
  <button className="flex items-center space-x-1 hover:bg-blue-700 px-2 py-1 rounded-md">
    {Icon && <Icon className="h-4 w-4" />}
    {label && <span>{label}</span>}
  </button>
);

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
"
    >
      <button
        className="flex items-center space-x-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-3 w-40 bg-white text-black shadow-md rounded-md">
          <ul>{children}</ul>
        </div>
      )}
    </div>
  );
};

export {
  Navbar,
  Brand,
  NavLinks,
  NavLink,
  SearchBar,
  Actions,
  ActionButton,
  Dropdown,
};

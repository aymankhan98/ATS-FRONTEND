import React from "react";
import {
  ActionButton,
  Actions,
  Brand,
  Dropdown,
  NavLink,
  NavLinks,
  SearchBar,
} from "./index";
import Image from "next/image";
import { INavbarUpperProps } from "@/app/interfaces/navbar";

const NavbarUpper = ({
  actionIcons,
  dropdownItems,
  navLinks,
}: INavbarUpperProps) => {
  return (
    <div className="flex w-full">
      <Brand>
        <Image src="/pnLogo.png" alt="Logo" width={120} height={120} />
        <Dropdown>
          {dropdownItems.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-200">
              {item}
            </li>
          ))}
        </Dropdown>
      </Brand>

      <NavLinks>
        {navLinks.map((link, index) => (
          <NavLink key={index} active={link.active}>
            {link.title}
          </NavLink>
        ))}
      </NavLinks>

      <Actions>
        <SearchBar />

        {actionIcons.map((action, index) => (
          <ActionButton key={index} icon={action.icon} label={action.label} />
        ))}
      </Actions>
    </div>
  );
};

export default NavbarUpper;

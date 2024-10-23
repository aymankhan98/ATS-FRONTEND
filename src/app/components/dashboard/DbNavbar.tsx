"use client";

import {
  ActionButton,
  Actions,
  Brand,
  Navbar,
  NavLink,
  NavLinks,
  SearchBar,
  Dropdown,
} from "../layout/navabar";
import Image from "next/image";
import {
  dropdownItems,
  navLinks,
  actionIcons,
} from "../../dummy data/DbNavbarData";

const DbNavbar: React.FC = () => (
  <Navbar>
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
  </Navbar>
);

export default DbNavbar;

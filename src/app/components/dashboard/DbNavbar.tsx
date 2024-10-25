"use client";

import { Navbar } from "../navbar/index";
import NavbarUpper from "../navbar/NavbarUpper";
import { INavbarUpperProps } from "@/app/interfaces/navbar";

interface INavbarProps {
  navbarUpperProps: INavbarUpperProps;
  navbarBottomProps: unknown;
}

const DbNavbar = (props: INavbarProps) => (
  <Navbar className="flex-row">
    <NavbarUpper {...props.navbarUpperProps} />
  </Navbar>
);

export default DbNavbar;

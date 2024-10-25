import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { LucideIcon, LucideProps } from "lucide-react";

export interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export interface BrandProps {
  children: ReactNode;
}

export interface NavLinksProps {
  children: ReactNode;
}

export interface NavLinkProps {
  active?: boolean;
  children: ReactNode;
}

export interface SearchBarProps {
  placeholder?: string;
}

export interface ActionsProps {
  children: ReactNode;
}

export interface ActionButtonProps {
  icon?: LucideIcon;
  label?: string;
}

export interface INavbarUpperProps {
  actionIcons: {
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    label: string;
  }[];
  navLinks: { title: string; active: boolean }[];
  dropdownItems: string[];
}

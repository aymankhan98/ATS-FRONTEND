import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

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

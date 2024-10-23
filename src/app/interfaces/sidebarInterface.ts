import { ReactNode } from "react";

export interface SidebarItem {
  icon: React.ReactNode;
  title: string;
  href?: string;
  onClick?: () => void;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export interface CoreSidebarProps {
  sections: SidebarSection[];
  headerContent?: React.ReactNode;
}

export interface SidebarState {
  isCollapsed: boolean;
}

export interface SidebarContextType {
  state: SidebarState;
  dispatch: React.Dispatch<SidebarAction>;
}
export type SidebarAction = { type: "TOGGLE_COLLAPSE" };

export interface SidebarProviderProps {
  children: ReactNode;
  initialCollapsed?: boolean;
}
export interface CoreSidebarComponentProps {
  sections: SidebarSection[];
  headerContent: ReactNode;
  children: ReactNode;
}

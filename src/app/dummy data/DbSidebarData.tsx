import {
  Home,
  FileText,
  Search,
  FileSpreadsheet,
  SendHorizontal,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SidebarSection } from "@/app/interfaces/sidebarInterface";

export const sidebarData: SidebarSection[] = [
  {
    title: "HIRING DASHBOARD",
    items: [
      { title: "Dashboard", icon: <Home size={20} /> },
      { title: "Assigned Positions", icon: <FileText size={20} /> },
      { title: "Search Candidate", icon: <Search size={20} /> },
      { title: "Resume Formatting", icon: <FileSpreadsheet size={20} /> },
      { title: "Your Submissions", icon: <SendHorizontal size={20} /> },
    ],
  },
  {
    title: "COMMUNICATION",
    items: [
      { title: "Mail Box", icon: <Mail size={20} /> },
      { title: "Chat", icon: <MessageCircle size={20} /> },
    ],
  },
];

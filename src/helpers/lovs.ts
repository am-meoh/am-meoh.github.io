import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

export const navigation = [
  { name: "Home", target: "/home", icon: HomeIcon, current: true },
  { name: "Team", target: "/", icon: UsersIcon, current: false },
  { name: "Projects", target: "/", icon: FolderIcon, current: false },
  { name: "Calendar", target: "/", icon: CalendarIcon, current: false },
  {
    name: "Documents",
    target: "/",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", target: "/", icon: ChartPieIcon, current: false },
];

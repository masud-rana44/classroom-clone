"use client";

import {
  Home,
  Calendar,
  Users,
  FolderKanban,
  Settings,
  Archive,
} from "lucide-react";

import { NavItem } from "@/components/NavItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "./ui/separator";

const routesTop = [
  {
    Icon: Home,
    label: "Home",
    href: "/",
  },
  {
    Icon: Calendar,
    label: "Calendar",
    href: "/calendar",
  },
];

const routesBottom = [
  {
    Icon: Archive,
    label: "Archived classes",
    href: "/archived",
  },
  {
    Icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

const routesTeaching = [
  {
    Icon: Users,
    label: "Teaching",
    href: "/teaching",
  },
  {
    Icon: FolderKanban,
    label: "To review",
    href: "/calendar",
  },
  {
    label: "Math",
    href: "/:classId",
    secondaryLabel: "8D",
  },
];

export const Sidebar = () => {
  return (
    <ScrollArea className="h-[calc(100vh-61px)] w-[300px] border-r z-20">
      <div className="py-2 pr-4">
        {routesTop.map((route) => (
          <NavItem key={route.label} {...route} />
        ))}
      </div>
      <Separator />
      <div className="py-2 pr-4">
        {routesTeaching.map((route) => (
          <NavItem key={route.label} {...route} />
        ))}
      </div>
      <Separator />
      <div className="py-2 pr-4">
        {routesBottom.map((route) => (
          <NavItem key={route.label} {...route} />
        ))}
      </div>
    </ScrollArea>
  );
};

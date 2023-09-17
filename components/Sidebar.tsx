"use client";

import {
  Home,
  Calendar,
  Users,
  FolderKanban,
  Settings,
  Archive,
  GraduationCap,
  ListTodo,
} from "lucide-react";

import { NavItem } from "@/components/nav-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

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
  },
  {
    Icon: FolderKanban,
    label: "To review",
    href: "/calendar",
  },
];

const routesEnrolled = [
  {
    label: "Enrolled",
    Icon: GraduationCap,
  },
  {
    label: "To-do",
    Icon: ListTodo,
    href: "/todo",
  },
];

interface SideBarProps {
  asTeacher: {
    label: string;
    secondaryLabel: string | null;
    color: string;
    href: string;
  }[];
  asStudent: {
    label: string;
    secondaryLabel: string | null;
    color: string;
    href: string;
  }[];
}

export const Sidebar = ({ asTeacher, asStudent }: SideBarProps) => {
  const routes = [
    routesTop,
    [...routesTeaching, ...asTeacher],
    [...routesEnrolled, ...asStudent],
    routesBottom,
  ];

  return (
    <ScrollArea className="h-[calc(100vh-61px)] w-[300px] border-r border-[border-[#dadce0]] z-20">
      {routes.map((routeGroup, idx: number) => (
        <>
          {(idx === 0 ||
            idx === routes.length - 1 ||
            routeGroup.length > 2) && (
            <div key={routeGroup[0].label} className="py-2 pr-4">
              {routeGroup.map((route) => (
                <NavItem key={route.label} {...route} />
              ))}
            </div>
          )}
          {(idx === 0 || routeGroup.length > 2) && (
            <Separator color="#dadce0" />
          )}
        </>
      ))}
    </ScrollArea>
  );
};

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  SlidersHorizontal,
  UserCircle,
  Lightbulb,
  ListChecks,
  Users,
  Network,
  School2,
  BarChart3,
  Briefcase,
  DollarSign,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Academic Optimization",
    href: "/academic-optimization",
    icon: BookOpen,
  },
  {
    title: "Wellness Center",
    href: "/wellness-center",
    icon: Activity,
  },
  {
    title: "Balance Optimizer",
    href: "/balance-optimizer",
    icon: SlidersHorizontal,
  },
  {
    title: "Professional Profile",
    href: "/professional-profile",
    icon: UserCircle,
  },
  {
    title: "Project Recommendations",
    href: "/project-recommendations",
    icon: Lightbulb,
  },
  {
    title: "Application Management",
    href: "/application-management",
    icon: ListChecks,
  },
  {
    title: "Mentor Matching",
    href: "/mentors",
    icon: Users,
  },
  {
    title: "Peer Network",
    href: "/peer-network",
    icon: Network,
  },
  {
    title: "University Comparison",
    href: "/universities",
    icon: School2,
  },
  {
    title: "Program Evaluation",
    href: "/program-evaluation",
    icon: BarChart3,
  },
  {
    title: "Internship Explorer",
    href: "/internships",
    icon: Briefcase,
  },
  {
    title: "Financial Planning",
    href: "/financial-planning",
    icon: DollarSign,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative min-h-screen bg-white border-r transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-64"
      )}
    >
      <div className="sticky top-0 p-4">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && <h2 className="text-2xl font-bold">Career Platform</h2>}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 py-2 px-4 rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-gray-100"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

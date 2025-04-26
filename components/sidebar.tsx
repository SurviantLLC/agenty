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
  GraduationCap,
  LineChart,
  Calendar,
  Award,
  FileText,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// Define menu categories
const menuCategories = [
  {
    name: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Learning Path",
        href: "/learning-path",
        icon: LineChart,
        badge: "New",
      },
      {
        title: "Roadmap",
        href: "/roadmap",
        icon: Target,
      },
    ],
  },
  {
    name: "Academic",
    items: [
      {
        title: "Academic Optimization",
        href: "/academic-optimization",
        icon: BookOpen,
      },
      {
        title: "Course Planning",
        href: "/course-planning",
        icon: Calendar,
      },
      {
        title: "Certifications",
        href: "/certifications",
        icon: Award,
      },
      {
        title: "Assessment",
        href: "/assessment",
        icon: FileText,
      },
    ],
  },
  {
    name: "Career",
    items: [
      {
        title: "Professional Profile",
        href: "/professional-profile",
        icon: UserCircle,
      },
      {
        title: "Skills Hub",
        href: "/skills-hub",
        icon: Sparkles,
      },
      {
        title: "Career Matches",
        href: "/career-matches",
        icon: Target,
      },
      {
        title: "Resume Builder",
        href: "/resume-builder",
        icon: FileText,
      },
      {
        title: "Internships",
        href: "/internships",
        icon: Briefcase,
      },
    ],
  },
  {
    name: "Resources",
    items: [
      {
        title: "Mentors",
        href: "/mentors",
        icon: GraduationCap,
      },
      {
        title: "Universities",
        href: "/universities",
        icon: School2,
      },
      {
        title: "Scholarships",
        href: "/scholarships",
        icon: DollarSign,
      },
      {
        title: "Peer Network",
        href: "/peer-network",
        icon: Users,
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        title: "Budget Manager",
        href: "/budget-manager",
        icon: DollarSign,
      },
      {
        title: "Goal Setting",
        href: "/goal-setting-workshop",
        icon: Target,
      },
      {
        title: "Project Management",
        href: "/project-management",
        icon: ListChecks,
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative min-h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[80px]" : "w-72"
      )}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Logo and collapse button */}
        <div className={cn(
          "flex items-center justify-between p-5 h-16",
          isCollapsed ? "justify-center" : ""  
        )}>
          {!isCollapsed && (
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center mr-3">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-sidebar-foreground">Agenty</h2>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-full hover:bg-sidebar-accent focus-ring",
              isCollapsed ? "" : "ml-auto"
            )}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-sidebar-foreground" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-sidebar-foreground" />
            )}
          </Button>
        </div>

        {/* User profile summary */}
        {!isCollapsed && (
          <div className="px-5 py-4">
            <div className="bg-sidebar-accent rounded-lg p-3 flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                <span className="text-white font-medium">S</span>
              </div>
              <div className="ml-3 overflow-hidden">
                <p className="font-medium text-sidebar-foreground truncate">Sarah Johnson</p>
                <p className="text-xs text-sidebar-foreground/70 truncate">Computer Science • Year 2</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation menu */}
        <div className="flex-1 overflow-y-auto py-2 px-3">
          <nav className="space-y-6">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="space-y-1">
                {!isCollapsed && (
                  <h3 className="text-xs uppercase font-medium text-sidebar-foreground/60 px-3 mb-2">
                    {category.name}
                  </h3>
                )}
                {category.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  
                  return isCollapsed ? (
                    <TooltipProvider key={item.href}>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center justify-center h-10 w-10 rounded-md transition-colors mx-auto mb-1",
                              isActive
                                ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                            )}
                          >
                            <item.icon className="h-5 w-5" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="font-medium">
                          {item.title}
                          {item.badge && (
                            <Badge className="ml-2 bg-accent text-accent-foreground text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 py-2 px-3 rounded-md transition-standard group",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      )}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <Badge className="ml-auto bg-accent text-accent-foreground text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
                {!isCollapsed && idx < menuCategories.length - 1 && (
                  <Separator className="my-4 bg-sidebar-border/50" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 mt-auto">
          {isCollapsed ? (
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                    <Settings className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button variant="outline" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}

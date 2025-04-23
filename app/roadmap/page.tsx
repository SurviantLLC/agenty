"use client"

import { useState } from "react"

interface Milestone {
  id: string;
  title: string;
  description: string;
  status: string;
  type: string;
  deadline: string;
  progress: number;
  category: string;
  timeEstimate: string;
}
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  GraduationCap,
  Home,
  Plus,
  Search,
  Settings,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function RoadmapPlanner() {
  const [zoomLevel, setZoomLevel] = useState<"months" | "quarters" | "years">("quarters")
  const [currentView, setCurrentView] = useState("2024-Q2")
  const [showCompleted, setShowCompleted] = useState(true)

  // Sample roadmap data
  const roadmapData = {
    education: [
      {
        id: "edu-1",
        title: "Complete Data Science Fundamentals Course",
        type: "course",
        deadline: "2024-05-15",
        status: "in-progress",
        progress: 65,
        category: "education",
        description: "Master the basics of data analysis, statistics, and Python programming",
        timeEstimate: "40 hours",
      },
      {
        id: "edu-2",
        title: "Enroll in Machine Learning Specialization",
        type: "program",
        deadline: "2024-06-01",
        status: "not-started",
        progress: 0,
        category: "education",
        description: "5-course specialization covering supervised learning, neural networks, and more",
        timeEstimate: "120 hours",
      },
      {
        id: "edu-3",
        title: "Complete SQL for Data Analysis",
        type: "course",
        deadline: "2024-04-10",
        status: "completed",
        progress: 100,
        category: "education",
        description: "Learn advanced SQL queries and database management for analytics",
        timeEstimate: "25 hours",
      },
    ],
    skills: [
      {
        id: "skill-1",
        title: "Build 3 Python Data Analysis Projects",
        type: "project",
        deadline: "2024-07-15",
        status: "in-progress",
        progress: 33,
        category: "skills",
        description: "Create portfolio projects demonstrating data cleaning, visualization, and analysis",
        timeEstimate: "60 hours",
      },
      {
        id: "skill-2",
        title: "Complete 30-Day Visualization Challenge",
        type: "practice",
        deadline: "2024-05-30",
        status: "not-started",
        progress: 0,
        category: "skills",
        description: "Daily practice creating different types of data visualizations",
        timeEstimate: "30 hours",
      },
      {
        id: "skill-3",
        title: "Contribute to Open Source Data Project",
        type: "project",
        deadline: "2024-08-15",
        status: "not-started",
        progress: 0,
        category: "skills",
        description: "Find and contribute to a data-focused open source project",
        timeEstimate: "40 hours",
      },
    ],
    applications: [
      {
        id: "app-1",
        title: "Update Resume with New Skills",
        type: "preparation",
        deadline: "2024-05-01",
        status: "completed",
        progress: 100,
        category: "applications",
        description: "Refresh resume to highlight data science skills and projects",
        timeEstimate: "5 hours",
      },
      {
        id: "app-2",
        title: "Apply for Summer Data Science Internship",
        type: "application",
        deadline: "2024-06-15",
        status: "not-started",
        progress: 0,
        category: "applications",
        description: "Submit applications to 5 target companies",
        timeEstimate: "10 hours",
      },
      {
        id: "app-3",
        title: "Prepare for Technical Interviews",
        type: "preparation",
        deadline: "2024-07-01",
        status: "not-started",
        progress: 0,
        category: "applications",
        description: "Practice SQL, Python, and statistics interview questions",
        timeEstimate: "30 hours",
      },
    ],
    networking: [
      {
        id: "net-1",
        title: "Attend Data Science Meetup",
        type: "event",
        deadline: "2024-05-20",
        status: "not-started",
        progress: 0,
        category: "networking",
        description: "Local data science community monthly gathering",
        timeEstimate: "3 hours",
      },
      {
        id: "net-2",
        title: "Connect with 10 Data Professionals",
        type: "outreach",
        deadline: "2024-06-30",
        status: "in-progress",
        progress: 40,
        category: "networking",
        description: "Reach out to professionals in target companies for informational interviews",
        timeEstimate: "15 hours",
      },
    ],
  }

  // Filter milestones based on showCompleted setting
  function filterMilestones(milestones: Milestone[]): Milestone[] {
    if (showCompleted) return milestones
    return milestones.filter((milestone: Milestone) => milestone.status !== "completed")
  }

  // Get all milestones in a flat array
  const allMilestones: Milestone[] = [
    ...roadmapData.education,
    ...roadmapData.skills,
    ...roadmapData.applications,
    ...roadmapData.networking,
  ]

  // Calculate overall progress
  const overallProgress = allMilestones.reduce((sum, milestone) => sum + (milestone.progress || 0), 0) / allMilestones.length

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <span>Roadmap Planner</span>
          </div>
          <h1 className="text-3xl font-bold">Your Career Roadmap</h1>
          <p className="text-muted-foreground mt-1">Plan and track your career preparation journey</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" asChild>
            <Link href="/progress">
              <Clock className="h-4 w-4 mr-2" />
              View Progress
            </Link>
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Milestone
          </Button>
        </div>
      </div>

      {/* Roadmap Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Select value={currentView} onValueChange={setCurrentView}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-Q1">Q1 2024</SelectItem>
              <SelectItem value="2024-Q2">Q2 2024</SelectItem>
              <SelectItem value="2024-Q3">Q3 2024</SelectItem>
              <SelectItem value="2024-Q4">Q4 2024</SelectItem>
              <SelectItem value="2025-Q1">Q1 2025</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-r-none ${zoomLevel === "months" ? "bg-secondary" : ""}`}
              onClick={() => setZoomLevel("months")}
            >
              <ZoomIn className="h-4 w-4 mr-1" />
              Months
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-none ${zoomLevel === "quarters" ? "bg-secondary" : ""}`}
              onClick={() => setZoomLevel("quarters")}
            >
              Quarters
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-l-none ${zoomLevel === "years" ? "bg-secondary" : ""}`}
              onClick={() => setZoomLevel("years")}
            >
              <ZoomOut className="h-4 w-4 mr-1" />
              Years
            </Button>
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search milestones..." className="pl-8 w-full md:w-[200px] h-9" />
          </div>

          <Button variant="outline" size="sm" className="h-9" onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? "Hide Completed" : "Show Completed"}
          </Button>
        </div>
      </div>

      {/* Timeline View */}
      <Card className="mb-8">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <CardTitle>Timeline View</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="flex items-center gap-1 mr-3">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                Completed
              </span>
              <span className="flex items-center gap-1 mr-3">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                In Progress
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                Not Started
              </span>
            </div>
          </div>
          <CardDescription>Drag and drop milestones to adjust your timeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Timeline Header */}
              <div className="grid grid-cols-6 gap-2 mb-4">
                <div className="col-span-2 font-medium">Milestone</div>
                {zoomLevel === "months" && (
                  <>
                    <div className="text-center text-sm font-medium">April</div>
                    <div className="text-center text-sm font-medium">May</div>
                    <div className="text-center text-sm font-medium">June</div>
                    <div className="text-center text-sm font-medium">July</div>
                  </>
                )}
                {zoomLevel === "quarters" && (
                  <>
                    <div className="text-center text-sm font-medium">Q2 2024</div>
                    <div className="text-center text-sm font-medium">Q3 2024</div>
                    <div className="text-center text-sm font-medium">Q4 2024</div>
                    <div className="text-center text-sm font-medium">Q1 2025</div>
                  </>
                )}
                {zoomLevel === "years" && (
                  <>
                    <div className="text-center text-sm font-medium">2024</div>
                    <div className="text-center text-sm font-medium">2025</div>
                    <div className="text-center text-sm font-medium">2026</div>
                    <div className="text-center text-sm font-medium">2027</div>
                  </>
                )}
              </div>

              {/* Timeline Grid */}
              <div className="space-y-3">
                {/* Education Milestones */}
                <div className="font-medium text-primary mb-2">Education</div>
                {filterMilestones(roadmapData.education).map((milestone) => (
                  <div key={milestone.id} className="grid grid-cols-6 gap-2 items-center">
                    <div className="col-span-2 flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : milestone.status === "in-progress"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                        }`}
                      ></div>
                      <div className="truncate">{milestone.title}</div>
                    </div>
                    <div className="col-span-4 h-10">
                      <div
                        className={`relative h-8 rounded-md flex items-center px-2 text-sm font-medium cursor-move ${
                          milestone.status === "completed"
                            ? "bg-green-100 border border-green-300 text-green-700"
                            : milestone.status === "in-progress"
                              ? "bg-amber-100 border border-amber-300 text-amber-700"
                              : "bg-slate-100 border border-slate-300 text-slate-700"
                        }`}
                        style={{
                          gridColumnStart: 1,
                          gridColumnEnd: 3,
                          width: "95%",
                        }}
                      >
                        <GraduationCap className="h-3.5 w-3.5 mr-1.5" />
                        <span className="truncate">{milestone.title}</span>
                        <div className="absolute right-1 top-1 bottom-1 flex items-center">
                          <Button variant="ghost" size="icon" className="h-5 w-5">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Skills Milestones */}
                <div className="font-medium text-primary mb-2 mt-6">Skills Development</div>
                {filterMilestones(roadmapData.skills).map((milestone) => (
                  <div key={milestone.id} className="grid grid-cols-6 gap-2 items-center">
                    <div className="col-span-2 flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : milestone.status === "in-progress"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                        }`}
                      ></div>
                      <div className="truncate">{milestone.title}</div>
                    </div>
                    <div className="col-span-4 h-10">
                      <div
                        className={`relative h-8 rounded-md flex items-center px-2 text-sm font-medium cursor-move ${
                          milestone.status === "completed"
                            ? "bg-green-100 border border-green-300 text-green-700"
                            : milestone.status === "in-progress"
                              ? "bg-amber-100 border border-amber-300 text-amber-700"
                              : "bg-slate-100 border border-slate-300 text-slate-700"
                        }`}
                        style={{
                          gridColumnStart: 2,
                          gridColumnEnd: 4,
                          width: "95%",
                        }}
                      >
                        <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                        <span className="truncate">{milestone.title}</span>
                        <div className="absolute right-1 top-1 bottom-1 flex items-center">
                          <Button variant="ghost" size="icon" className="h-5 w-5">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Applications Milestones */}
                <div className="font-medium text-primary mb-2 mt-6">Applications</div>
                {filterMilestones(roadmapData.applications).map((milestone) => (
                  <div key={milestone.id} className="grid grid-cols-6 gap-2 items-center">
                    <div className="col-span-2 flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : milestone.status === "in-progress"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                        }`}
                      ></div>
                      <div className="truncate">{milestone.title}</div>
                    </div>
                    <div className="col-span-4 h-10">
                      <div
                        className={`relative h-8 rounded-md flex items-center px-2 text-sm font-medium cursor-move ${
                          milestone.status === "completed"
                            ? "bg-green-100 border border-green-300 text-green-700"
                            : milestone.status === "in-progress"
                              ? "bg-amber-100 border border-amber-300 text-amber-700"
                              : "bg-slate-100 border border-slate-300 text-slate-700"
                        }`}
                        style={{
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          width: "95%",
                        }}
                      >
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        <span className="truncate">{milestone.title}</span>
                        <div className="absolute right-1 top-1 bottom-1 flex items-center">
                          <Button variant="ghost" size="icon" className="h-5 w-5">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Networking Milestones */}
                <div className="font-medium text-primary mb-2 mt-6">Networking</div>
                {filterMilestones(roadmapData.networking).map((milestone) => (
                  <div key={milestone.id} className="grid grid-cols-6 gap-2 items-center">
                    <div className="col-span-2 flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : milestone.status === "in-progress"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                        }`}
                      ></div>
                      <div className="truncate">{milestone.title}</div>
                    </div>
                    <div className="col-span-4 h-10">
                      <div
                        className={`relative h-8 rounded-md flex items-center px-2 text-sm font-medium cursor-move ${
                          milestone.status === "completed"
                            ? "bg-green-100 border border-green-300 text-green-700"
                            : milestone.status === "in-progress"
                              ? "bg-amber-100 border border-amber-300 text-amber-700"
                              : "bg-slate-100 border border-slate-300 text-slate-700"
                        }`}
                        style={{
                          gridColumnStart: 1,
                          gridColumnEnd: 3,
                          width: "95%",
                        }}
                      >
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        <span className="truncate">{milestone.title}</span>
                        <div className="absolute right-1 top-1 bottom-1 flex items-center">
                          <Button variant="ghost" size="icon" className="h-5 w-5">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Milestone Lists */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Milestones</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="networking">Networking</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterMilestones(allMilestones).map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterMilestones(roadmapData.education).map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterMilestones(roadmapData.skills).map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterMilestones(roadmapData.applications).map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="networking" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterMilestones(roadmapData.networking).map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MilestoneCard({ milestone }: { milestone: Milestone }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge
            variant="outline"
            className={
              milestone.status === "completed"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : milestone.status === "in-progress"
                  ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-100"
            }
          >
            {milestone.status === "completed"
              ? "Completed"
              : milestone.status === "in-progress"
                ? "In Progress"
                : "Not Started"}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardTitle className="text-lg">{milestone.title}</CardTitle>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="secondary">{milestone.type}</Badge>
          <span className="text-sm text-muted-foreground">Due: {formatDate(milestone.deadline)}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{milestone.description}</p>
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{milestone.progress}%</span>
        </div>
        <Progress value={milestone.progress} className="h-2" />
        <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>Est. time: {milestone.timeEstimate}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Update Progress
        </Button>
      </CardFooter>
    </Card>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Home,
  MoreHorizontal,
  Settings,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ProgressTracking() {
  const [timeframe, setTimeframe] = useState("month")

  // Sample progress data
  const progressData = {
    overall: 68,
    categories: {
      education: 75,
      skills: 60,
      applications: 85,
      networking: 50,
    },
    milestones: {
      total: 15,
      completed: 6,
      inProgress: 5,
      notStarted: 4,
    },
    timeManagement: {
      plannedHours: 120,
      actualHours: 95,
      efficiency: 79,
    },
    achievements: [
      {
        id: "ach-1",
        title: "Fast Learner",
        description: "Completed 3 courses ahead of schedule",
        date: "2024-04-15",
        icon: "star",
      },
      {
        id: "ach-2",
        title: "Networking Pro",
        description: "Connected with 10+ industry professionals",
        date: "2024-04-02",
        icon: "trophy",
      },
      {
        id: "ach-3",
        title: "Project Master",
        description: "Completed first data analysis portfolio project",
        date: "2024-03-20",
        icon: "award",
      },
    ],
    upcomingMilestones: [
      {
        id: "mile-1",
        title: "Complete Machine Learning Basics",
        deadline: "2024-05-10",
        progress: 65,
        timeEstimate: "15 hours remaining",
      },
      {
        id: "mile-2",
        title: "Submit Application to Tech Internship",
        deadline: "2024-05-15",
        progress: 30,
        timeEstimate: "5 hours remaining",
      },
      {
        id: "mile-3",
        title: "Finish SQL Advanced Course",
        deadline: "2024-05-20",
        progress: 45,
        timeEstimate: "8 hours remaining",
      },
    ],
    paceData: {
      ahead: 2,
      onTrack: 8,
      behind: 5,
      paceScore: 72,
    },
  }

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
            <span>Progress Tracking</span>
          </div>
          <h1 className="text-3xl font-bold">Your Progress Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track your career preparation journey</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" asChild>
            <Link href="/roadmap">
              <Calendar className="h-4 w-4 mr-2" />
              View Roadmap
            </Link>
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>Your career preparation journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold">{progressData.overall}%</div>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-muted stroke-current"
                    strokeWidth="10"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-primary stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${progressData.overall * 2.51} 251`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-muted-foreground mb-1">Milestones</div>
                  <div className="text-2xl font-bold">
                    {progressData.milestones.completed}/{progressData.milestones.total}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-muted-foreground mb-1">Time Efficiency</div>
                  <div className="text-2xl font-bold">{progressData.timeManagement.efficiency}%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Category Progress</CardTitle>
            <CardDescription>Progress by preparation area</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Education</span>
                <span className="font-medium">{progressData.categories.education}%</span>
              </div>
              <Progress value={progressData.categories.education} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Skills Development</span>
                <span className="font-medium">{progressData.categories.skills}%</span>
              </div>
              <Progress value={progressData.categories.skills} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Applications</span>
                <span className="font-medium">{progressData.categories.applications}%</span>
              </div>
              <Progress value={progressData.categories.applications} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Networking</span>
                <span className="font-medium">{progressData.categories.networking}%</span>
              </div>
              <Progress value={progressData.categories.networking} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Milestone Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Milestone Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold">{progressData.milestones.completed}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold">{progressData.milestones.inProgress}</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-slate-600" />
                </div>
                <div className="text-2xl font-bold">{progressData.milestones.notStarted}</div>
                <div className="text-sm text-muted-foreground">Not Started</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Time Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Planned Hours</div>
                  <div className="text-2xl font-bold">{progressData.timeManagement.plannedHours}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Actual Hours</div>
                  <div className="text-2xl font-bold">{progressData.timeManagement.actualHours}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Efficiency</div>
                  <div className="text-2xl font-bold">{progressData.timeManagement.efficiency}%</div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Time Utilization</span>
                  <span>
                    {progressData.timeManagement.actualHours}/{progressData.timeManagement.plannedHours} hours
                  </span>
                </div>
                <Progress
                  value={(progressData.timeManagement.actualHours / progressData.timeManagement.plannedHours) * 100}
                  className="h-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Pace Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Ahead</div>
                <div className="text-2xl font-bold text-green-600">{progressData.paceData.ahead}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">On Track</div>
                <div className="text-2xl font-bold">{progressData.paceData.onTrack}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Behind</div>
                <div className="text-2xl font-bold text-amber-600">{progressData.paceData.behind}</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Pace</span>
                <span className="font-medium">{progressData.paceData.paceScore}/100</span>
              </div>
              <Progress value={progressData.paceData.paceScore} className="h-2" />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-red-500">Behind</span>
                <span className="text-xs text-amber-500">Catching Up</span>
                <span className="text-xs text-green-500">Ahead</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements and Upcoming Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Celebrate your progress</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {progressData.achievements.map((achievement) => (
                <div key={achievement.id} className="p-4 flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      achievement.icon === "star"
                        ? "bg-amber-100"
                        : achievement.icon === "trophy"
                          ? "bg-purple-100"
                          : "bg-green-100"
                    }`}
                  >
                    {achievement.icon === "star" ? (
                      <Star className="h-5 w-5 text-amber-600" />
                    ) : achievement.icon === "trophy" ? (
                      <Trophy className="h-5 w-5 text-purple-600" />
                    ) : (
                      <Award className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    <div className="text-xs text-muted-foreground mt-1">{formatDate(achievement.date)}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/achievements">
                View All Achievements
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Focus on what's next</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {progressData.upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium">{milestone.title}</div>
                    <Badge variant="outline">Due {formatDate(milestone.deadline)}</Badge>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{milestone.progress}%</span>
                  </div>
                  <Progress value={milestone.progress} className="h-2 mb-2" />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{milestone.timeEstimate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/roadmap">
                View All Milestones
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Compare your progress against goals</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="completion">
            <TabsList className="mb-4">
              <TabsTrigger value="completion">Completion Rate</TabsTrigger>
              <TabsTrigger value="time">Time Management</TabsTrigger>
              <TabsTrigger value="skills">Skills Growth</TabsTrigger>
            </TabsList>

            <TabsContent value="completion">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Education Completion</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">{progressData.categories.education}%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +5% this month
                    </div>
                  </div>
                  <Progress value={progressData.categories.education} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 80%</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Skills Development</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">{progressData.categories.skills}%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +8% this month
                    </div>
                  </div>
                  <Progress value={progressData.categories.skills} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 75%</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Application Process</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">{progressData.categories.applications}%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +15% this month
                    </div>
                  </div>
                  <Progress value={progressData.categories.applications} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 90%</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="time">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Weekly Study Hours</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">12.5</div>
                    <div className="text-sm text-amber-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      -2.5 from goal
                    </div>
                  </div>
                  <Progress value={(12.5 / 15) * 100} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 15 hours/week</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Task Completion Time</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +5% efficiency
                    </div>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 80% of estimated time</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Consistency Score</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">78%</div>
                    <div className="text-sm text-amber-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      -2% this month
                    </div>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 85% consistency</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Technical Skills Growth</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">65%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +12% this quarter
                    </div>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 70% by Q3</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Soft Skills Development</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">72%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +8% this quarter
                    </div>
                  </div>
                  <Progress value={72} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 75% by Q3</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Project Completion</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +15% this quarter
                    </div>
                  </div>
                  <Progress value={40} className="h-2" />
                  <div className="text-xs text-muted-foreground">Target: 60% by Q3</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Effort Estimation */}
      <Card>
        <CardHeader>
          <CardTitle>Effort Estimation</CardTitle>
          <CardDescription>Estimated time required for upcoming milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Short-term (Next 2 Weeks)</div>
              <div className="text-3xl font-bold">28 hours</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>~2 hours/day</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Education: 12h</Badge>
                <Badge variant="secondary">Skills: 10h</Badge>
                <Badge variant="secondary">Applications: 6h</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Mid-term (Next Month)</div>
              <div className="text-3xl font-bold">65 hours</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>~2.2 hours/day</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Education: 25h</Badge>
                <Badge variant="secondary">Skills: 20h</Badge>
                <Badge variant="secondary">Applications: 15h</Badge>
                <Badge variant="secondary">Networking: 5h</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Long-term (Next Quarter)</div>
              <div className="text-3xl font-bold">180 hours</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>~2 hours/day</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Education: 70h</Badge>
                <Badge variant="secondary">Skills: 60h</Badge>
                <Badge variant="secondary">Applications: 30h</Badge>
                <Badge variant="secondary">Networking: 20h</Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/roadmap">
              <Settings className="h-4 w-4 mr-2" />
              Adjust Time Allocation
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

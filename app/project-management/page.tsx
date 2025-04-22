import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Clock,
  CalendarIcon,
  CheckCircle2,
  AlertCircle,
  FileText,
  BarChart3,
  Plus,
  Users,
  Briefcase,
  BookOpen,
  Award,
  Link,
  ExternalLink,
  Download,
} from "lucide-react"

export default function ProjectManagementPage() {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Machine Learning Research Project",
      description: "Developing a novel approach to natural language processing",
      progress: 75,
      deadline: "May 15, 2023",
      status: "In Progress",
      skills: ["Python", "Machine Learning", "NLP", "Research"],
      team: [
        { name: "Alex Johnson", role: "Lead", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Sam Taylor", role: "ML Engineer", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      milestones: [
        { title: "Literature Review", completed: true, date: "Feb 10, 2023" },
        { title: "Data Collection", completed: true, date: "Mar 5, 2023" },
        { title: "Model Development", completed: true, date: "Apr 2, 2023" },
        { title: "Testing & Validation", completed: false, date: "Apr 25, 2023" },
        { title: "Final Report", completed: false, date: "May 10, 2023" },
      ],
      resources: [
        { name: "GPU Compute Hours", allocated: 100, used: 65 },
        { name: "Research Budget", allocated: 500, used: 320 },
        { name: "Dataset Access", allocated: 3, used: 2 },
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating a fitness tracking application for iOS and Android",
      progress: 40,
      deadline: "June 30, 2023",
      status: "In Progress",
      skills: ["React Native", "JavaScript", "UI/UX Design", "Firebase"],
      team: [
        { name: "Jamie Smith", role: "Lead Developer", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Riley Brown", role: "UI Designer", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      milestones: [
        { title: "Requirements Gathering", completed: true, date: "Mar 15, 2023" },
        { title: "UI Design", completed: true, date: "Apr 10, 2023" },
        { title: "Frontend Development", completed: false, date: "May 20, 2023" },
        { title: "Backend Integration", completed: false, date: "June 10, 2023" },
        { title: "Testing", completed: false, date: "June 25, 2023" },
      ],
      resources: [
        { name: "Design Software", allocated: 1, used: 1 },
        { name: "Development Hours", allocated: 200, used: 85 },
        { name: "Testing Devices", allocated: 4, used: 1 },
      ],
    },
    {
      id: 3,
      title: "Sustainability Initiative",
      description: "Campus-wide program to reduce waste and energy consumption",
      progress: 90,
      deadline: "April 30, 2023",
      status: "Almost Complete",
      skills: ["Project Management", "Sustainability", "Communication", "Data Analysis"],
      team: [
        { name: "Jordan Lee", role: "Project Manager", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Casey Wilson", role: "Sustainability Analyst", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      milestones: [
        { title: "Initial Assessment", completed: true, date: "Jan 15, 2023" },
        { title: "Strategy Development", completed: true, date: "Feb 5, 2023" },
        { title: "Implementation", completed: true, date: "Mar 10, 2023" },
        { title: "Data Collection", completed: true, date: "Apr 5, 2023" },
        { title: "Final Report", completed: false, date: "Apr 25, 2023" },
      ],
      resources: [
        { name: "Budget", allocated: 1000, used: 850 },
        { name: "Volunteer Hours", allocated: 500, used: 470 },
        { name: "Marketing Materials", allocated: 10, used: 8 },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Management Dashboard</h1>
          <p className="text-muted-foreground">Track, manage, and showcase your projects</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <Tabs defaultValue="board" className="w-full">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="board">Project Board</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Project Board Tab */}
        <TabsContent value="board" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20">
                <CardTitle className="flex items-center text-yellow-700 dark:text-yellow-400">
                  <Clock className="mr-2 h-5 w-5" />
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-4">
                    {projects
                      .filter((p) => p.status === "In Progress")
                      .map((project) => (
                        <Card key={project.id} className="border border-yellow-200 dark:border-yellow-900/50">
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-base">{project.title}</CardTitle>
                              <Badge
                                variant="outline"
                                className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                              >
                                {project.progress}%
                              </Badge>
                            </div>
                            <CardDescription>{project.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 space-y-2">
                            <Progress value={project.progress} className="h-2" />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <CalendarIcon className="mr-1 h-3 w-3" />
                                {project.deadline}
                              </div>
                              <div className="flex">
                                {project.team.slice(0, 2).map((member, i) => (
                                  <Avatar
                                    key={i}
                                    className={`h-6 w-6 ${i > 0 ? "-ml-2" : ""} border-2 border-background`}
                                  >
                                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                ))}
                                {project.team.length > 2 && (
                                  <div className="h-6 w-6 rounded-full bg-muted -ml-2 border-2 border-background flex items-center justify-center text-xs">
                                    +{project.team.length - 2}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.skills.slice(0, 3).map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {project.skills.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{project.skills.length - 3}
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    <Button variant="ghost" className="w-full border border-dashed">
                      <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Button>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Almost Complete
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-4">
                    {projects
                      .filter((p) => p.status === "Almost Complete")
                      .map((project) => (
                        <Card key={project.id} className="border border-blue-200 dark:border-blue-900/50">
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-base">{project.title}</CardTitle>
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                              >
                                {project.progress}%
                              </Badge>
                            </div>
                            <CardDescription>{project.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 space-y-2">
                            <Progress value={project.progress} className="h-2" />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <CalendarIcon className="mr-1 h-3 w-3" />
                                {project.deadline}
                              </div>
                              <div className="flex">
                                {project.team.slice(0, 2).map((member, i) => (
                                  <Avatar
                                    key={i}
                                    className={`h-6 w-6 ${i > 0 ? "-ml-2" : ""} border-2 border-background`}
                                  >
                                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                ))}
                                {project.team.length > 2 && (
                                  <div className="h-6 w-6 rounded-full bg-muted -ml-2 border-2 border-background flex items-center justify-center text-xs">
                                    +{project.team.length - 2}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.skills.slice(0, 3).map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {project.skills.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{project.skills.length - 3}
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    <Button variant="ghost" className="w-full border border-dashed">
                      <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Button>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-4">
                    <Button variant="ghost" className="w-full border border-dashed">
                      <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Button>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Calendar Tab */}
        <TabsContent value="calendar" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Timeline</CardTitle>
                  <CardDescription>View and manage project deadlines and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" className="rounded-md border" />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Your next project milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {projects.flatMap((project) =>
                        project.milestones
                          .filter((m) => !m.completed)
                          .map((milestone, i) => (
                            <div
                              key={`${project.id}-${i}`}
                              className="flex items-start space-x-3 p-3 border rounded-lg"
                            >
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                                  <CalendarIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                </div>
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium">{milestone.title}</p>
                                  <Badge variant="outline">{milestone.date}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{project.title}</p>
                              </div>
                            </div>
                          )),
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Allocation</CardTitle>
                  <CardDescription>Track and manage project resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <div key={project.id} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{project.title}</h3>
                          <Badge
                            variant={
                              project.progress < 50 ? "outline" : project.progress < 80 ? "secondary" : "default"
                            }
                          >
                            {project.progress}% Complete
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          {project.resources.map((resource, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>{resource.name}</span>
                                <span>
                                  {resource.used} / {resource.allocated} (
                                  {Math.round((resource.used / resource.allocated) * 100)}%)
                                </span>
                              </div>
                              <Progress value={(resource.used / resource.allocated) * 100} className="h-2" />
                            </div>
                          ))}
                        </div>
                        <Separator />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Add Resources</CardTitle>
                  <CardDescription>Allocate new resources to projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="project">Project</Label>
                      <Select>
                        <SelectTrigger id="project">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          {projects.map((project) => (
                            <SelectItem key={project.id} value={project.id.toString()}>
                              {project.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resource-type">Resource Type</Label>
                      <Select>
                        <SelectTrigger id="resource-type">
                          <SelectValue placeholder="Select resource type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget</SelectItem>
                          <SelectItem value="time">Time</SelectItem>
                          <SelectItem value="equipment">Equipment</SelectItem>
                          <SelectItem value="personnel">Personnel</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resource-name">Resource Name</Label>
                      <Input id="resource-name" placeholder="Enter resource name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allocation">Allocation Amount</Label>
                      <Input id="allocation" type="number" placeholder="Enter amount" />
                    </div>
                    <Button className="w-full">Add Resource</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Portfolio Tab */}
        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Portfolio</CardTitle>
                  <CardDescription>Showcase your completed projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <Card key={project.id} className="overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 flex items-center justify-center">
                            <div className="text-center">
                              <div className="mx-auto rounded-full bg-white dark:bg-gray-800 p-3 w-16 h-16 flex items-center justify-center mb-4">
                                {project.title.includes("Machine Learning") ? (
                                  <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                ) : project.title.includes("Mobile") ? (
                                  <Briefcase className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                                ) : (
                                  <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
                                )}
                              </div>
                              <Badge className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400">
                                {project.progress}% Complete
                              </Badge>
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground">Team</h4>
                                <div className="flex mt-1">
                                  {project.team.map((member, i) => (
                                    <Avatar
                                      key={i}
                                      className={`h-8 w-8 ${i > 0 ? "-ml-2" : ""} border-2 border-background`}
                                    >
                                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground">Timeline</h4>
                                <p className="text-sm mt-1">{project.deadline}</p>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-muted-foreground mb-2">Skills Demonstrated</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, i) => (
                                  <Badge key={i} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="flex items-center">
                                <Link className="mr-2 h-4 w-4" />
                                View Details
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Documentation Templates</CardTitle>
                  <CardDescription>Standardize your project documentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-4">
                      <Card className="border border-dashed">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            Project Overview
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">
                            Standard template for project summaries and overviews
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2 w-full">
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            Team Documentation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">
                            Document team roles, responsibilities and contributions
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2 w-full">
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base flex items-center">
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Results & Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">
                            Document project outcomes, results and impact metrics
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2 w-full">
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base flex items-center">
                            <Award className="mr-2 h-4 w-4" />
                            Skills Showcase
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">Highlight skills demonstrated and developed</p>
                          <Button variant="ghost" size="sm" className="mt-2 w-full">
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base flex items-center">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Learning Reflection
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">
                            Reflect on learning outcomes and personal growth
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2 w-full">
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Impact Measurement</CardTitle>
                  <CardDescription>Analyze the impact and outcomes of your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">12</div>
                          <p className="text-xs text-muted-foreground">+3 from last semester</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Skills Demonstrated</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">28</div>
                          <p className="text-xs text-muted-foreground">+7 from last semester</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">92%</div>
                          <p className="text-xs text-muted-foreground">+5% from last semester</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="h-[300px] border rounded-lg p-4 bg-background flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground" />
                        <h3 className="mt-2 font-medium">Project Impact Visualization</h3>
                        <p className="text-sm text-muted-foreground">
                          Charts showing project outcomes and impact metrics
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Skill Tagging</CardTitle>
                  <CardDescription>Track skills demonstrated in your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-select">Project</Label>
                      <Select>
                        <SelectTrigger id="project-select">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          {projects.map((project) => (
                            <SelectItem key={project.id} value={project.id.toString()}>
                              {project.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skill-input">Add Skills</Label>
                      <div className="flex space-x-2">
                        <Input id="skill-input" placeholder="Enter skill" />
                        <Button variant="secondary" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="text-sm font-medium mb-2">Current Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="flex items-center gap-1">
                          Python
                          <button className="h-3 w-3 rounded-full">×</button>
                        </Badge>
                        <Badge className="flex items-center gap-1">
                          Data Analysis
                          <button className="h-3 w-3 rounded-full">×</button>
                        </Badge>
                        <Badge className="flex items-center gap-1">
                          Research
                          <button className="h-3 w-3 rounded-full">×</button>
                        </Badge>
                        <Badge className="flex items-center gap-1">
                          Visualization
                          <button className="h-3 w-3 rounded-full">×</button>
                        </Badge>
                        <Badge className="flex items-center gap-1">
                          Machine Learning
                          <button className="h-3 w-3 rounded-full">×</button>
                        </Badge>
                      </div>
                    </div>
                    <Button className="w-full">Save Skills</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

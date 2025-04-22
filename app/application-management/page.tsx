"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  CalendarIcon,
  Clock,
  FileText,
  Upload,
  Download,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  PlusCircle,
  Search,
  ClipboardList,
} from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

export default function ApplicationManagementPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Application Management Center</h1>
          <p className="text-muted-foreground mt-1">Track, organize, and optimize your applications in one place</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            New Application
          </Button>
          <Button className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Applications
          </Button>
        </div>
      </div>

      <Tabs defaultValue="tracking" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="tracking">Application Tracking</TabsTrigger>
          <TabsTrigger value="documents">Document Center</TabsTrigger>
          <TabsTrigger value="essays">Essay Workshop</TabsTrigger>
          <TabsTrigger value="deadlines">Deadline Manager</TabsTrigger>
        </TabsList>

        <TabsContent value="tracking" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-yellow-50 dark:bg-yellow-950/20 pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>To Do</span>
                  <Badge variant="outline" className="bg-yellow-100 dark:bg-yellow-900/30">
                    4
                  </Badge>
                </CardTitle>
                <CardDescription>Applications to start</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">University of Technology</h3>
                      <Badge variant="outline" className="text-xs">
                        Computer Science
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>Deadline: May 15, 2023</span>
                    </div>
                    <Progress value={0} className="h-2" />
                    <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
                      <span>0/8 requirements</span>
                      <span>Not started</span>
                    </div>
                  </Card>
                ))}
                <Button variant="ghost" className="w-full flex items-center gap-2 mt-2">
                  <PlusCircle className="h-4 w-4" />
                  Add Application
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-950/20 pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>In Progress</span>
                  <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900/30">
                    3
                  </Badge>
                </CardTitle>
                <CardDescription>Applications being worked on</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">State University</h3>
                      <Badge variant="outline" className="text-xs">
                        Data Science
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>Deadline: Apr 30, 2023</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
                      <span>3/7 requirements</span>
                      <span>In progress</span>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-950/20 pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>Completed</span>
                  <Badge variant="outline" className="bg-green-100 dark:bg-green-900/30">
                    2
                  </Badge>
                </CardTitle>
                <CardDescription>Applications ready to submit</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {[1, 2].map((item) => (
                  <Card key={item} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Tech Institute</h3>
                      <Badge variant="outline" className="text-xs">
                        Software Engineering
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>Deadline: Mar 15, 2023</span>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
                      <span>8/8 requirements</span>
                      <span className="text-green-600 dark:text-green-400">Ready to submit</span>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Application Requirements Checklist</CardTitle>
              <CardDescription>Track your progress for each application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">State University - Data Science</h3>
                    <Badge>42% Complete</Badge>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Personal Information", completed: true },
                      { label: "Academic History", completed: true },
                      { label: "Test Scores", completed: true },
                      { label: "Personal Statement", completed: false },
                      { label: "Letters of Recommendation", completed: false },
                      { label: "Portfolio Submission", completed: false },
                      { label: "Application Fee", completed: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`item-${i}`} checked={item.completed} />
                        <label
                          htmlFor={`item-${i}`}
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            item.completed ? "line-through text-muted-foreground" : ""
                          }`}
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Organization System</CardTitle>
              <CardDescription>Manage all your application documents in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Transcript", type: "PDF", size: "1.2 MB", updated: "2 days ago" },
                  { name: "Resume", type: "DOCX", size: "450 KB", updated: "1 week ago" },
                  { name: "Personal Statement", type: "DOCX", size: "320 KB", updated: "3 days ago" },
                  { name: "Recommendation Letter 1", type: "PDF", size: "280 KB", updated: "1 month ago" },
                  { name: "Test Scores", type: "PDF", size: "190 KB", updated: "2 weeks ago" },
                  { name: "Portfolio", type: "ZIP", size: "4.5 MB", updated: "5 days ago" },
                ].map((doc, i) => (
                  <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 mr-3 text-blue-500" />
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded mr-2">{doc.type}</span>
                            <span>{doc.size}</span>
                            <span className="mx-2">•</span>
                            <span>Updated {doc.updated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload New Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="essays" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Essay Topic Suggestions</CardTitle>
                  <CardDescription>Personalized topics based on your profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Describe a challenge you've overcome and how it shaped you",
                    "Discuss your most meaningful extracurricular activity",
                    "Share a moment that changed your perspective on your future career",
                    "Explain how your background influences your academic interests",
                    "Describe a time when you demonstrated leadership",
                  ].map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <p className="text-sm">{topic}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Generate More Topics
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Structure Guidance</CardTitle>
                  <CardDescription>Essay structure templates and tips</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h4 className="font-medium mb-2">Personal Statement Structure</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Engaging introduction with hook</li>
                      <li>Background and context</li>
                      <li>Key experiences and insights</li>
                      <li>Growth and learning moments</li>
                      <li>Connection to future goals</li>
                      <li>Compelling conclusion</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h4 className="font-medium mb-2">Why This School Essay</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Specific program interests</li>
                      <li>Faculty you want to work with</li>
                      <li>Campus resources and opportunities</li>
                      <li>Alignment with your goals</li>
                      <li>Unique aspects of the institution</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    View More Templates
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Essay Workshop</CardTitle>
                  <CardDescription>Write, review, and get feedback on your essays</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <Input
                      placeholder="Essay Title"
                      className="max-w-sm"
                      defaultValue="Personal Statement - State University"
                    />
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      >
                        Draft
                      </Badge>
                      <span className="text-sm text-muted-foreground">Last saved 5 minutes ago</span>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Start writing your essay here..."
                    className="flex-grow min-h-[300px]"
                    defaultValue="When I was twelve years old, my family moved from our small hometown to a large city. This transition was challenging but ultimately shaped my perspective on adaptability and personal growth. The diverse environment of the city exposed me to different cultures, ideas, and opportunities that I had never encountered before..."
                  />
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        Get Feedback
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Check Grammar
                      </Button>
                    </div>
                    <Button className="flex items-center gap-2">Save Draft</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deadlines" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Track your application timelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      school: "State University",
                      program: "Data Science",
                      deadline: "Apr 30, 2023",
                      daysLeft: 12,
                      progress: 42,
                    },
                    {
                      school: "Tech Institute",
                      program: "Software Engineering",
                      deadline: "May 15, 2023",
                      daysLeft: 27,
                      progress: 100,
                    },
                    {
                      school: "University of Technology",
                      program: "Computer Science",
                      deadline: "May 15, 2023",
                      daysLeft: 27,
                      progress: 0,
                    },
                    {
                      school: "National College",
                      program: "Information Systems",
                      deadline: "Jun 1, 2023",
                      daysLeft: 44,
                      progress: 25,
                    },
                    {
                      school: "Global University",
                      program: "AI & Machine Learning",
                      deadline: "Jun 15, 2023",
                      daysLeft: 58,
                      progress: 10,
                    },
                  ].map((app, i) => (
                    <div key={i} className="p-4 border rounded-md hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{app.school}</h3>
                        <Badge variant={app.daysLeft < 15 ? "destructive" : "outline"} className="text-xs">
                          {app.daysLeft} days left
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{app.program}</p>
                      <div className="flex items-center text-sm mb-3">
                        <CalendarIcon className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Deadline: {app.deadline}</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                      <div className="flex justify-end mt-2">
                        <span className="text-xs text-muted-foreground">{app.progress}% complete</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Timeline Visualization</CardTitle>
                  <CardDescription>Visual overview of your application deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-[280px] justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="relative">
                    <div className="absolute left-9 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>

                    {[
                      {
                        date: "Apr 15, 2023",
                        event: "Recommendation Letter Deadline",
                        school: "State University",
                        type: "alert",
                      },
                      {
                        date: "Apr 30, 2023",
                        event: "Application Deadline",
                        school: "State University",
                        type: "deadline",
                      },
                      { date: "May 10, 2023", event: "Transcript Submission", school: "Tech Institute", type: "task" },
                      {
                        date: "May 15, 2023",
                        event: "Application Deadline",
                        school: "Tech Institute",
                        type: "deadline",
                      },
                      {
                        date: "May 15, 2023",
                        event: "Application Deadline",
                        school: "University of Technology",
                        type: "deadline",
                      },
                      {
                        date: "Jun 1, 2023",
                        event: "Application Deadline",
                        school: "National College",
                        type: "deadline",
                      },
                      {
                        date: "Jun 15, 2023",
                        event: "Application Deadline",
                        school: "Global University",
                        type: "deadline",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex mb-6 relative z-10">
                        <div className="flex flex-col items-center mr-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700">
                            {item.type === "deadline" ? (
                              <Clock className="h-4 w-4 text-red-500" />
                            ) : item.type === "alert" ? (
                              <AlertCircle className="h-4 w-4 text-amber-500" />
                            ) : (
                              <ClipboardList className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-md border shadow-sm flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{item.event}</h4>
                              <p className="text-sm text-muted-foreground">{item.school}</p>
                            </div>
                            <Badge
                              variant={
                                item.type === "deadline" ? "destructive" : item.type === "alert" ? "default" : "outline"
                              }
                            >
                              {item.date}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

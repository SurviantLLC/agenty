"use client"

import { Badge } from "@/components/ui/badge"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  CalendarIcon,
  Target,
  Clock,
  CheckCircle,
  BarChart2,
  Users,
  BookOpen,
  Award,
  Lightbulb,
  CalendarPlus2Icon as CalendarIcon2,
  ArrowRight,
  CheckSquare,
  AlertCircle,
} from "lucide-react"

export default function GoalSettingWorkshop() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Goal Setting Workshop</h1>
          <p className="text-muted-foreground mt-2">
            Create, track, and achieve your SMART goals with structured planning and support
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="mr-2">Save Goals</Button>
          <Button variant="outline">Export Plan</Button>
        </div>
      </div>

      <Tabs defaultValue="create">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="track">Track</TabsTrigger>
          <TabsTrigger value="analyze">Analyze</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>SMART Goal Creation Wizard</CardTitle>
              <CardDescription>Define your goal using the SMART criteria framework</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="goal-title">Goal Title</Label>
                <Input id="goal-title" placeholder="Enter a clear title for your goal" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      S
                    </span>
                    <Label>Specific</Label>
                  </div>
                  <Textarea placeholder="What exactly do you want to accomplish?" className="min-h-[100px]" />
                  <p className="text-xs text-muted-foreground">Your goal should be clear and specific, not vague.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      M
                    </span>
                    <Label>Measurable</Label>
                  </div>
                  <Textarea placeholder="How will you measure progress and success?" className="min-h-[100px]" />
                  <p className="text-xs text-muted-foreground">Define metrics to track your progress.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      A
                    </span>
                    <Label>Achievable</Label>
                  </div>
                  <Textarea placeholder="Is this goal realistic with your resources?" className="min-h-[100px]" />
                  <p className="text-xs text-muted-foreground">Your goal should stretch you but remain possible.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      R
                    </span>
                    <Label>Relevant</Label>
                  </div>
                  <Textarea placeholder="Why is this goal important to you?" className="min-h-[100px]" />
                  <p className="text-xs text-muted-foreground">Ensure your goal aligns with your broader objectives.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      T
                    </span>
                    <Label>Time-bound</Label>
                  </div>
                  <div className="grid gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a target date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <Textarea placeholder="Break down into time-based milestones" className="min-h-[70px]" />
                  </div>
                  <p className="text-xs text-muted-foreground">Set a deadline and milestone dates.</p>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <Label>SMART Score</Label>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Goal Completeness</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-md mt-2">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      Your goal needs more specific measurable criteria to track progress effectively.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save & Continue to Planning</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="plan" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Timeline Development</CardTitle>
                <CardDescription>Break your goal into actionable milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a start date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex justify-between items-center">
                    <Label>Milestones</Label>
                    <Button variant="ghost" size="sm">
                      + Add Milestone
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-medium mr-2">
                            1
                          </span>
                          <Input
                            placeholder="Milestone title"
                            defaultValue="Research phase complete"
                            className="border-0 p-0 h-auto text-base font-medium focus-visible:ring-0"
                          />
                        </div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Clock className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Textarea
                        placeholder="Describe this milestone"
                        defaultValue="Complete initial research on target schools and programs"
                        className="mt-2"
                      />
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-medium mr-2">
                            2
                          </span>
                          <Input
                            placeholder="Milestone title"
                            defaultValue="First draft complete"
                            className="border-0 p-0 h-auto text-base font-medium focus-visible:ring-0"
                          />
                        </div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Clock className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Textarea
                        placeholder="Describe this milestone"
                        defaultValue="Complete first draft of application essays and personal statements"
                        className="mt-2"
                      />
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-medium mr-2">
                            3
                          </span>
                          <Input
                            placeholder="Milestone title"
                            defaultValue="Applications submitted"
                            className="border-0 p-0 h-auto text-base font-medium focus-visible:ring-0"
                          />
                        </div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Clock className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Textarea
                        placeholder="Describe this milestone"
                        defaultValue="Submit all applications with supporting materials"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Identification</CardTitle>
                  <CardDescription>What do you need to achieve your goal?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Required Skills</Label>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 border rounded-md px-3 py-1">
                          <Checkbox id="skill1" />
                          <label htmlFor="skill1" className="text-sm">
                            Essay Writing
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md px-3 py-1">
                          <Checkbox id="skill2" />
                          <label htmlFor="skill2" className="text-sm">
                            Research
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md px-3 py-1">
                          <Checkbox id="skill3" />
                          <label htmlFor="skill3" className="text-sm">
                            Time Management
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md px-3 py-1">
                          <Checkbox id="skill4" />
                          <label htmlFor="skill4" className="text-sm">
                            Interview Skills
                          </label>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8">
                          + Add Skill
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Tools & Resources</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="resource1" />
                          <label htmlFor="resource1" className="text-sm">
                            Application Fee Waivers
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="resource2" />
                          <label htmlFor="resource2" className="text-sm">
                            Writing Center Support
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="resource3" />
                          <label htmlFor="resource3" className="text-sm">
                            Transfer Advisor Meetings
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="resource4" />
                          <label htmlFor="resource4" className="text-sm">
                            Financial Aid Calculator
                          </label>
                        </div>
                        <Button variant="ghost" size="sm">
                          + Add Resource
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support System</CardTitle>
                  <CardDescription>Who can help you achieve this goal?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="support1" defaultChecked />
                      <div>
                        <label htmlFor="support1" className="text-sm font-medium">
                          Academic Advisor
                        </label>
                        <p className="text-xs text-muted-foreground">
                          For guidance on course selection and transfer requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="support2" defaultChecked />
                      <div>
                        <label htmlFor="support2" className="text-sm font-medium">
                          Writing Center Tutor
                        </label>
                        <p className="text-xs text-muted-foreground">For essay review and feedback</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="support3" />
                      <div>
                        <label htmlFor="support3" className="text-sm font-medium">
                          Career Counselor
                        </label>
                        <p className="text-xs text-muted-foreground">For aligning transfer plans with career goals</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="support4" />
                      <div>
                        <label htmlFor="support4" className="text-sm font-medium">
                          Financial Aid Officer
                        </label>
                        <p className="text-xs text-muted-foreground">For scholarship and aid opportunities</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      + Add Support Person
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
                <CardDescription>Educational materials to help you succeed</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Essay Writing Guide</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Comprehensive guide to writing compelling application essays
                      </p>
                      <Button variant="link" size="sm" className="px-0">
                        Access Resource
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Transfer Credit Calculator</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tool to estimate transferable credits at target institutions
                      </p>
                      <Button variant="link" size="sm" className="px-0">
                        Access Resource
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Interview Preparation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Practice questions and tips for admission interviews
                      </p>
                      <Button variant="link" size="sm" className="px-0">
                        Access Resource
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Financial Aid Guide</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Understanding scholarships, grants, and loans
                      </p>
                      <Button variant="link" size="sm" className="px-0">
                        Access Resource
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Campus Visit Checklist</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        What to look for and questions to ask during campus visits
                      </p>
                      <Button variant="link" size="sm" className="px-0">
                        Access Resource
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Workshops</CardTitle>
                <CardDescription>Events to help you develop necessary skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Transfer Application Workshop</h4>
                        <Badge>Next Week</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Step-by-step guidance through the application process
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <CalendarIcon2 className="h-4 w-4 mr-1" />
                        <span>Oct 15, 2023 | 2:00 PM</span>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Register
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Essay Writing Seminar</h4>
                        <Badge>This Month</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Crafting compelling personal statements</p>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <CalendarIcon2 className="h-4 w-4 mr-1" />
                        <span>Oct 22, 2023 | 3:30 PM</span>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Register
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Financial Aid Workshop</h4>
                        <Badge>Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Understanding and maximizing financial aid options
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <CalendarIcon2 className="h-4 w-4 mr-1" />
                        <span>Nov 5, 2023 | 1:00 PM</span>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Register
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expert Connections</CardTitle>
                <CardDescription>Connect with people who can help</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Transfer Advisor</h4>
                          <p className="text-sm text-muted-foreground">Specialized in your target schools</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        Schedule Meeting
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Writing Center</h4>
                          <p className="text-sm text-muted-foreground">Essay review and feedback</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        Book Appointment
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Alumni Mentor</h4>
                          <p className="text-sm text-muted-foreground">Connect with graduates from target schools</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        Find Mentor
                      </Button>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Lightbulb className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Career Counselor</h4>
                          <p className="text-sm text-muted-foreground">Align transfer plans with career goals</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        Schedule Session
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="track" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Milestone Monitoring Board</CardTitle>
                <CardDescription>Track your progress toward each milestone</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h4 className="font-medium">Research Phase Complete</h4>
                      </div>
                      <Badge className="bg-green-500">Completed</Badge>
                    </div>
                    <Progress value={100} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Oct 1, 2023</span>
                      <span>100%</span>
                    </div>
                    <div className="mt-3 text-sm">
                      <p>All target schools researched and requirements documented.</p>
                      <div className="flex items-center mt-2 text-green-600">
                        <CheckSquare className="h-4 w-4 mr-1" />
                        <span>Completed on time</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-amber-500 mr-2" />
                        <h4 className="font-medium">First Draft Complete</h4>
                      </div>
                      <Badge className="bg-amber-500">In Progress</Badge>
                    </div>
                    <Progress value={65} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Oct 15, 2023</span>
                      <span>65%</span>
                    </div>
                    <div className="mt-3 text-sm">
                      <p>Personal statement draft complete, still working on supplemental essays.</p>
                      <div className="flex items-center mt-2 text-amber-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>5 days remaining</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 text-slate-400 mr-2" />
                        <h4 className="font-medium">Applications Submitted</h4>
                      </div>
                      <Badge variant="outline">Not Started</Badge>
                    </div>
                    <Progress value={0} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Nov 15, 2023</span>
                      <span>0%</span>
                    </div>
                    <div className="mt-3 text-sm">
                      <p>Waiting for recommendation letters and essay completion.</p>
                      <div className="flex items-center mt-2 text-slate-500">
                        <CalendarIcon2 className="h-4 w-4 mr-1" />
                        <span>Due in 30 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>Overall goal completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-muted stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <circle
                          className="text-primary stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeDasharray="251.2"
                          strokeDashoffset="125.6"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold">50%</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-center">Transfer Application Goal</h4>
                    <p className="text-sm text-muted-foreground text-center mt-1">You're halfway there!</p>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Research</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Essays</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Recommendations</span>
                        <span>33%</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Application Forms</span>
                        <span>0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Success Metrics</CardTitle>
                  <CardDescription>How you'll measure achievement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metric1" defaultChecked />
                      <div>
                        <label htmlFor="metric1" className="text-sm font-medium">
                          Applications Submitted
                        </label>
                        <p className="text-xs text-muted-foreground">Submit to all target schools by deadline</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metric2" />
                      <div>
                        <label htmlFor="metric2" className="text-sm font-medium">
                          Acceptance Rate
                        </label>
                        <p className="text-xs text-muted-foreground">Receive acceptance from at least 2 schools</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metric3" />
                      <div>
                        <label htmlFor="metric3" className="text-sm font-medium">
                          Financial Aid
                        </label>
                        <p className="text-xs text-muted-foreground">Secure at least $10,000 in scholarships/aid</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metric4" />
                      <div>
                        <label htmlFor="metric4" className="text-sm font-medium">
                          Credit Transfer
                        </label>
                        <p className="text-xs text-muted-foreground">Transfer at least 45 credits to new institution</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      + Add Metric
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analyze" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analysis</CardTitle>
                <CardDescription>Insights on your goal progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium flex items-center">
                      <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                      Progress Trend
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You're making steady progress on your transfer application goal.
                    </p>
                    <div className="mt-3">
                      <div className="h-24 flex items-end space-x-2">
                        <div className="w-1/6 bg-primary/20 rounded-t-md h-[20%]"></div>
                        <div className="w-1/6 bg-primary/30 rounded-t-md h-[35%]"></div>
                        <div className="w-1/6 bg-primary/40 rounded-t-md h-[45%]"></div>
                        <div className="w-1/6 bg-primary/60 rounded-t-md h-[50%]"></div>
                        <div className="w-1/6 bg-primary/80 rounded-t-md h-[65%]"></div>
                        <div className="w-1/6 bg-primary rounded-t-md h-[80%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Week 1</span>
                        <span>Week 6</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                      Insights
                    </h4>
                    <div className="space-y-3 mt-3">
                      <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                        <p className="text-sm text-green-800">
                          Your research phase was completed ahead of schedule, showing strong planning skills.
                        </p>
                      </div>
                      <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
                        <p className="text-sm text-amber-800">
                          Essay writing is taking longer than planned. Consider scheduling additional writing sessions.
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                        <p className="text-sm text-blue-800">
                          You've identified all necessary resources, which is a strong indicator of successful
                          completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Adjustment Recommendations</CardTitle>
                  <CardDescription>Suggested changes to improve success</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Adjust Essay Timeline</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Add 5 more days to essay writing phase to ensure quality completion.
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Apply Adjustment <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Add Writing Support</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Schedule two additional writing center appointments for essay feedback.
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Apply Adjustment <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Target className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Prioritize Applications</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Focus on top two schools first to ensure highest quality applications.
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Apply Adjustment <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Goal Reflection</CardTitle>
                  <CardDescription>Document your learning and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="challenges">Challenges Faced</Label>
                      <Textarea id="challenges" placeholder="What obstacles have you encountered?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="learned">Lessons Learned</Label>
                      <Textarea id="learned" placeholder="What have you learned so far?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="next">Next Steps</Label>
                      <Textarea id="next" placeholder="What will you do next?" />
                    </div>
                    <Button className="w-full">Save Reflection</Button>
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

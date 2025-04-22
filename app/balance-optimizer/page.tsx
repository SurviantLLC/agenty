import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, PieChart, Brain, BookOpen, Users, Coffee, Dumbbell, Home } from "lucide-react"

export default function BalanceOptimizerPage() {
  return (
    <main className="flex-1 p-6 md:p-10 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Balance Optimizer</h1>
          <p className="text-muted-foreground mt-1">Manage your time and activities for optimal wellbeing</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="week">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="semester">This Semester</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Calendar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Academic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">42%</div>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">28 hrs</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time Allocation</span>
                <span>42%</span>
              </div>
              <Progress value={42} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Balanced</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-4 w-4" /> Social
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">15%</div>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">10 hrs</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time Allocation</span>
                <span>15%</span>
              </div>
              <Progress value={15} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Balanced</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Dumbbell className="h-4 w-4" /> Physical
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">8%</div>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">5 hrs</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time Allocation</span>
                <span>8%</span>
              </div>
              <Progress value={8} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Balanced</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Brain className="h-4 w-4" /> Mental
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">5%</div>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">3 hrs</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time Allocation</span>
                <span>5%</span>
              </div>
              <Progress value={5} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Balanced</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="time-management">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="time-management">Time Management</TabsTrigger>
          <TabsTrigger value="priority-matrix">Priority Matrix</TabsTrigger>
          <TabsTrigger value="break-planning">Break Planning</TabsTrigger>
          <TabsTrigger value="resources">Support Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="time-management" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Time Management Calendar</CardTitle>
              <CardDescription>Schedule and visualize your activities for optimal balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="border rounded-md p-4">
                    <Calendar mode="range" className="w-full" />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Daily Schedule</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-2 border rounded-md bg-blue-50">
                        <div className="w-16 text-sm font-medium">8:00 AM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">Breakfast & Morning Prep</div>
                          <div className="text-sm text-muted-foreground">Personal</div>
                        </div>
                        <Badge className="ml-auto">30 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-purple-50">
                        <div className="w-16 text-sm font-medium">9:00 AM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">CS 301: Algorithms</div>
                          <div className="text-sm text-muted-foreground">Academic</div>
                        </div>
                        <Badge className="ml-auto">90 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-purple-50">
                        <div className="w-16 text-sm font-medium">11:00 AM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">MATH 240: Linear Algebra</div>
                          <div className="text-sm text-muted-foreground">Academic</div>
                        </div>
                        <Badge className="ml-auto">90 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-blue-50">
                        <div className="w-16 text-sm font-medium">12:30 PM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">Lunch with Study Group</div>
                          <div className="text-sm text-muted-foreground">Social/Academic</div>
                        </div>
                        <Badge className="ml-auto">60 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-purple-50">
                        <div className="w-16 text-sm font-medium">2:00 PM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">PHYS 211: Physics I</div>
                          <div className="text-sm text-muted-foreground">Academic</div>
                        </div>
                        <Badge className="ml-auto">90 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-purple-50">
                        <div className="w-16 text-sm font-medium">4:00 PM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">Study Session: CS Project</div>
                          <div className="text-sm text-muted-foreground">Academic</div>
                        </div>
                        <Badge className="ml-auto">120 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-green-50">
                        <div className="w-16 text-sm font-medium">6:30 PM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">Gym Workout</div>
                          <div className="text-sm text-muted-foreground">Physical</div>
                        </div>
                        <Badge className="ml-auto">60 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-yellow-50">
                        <div className="w-16 text-sm font-medium">8:00 PM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">Dinner & Relaxation</div>
                          <div className="text-sm text-muted-foreground">Personal</div>
                        </div>
                        <Badge className="ml-auto">60 min</Badge>
                      </div>

                      <div className="flex items-center p-2 border rounded-md bg-indigo-50">
                        <div className="w-16 text-sm font-medium">9:30 PM</div>
                        <div className="flex-1 ml-2">
                          <div className="font-medium">Mindfulness Meditation</div>
                          <div className="text-sm text-muted-foreground">Mental</div>
                        </div>
                        <Badge className="ml-auto">20 min</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Activity Scheduling</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="activity-name">Activity Name</Label>
                      <Input id="activity-name" placeholder="Enter activity name" />
                    </div>

                    <div>
                      <Label htmlFor="activity-type">Activity Type</Label>
                      <Select defaultValue="academic">
                        <SelectTrigger id="activity-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="social">Social</SelectItem>
                          <SelectItem value="physical">Physical</SelectItem>
                          <SelectItem value="mental">Mental</SelectItem>
                          <SelectItem value="personal">Personal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="start-time">Start Time</Label>
                        <Input id="start-time" type="time" />
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration (min)</Label>
                        <Input id="duration" type="number" defaultValue="60" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="activity-priority">Priority Level</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="activity-priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="recurring" />
                      <Label htmlFor="recurring">Recurring Activity</Label>
                    </div>

                    <Button className="w-full">Add to Schedule</Button>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Balance Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Academic-Social Balance:</span>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Needs Attention</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Physical Activity Level:</span>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Too Low</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Mental Wellness Time:</span>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Too Low</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Overall Balance:</span>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Needs Improvement</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="priority-matrix" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Priority Setting Matrix</CardTitle>
              <CardDescription>Organize your activities based on importance and urgency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="h-[400px] flex items-center justify-center border rounded-md bg-muted/20">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <PieChart className="h-10 w-10" />
                      <span>Priority matrix visualization</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Card className="bg-red-50">
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm font-medium">Urgent & Important</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <ul className="text-sm space-y-1">
                          <li>• CS 301 Project (Due Tomorrow)</li>
                          <li>• PHYS 211 Lab Report (Due Today)</li>
                          <li>• Register for Next Semester (Deadline)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-yellow-50">
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm font-medium">Important, Not Urgent</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <ul className="text-sm space-y-1">
                          <li>• MATH 240 Study Group</li>
                          <li>• Research Internship Applications</li>
                          <li>• Weekly Exercise Plan</li>
                          <li>• Mental Health Check-in</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50">
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm font-medium">Urgent, Not Important</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <ul className="text-sm space-y-1">
                          <li>• Respond to Club Emails</li>
                          <li>• Housing Application Form</li>
                          <li>• Schedule Advisor Meeting</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50">
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm font-medium">Neither Urgent nor Important</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <ul className="text-sm space-y-1">
                          <li>• Social Media</li>
                          <li>• Gaming</li>
                          <li>• TV Shows</li>
                          <li>• Campus Event</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Add Task to Matrix</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="task-name">Task Name</Label>
                      <Input id="task-name" placeholder="Enter task name" />
                    </div>

                    <div>
                      <Label htmlFor="task-description">Description (Optional)</Label>
                      <Input id="task-description" placeholder="Brief description" />
                    </div>

                    <div>
                      <Label htmlFor="task-due">Due Date</Label>
                      <Input id="task-due" type="date" />
                    </div>

                    <div>
                      <Label htmlFor="task-importance">Importance</Label>
                      <Select defaultValue="high">
                        <SelectTrigger id="task-importance">
                          <SelectValue placeholder="Select importance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="task-urgency">Urgency</Label>
                      <Select defaultValue="high">
                        <SelectTrigger id="task-urgency">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="task-category">Category</Label>
                      <Select defaultValue="academic">
                        <SelectTrigger id="task-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="social">Social</SelectItem>
                          <SelectItem value="physical">Physical</SelectItem>
                          <SelectItem value="mental">Mental</SelectItem>
                          <SelectItem value="personal">Personal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full">Add to Matrix</Button>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Priority Recommendations</h4>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Focus on Quadrant 1 First</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Complete your urgent and important tasks before they become critical. You have 3 high-priority
                          items due within 24 hours.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Schedule Time for Quadrant 2</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your important but not urgent tasks (like exercise and mental health) are being neglected.
                          Schedule dedicated time for these activities.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Delegate or Batch Quadrant 3</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Consider batching your urgent but less important tasks into a single time block to minimize
                          context switching.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="break-planning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Break Planning Recommendations</CardTitle>
              <CardDescription>Optimize your breaks for recovery and productivity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Study Break Schedule</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Micro Breaks</h4>
                          <p className="text-sm text-muted-foreground mt-1">5-minute breaks every 25 minutes</p>
                        </div>
                        <Badge>Recommended</Badge>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="micro-stretch" />
                          <Label htmlFor="micro-stretch">Quick stretching</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="micro-water" />
                          <Label htmlFor="micro-water">Water break</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="micro-eyes" />
                          <Label htmlFor="micro-eyes">Eye rest (20-20-20 rule)</Label>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Medium Breaks</h4>
                          <p className="text-sm text-muted-foreground mt-1">15-minute breaks every 90 minutes</p>
                        </div>
                        <Badge>Recommended</Badge>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medium-walk" />
                          <Label htmlFor="medium-walk">Short walk</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medium-snack" />
                          <Label htmlFor="medium-snack">Healthy snack</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medium-breathing" />
                          <Label htmlFor="medium-breathing">Deep breathing exercises</Label>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Long Breaks</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            30-60 minute breaks between major study sessions
                          </p>
                        </div>
                        <Badge>Recommended</Badge>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="long-meal" />
                          <Label htmlFor="long-meal">Proper meal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="long-exercise" />
                          <Label htmlFor="long-exercise">Physical exercise</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="long-social" />
                          <Label htmlFor="long-social">Social interaction</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="long-hobby" />
                          <Label htmlFor="long-hobby">Hobby or relaxation activity</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Recovery Time Allocation</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Current Recovery Time:</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                      <div className="flex justify-between">
                        <span>Recommended Recovery Time:</span>
                        <span className="font-medium">20-25%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Your current schedule doesn't include enough recovery time. Consider adding more structured
                        breaks to prevent burnout.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Break Activity Suggestions</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <Dumbbell className="h-4 w-4" /> Physical Activities
                      </h4>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• 5-minute desk stretching routine</li>
                        <li>• 10-minute campus walk</li>
                        <li>• 15-minute quick workout</li>
                        <li>• 30-minute gym session</li>
                        <li>• 20-minute yoga flow</li>
                      </ul>
                      <Button variant="outline" size="sm" className="mt-3">
                        View Routines
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <Brain className="h-4 w-4" /> Mental Reset Activities
                      </h4>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• 5-minute guided meditation</li>
                        <li>• 10-minute journaling session</li>
                        <li>• 3-minute deep breathing exercise</li>
                        <li>• 15-minute power nap</li>
                        <li>• 5-minute mindfulness practice</li>
                      </ul>
                      <Button variant="outline" size="sm" className="mt-3">
                        Try Now
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <Users className="h-4 w-4" /> Social Activities
                      </h4>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Call a friend or family member</li>
                        <li>• Join a study group coffee break</li>
                        <li>• Attend a campus club meeting</li>
                        <li>• Have lunch with classmates</li>
                        <li>• Participate in a campus event</li>
                      </ul>
                      <Button variant="outline" size="sm" className="mt-3">
                        Campus Events
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <Coffee className="h-4 w-4" /> Relaxation Activities
                      </h4>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Listen to music</li>
                        <li>• Read a non-academic book</li>
                        <li>• Enjoy a cup of tea</li>
                        <li>• Practice a hobby</li>
                        <li>• Spend time in nature</li>
                      </ul>
                      <Button variant="outline" size="sm" className="mt-3">
                        Relaxation Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Support Resource Directory</CardTitle>
              <CardDescription>Connect with campus and community resources for wellbeing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mental Health Resources</CardTitle>
                    <CardDescription>Support for emotional and psychological wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">University Counseling Center</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Free confidential counseling services for all students
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Student Center, Room 250</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>Mon-Fri: 8am-5pm</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm">
                            Schedule
                          </Button>
                          <Button variant="outline" size="sm">
                            Info
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">24/7 Crisis Hotline</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Immediate support for urgent mental health concerns
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Contact
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Peer Support Network</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Student-led support groups and peer counseling
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Join
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Counseling & Support Groups</CardTitle>
                    <CardDescription>Group-based support for specific concerns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Academic Stress Group</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Weekly group sessions focused on managing academic pressure
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>Wednesdays: 4-5:30pm</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Wellness Center, Room 120</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Register
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Mindfulness Meditation</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Guided meditation sessions for stress reduction
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>Mon, Wed, Fri: 12-12:30pm</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Student Center, Room 150</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Drop In
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Balance & Burnout Prevention</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Workshop series on preventing burnout and maintaining balance
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>Tuesdays: 5-6:30pm</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Health Center, Room 210</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Wellness Workshop Schedule</CardTitle>
                    <CardDescription>Upcoming events and workshops for wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Stress Management Techniques</h4>
                          <Badge>Tomorrow</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Learn practical techniques to manage academic stress
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>3:00-4:30pm</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Student Center, Room 300</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Register
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Time Management Workshop</h4>
                          <Badge>Next Week</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Strategies for effective time management and productivity
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>Monday: 5:00-6:30pm</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Library, Room 120</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Register
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Sleep Optimization Seminar</h4>
                          <Badge>2 Weeks</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Improve your sleep quality for better academic performance
                        </p>
                        <div className="mt-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 mt-0.5" />
                            <span>Thursday: 4:00-5:30pm</span>
                          </div>
                          <div className="flex items-start gap-2 mt-1">
                            <Home className="h-4 w-4 mt-0.5" />
                            <span>Health Center, Room 150</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          Register
                        </Button>
                      </div>

                      <Button className="w-full">View All Workshops</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

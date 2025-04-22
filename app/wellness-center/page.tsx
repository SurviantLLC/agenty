import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, BarChart, Clock, Moon, Activity, Brain } from "lucide-react"

export default function WellnessCenterPage() {
  return (
    <main className="flex-1 p-6 md:p-10 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wellness Center</h1>
          <p className="text-muted-foreground mt-1">Monitor and improve your mental and physical wellbeing</p>
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
          <Button variant="outline">Export Data</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Activity className="h-4 w-4" /> Stress Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">Medium</div>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">6.2/10</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Level</span>
                <span>62%</span>
              </div>
              <Progress value={62} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Brain className="h-4 w-4" /> Mood
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">Good</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">7.5/10</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Level</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" /> Study Load
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">High</div>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">28 hrs</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekly</span>
                <span>28 hrs</span>
              </div>
              <Progress value={80} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Moon className="h-4 w-4" /> Sleep
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">Fair</div>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">6.5 hrs</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average</span>
                <span>6.5 hrs</span>
              </div>
              <Progress value={65} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="stress">
        <TabsList className="grid w-full grid-cols-5 md:w-auto">
          <TabsTrigger value="stress">Stress Monitoring</TabsTrigger>
          <TabsTrigger value="mood">Mood Tracking</TabsTrigger>
          <TabsTrigger value="workload">Workload Analysis</TabsTrigger>
          <TabsTrigger value="sleep">Sleep Tracking</TabsTrigger>
          <TabsTrigger value="resources">Wellness Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="stress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stress Monitoring Dashboard</CardTitle>
              <CardDescription>Track your stress levels over time and identify patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <LineChart className="h-10 w-10" />
                  <span>Stress level trend visualization</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Weekly Average</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">6.2/10</div>
                    <p className="text-xs text-muted-foreground">Medium stress level</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Peak Stress Day</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">Tuesday</div>
                    <p className="text-xs text-muted-foreground">8.5/10 stress level</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Stress Triggers</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-lg font-medium">Assignments, Exams</div>
                    <p className="text-xs text-muted-foreground">Top identified causes</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Stress Factors</CardTitle>
                <CardDescription>Identify and manage your key stress triggers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Academic Workload</p>
                      <p className="text-sm text-muted-foreground">Assignments, projects, exams</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                      <span className="font-medium">8.7/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Time Management</p>
                      <p className="text-sm text-muted-foreground">Balancing responsibilities</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                      <span className="font-medium">6.5/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Financial Concerns</p>
                      <p className="text-sm text-muted-foreground">Tuition, living expenses</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                      <span className="font-medium">5.8/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Social Pressure</p>
                      <p className="text-sm text-muted-foreground">Peer relationships</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>
                      <span className="font-medium">3.2/10</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stress Reduction Recommendations</CardTitle>
                <CardDescription>Personalized suggestions to manage your stress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Time Blocking Technique</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Allocate specific time blocks for assignments and study sessions to improve time management.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Learn More
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">5-Minute Mindfulness Breaks</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Take short mindfulness breaks between study sessions to reset your focus and reduce stress.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Try Now
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Study Group Formation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Join or form study groups for difficult courses to distribute the workload and gain new
                      perspectives.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Find Groups
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mood" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Mood Tracking</CardTitle>
              <CardDescription>Monitor your emotional wellbeing and identify patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <LineChart className="h-10 w-10" />
                  <span>Mood tracking visualization</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Today's Mood Check-in</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="mood-slider" className="block mb-2">
                      How are you feeling today?
                    </Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Low</span>
                      <Slider id="mood-slider" defaultValue={[75]} max={100} step={1} className="flex-1" />
                      <span className="text-sm text-muted-foreground">High</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mood-notes" className="block mb-2">
                      Mood Notes
                    </Label>
                    <Input id="mood-notes" placeholder="What's contributing to your mood today?" />
                  </div>

                  <div>
                    <Label className="block mb-2">Mood Factors</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="sleep" />
                        <Label htmlFor="sleep">Sleep Quality</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="exercise" />
                        <Label htmlFor="exercise">Exercise</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="nutrition" />
                        <Label htmlFor="nutrition">Nutrition</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="social" />
                        <Label htmlFor="social">Social Interaction</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="academic" />
                        <Label htmlFor="academic">Academic Stress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="financial" />
                        <Label htmlFor="financial">Financial Stress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="health" />
                        <Label htmlFor="health">Health Issues</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Save Mood Check-in</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mood Patterns</CardTitle>
                <CardDescription>Insights from your mood tracking history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Weekly Pattern</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your mood tends to be lowest on Tuesdays and highest on Fridays and weekends.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Academic Correlation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your mood shows a strong negative correlation with assignment deadlines and exam periods.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Sleep Impact</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Days with less than 6 hours of sleep show a 35% decrease in mood rating compared to days with 7+
                      hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mood Improvement Suggestions</CardTitle>
                <CardDescription>Personalized recommendations based on your patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Sleep Schedule Adjustment</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Try to maintain a consistent sleep schedule with at least 7 hours per night, especially before
                      Tuesday classes.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Sleep Tips
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Social Connection</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Schedule at least one social activity mid-week to break up academic stress periods.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Campus Events
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Physical Activity</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your mood data shows a 40% improvement on days with physical activity. Consider a short workout on
                      low-mood days.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Quick Workouts
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="workload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workload Analysis</CardTitle>
              <CardDescription>Visualize and optimize your academic workload</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <BarChart className="h-10 w-10" />
                  <span>Workload distribution visualization</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Current Week</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">High</div>
                    <p className="text-xs text-muted-foreground">28 hours of work</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Next Week</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">Very High</div>
                    <p className="text-xs text-muted-foreground">35 hours of work</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Recommended Max</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">25 hours</div>
                    <p className="text-xs text-muted-foreground">Based on your profile</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Workload Breakdown</CardTitle>
                <CardDescription>Hours spent per course this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">CS 301: Algorithms</p>
                      <p className="text-sm text-muted-foreground">4 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                      <span className="font-medium">10 hrs</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">MATH 240: Linear Algebra</p>
                      <p className="text-sm text-muted-foreground">3 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                      <span className="font-medium">7 hrs</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">PHYS 211: Physics I</p>
                      <p className="text-sm text-muted-foreground">4 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                      <span className="font-medium">8 hrs</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">ENG 201: Technical Writing</p>
                      <p className="text-sm text-muted-foreground">3 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>
                      <span className="font-medium">3 hrs</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workload Optimization</CardTitle>
                <CardDescription>Recommendations to balance your workload</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Redistribute Study Time</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Consider reducing CS 301 study time by 2 hours and allocating more time to ENG 201 assignments due
                      next week.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Start Physics Assignment Early</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your PHYS 211 lab report will require 5 hours next week. Consider starting this weekend to reduce
                      next week's load.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Form Study Group</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Join the MATH 240 study group on Thursdays to improve efficiency and reduce individual workload.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Find Groups
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sleep Tracking</CardTitle>
              <CardDescription>Monitor and optimize your sleep patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <LineChart className="h-10 w-10" />
                  <span>Sleep duration and quality visualization</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">6.5 hrs</div>
                    <p className="text-xs text-muted-foreground">Past week average</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">Fair</div>
                    <p className="text-xs text-muted-foreground">6.2/10 rating</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Recommended</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">8 hours</div>
                    <p className="text-xs text-muted-foreground">For optimal performance</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Sleep Log</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="sleep-hours">Hours Slept</Label>
                      <Input id="sleep-hours" type="number" placeholder="7.5" />
                    </div>
                    <div>
                      <Label htmlFor="bed-time">Bed Time</Label>
                      <Input id="bed-time" type="time" defaultValue="23:30" />
                    </div>
                    <div>
                      <Label htmlFor="wake-time">Wake Time</Label>
                      <Input id="wake-time" type="time" defaultValue="07:00" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sleep-quality">Sleep Quality</Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Poor</span>
                      <Slider id="sleep-quality" defaultValue={[62]} max={100} step={1} className="flex-1" />
                      <span className="text-sm text-muted-foreground">Excellent</span>
                    </div>
                  </div>

                  <div>
                    <Label className="block mb-2">Factors Affecting Sleep</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="stress" />
                        <Label htmlFor="stress">Stress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="caffeine" />
                        <Label htmlFor="caffeine">Caffeine</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="screen-time" />
                        <Label htmlFor="screen-time">Screen Time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="exercise" />
                        <Label htmlFor="exercise">Exercise</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="noise" />
                        <Label htmlFor="noise">Noise</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="temperature" />
                        <Label htmlFor="temperature">Temperature</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="diet" />
                        <Label htmlFor="diet">Late Meal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="other-sleep" />
                        <Label htmlFor="other-sleep">Other</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Log Sleep</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sleep Optimization Tips</CardTitle>
                <CardDescription>Personalized recommendations for better sleep</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Consistent Schedule</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your sleep data shows irregular bed times. Try to maintain a consistent sleep schedule, even on
                      weekends.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Screen Time Reduction</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Avoid screens 1 hour before bedtime to improve sleep quality. Try reading or journaling instead.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Caffeine Management</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Avoid caffeine after 2pm to prevent sleep disruption. Your data shows a 45-minute delay in falling
                      asleep on days with late caffeine.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Study Schedule Adjustment</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Complete intensive studying before 9pm to allow your mind to wind down before sleep.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sleep and Academic Performance</CardTitle>
                <CardDescription>How your sleep patterns affect your studies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <LineChart className="h-10 w-10" />
                    <span>Sleep-performance correlation visualization</span>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Performance Impact</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Days following 7+ hours of sleep show a 23% improvement in quiz scores compared to days after less
                      than 6 hours.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Memory Consolidation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Prioritize sleep before exams. Research shows sleep is crucial for memory consolidation and
                      recall.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Wellness Resources</CardTitle>
              <CardDescription>Tools and resources to support your wellbeing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Guided Meditation</CardTitle>
                    <CardDescription>Reduce stress and improve focus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">5-Minute Focus Reset</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Quick meditation to regain focus during study sessions
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Start
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Exam Anxiety Relief</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          10-minute guided practice to calm test anxiety
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Start
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Sleep Preparation</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          15-minute meditation to prepare for restful sleep
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Start
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Study Break Reminders</CardTitle>
                    <CardDescription>Optimize your study sessions with timed breaks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="pomodoro" className="block mb-2">
                          Pomodoro Timer
                        </Label>
                        <Select defaultValue="25-5">
                          <SelectTrigger id="pomodoro">
                            <SelectValue placeholder="Select timer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25-5">25 min work / 5 min break</SelectItem>
                            <SelectItem value="50-10">50 min work / 10 min break</SelectItem>
                            <SelectItem value="90-20">90 min work / 20 min break</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="notifications" defaultChecked />
                        <Label htmlFor="notifications">Break Notifications</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="suggestions" defaultChecked />
                        <Label htmlFor="suggestions">Break Activity Suggestions</Label>
                      </div>

                      <Button className="w-full">Start Timer</Button>

                      <div className="border rounded-lg p-4 mt-4">
                        <h4 className="font-medium">Break Suggestions</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• 2-minute stretching routine</li>
                          <li>• Quick walk outside</li>
                          <li>• Hydration break</li>
                          <li>• Deep breathing exercises</li>
                          <li>• Eye strain reduction exercises</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Campus Support Services</CardTitle>
                    <CardDescription>Professional resources available to you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Counseling Center</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Free confidential counseling services for students
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Schedule
                          </Button>
                          <Button variant="outline" size="sm">
                            Info
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Academic Support</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Tutoring, writing center, and academic coaching
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Schedule
                          </Button>
                          <Button variant="outline" size="sm">
                            Info
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Wellness Workshops</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Upcoming stress management and wellness events
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Calendar
                          </Button>
                          <Button variant="outline" size="sm">
                            Register
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">24/7 Crisis Support</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Immediate support for urgent mental health concerns
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Contact
                        </Button>
                      </div>
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

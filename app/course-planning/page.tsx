import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  BookOpen,
  BarChart,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  Plus,
  Trash2,
  Info,
  LayoutGrid,
  List,
} from "lucide-react"

export default function CoursePlanningPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Course Planning Assistant</h1>
        <p className="text-muted-foreground">Plan your academic journey with intelligent course recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Course Selection</span>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <LayoutGrid className="h-4 w-4 mr-1" /> Grid
                  </Button>
                  <Button variant="outline" size="sm">
                    <List className="h-4 w-4 mr-1" /> List
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>Find and select courses for your academic plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search courses by name, code, or instructor..."
                      className="pl-8 bg-background"
                    />
                  </div>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="eng">Engineering</SelectItem>
                    <SelectItem value="bio">Biology</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </Button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    code: "CS 101",
                    name: "Introduction to Computer Science",
                    credits: 4,
                    difficulty: "Moderate",
                    interest: 95,
                  },
                  { code: "MATH 120", name: "Calculus I", credits: 4, difficulty: "High", interest: 80 },
                  { code: "ENG 201", name: "Technical Writing", credits: 3, difficulty: "Low", interest: 75 },
                  { code: "CS 201", name: "Data Structures", credits: 4, difficulty: "High", interest: 90 },
                  { code: "PHYS 101", name: "Physics I", credits: 4, difficulty: "High", interest: 85 },
                ].map((course, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">
                                {course.code}: {course.name}
                              </h3>
                              <Badge variant="outline" className="ml-2">
                                {course.credits} Credits
                              </Badge>
                            </div>
                            <div className="flex items-center mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <BookOpen className="h-3 w-3 mr-1" /> Prof. Johnson
                              </span>
                              <span className="mx-2">•</span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> MWF 10:00-11:30
                              </span>
                              <span className="mx-2">•</span>
                              <span
                                className={`flex items-center ${
                                  course.difficulty === "High"
                                    ? "text-orange-500"
                                    : course.difficulty === "Moderate"
                                      ? "text-yellow-500"
                                      : "text-green-500"
                                }`}
                              >
                                <TrendingUp className="h-3 w-3 mr-1" /> {course.difficulty} Difficulty
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center mr-4">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-xs font-medium">{course.interest}%</span>
                              </div>
                              <span className="ml-1 text-xs">Match</span>
                            </div>
                            <Button size="sm">Add Course</Button>
                          </div>
                        </div>
                        <div className="mt-2 text-sm">
                          <p>
                            Introduction to fundamental concepts of computer science. Covers algorithms, data
                            structures, and basic programming principles.
                          </p>
                        </div>
                        <div className="flex items-center mt-2">
                          <Badge variant="secondary" className="mr-1">
                            Fall 2023
                          </Badge>
                          <Badge variant="secondary" className="mr-1">
                            Spring 2024
                          </Badge>
                          <Badge variant="outline" className="text-green-600 bg-green-50">
                            Seats Available: 24
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full md:w-48 bg-muted/30 p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Prerequisites</h4>
                          <div className="space-y-1">
                            {i > 0 ? (
                              <div className="text-xs flex items-center">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                <span>MATH 101 (Completed)</span>
                              </div>
                            ) : (
                              <div className="text-xs text-muted-foreground">None required</div>
                            )}
                            {i > 2 && (
                              <div className="text-xs flex items-center">
                                <AlertCircle className="h-3 w-3 text-orange-500 mr-1" />
                                <span>CS 101 (Required)</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Info className="h-3 w-3 mr-1" /> More Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  1
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  2
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  3
                </Button>
              </div>
              <Button variant="outline">Next</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Course Plan</CardTitle>
              <CardDescription>Courses selected for your academic plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="fall2023">
                <TabsList className="grid grid-cols-4">
                  <TabsTrigger value="fall2023">Fall 2023</TabsTrigger>
                  <TabsTrigger value="spring2024">Spring 2024</TabsTrigger>
                  <TabsTrigger value="fall2024">Fall 2024</TabsTrigger>
                  <TabsTrigger value="spring2025">Spring 2025</TabsTrigger>
                </TabsList>
                <TabsContent value="fall2023" className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Fall 2023 Semester</h3>
                      <p className="text-sm text-muted-foreground">August 28 - December 15, 2023</p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-right mr-4">
                        <p className="text-sm font-medium">15 Credits</p>
                        <p className="text-xs text-muted-foreground">4 Courses</p>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" /> Add Course
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { code: "CS 101", name: "Introduction to Computer Science", credits: 4, status: "Confirmed" },
                      { code: "MATH 120", name: "Calculus I", credits: 4, status: "Confirmed" },
                      { code: "ENG 201", name: "Technical Writing", credits: 3, status: "Confirmed" },
                      { code: "HIST 101", name: "World History", credits: 4, status: "Waitlisted" },
                    ].map((course, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-medium">{course.code}</h4>
                              <Badge variant="outline" className="ml-2">
                                {course.credits} Credits
                              </Badge>
                            </div>
                            <p className="text-sm">{course.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge
                            className={
                              course.status === "Confirmed"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {course.status}
                          </Badge>
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border rounded-md bg-muted/30">
                    <h3 className="font-medium mb-2">Semester Analysis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Workload Balance</p>
                        <div className="flex items-center">
                          <Progress value={75} className="h-2 flex-1 mr-2" />
                          <span className="text-sm font-medium">Good</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Difficulty Level</p>
                        <div className="flex items-center">
                          <Progress value={65} className="h-2 flex-1 mr-2" />
                          <span className="text-sm font-medium">Moderate</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Interest Alignment</p>
                        <div className="flex items-center">
                          <Progress value={85} className="h-2 flex-1 mr-2" />
                          <span className="text-sm font-medium">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="spring2024" className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Spring 2024 Semester</h3>
                      <p className="text-sm text-muted-foreground">January 15 - May 10, 2024</p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-right mr-4">
                        <p className="text-sm font-medium">16 Credits</p>
                        <p className="text-xs text-muted-foreground">4 Courses</p>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" /> Add Course
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { code: "CS 201", name: "Data Structures", credits: 4, status: "Planned" },
                      { code: "MATH 121", name: "Calculus II", credits: 4, status: "Planned" },
                      { code: "PHYS 101", name: "Physics I", credits: 4, status: "Planned" },
                      { code: "ECON 101", name: "Principles of Economics", credits: 4, status: "Planned" },
                    ].map((course, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-medium">{course.code}</h4>
                              <Badge variant="outline" className="ml-2">
                                {course.credits} Credits
                              </Badge>
                            </div>
                            <p className="text-sm">{course.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge variant="outline">{course.status}</Badge>
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="fall2024" className="mt-4">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-1">Fall 2024 Semester</h3>
                    <p className="text-sm text-muted-foreground mb-4">No courses planned yet</p>
                    <Button>
                      <Plus className="h-4 w-4 mr-1" /> Add Courses
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="spring2025" className="mt-4">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-1">Spring 2025 Semester</h3>
                    <p className="text-sm text-muted-foreground mb-4">No courses planned yet</p>
                    <Button>
                      <Plus className="h-4 w-4 mr-1" /> Add Courses
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Graduation Requirements</CardTitle>
              <CardDescription>Track your progress toward graduation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Overall Completion</span>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Core Requirements</span>
                    <span className="text-sm font-medium">45/120 Credits</span>
                  </div>
                  <Progress value={37.5} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Major Requirements</span>
                    <span className="text-sm font-medium">12/60 Credits</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Electives</span>
                    <span className="text-sm font-medium">8/40 Credits</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">General Education</span>
                    <span className="text-sm font-medium">16/30 Credits</span>
                  </div>
                  <Progress value={53.3} className="h-2" />
                </div>
              </div>

              <Button variant="outline" className="w-full mt-2">
                View Detailed Requirements
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prerequisite Map</CardTitle>
              <CardDescription>Visualize course relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                  <p className="mt-2">Prerequisite Relationship Visualization</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Map
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grade Impact Analysis</CardTitle>
              <CardDescription>Estimate impact on your GPA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-md bg-muted/30">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Current GPA</h3>
                  <span className="font-bold text-lg">3.65</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Projected GPA</h3>
                  <span className="font-bold text-lg text-green-600">3.72</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { course: "CS 101", grade: "A", impact: "+0.05" },
                  { course: "MATH 120", grade: "A-", impact: "+0.03" },
                  { course: "ENG 201", grade: "B+", impact: "+0.01" },
                  { course: "HIST 101", grade: "B", impact: "-0.02" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                        <span className="text-xs">{item.grade}</span>
                      </div>
                      <span className="text-sm">{item.course}</span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        item.impact.startsWith("+") ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mt-4">
                <label className="text-sm font-medium">Adjust Expected Grades</label>
                <Select defaultValue="a">
                  <SelectTrigger>
                    <SelectValue placeholder="Select expected grade for CS 101" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">A (4.0)</SelectItem>
                    <SelectItem value="a-">A- (3.7)</SelectItem>
                    <SelectItem value="b+">B+ (3.3)</SelectItem>
                    <SelectItem value="b">B (3.0)</SelectItem>
                    <SelectItem value="b-">B- (2.7)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Recalculate GPA Impact</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AP/IB Credit Optimization</CardTitle>
              <CardDescription>Maximize your advanced credits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {[
                  { exam: "AP Calculus BC", score: "5", status: "Applied", credits: 8 },
                  { exam: "AP Computer Science A", score: "5", status: "Applied", credits: 4 },
                  { exam: "AP Physics C", score: "4", status: "Eligible", credits: 4 },
                  { exam: "IB English HL", score: "6", status: "Eligible", credits: 3 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">{item.exam}</h4>
                      <div className="flex items-center mt-1">
                        <Badge variant="secondary" className="mr-2 text-xs">
                          Score: {item.score}
                        </Badge>
                        <Badge
                          className={`text-xs ${
                            item.status === "Applied" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">{item.credits}</span>
                      <span className="text-sm text-muted-foreground"> Credits</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 border rounded-md bg-muted/30">
                <div>
                  <h3 className="font-medium">Total AP/IB Credits</h3>
                  <p className="text-sm text-muted-foreground">Applied to your degree</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg">19</span>
                  <span className="text-muted-foreground"> Credits</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Optimize Credit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

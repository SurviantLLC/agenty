import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, BarChart } from "lucide-react"

export default function AcademicOptimizationPage() {
  return (
    <main className="flex-1 p-6 md:p-10 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Optimization Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track, analyze, and optimize your academic performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="spring2023">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fall2022">Fall 2022</SelectItem>
              <SelectItem value="spring2023">Spring 2023</SelectItem>
              <SelectItem value="fall2023">Fall 2023</SelectItem>
              <SelectItem value="spring2024">Spring 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Current GPA</CardTitle>
            <CardDescription>Cumulative performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">3.78</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+0.12</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Previous</span>
                <span>3.66</span>
              </div>
              <Progress value={78} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2.0</span>
                <span>3.0</span>
                <span>4.0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Graduation Progress</CardTitle>
            <CardDescription>Requirements completion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">68%</div>
              <div className="text-sm text-muted-foreground">86/126 credits</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Year 1</span>
                <span>Year 2</span>
                <span>Year 3</span>
                <span>Year 4</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Honor Track Status</CardTitle>
            <CardDescription>Eligibility monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-bold">Eligible</div>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Cum Laude</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GPA Threshold</span>
                <span>3.5</span>
              </div>
              <Progress value={85} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>3.5</span>
                <span>3.7</span>
                <span>3.9</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="gpa-calculator">GPA Calculator</TabsTrigger>
          <TabsTrigger value="course-difficulty">Course Difficulty</TabsTrigger>
          <TabsTrigger value="goals">Academic Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Projections</CardTitle>
              <CardDescription>
                Projected academic performance based on current trends and course selection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <LineChart className="h-10 w-10" />
                  <span>Performance projection graph visualization</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Current Semester</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">3.82</div>
                    <p className="text-xs text-muted-foreground">Projected GPA</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Next Semester</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">3.85</div>
                    <p className="text-xs text-muted-foreground">Projected GPA</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Graduation</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <div className="text-2xl font-bold">3.80</div>
                    <p className="text-xs text-muted-foreground">Projected GPA</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Success Probability</CardTitle>
                <CardDescription>Likelihood of success in current courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">CS 301: Algorithms</p>
                      <p className="text-sm text-muted-foreground">4 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High</Badge>
                      <span className="font-medium">92%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">MATH 240: Linear Algebra</p>
                      <p className="text-sm text-muted-foreground">3 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High</Badge>
                      <span className="font-medium">88%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">PHYS 211: Physics I</p>
                      <p className="text-sm text-muted-foreground">4 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                      <span className="font-medium">76%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">ENG 201: Technical Writing</p>
                      <p className="text-sm text-muted-foreground">3 credits</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High</Badge>
                      <span className="font-medium">94%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Load Estimation</CardTitle>
                <CardDescription>Weekly study hours required for current courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <BarChart className="h-10 w-10" />
                    <span>Study load visualization</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Total weekly hours:</span>
                    <span className="font-medium">28 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recommended maximum:</span>
                    <span className="font-medium">30 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Load assessment:</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Manageable</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gpa-calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>GPA Impact Calculator</CardTitle>
              <CardDescription>Calculate how your course grades will impact your GPA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Current Courses</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="col-span-2">
                          <Label htmlFor="course1">CS 301: Algorithms</Label>
                          <p className="text-xs text-muted-foreground">4 credits</p>
                        </div>
                        <Select defaultValue="a">
                          <SelectTrigger id="course1">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a">A (4.0)</SelectItem>
                            <SelectItem value="a-">A- (3.7)</SelectItem>
                            <SelectItem value="b+">B+ (3.3)</SelectItem>
                            <SelectItem value="b">B (3.0)</SelectItem>
                            <SelectItem value="b-">B- (2.7)</SelectItem>
                            <SelectItem value="c+">C+ (2.3)</SelectItem>
                            <SelectItem value="c">C (2.0)</SelectItem>
                            <SelectItem value="c-">C- (1.7)</SelectItem>
                            <SelectItem value="d">D (1.0)</SelectItem>
                            <SelectItem value="f">F (0.0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="col-span-2">
                          <Label htmlFor="course2">MATH 240: Linear Algebra</Label>
                          <p className="text-xs text-muted-foreground">3 credits</p>
                        </div>
                        <Select defaultValue="a-">
                          <SelectTrigger id="course2">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a">A (4.0)</SelectItem>
                            <SelectItem value="a-">A- (3.7)</SelectItem>
                            <SelectItem value="b+">B+ (3.3)</SelectItem>
                            <SelectItem value="b">B (3.0)</SelectItem>
                            <SelectItem value="b-">B- (2.7)</SelectItem>
                            <SelectItem value="c+">C+ (2.3)</SelectItem>
                            <SelectItem value="c">C (2.0)</SelectItem>
                            <SelectItem value="c-">C- (1.7)</SelectItem>
                            <SelectItem value="d">D (1.0)</SelectItem>
                            <SelectItem value="f">F (0.0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="col-span-2">
                          <Label htmlFor="course3">PHYS 211: Physics I</Label>
                          <p className="text-xs text-muted-foreground">4 credits</p>
                        </div>
                        <Select defaultValue="b+">
                          <SelectTrigger id="course3">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a">A (4.0)</SelectItem>
                            <SelectItem value="a-">A- (3.7)</SelectItem>
                            <SelectItem value="b+">B+ (3.3)</SelectItem>
                            <SelectItem value="b">B (3.0)</SelectItem>
                            <SelectItem value="b-">B- (2.7)</SelectItem>
                            <SelectItem value="c+">C+ (2.3)</SelectItem>
                            <SelectItem value="c">C (2.0)</SelectItem>
                            <SelectItem value="c-">C- (1.7)</SelectItem>
                            <SelectItem value="d">D (1.0)</SelectItem>
                            <SelectItem value="f">F (0.0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="col-span-2">
                          <Label htmlFor="course4">ENG 201: Technical Writing</Label>
                          <p className="text-xs text-muted-foreground">3 credits</p>
                        </div>
                        <Select defaultValue="a">
                          <SelectTrigger id="course4">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a">A (4.0)</SelectItem>
                            <SelectItem value="a-">A- (3.7)</SelectItem>
                            <SelectItem value="b+">B+ (3.3)</SelectItem>
                            <SelectItem value="b">B (3.0)</SelectItem>
                            <SelectItem value="b-">B- (2.7)</SelectItem>
                            <SelectItem value="c+">C+ (2.3)</SelectItem>
                            <SelectItem value="c">C (2.0)</SelectItem>
                            <SelectItem value="c-">C- (1.7)</SelectItem>
                            <SelectItem value="d">D (1.0)</SelectItem>
                            <SelectItem value="f">F (0.0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button variant="outline" className="w-full">
                        Add Course
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">GPA Impact</h3>
                    <Card className="bg-muted/30">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Current GPA:</span>
                            <span className="font-medium">3.78</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Semester GPA:</span>
                            <span className="font-medium">3.82</span>
                          </div>
                          <div className="flex justify-between">
                            <span>New Cumulative GPA:</span>
                            <span className="font-medium text-green-600">3.80</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GPA Change:</span>
                            <span className="font-medium text-green-600">+0.02</span>
                          </div>

                          <div className="pt-2">
                            <Progress value={80} className="h-2" />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>3.0</span>
                              <span>3.5</span>
                              <span>4.0</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Honor Status Impact</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Cum Laude (3.5):</span>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Eligible</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Magna Cum Laude (3.7):</span>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Eligible</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Summa Cum Laude (3.9):</span>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Not Eligible</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Calculate Impact</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="course-difficulty" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Difficulty Assessment</CardTitle>
              <CardDescription>Analyze the difficulty level of your current and planned courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Current Semester Courses</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">CS 301: Algorithms</p>
                        <p className="text-sm text-muted-foreground">4 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Difficult</Badge>
                        <span className="font-medium">8.2/10</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">MATH 240: Linear Algebra</p>
                        <p className="text-sm text-muted-foreground">3 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                        <span className="font-medium">6.5/10</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">PHYS 211: Physics I</p>
                        <p className="text-sm text-muted-foreground">4 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                        <span className="font-medium">7.3/10</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">ENG 201: Technical Writing</p>
                        <p className="text-sm text-muted-foreground">3 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy</Badge>
                        <span className="font-medium">4.2/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Overall Semester Difficulty</h4>
                    <div className="flex items-center gap-4">
                      <Progress value={68} className="h-2 flex-1" />
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your current course load is moderately difficult. Consider balancing with easier electives next
                      semester.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Planned Courses</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">CS 401: Advanced Algorithms</p>
                        <p className="text-sm text-muted-foreground">4 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Difficult</Badge>
                        <span className="font-medium">9.1/10</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">CS 350: Operating Systems</p>
                        <p className="text-sm text-muted-foreground">4 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Difficult</Badge>
                        <span className="font-medium">8.7/10</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">MATH 340: Differential Equations</p>
                        <p className="text-sm text-muted-foreground">3 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                        <span className="font-medium">7.5/10</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">HIST 101: World History</p>
                        <p className="text-sm text-muted-foreground">3 credits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy</Badge>
                        <span className="font-medium">3.8/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Planned Semester Difficulty</h4>
                    <div className="flex items-center gap-4">
                      <Progress value={82} className="h-2 flex-1" />
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Warning: Your planned course load is highly difficult. Consider spreading these courses across
                      multiple semesters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Difficulty Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Time Commitment</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="text-2xl font-bold">28 hrs/week</div>
                      <p className="text-xs text-muted-foreground">Estimated study time</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Conceptual Complexity</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="text-2xl font-bold">7.2/10</div>
                      <p className="text-xs text-muted-foreground">Average complexity rating</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Assignment Load</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="text-2xl font-bold">High</div>
                      <p className="text-xs text-muted-foreground">Weekly assignments</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Goals</CardTitle>
              <CardDescription>Set and track your academic goals and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-4">Current Goals</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Achieve 3.8+ GPA This Semester</h4>
                            <p className="text-sm text-muted-foreground mt-1">Due: May 15, 2023</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Track</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Complete Research Project</h4>
                            <p className="text-sm text-muted-foreground mt-1">Due: April 30, 2023</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">At Risk</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Qualify for Dean's List</h4>
                            <p className="text-sm text-muted-foreground mt-1">Due: May 15, 2023</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Track</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>90%</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>

                      <Button className="w-full">Add New Goal</Button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-4">Long-Term Goals</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Graduate with Honors</h4>
                            <p className="text-sm text-muted-foreground mt-1">Due: May 2025</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Track</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>68%</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Complete 3 Research Publications</h4>
                            <p className="text-sm text-muted-foreground mt-1">Due: May 2025</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>33%</span>
                          </div>
                          <Progress value={33} className="h-2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Secure Internship at Top Tech Company</h4>
                            <p className="text-sm text-muted-foreground mt-1">Due: June 2024</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>

                      <Button className="w-full">Add New Goal</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

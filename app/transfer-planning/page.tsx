import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  School,
  Calendar,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ChevronRight,
  Download,
  Upload,
  Plus,
  BookOpen,
  GraduationCap,
  FileQuestion,
  Users,
  Info,
} from "lucide-react"

export default function TransferPlanningPage() {
  // Mock data for schools
  const schools = [
    {
      id: 1,
      name: "University of California, Berkeley",
      logo: "/placeholder.svg?height=40&width=40",
      gpaRequirement: 3.7,
      deadlines: {
        fall: "November 30",
        spring: "July 31",
      },
      requiredCredits: 60,
      acceptanceRate: "16%",
      popularMajors: ["Computer Science", "Business", "Engineering"],
      transferAgreement: true,
    },
    {
      id: 2,
      name: "University of Michigan",
      logo: "/placeholder.svg?height=40&width=40",
      gpaRequirement: 3.6,
      deadlines: {
        fall: "February 1",
        spring: "October 1",
      },
      requiredCredits: 60,
      acceptanceRate: "24%",
      popularMajors: ["Business", "Engineering", "Psychology"],
      transferAgreement: true,
    },
    {
      id: 3,
      name: "New York University",
      logo: "/placeholder.svg?height=40&width=40",
      gpaRequirement: 3.5,
      deadlines: {
        fall: "April 1",
        spring: "November 1",
      },
      requiredCredits: 64,
      acceptanceRate: "20%",
      popularMajors: ["Business", "Film", "International Relations"],
      transferAgreement: false,
    },
  ]

  // Mock data for courses
  const courses = [
    {
      id: 1,
      code: "MATH 101",
      title: "Calculus I",
      credits: 4,
      grade: "A",
      term: "Fall 2022",
      transferable: true,
      equivalentCourses: [
        { school: "UC Berkeley", code: "MATH 1A", credits: 4 },
        { school: "University of Michigan", code: "MATH 115", credits: 4 },
        { school: "NYU", code: "MATH-UA 121", credits: 4 },
      ],
    },
    {
      id: 2,
      code: "CHEM 101",
      title: "General Chemistry",
      credits: 4,
      grade: "B+",
      term: "Fall 2022",
      transferable: true,
      equivalentCourses: [
        { school: "UC Berkeley", code: "CHEM 1A", credits: 3 },
        { school: "University of Michigan", code: "CHEM 130", credits: 4 },
        { school: "NYU", code: "CHEM-UA 125", credits: 5 },
      ],
    },
    {
      id: 3,
      code: "ENGL 101",
      title: "Composition",
      credits: 3,
      grade: "A-",
      term: "Fall 2022",
      transferable: true,
      equivalentCourses: [
        { school: "UC Berkeley", code: "ENGLISH R1A", credits: 4 },
        { school: "University of Michigan", code: "ENGLISH 125", credits: 4 },
        { school: "NYU", code: "EXPOS-UA 1", credits: 4 },
      ],
    },
    {
      id: 4,
      code: "PSYC 101",
      title: "Introduction to Psychology",
      credits: 3,
      grade: "A",
      term: "Spring 2023",
      transferable: true,
      equivalentCourses: [
        { school: "UC Berkeley", code: "PSYCH 1", credits: 3 },
        { school: "University of Michigan", code: "PSYCH 111", credits: 4 },
        { school: "NYU", code: "PSYCH-UA 1", credits: 4 },
      ],
    },
    {
      id: 5,
      code: "HIST 101",
      title: "World History",
      credits: 3,
      grade: "B",
      term: "Spring 2023",
      transferable: true,
      equivalentCourses: [
        { school: "UC Berkeley", code: "HISTORY 1", credits: 4 },
        { school: "University of Michigan", code: "HISTORY 102", credits: 4 },
        { school: "NYU", code: "HIST-UA 1", credits: 4 },
      ],
    },
  ]

  // Mock data for requirements
  const requirements = [
    {
      id: 1,
      school: "UC Berkeley",
      category: "General Education",
      requirements: [
        { name: "Reading & Composition", credits: 8, completed: 3, courses: ["ENGL 101"] },
        { name: "Quantitative Reasoning", credits: 4, completed: 4, courses: ["MATH 101"] },
        { name: "Arts & Literature", credits: 4, completed: 0, courses: [] },
        { name: "Historical Studies", credits: 4, completed: 3, courses: ["HIST 101"] },
        { name: "Social & Behavioral Sciences", credits: 4, completed: 3, courses: ["PSYC 101"] },
        { name: "Physical Science", credits: 4, completed: 4, courses: ["CHEM 101"] },
        { name: "Biological Science", credits: 4, completed: 0, courses: [] },
      ],
    },
  ]

  // Mock data for application documents
  const documents = [
    { name: "Official Transcripts", required: true, submitted: true, deadline: "2 weeks before application deadline" },
    { name: "Personal Statement", required: true, submitted: false, deadline: "With application" },
    { name: "Letters of Recommendation", required: true, submitted: false, deadline: "With application", count: 2 },
    { name: "Application Fee or Waiver", required: true, submitted: false, deadline: "With application" },
    { name: "Test Scores (if applicable)", required: false, submitted: false, deadline: "With application" },
    { name: "Portfolio (for specific majors)", required: false, submitted: false, deadline: "With application" },
  ]

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transfer Planning Assistant</h1>
          <p className="text-muted-foreground">Plan and manage your college transfer process</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <Plus className="mr-2 h-4 w-4" /> Add School
        </Button>
      </div>

      <Tabs defaultValue="requirements" className="w-full">
        <TabsList className="grid grid-cols-6 w-full max-w-4xl">
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="credits">Credit Evaluation</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
        </TabsList>

        {/* Requirements Tab */}
        <TabsContent value="requirements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Transfer Requirements</CardTitle>
                      <CardDescription>Requirements for your target schools</CardDescription>
                    </div>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select school" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id.toString()}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">GPA Requirement</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">3.7</div>
                          <div className="flex items-center mt-2">
                            <div className="flex-1">
                              <Progress value={85} className="h-2" />
                            </div>
                            <span className="ml-2 text-sm font-medium">3.5</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Your current GPA</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Required Credits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">60</div>
                          <div className="flex items-center mt-2">
                            <div className="flex-1">
                              <Progress value={28} className="h-2" />
                            </div>
                            <span className="ml-2 text-sm font-medium">17/60</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Credits completed</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Application Deadline</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-xl font-bold">Nov 30, 2023</div>
                          <p className="text-xs text-muted-foreground mt-1">For Fall 2024 admission</p>
                          <Badge className="mt-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                            98 days remaining
                          </Badge>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">General Education Requirements</h3>
                      <div className="space-y-4">
                        {requirements[0].requirements.map((req, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {req.completed >= req.credits ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                ) : (
                                  <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                                )}
                                <span>{req.name}</span>
                              </div>
                              <span className="text-sm font-medium">
                                {req.completed}/{req.credits} credits
                              </span>
                            </div>
                            <Progress value={(req.completed / req.credits) * 100} className="h-2" />
                            <div className="flex flex-wrap gap-2 mt-1">
                              {req.courses.map((course, j) => (
                                <Badge key={j} variant="outline">
                                  {course}
                                </Badge>
                              ))}
                              {req.completed < req.credits && (
                                <Badge variant="outline" className="border-dashed">
                                  <Plus className="h-3 w-3 mr-1" /> Add Course
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Major Prerequisites</h3>
                      <Card className="border border-dashed">
                        <CardContent className="p-6 text-center">
                          <BookOpen className="h-8 w-8 mx-auto text-muted-foreground" />
                          <h3 className="mt-2 font-medium">Select a Major</h3>
                          <p className="text-sm text-muted-foreground">Choose a major to view specific prerequisites</p>
                          <Button variant="outline" className="mt-4">
                            Select Major
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>School Information</CardTitle>
                  <CardDescription>Details about UC Berkeley</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <School className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">University of California, Berkeley</h3>
                      <p className="text-sm text-muted-foreground">Berkeley, CA</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Acceptance Rate</span>
                      <span className="text-sm font-medium">16%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Transfer Agreement</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      >
                        Yes
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Application Fee</span>
                      <span className="text-sm font-medium">$70</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium mb-2">Popular Transfer Majors</h4>
                    <div className="space-y-2">
                      {schools[0].popularMajors.map((major, i) => (
                        <div key={i} className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm">{major}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Info className="mr-2 h-4 w-4" />
                      More Info
                    </Button>
                    <Button size="sm" className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Visit Website
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Requirement Checklist</CardTitle>
                  <CardDescription>Track your progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="gpa" checked={true} />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="gpa" className="font-medium">
                          Minimum GPA
                        </Label>
                        <p className="text-sm text-muted-foreground">Maintain 3.5+ GPA</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="credits" />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="credits" className="font-medium">
                          Required Credits
                        </Label>
                        <p className="text-sm text-muted-foreground">Complete 60 transferable credits</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="english" />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="english" className="font-medium">
                          English Composition
                        </Label>
                        <p className="text-sm text-muted-foreground">Complete required English courses</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="math" checked={true} />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="math" className="font-medium">
                          Mathematics
                        </Label>
                        <p className="text-sm text-muted-foreground">Complete required math courses</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="major" />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="major" className="font-medium">
                          Major Prerequisites
                        </Label>
                        <p className="text-sm text-muted-foreground">Complete major-specific requirements</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Update Progress</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Credit Evaluation Tab */}
        <TabsContent value="credits" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Course Equivalency</CardTitle>
                      <CardDescription>How your courses transfer to target schools</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Select defaultValue="1">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select school" />
                        </SelectTrigger>
                        <SelectContent>
                          {schools.map((school) => (
                            <SelectItem key={school.id} value={school.id.toString()}>
                              {school.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Your Course</TableHead>
                        <TableHead>Credits</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Equivalent Course</TableHead>
                        <TableHead>Credits</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">
                            {course.code}: {course.title}
                          </TableCell>
                          <TableCell>{course.credits}</TableCell>
                          <TableCell>{course.grade}</TableCell>
                          <TableCell>{course.equivalentCourses[0].code}</TableCell>
                          <TableCell>{course.equivalentCourses[0].credits}</TableCell>
                          <TableCell>
                            {course.transferable ? (
                              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                                Transfers
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                              >
                                Does Not Transfer
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex justify-center mt-4">
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" /> Add Course
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Credit Summary</CardTitle>
                  <CardDescription>Overview of your transferable credits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">17</div>
                        <div className="flex items-center mt-2">
                          <div className="flex-1">
                            <Progress value={28} className="h-2" />
                          </div>
                          <span className="ml-2 text-sm font-medium">28%</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">of 60 required</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Transferable Credits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">17</div>
                        <div className="flex items-center mt-2">
                          <div className="flex-1">
                            <Progress value={100} className="h-2" />
                          </div>
                          <span className="ml-2 text-sm font-medium">100%</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">of your current credits</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3.5</div>
                        <div className="flex items-center mt-2">
                          <div className="flex-1">
                            <Progress value={85} className="h-2" />
                          </div>
                          <span className="ml-2 text-sm font-medium">85%</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">of 4.0 scale</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Credit Calculator</CardTitle>
                  <CardDescription>Estimate your transfer credits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-school">Current School</Label>
                    <Input id="current-school" placeholder="Enter your current school" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target-school">Target School</Label>
                    <Select>
                      <SelectTrigger id="target-school">
                        <SelectValue placeholder="Select target school" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id.toString()}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-code">Course Code</Label>
                    <Input id="course-code" placeholder="e.g., MATH 101" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-title">Course Title</Label>
                    <Input id="course-title" placeholder="e.g., Calculus I" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="credits">Credits</Label>
                      <Input id="credits" type="number" placeholder="e.g., 3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade</Label>
                      <Select>
                        <SelectTrigger id="grade">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="C+">C+</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                          <SelectItem value="C-">C-</SelectItem>
                          <SelectItem value="D">D</SelectItem>
                          <SelectItem value="F">F</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full">Check Transferability</Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Prerequisite Checker</CardTitle>
                  <CardDescription>Verify course prerequisites</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="target-course">Target Course</Label>
                    <Input id="target-course" placeholder="e.g., CS 201" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target-major">Target Major</Label>
                    <Input id="target-major" placeholder="e.g., Computer Science" />
                  </div>
                  <Button className="w-full">Check Prerequisites</Button>

                  <div className="border rounded-lg p-4 mt-4">
                    <h4 className="text-sm font-medium mb-2">Prerequisites</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="prereq1" checked={true} />
                        <div className="space-y-1 leading-none">
                          <Label htmlFor="prereq1" className="font-medium">
                            MATH 101: Calculus I
                          </Label>
                          <p className="text-xs text-muted-foreground">Completed with A</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="prereq2" />
                        <div className="space-y-1 leading-none">
                          <Label htmlFor="prereq2" className="font-medium">
                            CS 101: Intro to Programming
                          </Label>
                          <p className="text-xs text-muted-foreground">Not yet completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Timeline</CardTitle>
                  <CardDescription>Key dates and deadlines for your transfer journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-border">
                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <h4 className="font-semibold">Research Schools and Programs</h4>
                          <Badge className="ml-2">Current Step</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">August - September 2023</p>
                        <p className="text-sm">Research potential transfer schools, programs, and requirements</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            <CheckCircle2 className="mr-1 h-3 w-3" /> School List Created
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" /> Program Research
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" /> Requirement Analysis
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Prepare Application Materials</h4>
                        <p className="text-sm text-muted-foreground">October - November 2023</p>
                        <p className="text-sm">Draft personal statements, request transcripts and recommendations</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" /> Personal Statement
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" /> Recommendation Letters
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            <CheckCircle2 className="mr-1 h-3 w-3" /> Transcripts
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <Upload className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Submit Applications</h4>
                        <p className="text-sm text-muted-foreground">November 30, 2023</p>
                        <p className="text-sm">Submit applications to UC Berkeley and other UC schools</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" /> UC Application
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <Upload className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Submit Applications</h4>
                        <p className="text-sm text-muted-foreground">February 1, 2024</p>
                        <p className="text-sm">Submit applications to University of Michigan</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" /> Michigan Application
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Interviews (if required)</h4>
                        <p className="text-sm text-muted-foreground">February - March 2024</p>
                        <p className="text-sm">Prepare for and complete any required interviews</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Receive Admission Decisions</h4>
                        <p className="text-sm text-muted-foreground">March - April 2024</p>
                        <p className="text-sm">Review admission offers and financial aid packages</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Make Decision and Commit</h4>
                        <p className="text-sm text-muted-foreground">May 1, 2024</p>
                        <p className="text-sm">Accept offer, pay deposit, and complete enrollment steps</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Critical dates to remember</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center">
                            <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">UC Application Deadline</p>
                            <Badge variant="outline">Nov 30</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">For Fall 2024 admission</p>
                          <Badge className="mt-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                            98 days remaining
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Personal Statement Draft</p>
                            <Badge variant="outline">Oct 15</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Internal deadline</p>
                          <Badge className="mt-1">52 days remaining</Badge>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Request Recommendations</p>
                            <Badge variant="outline">Oct 1</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Ask professors for letters</p>
                          <Badge className="mt-1">38 days remaining</Badge>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                            <Upload className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Michigan Application</p>
                            <Badge variant="outline">Feb 1</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">For Fall 2024 admission</p>
                          <Badge className="mt-1">161 days remaining</Badge>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Deadline
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Add to Calendar</CardTitle>
                  <CardDescription>Sync deadlines with your calendar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="calendar-type">Calendar Type</Label>
                    <Select defaultValue="google">
                      <SelectTrigger id="calendar-type">
                        <SelectValue placeholder="Select calendar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Calendar</SelectItem>
                        <SelectItem value="outlook">Outlook</SelectItem>
                        <SelectItem value="apple">Apple Calendar</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reminder">Set Reminders</Label>
                    <Select defaultValue="1week">
                      <SelectTrigger id="reminder">
                        <SelectValue placeholder="Select reminder time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1day">1 day before</SelectItem>
                        <SelectItem value="3days">3 days before</SelectItem>
                        <SelectItem value="1week">1 week before</SelectItem>
                        <SelectItem value="2weeks">2 weeks before</SelectItem>
                        <SelectItem value="1month">1 month before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Sync All Deadlines</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Document Checklist</CardTitle>
                      <CardDescription>Track required application documents</CardDescription>
                    </div>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select school" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id.toString()}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[300px]">Document</TableHead>
                        <TableHead>Required</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documents.map((doc, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{doc.name}</TableCell>
                          <TableCell>
                            {doc.required ? (
                              <Badge className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                                Required
                              </Badge>
                            ) : (
                              <Badge variant="outline">Optional</Badge>
                            )}
                          </TableCell>
                          <TableCell>{doc.deadline}</TableCell>
                          <TableCell>
                            {doc.submitted ? (
                              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                                Submitted
                              </Badge>
                            ) : (
                              <Badge variant="outline">Pending</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              {doc.submitted ? "View" : "Upload"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Personal Statement</CardTitle>
                  <CardDescription>Draft and refine your personal statement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="essay-prompt">Essay Prompt</Label>
                    <Select defaultValue="prompt1">
                      <SelectTrigger id="essay-prompt">
                        <SelectValue placeholder="Select prompt" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prompt1">
                          Describe your academic interests and how this university will help you achieve your goals.
                        </SelectItem>
                        <SelectItem value="prompt2">
                          Discuss a challenge you've faced and how it has prepared you for college.
                        </SelectItem>
                        <SelectItem value="prompt3">
                          Why are you interested in transferring to this university?
                        </SelectItem>
                        <SelectItem value="custom">Custom prompt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="essay-draft">Essay Draft</Label>
                      <span className="text-xs text-muted-foreground">0/650 words</span>
                    </div>
                    <Textarea
                      id="essay-draft"
                      placeholder="Start writing your essay here..."
                      className="min-h-[200px]"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      Save Draft
                    </Button>
                    <Button className="flex-1">Request Feedback</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Document Organization</CardTitle>
                  <CardDescription>Manage your application documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="document-type">Document Type</Label>
                    <Select>
                      <SelectTrigger id="document-type">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transcript">Transcript</SelectItem>
                        <SelectItem value="essay">Personal Statement</SelectItem>
                        <SelectItem value="recommendation">Letter of Recommendation</SelectItem>
                        <SelectItem value="resume">Resume/CV</SelectItem>
                        <SelectItem value="test">Test Scores</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="document-name">Document Name</Label>
                    <Input id="document-name" placeholder="e.g., Official Transcript Fall 2023" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="document-school">School</Label>
                    <Select>
                      <SelectTrigger id="document-school">
                        <SelectValue placeholder="Select school" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Schools</SelectItem>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id.toString()}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-center border-2 border-dashed rounded-lg p-6">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                      <h3 className="mt-2 font-medium">Upload Document</h3>
                      <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Select File
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Essay Topic Suggestions</CardTitle>
                  <CardDescription>Get inspiration for your personal statement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Academic Journey</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Describe your academic journey and how your current institution has prepared you for transfer.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Use This Topic
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Overcoming Challenges</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Discuss a significant challenge you've faced and how it has shaped your educational goals.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Use This Topic
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Why This University</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Explain why you're interested in transferring to this specific university and how it aligns
                          with your goals.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Use This Topic
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Academic Interests</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Describe your academic interests and how they have evolved during your college experience.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Use This Topic
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Future Goals</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Outline your future academic and career goals and how this university will help you achieve
                          them.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Use This Topic
                        </Button>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Testing Tab */}
        <TabsContent value="testing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Testing Requirements</CardTitle>
                  <CardDescription>Standardized test requirements for transfer</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>School</TableHead>
                        <TableHead>SAT/ACT Required</TableHead>
                        <TableHead>Subject Tests</TableHead>
                        <TableHead>English Proficiency</TableHead>
                        <TableHead>Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">UC Berkeley</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            Test-Optional
                          </Badge>
                        </TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>
                          <Badge variant="outline">TOEFL/IELTS for international</Badge>
                        </TableCell>
                        <TableCell className="text-sm">Test-blind for admissions, may be used for placement</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">University of Michigan</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                          >
                            Recommended
                          </Badge>
                        </TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>
                          <Badge variant="outline">TOEFL/IELTS for international</Badge>
                        </TableCell>
                        <TableCell className="text-sm">Considered if submitted, not required</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">New York University</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            Test-Optional
                          </Badge>
                        </TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>
                          <Badge variant="outline">TOEFL/IELTS for international</Badge>
                        </TableCell>
                        <TableCell className="text-sm">Test-optional policy extended through 2023-24</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Test Scores</CardTitle>
                  <CardDescription>Track your standardized test scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">SAT</h3>
                        <Badge>Not Taken</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Plus className="mr-2 h-4 w-4" /> Add Score
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">ACT</h3>
                        <Badge>Not Taken</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Plus className="mr-2 h-4 w-4" /> Add Score
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">TOEFL</h3>
                        <Badge>Not Taken</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Plus className="mr-2 h-4 w-4" /> Add Score
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">AP Exams</h3>
                        <Badge>2 Taken</Badge>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>AP Calculus AB</span>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            Score: 4
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>AP English Language</span>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            Score: 5
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Plus className="mr-2 h-4 w-4" /> Add Score
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Test Preparation</CardTitle>
                  <CardDescription>Resources for test preparation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="test-type">Test Type</Label>
                    <Select>
                      <SelectTrigger id="test-type">
                        <SelectValue placeholder="Select test" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sat">SAT</SelectItem>
                        <SelectItem value="act">ACT</SelectItem>
                        <SelectItem value="toefl">TOEFL</SelectItem>
                        <SelectItem value="ielts">IELTS</SelectItem>
                        <SelectItem value="gre">GRE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Preparation Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>Official SAT Study Guide</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>Khan Academy SAT Prep</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>College Board Practice Tests</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Test Dates</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>October 7, 2023</span>
                        </div>
                        <Badge variant="outline">Registration Deadline: Sep 8</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>November 4, 2023</span>
                        </div>
                        <Badge variant="outline">Registration Deadline: Oct 5</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>December 2, 2023</span>
                        </div>
                        <Badge variant="outline">Registration Deadline: Nov 2</Badge>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Register for Test</Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Score Sending</CardTitle>
                  <CardDescription>Send your scores to schools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="score-type">Score Type</Label>
                    <Select>
                      <SelectTrigger id="score-type">
                        <SelectValue placeholder="Select score type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sat">SAT</SelectItem>
                        <SelectItem value="act">ACT</SelectItem>
                        <SelectItem value="ap">AP</SelectItem>
                        <SelectItem value="toefl">TOEFL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="score-school">School</Label>
                    <Select>
                      <SelectTrigger id="score-school">
                        <SelectValue placeholder="Select school" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id.toString()}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Send Scores</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Interviews Tab */}
        <TabsContent value="interviews" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Preparation</CardTitle>
                  <CardDescription>Prepare for admissions interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Common Questions</CardTitle>
                          <CardDescription>Prepare answers for frequently asked questions</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ScrollArea className="h-[300px]">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <h4 className="font-medium">Why do you want to transfer?</h4>
                                <p className="text-sm text-muted-foreground">
                                  Explain your reasons for transferring, focusing on academic and personal growth
                                  opportunities.
                                </p>
                                <Button variant="ghost" size="sm">
                                  Practice Answer
                                </Button>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Why this university?</h4>
                                <p className="text-sm text-muted-foreground">
                                  Discuss specific programs, faculty, or opportunities that attract you to this
                                  institution.
                                </p>
                                <Button variant="ghost" size="sm">
                                  Practice Answer
                                </Button>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">What are your academic goals?</h4>
                                <p className="text-sm text-muted-foreground">
                                  Outline your short and long-term academic goals and how this university fits into
                                  them.
                                </p>
                                <Button variant="ghost" size="sm">
                                  Practice Answer
                                </Button>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Tell me about your current institution.</h4>
                                <p className="text-sm text-muted-foreground">
                                  Discuss your experience at your current school without being negative.
                                </p>
                                <Button variant="ghost" size="sm">
                                  Practice Answer
                                </Button>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">What challenges have you faced?</h4>
                                <p className="text-sm text-muted-foreground">
                                  Discuss challenges and how you've overcome them, showing growth and resilience.
                                </p>
                                <Button variant="ghost" size="sm">
                                  Practice Answer
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Interview Tips</CardTitle>
                          <CardDescription>Best practices for admissions interviews</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ScrollArea className="h-[300px]">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <h4 className="font-medium">Research the School</h4>
                                <p className="text-sm text-muted-foreground">
                                  Thoroughly research the university, including specific programs, faculty, and campus
                                  culture.
                                </p>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Practice Your Responses</h4>
                                <p className="text-sm text-muted-foreground">
                                  Practice answering common questions, but avoid sounding rehearsed.
                                </p>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Prepare Questions</h4>
                                <p className="text-sm text-muted-foreground">
                                  Prepare thoughtful questions about the university to demonstrate your interest.
                                </p>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Dress Professionally</h4>
                                <p className="text-sm text-muted-foreground">
                                  Dress in business casual attire to make a positive first impression.
                                </p>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Be Authentic</h4>
                                <p className="text-sm text-muted-foreground">
                                  Be yourself and speak genuinely about your experiences and goals.
                                </p>
                              </div>
                              <Separator />
                              <div className="space-y-2">
                                <h4 className="font-medium">Follow Up</h4>
                                <p className="text-sm text-muted-foreground">
                                  Send a thank-you email to your interviewer within 24 hours.
                                </p>
                              </div>
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Mock Interview</CardTitle>
                        <CardDescription>Practice with simulated interviews</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="interview-type">Interview Type</Label>
                            <Select>
                              <SelectTrigger id="interview-type">
                                <SelectValue placeholder="Select interview type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admissions">Admissions Interview</SelectItem>
                                <SelectItem value="alumni">Alumni Interview</SelectItem>
                                <SelectItem value="scholarship">Scholarship Interview</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="interview-school">School</Label>
                            <Select>
                              <SelectTrigger id="interview-school">
                                <SelectValue placeholder="Select school" />
                              </SelectTrigger>
                              <SelectContent>
                                {schools.map((school) => (
                                  <SelectItem key={school.id} value={school.id.toString()}>
                                    {school.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" className="flex-1">
                              Schedule with Advisor
                            </Button>
                            <Button className="flex-1">Start Practice Interview</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Interview Schedule</CardTitle>
                  <CardDescription>Track your upcoming interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6 border rounded-lg">
                    <FileQuestion className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-2 font-medium">No Interviews Scheduled</h3>
                    <p className="text-sm text-muted-foreground mt-1">You don't have any interviews scheduled yet.</p>
                    <Button className="mt-4">
                      <Plus className="mr-2 h-4 w-4" /> Add Interview
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Interview Resources</CardTitle>
                  <CardDescription>Helpful resources for interview preparation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Interview Attire Guide</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Guidelines for dressing appropriately for different types of interviews.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          View Guide
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Body Language Tips</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          How to present yourself confidently through posture, eye contact, and gestures.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          View Tips
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Virtual Interview Setup</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          How to prepare your space, lighting, and technology for virtual interviews.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          View Guide
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Question Frameworks</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Structured approaches to answering different types of interview questions.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          View Frameworks
                        </Button>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Interview Recordings</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sample interviews with successful transfer students.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Watch Videos
                        </Button>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

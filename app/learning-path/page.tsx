"use client"

import { useState } from "react"
import { type CheckedState } from "@radix-ui/react-checkbox"

interface Resource {
  id: string;
  title: string;
  provider: string;
  type: 'course' | 'project' | 'certification' | 'book' | 'other';
  duration: string;
  difficulty: string;
  rating: number;
  cost: string;
  url: string;
  description: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalHours: number;
  remainingHours: number;
  skills: string[];
  courses: number;
  projects: number;
  certifications: number;
  lastUpdated: string;
}
import Link from "next/link"
import {
  BookOpen,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Filter,
  Home,
  Lightbulb,
  MoreHorizontal,
  Plus,
  Save,
  Search,
  Settings,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LearningPath() {
  const [selectedSkill, setSelectedSkill] = useState("python")
  const [timeCommitment, setTimeCommitment] = useState("medium")
  const [learningStyle, setLearningStyle] = useState("visual")
  const [includeProjects, setIncludeProjects] = useState(true)
  const [includeCertifications, setIncludeCertifications] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("my-paths")

  // Sample learning paths data
  const learningPaths = [
    {
      id: "path-1",
      title: "Data Science Fundamentals",
      description: "Master the core skills needed for data science roles",
      progress: 45,
      totalHours: 120,
      remainingHours: 66,
      skills: ["Python Programming", "Statistics", "Data Visualization", "SQL"],
      courses: 8,
      projects: 3,
      certifications: 2,
      lastUpdated: "2024-04-15",
    },
    {
      id: "path-2",
      title: "Machine Learning Specialist",
      description: "Develop expertise in machine learning algorithms and applications",
      progress: 20,
      totalHours: 180,
      remainingHours: 144,
      skills: ["Python Programming", "Machine Learning", "Deep Learning", "Mathematics"],
      courses: 12,
      projects: 5,
      certifications: 3,
      lastUpdated: "2024-04-10",
    },
    {
      id: "path-3",
      title: "Business Analytics",
      description: "Learn to analyze business data and create actionable insights",
      progress: 75,
      totalHours: 90,
      remainingHours: 22.5,
      skills: ["Data Visualization", "SQL", "Excel", "Business Intelligence"],
      courses: 6,
      projects: 2,
      certifications: 1,
      lastUpdated: "2024-03-28",
    },
  ]

  // Sample skills data
  const skillsData = [
    {
      id: "python",
      name: "Python Programming",
      description: "Master Python for data analysis, machine learning, and automation",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      estimatedHours: 80,
      difficulty: "Medium",
      prerequisites: ["Basic Programming Concepts"],
      resources: [
        {
          id: "res-1",
          title: "Python for Data Science and Machine Learning Bootcamp",
          provider: "Udemy",
          type: "course" as const,
          duration: "40 hours",
          difficulty: "Intermediate",
          rating: 4.8,
          cost: "Paid",
          url: "#",
          description: "Comprehensive course covering Python libraries for data science and machine learning",
        },
        {
          id: "res-2",
          title: "Advanced Python Programming",
          provider: "Coursera",
          type: "course" as const,
          duration: "30 hours",
          difficulty: "Advanced",
          rating: 4.6,
          cost: "Paid",
          url: "#",
          description: "Deep dive into advanced Python concepts, optimization, and best practices",
        },
        {
          id: "res-3",
          title: "Python Data Analysis Project",
          provider: "DataCamp",
          type: "project" as const,
          duration: "10 hours",
          difficulty: "Intermediate",
          rating: 4.5,
          cost: "Paid",
          url: "#",
          description: "Hands-on project analyzing real-world datasets using Python",
        },
        {
          id: "res-4",
          title: "Python Certified Associate Programmer",
          provider: "Python Institute",
          type: "other" as const,
          duration: "Study: 60 hours, Exam: 2 hours",
          difficulty: "Intermediate",
          rating: 4.7,
          cost: "Paid",
          url: "#",
          description: "Industry-recognized certification validating Python programming skills",
        },
      ],
    },
    {
      id: "ml",
      name: "Machine Learning",
      description: "Learn machine learning algorithms, techniques, and applications",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      estimatedHours: 120,
      difficulty: "High",
      prerequisites: ["Python Programming", "Statistics", "Linear Algebra"],
      resources: [
        {
          id: "res-5",
          title: "Machine Learning Specialization",
          provider: "Coursera",
          type: "course" as const,
          duration: "80 hours",
          difficulty: "Intermediate",
          rating: 4.9,
          cost: "Paid",
          url: "#",
          description: "Comprehensive specialization covering supervised and unsupervised learning algorithms",
        },
        {
          id: "res-6",
          title: "Hands-On Machine Learning with Scikit-Learn",
          provider: "O'Reilly",
          type: "book" as const,
          duration: "Self-paced",
          difficulty: "Intermediate",
          rating: 4.8,
          cost: "Paid",
          url: "#",
          description: "Practical guide to implementing machine learning algorithms with Python",
        },
      ],
    },
    {
      id: "sql",
      name: "SQL & Databases",
      description: "Master SQL queries and database design for data analysis",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      estimatedHours: 60,
      difficulty: "Medium",
      prerequisites: ["Basic Data Concepts"],
      resources: [
        {
          id: "res-7",
          title: "Advanced SQL for Data Analysis",
          provider: "DataCamp",
          type: "course" as const,
          duration: "25 hours",
          difficulty: "Advanced",
          rating: 4.7,
          cost: "Paid",
          url: "#",
          description: "Master complex SQL queries and techniques for data analysis",
        },
        {
          id: "res-8",
          title: "SQL Database Design and Optimization",
          provider: "Udemy",
          type: "course" as const,
          duration: "20 hours",
          difficulty: "Intermediate",
          rating: 4.5,
          cost: "Paid",
          url: "#",
          description: "Learn database design principles and optimization techniques",
        },
      ],
    },
  ]

  // Get the selected skill data
  const selectedSkillData = skillsData.find((skill) => skill.id === selectedSkill)

  // Filter resources based on search query
  const filterResources = (resources: Resource[]): Resource[] => {
    if (!searchQuery) return resources

    return resources.filter((resource: Resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.provider.toLowerCase().includes(searchQuery.toLowerCase()),
    )
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
            <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
              <Link href="/skills-hub">Skills Hub</Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <span>Learning Paths</span>
          </div>
          <h1 className="text-3xl font-bold">Learning Path Creator</h1>
          <p className="text-muted-foreground mt-1">Develop your skills with personalized learning plans</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" asChild>
            <Link href="/skills-hub">
              <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Skills Hub
            </Link>
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New Path
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Learning Path Generator */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Path Generator</CardTitle>
              <CardDescription>Create a personalized learning plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skill-select">Select Skill to Develop</Label>
                <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                  <SelectTrigger id="skill-select">
                    <SelectValue placeholder="Choose a skill" />
                  </SelectTrigger>
                  <SelectContent>
                    {skillsData.map((skill) => (
                      <SelectItem key={skill.id} value={skill.id}>
                        {skill.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Time Commitment</Label>
                <RadioGroup value={timeCommitment} onValueChange={setTimeCommitment} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="time-low" />
                    <Label htmlFor="time-low">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="time-medium" />
                    <Label htmlFor="time-medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="time-high" />
                    <Label htmlFor="time-high">High</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Preferred Learning Style</Label>
                <Select value={learningStyle} onValueChange={setLearningStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select learning style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual (Videos, Diagrams)</SelectItem>
                    <SelectItem value="reading">Reading (Books, Articles)</SelectItem>
                    <SelectItem value="interactive">Interactive (Projects, Exercises)</SelectItem>
                    <SelectItem value="mixed">Mixed (Combination)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-projects"
                    checked={includeProjects}
                    onCheckedChange={(checked: CheckedState) => setIncludeProjects(checked === true)}
                    className="mr-2"
                  />
                  <Label htmlFor="include-projects">Include hands-on projects</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-certifications"
                    checked={includeCertifications}
                    onCheckedChange={(checked: CheckedState) => setIncludeCertifications(checked === true)}
                  />
                  <Label htmlFor="include-certifications">Include certification opportunities</Label>
                </div>
              </div>

              <Button className="w-full">
                Generate Learning Path
                <Lightbulb className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {selectedSkillData && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedSkillData.name}</CardTitle>
                <CardDescription>{selectedSkillData.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Current Level</div>
                    <div className="font-medium">{selectedSkillData.currentLevel}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Target Level</div>
                    <div className="font-medium">{selectedSkillData.targetLevel}</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Estimated Time to Master</span>
                    <span>{selectedSkillData.estimatedHours} hours</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Difficulty</div>
                    <div className="font-medium">{selectedSkillData.difficulty}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Prerequisites</div>
                    <div className="text-sm">
                      {selectedSkillData.prerequisites.map((prereq, index) => (
                        <Badge key={index} variant="secondary" className="mr-1 mb-1">
                          {prereq}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Learning Resources and Paths */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="my-paths" onValueChange={setSelectedTab}>
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="my-paths">My Learning Paths</TabsTrigger>
                <TabsTrigger value="resources">Learning Resources</TabsTrigger>
              </TabsList>

              {selectedTab === "resources" && (
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search resources..."
                    className="pl-8 w-[250px] h-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              )}
            </div>

            <TabsContent value="my-paths" className="space-y-6">
              {learningPaths.map((path) => (
                <Card key={path.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{path.title}</CardTitle>
                        <CardDescription>{path.description}</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Path</DropdownMenuItem>
                          <DropdownMenuItem>Share Path</DropdownMenuItem>
                          <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete Path</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-sm text-muted-foreground">Total Hours</div>
                          <div className="font-medium">{path.totalHours}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Remaining</div>
                          <div className="font-medium">{path.remainingHours} hours</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Courses</div>
                          <div className="font-medium">{path.courses}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Projects</div>
                          <div className="font-medium">{path.projects}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Skills Covered</div>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">Last updated: {formatDate(path.lastUpdated)}</div>
                    <Button asChild>
                      <Link href={`/learning-path/${path.id}`}>
                        Continue Learning
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              {selectedSkillData && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Resources for {selectedSkillData.name}</h2>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Filter Resources</SheetTitle>
                          <SheetDescription>Refine the resources displayed</SheetDescription>
                        </SheetHeader>
                        <div className="py-6 space-y-6">
                          <div className="space-y-2">
                            <Label>Resource Type</Label>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-courses" defaultChecked />
                                <Label htmlFor="filter-courses">Courses</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-projects" defaultChecked />
                                <Label htmlFor="filter-projects">Projects</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-books" defaultChecked />
                                <Label htmlFor="filter-books">Books</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-certifications" defaultChecked />
                                <Label htmlFor="filter-certifications">Certifications</Label>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Difficulty Level</Label>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-beginner" defaultChecked />
                                <Label htmlFor="filter-beginner">Beginner</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-intermediate" defaultChecked />
                                <Label htmlFor="filter-intermediate">Intermediate</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-advanced" defaultChecked />
                                <Label htmlFor="filter-advanced">Advanced</Label>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Cost</Label>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-free" defaultChecked />
                                <Label htmlFor="filter-free">Free</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="filter-paid" defaultChecked />
                                <Label htmlFor="filter-paid">Paid</Label>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Duration</Label>
                            <Slider defaultValue={[120]} max={200} step={10} />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Any</span>
                              <span>Up to 120 hours</span>
                            </div>
                          </div>

                          <Button className="w-full">Apply Filters</Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="courses">
                      <AccordionTrigger className="text-lg font-medium">Courses & Tutorials</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          {filterResources(selectedSkillData.resources)
                            .filter((resource) => resource.type === "course")
                            .map((resource) => (
                              <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="projects">
                      <AccordionTrigger className="text-lg font-medium">Projects & Practice</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          {filterResources(selectedSkillData.resources)
                            .filter((resource) => resource.type === "project")
                            .map((resource) => (
                              <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="certifications">
                      <AccordionTrigger className="text-lg font-medium">Certifications</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          {filterResources(selectedSkillData.resources)
                            .filter((resource) => resource.type === "certification")
                            .map((resource) => (
                              <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="books">
                      <AccordionTrigger className="text-lg font-medium">Books & Reading Materials</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          {filterResources(selectedSkillData.resources)
                            .filter((resource) => resource.type === "book")
                            .map((resource) => (
                              <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Sample Learning Path */}
          {selectedTab === "resources" && selectedSkillData && (
            <Card>
              <CardHeader>
                <CardTitle>Recommended Learning Path</CardTitle>
                <CardDescription>Personalized path based on your preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Path for {selectedSkillData.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        From {selectedSkillData.currentLevel} to {selectedSkillData.targetLevel}
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {selectedSkillData.estimatedHours} hours total
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="relative pl-8 pb-8 border-l border-muted">
                      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs">
                        1
                      </div>
                      <div className="mb-2">
                        <div className="font-medium">Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Master the basics first</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>Python for Data Science and Machine Learning Bootcamp</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Estimated: 40 hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-8 pb-8 border-l border-muted">
                      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs">
                        2
                      </div>
                      <div className="mb-2">
                        <div className="font-medium">Practical Application</div>
                        <div className="text-sm text-muted-foreground">Apply your knowledge</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Python Data Analysis Project</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Estimated: 10 hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs">
                        3
                      </div>
                      <div className="mb-2">
                        <div className="font-medium">Advanced Concepts</div>
                        <div className="text-sm text-muted-foreground">Deepen your expertise</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>Advanced Python Programming</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Estimated: 30 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full justify-between">
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Path
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{resource.title}</h3>
            <p className="text-sm text-muted-foreground">{resource.description}</p>
          </div>
          <Badge
            variant="outline"
            className={
              resource.type === "course"
                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                : resource.type === "project"
                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                  : resource.type === "certification"
                    ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-100"
            }
          >
            {resource.type}
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
          <div>
            <div className="text-muted-foreground">Provider</div>
            <div>{resource.provider}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Duration</div>
            <div>{resource.duration}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Difficulty</div>
            <div>{resource.difficulty}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Cost</div>
            <div>{resource.cost}</div>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(resource.rating) ? "fill-current" : ""}`} />
            ))}
            <span className="ml-1 text-sm">{resource.rating}</span>
          </div>
          <div className="ml-auto space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={resource.url} target="_blank">
                View Details
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            <Button size="sm">
              <Plus className="mr-1 h-3 w-3" />
              Add to Path
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

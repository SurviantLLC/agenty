"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ChevronRight, Filter, Home, Plus, Search, Star, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface Skill {
  id: string;
  name: string;
  category: string;
  userLevel: number;
  targetLevel: number;
  importance: string;
  description: string;
  resources: number;
  industries: string[];
}

interface CareerPath {
  id: string;
  title: string;
  match: number;
  keySkills: string[];
}

export default function SkillsHub() {
  const [selectedCareer, setSelectedCareer] = useState("data-scientist")
  const [searchQuery, setSearchQuery] = useState("")
  const [showOnlyGaps, setShowOnlyGaps] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Sample skills data
  const skillsData = {
    technical: [
      {
        id: "python",
        name: "Python Programming",
        userLevel: 75,
        targetLevel: 90,
        importance: "high",
        category: "programming",
        industries: ["tech", "finance", "research"],
        description: "Ability to write efficient Python code for data analysis and automation",
        resources: 12,
      },
      {
        id: "sql",
        name: "SQL & Databases",
        userLevel: 60,
        targetLevel: 85,
        importance: "high",
        category: "data",
        industries: ["tech", "finance", "healthcare"],
        description: "Knowledge of database design and complex SQL queries",
        resources: 8,
      },
      {
        id: "data-visualization",
        name: "Data Visualization",
        userLevel: 70,
        targetLevel: 80,
        importance: "medium",
        category: "data",
        industries: ["tech", "marketing", "research"],
        description: "Creating clear and insightful data visualizations",
        resources: 15,
      },
      {
        id: "machine-learning",
        name: "Machine Learning",
        userLevel: 40,
        targetLevel: 75,
        importance: "high",
        category: "ai",
        industries: ["tech", "research", "healthcare"],
        description: "Understanding and implementing machine learning algorithms",
        resources: 20,
      },
      {
        id: "statistics",
        name: "Statistical Analysis",
        userLevel: 65,
        targetLevel: 80,
        importance: "high",
        category: "data",
        industries: ["research", "finance", "healthcare"],
        description: "Applying statistical methods to analyze data",
        resources: 10,
      },
      {
        id: "cloud-computing",
        name: "Cloud Computing",
        userLevel: 30,
        targetLevel: 70,
        importance: "medium",
        category: "infrastructure",
        industries: ["tech", "finance"],
        description: "Working with cloud platforms like AWS, Azure, or GCP",
        resources: 14,
      },
      {
        id: "big-data",
        name: "Big Data Technologies",
        userLevel: 25,
        targetLevel: 65,
        importance: "medium",
        category: "data",
        industries: ["tech", "finance", "retail"],
        description: "Working with tools like Hadoop, Spark, and distributed computing",
        resources: 9,
      },
    ],
    soft: [
      {
        id: "communication",
        name: "Communication",
        userLevel: 80,
        targetLevel: 85,
        importance: "high",
        category: "interpersonal",
        industries: ["all"],
        description: "Clearly conveying complex technical concepts to various audiences",
        resources: 6,
      },
      {
        id: "problem-solving",
        name: "Problem Solving",
        userLevel: 85,
        targetLevel: 90,
        importance: "high",
        category: "cognitive",
        industries: ["all"],
        description: "Approaching complex problems with structured solutions",
        resources: 5,
      },
      {
        id: "teamwork",
        name: "Teamwork",
        userLevel: 75,
        targetLevel: 80,
        importance: "medium",
        category: "interpersonal",
        industries: ["all"],
        description: "Collaborating effectively in cross-functional teams",
        resources: 4,
      },
      {
        id: "project-management",
        name: "Project Management",
        userLevel: 60,
        targetLevel: 75,
        importance: "medium",
        category: "management",
        industries: ["all"],
        description: "Planning, executing, and closing projects efficiently",
        resources: 8,
      },
      {
        id: "critical-thinking",
        name: "Critical Thinking",
        userLevel: 80,
        targetLevel: 85,
        importance: "high",
        category: "cognitive",
        industries: ["all"],
        description: "Evaluating information objectively to form sound judgments",
        resources: 7,
      },
    ],
    domain: [
      {
        id: "finance-knowledge",
        name: "Finance Knowledge",
        userLevel: 40,
        targetLevel: 70,
        importance: "medium",
        category: "industry",
        industries: ["finance", "consulting"],
        description: "Understanding financial markets, instruments, and analysis",
        resources: 11,
      },
      {
        id: "healthcare-domain",
        name: "Healthcare Domain",
        userLevel: 20,
        targetLevel: 60,
        importance: "low",
        category: "industry",
        industries: ["healthcare", "research"],
        description: "Knowledge of healthcare operations, regulations, and terminology",
        resources: 9,
      },
      {
        id: "marketing-analytics",
        name: "Marketing Analytics",
        userLevel: 55,
        targetLevel: 75,
        importance: "medium",
        category: "industry",
        industries: ["marketing", "retail"],
        description: "Applying data analysis to marketing strategies and campaigns",
        resources: 13,
      },
    ],
  }

  // Career paths with required skills
  const careerPaths: CareerPath[] = [
    {
      id: "data-scientist",
      title: "Data Scientist",
      match: 72,
      keySkills: ["Python Programming", "Machine Learning", "Statistical Analysis", "SQL & Databases"],
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      match: 85,
      keySkills: ["SQL & Databases", "Data Visualization", "Statistical Analysis", "Python Programming"],
    },
    {
      id: "ml-engineer",
      title: "Machine Learning Engineer",
      match: 65,
      keySkills: ["Machine Learning", "Python Programming", "Big Data Technologies", "Cloud Computing"],
    },
    {
      id: "business-analyst",
      title: "Business Analyst",
      match: 78,
      keySkills: ["Data Visualization", "SQL & Databases", "Communication", "Critical Thinking"],
    },
  ]

  // Get all skills in a flat array
  const allSkills: Skill[] = [...skillsData.technical, ...skillsData.soft, ...skillsData.domain]

  // Filter skills based on search query, category, and gap setting
  function filterSkills(skills: Skill[]): Skill[] {
    return skills.filter((skill: Skill) => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory
      const matchesGap = !showOnlyGaps || skill.userLevel < skill.targetLevel
      return matchesSearch && matchesCategory && matchesGap
    })
  }

  // Get the selected career
  const selectedCareerData = careerPaths.find((career) => career.id === selectedCareer)

  // Calculate skill gaps for the selected career
  const getSkillGapsForCareer = () => {
    if (!selectedCareerData) return []

    return selectedCareerData.keySkills
      .map((skillName) => {
        const skill = allSkills.find((s) => s.name === skillName)
        if (!skill) return null
        return {
          ...skill,
          gap: skill.targetLevel - skill.userLevel,
        }
      })
      .filter((skill) => skill !== null)
      .sort((a, b) => b.gap - a.gap)
  }

  const skillGaps = getSkillGapsForCareer()

  // Calculate overall skill proficiency
  const calculateOverallProficiency = (skills: Skill[]): number => {
    if (skills.length === 0) return 0
    const sum = skills.reduce((acc, skill) => acc + skill.userLevel, 0)
    return Math.round(sum / skills.length)
  }

  const technicalProficiency = calculateOverallProficiency(skillsData.technical)
  const softProficiency = calculateOverallProficiency(skillsData.soft)
  const domainProficiency = calculateOverallProficiency(skillsData.domain)
  const overallProficiency = calculateOverallProficiency(allSkills)

  // Priority recommendations based on gaps and importance
  const priorityRecommendations = allSkills
    .filter((skill) => skill.importance === "high" && skill.targetLevel - skill.userLevel > 15)
    .sort((a, b) => b.targetLevel - b.userLevel - (a.targetLevel - a.userLevel))
    .slice(0, 3)

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
            <span>Skills Hub</span>
          </div>
          <h1 className="text-3xl font-bold">Skills Hub</h1>
          <p className="text-muted-foreground mt-1">Analyze and develop your professional skills</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" asChild>
            <Link href="/learning-path">
              <BookOpen className="h-4 w-4 mr-2" />
              Learning Paths
            </Link>
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Skill
          </Button>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
            <CardDescription>Your current skill proficiency levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold">{overallProficiency}%</div>
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
                      strokeDasharray={`${overallProficiency * 2.51} 251`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="text-center mb-4">
                  <div className="text-sm text-muted-foreground">Overall Proficiency</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Technical Skills</span>
                    <span className="font-medium">{technicalProficiency}%</span>
                  </div>
                  <Progress value={technicalProficiency} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Soft Skills</span>
                    <span className="font-medium">{softProficiency}%</span>
                  </div>
                  <Progress value={softProficiency} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Domain Knowledge</span>
                    <span className="font-medium">{domainProficiency}%</span>
                  </div>
                  <Progress value={domainProficiency} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Skill Gap Analysis</CardTitle>
            <CardDescription>Areas to focus for your target career</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select value={selectedCareer} onValueChange={setSelectedCareer}>
                <SelectTrigger>
                  <SelectValue placeholder="Select career path" />
                </SelectTrigger>
                <SelectContent>
                  {careerPaths.map((career) => (
                    <SelectItem key={career.id} value={career.id}>
                      {career.title} ({career.match}% Match)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {skillGaps.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>
                      {skill.userLevel}% / {skill.targetLevel}%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-secondary rounded-full overflow-hidden relative">
                    {/* Target level indicator */}
                    <div
                      className="absolute h-full border-r-2 border-primary"
                      style={{ left: `${skill.targetLevel}%` }}
                    />
                    {/* Current level */}
                    <div
                      className={`h-full ${skill.userLevel >= skill.targetLevel ? "bg-green-500" : "bg-amber-500"}`}
                      style={{ width: `${skill.userLevel}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Current</span>
                    <span>Target</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/learning-path">
                  Create Learning Path
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Priority Recommendations */}
      <h2 className="text-xl font-semibold mb-4">Priority Skill Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {priorityRecommendations.map((skill) => (
          <Card key={skill.name} className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                  High Priority
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span>Top Recommendation</span>
                </div>
              </div>
              <CardTitle className="text-lg mt-2">{skill.name}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current Level</span>
                    <span>
                      {skill.userLevel}% / {skill.targetLevel}%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-secondary rounded-full overflow-hidden relative">
                    <div
                      className="absolute h-full border-r-2 border-primary"
                      style={{ left: `${skill.targetLevel}%` }}
                    />
                    <div className="h-full bg-amber-500" style={{ width: `${skill.userLevel}%` }} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.industries.map((industry) => (
                    <Badge key={industry} variant="secondary">
                      {industry}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{skill.resources} learning resources</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/learning-path?skill=${encodeURIComponent(skill.name)}`}>
                      Start Learning
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Inventory */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Skills Inventory</h2>
        <div className="flex flex-wrap gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search skills..."
              className="pl-8 w-full md:w-[200px] h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Skills</SheetTitle>
                <SheetDescription>Refine the skills displayed in your inventory</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Skill Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="data">Data</SelectItem>
                      <SelectItem value="ai">AI & Machine Learning</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="interpersonal">Interpersonal</SelectItem>
                      <SelectItem value="cognitive">Cognitive</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="industry">Industry Knowledge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-gaps">Show Only Skill Gaps</Label>
                    <Switch id="show-gaps" checked={showOnlyGaps} onCheckedChange={setShowOnlyGaps} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Only show skills where your current level is below the target level
                  </p>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Tabs defaultValue="technical" className="mb-8">
        <TabsList>
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="domain">Domain Knowledge</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="mt-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 p-4 text-sm font-medium border-b bg-muted/50">
              <div className="col-span-3">Skill Name</div>
              <div className="col-span-4">Proficiency</div>
              <div className="col-span-2">Importance</div>
              <div className="col-span-2">Industries</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filterSkills(skillsData.technical).map((skill) => (
                <div key={skill.name} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-3 font-medium">{skill.name}</div>
                  <div className="col-span-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Current: {skill.userLevel}%</span>
                      <span>Target: {skill.targetLevel}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative">
                      <div
                        className="absolute h-full border-r-2 border-primary"
                        style={{ left: `${skill.targetLevel}%` }}
                      />
                      <div
                        className={`h-full ${skill.userLevel >= skill.targetLevel ? "bg-green-500" : "bg-amber-500"}`}
                        style={{ width: `${skill.userLevel}%` }}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge
                      variant="outline"
                      className={
                        skill.importance === "high"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : skill.importance === "medium"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-100"
                      }
                    >
                      {skill.importance}
                    </Badge>
                  </div>
                  <div className="col-span-2 flex flex-wrap gap-1">
                    {skill.industries.slice(0, 2).map((industry) => (
                      <Badge key={industry} variant="secondary" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                    {skill.industries.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{skill.industries.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Update Proficiency</DropdownMenuItem>
                        <DropdownMenuItem>View Resources</DropdownMenuItem>
                        <DropdownMenuItem>Add to Learning Path</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="soft" className="mt-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 p-4 text-sm font-medium border-b bg-muted/50">
              <div className="col-span-3">Skill Name</div>
              <div className="col-span-4">Proficiency</div>
              <div className="col-span-2">Importance</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filterSkills(skillsData.soft).map((skill) => (
                <div key={skill.name} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-3 font-medium">{skill.name}</div>
                  <div className="col-span-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Current: {skill.userLevel}%</span>
                      <span>Target: {skill.targetLevel}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative">
                      <div
                        className="absolute h-full border-r-2 border-primary"
                        style={{ left: `${skill.targetLevel}%` }}
                      />
                      <div
                        className={`h-full ${skill.userLevel >= skill.targetLevel ? "bg-green-500" : "bg-amber-500"}`}
                        style={{ width: `${skill.userLevel}%` }}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge
                      variant="outline"
                      className={
                        skill.importance === "high"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : skill.importance === "medium"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-100"
                      }
                    >
                      {skill.importance}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    <Badge variant="secondary">{skill.category}</Badge>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Update Proficiency</DropdownMenuItem>
                        <DropdownMenuItem>View Resources</DropdownMenuItem>
                        <DropdownMenuItem>Add to Learning Path</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="domain" className="mt-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 p-4 text-sm font-medium border-b bg-muted/50">
              <div className="col-span-3">Knowledge Area</div>
              <div className="col-span-4">Proficiency</div>
              <div className="col-span-2">Importance</div>
              <div className="col-span-2">Industries</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filterSkills(skillsData.domain).map((skill) => (
                <div key={skill.name} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-3 font-medium">{skill.name}</div>
                  <div className="col-span-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Current: {skill.userLevel}%</span>
                      <span>Target: {skill.targetLevel}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative">
                      <div
                        className="absolute h-full border-r-2 border-primary"
                        style={{ left: `${skill.targetLevel}%` }}
                      />
                      <div
                        className={`h-full ${skill.userLevel >= skill.targetLevel ? "bg-green-500" : "bg-amber-500"}`}
                        style={{ width: `${skill.userLevel}%` }}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge
                      variant="outline"
                      className={
                        skill.importance === "high"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : skill.importance === "medium"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-100"
                      }
                    >
                      {skill.importance}
                    </Badge>
                  </div>
                  <div className="col-span-2 flex flex-wrap gap-1">
                    {skill.industries.slice(0, 2).map((industry) => (
                      <Badge key={industry} variant="secondary" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                    {skill.industries.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{skill.industries.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Update Proficiency</DropdownMenuItem>
                        <DropdownMenuItem>View Resources</DropdownMenuItem>
                        <DropdownMenuItem>Add to Learning Path</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Industry Alignment */}
      <h2 className="text-xl font-semibold mb-4">Industry Alignment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Technology</CardTitle>
            <CardDescription>Alignment with tech industry requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl font-bold">78%</div>
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
                    strokeDasharray="195.8 251"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Top skills:</span>
                <span className="font-medium">Python, SQL, Cloud</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Key gaps:</span>
                <span className="font-medium">Machine Learning, Big Data</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Finance</CardTitle>
            <CardDescription>Alignment with finance industry requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl font-bold">65%</div>
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
                    strokeDasharray="163.15 251"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Top skills:</span>
                <span className="font-medium">SQL, Data Visualization</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Key gaps:</span>
                <span className="font-medium">Finance Knowledge, Statistics</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Healthcare</CardTitle>
            <CardDescription>Alignment with healthcare industry requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl font-bold">52%</div>
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
                    strokeDasharray="130.52 251"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Top skills:</span>
                <span className="font-medium">Statistics, Communication</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Key gaps:</span>
                <span className="font-medium">Healthcare Systems, ML</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

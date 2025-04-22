"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Award,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  Filter,
  Home,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export default function CertificationCenter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedCost, setSelectedCost] = useState("all")

  // Sample certifications data
  const certificationsData = {
    featured: [
      {
        id: "cert-1",
        title: "Data Science Professional Certificate",
        provider: "IBM",
        category: "data-science",
        difficulty: "intermediate",
        duration: "6 months",
        cost: "paid",
        costAmount: "$39/month",
        rating: 4.8,
        reviews: 12500,
        description:
          "Develop skills in Python, SQL, data visualization, machine learning, and more to launch a career in data science.",
        skills: ["Python", "SQL", "Machine Learning", "Data Visualization", "Statistics"],
        requirements: ["Basic programming knowledge", "High school mathematics"],
        benefits: [
          "Industry-recognized credential",
          "Hands-on projects for portfolio",
          "Job-ready skills",
          "Career support resources",
        ],
        externalLink: "#",
        popularity: 95,
        completionRate: 78,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "cert-2",
        title: "Google Project Management Certificate",
        provider: "Google",
        category: "project-management",
        difficulty: "beginner",
        duration: "3 months",
        cost: "paid",
        costAmount: "$49/month",
        rating: 4.7,
        reviews: 9800,
        description:
          "Gain the skills needed to start a career in project management with no degree or experience required.",
        skills: ["Project Planning", "Risk Management", "Agile Methodologies", "Team Leadership"],
        requirements: ["No prior experience needed", "High school diploma or equivalent"],
        benefits: [
          "Entry-level job readiness",
          "Transferable skills",
          "Flexible learning schedule",
          "Access to job search resources",
        ],
        externalLink: "#",
        popularity: 92,
        completionRate: 85,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "cert-3",
        title: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        category: "cloud-computing",
        difficulty: "advanced",
        duration: "4 months",
        cost: "paid",
        costAmount: "$150 exam fee",
        rating: 4.6,
        reviews: 7500,
        description:
          "Validate your expertise in designing distributed systems on AWS to increase your earning potential.",
        skills: ["Cloud Architecture", "AWS Services", "Security", "Networking", "Storage Solutions"],
        requirements: ["1+ year AWS experience", "Basic IT knowledge"],
        benefits: [
          "Industry-leading certification",
          "Higher salary potential",
          "Recognized globally",
          "Access to AWS certification community",
        ],
        externalLink: "#",
        popularity: 90,
        completionRate: 65,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    inProgress: [
      {
        id: "cert-4",
        title: "Python for Data Science Specialization",
        provider: "Coursera",
        category: "programming",
        progress: 65,
        startDate: "2024-03-15",
        estimatedCompletion: "2024-06-15",
        nextMilestone: "Complete Advanced Python Module",
        nextDeadline: "2024-05-10",
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-5",
        title: "Agile Project Management",
        provider: "PMI",
        category: "project-management",
        progress: 30,
        startDate: "2024-04-01",
        estimatedCompletion: "2024-07-01",
        nextMilestone: "Complete Scrum Fundamentals",
        nextDeadline: "2024-05-15",
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
    completed: [
      {
        id: "cert-6",
        title: "SQL Fundamentals",
        provider: "DataCamp",
        category: "data",
        completionDate: "2024-02-10",
        verificationId: "DC-SQL-12345",
        verificationLink: "#",
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
    all: [
      {
        id: "cert-7",
        title: "Machine Learning Engineer Certification",
        provider: "Microsoft",
        category: "artificial-intelligence",
        difficulty: "advanced",
        duration: "8 months",
        cost: "paid",
        costAmount: "$99/month",
        rating: 4.5,
        reviews: 3200,
        description: "Master machine learning algorithms and deployment on Azure.",
        skills: ["Machine Learning", "Azure ML", "Python", "Deep Learning"],
        popularity: 88,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-8",
        title: "UX Design Professional Certificate",
        provider: "Google",
        category: "design",
        difficulty: "beginner",
        duration: "6 months",
        cost: "paid",
        costAmount: "$49/month",
        rating: 4.8,
        reviews: 5600,
        description: "Launch your career in UX design with no prior experience required.",
        skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
        popularity: 86,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-9",
        title: "Cybersecurity Analyst",
        provider: "IBM",
        category: "security",
        difficulty: "intermediate",
        duration: "5 months",
        cost: "paid",
        costAmount: "$39/month",
        rating: 4.6,
        reviews: 4100,
        description: "Develop the skills to protect organizations from cyber threats.",
        skills: ["Network Security", "Threat Detection", "Incident Response", "Security Tools"],
        popularity: 85,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-10",
        title: "Front-End Web Developer",
        provider: "Meta",
        category: "web-development",
        difficulty: "intermediate",
        duration: "7 months",
        cost: "paid",
        costAmount: "$49/month",
        rating: 4.7,
        reviews: 6800,
        description: "Build a foundation in front-end development with React and responsive design.",
        skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
        popularity: 89,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-11",
        title: "Agile Certified Practitioner (PMI-ACP)",
        provider: "PMI",
        category: "project-management",
        difficulty: "advanced",
        duration: "3 months",
        cost: "paid",
        costAmount: "$495 exam fee",
        rating: 4.5,
        reviews: 3500,
        description: "Demonstrate your knowledge of agile principles and practices.",
        skills: ["Agile Methodologies", "Scrum", "Kanban", "Lean", "XP"],
        popularity: 82,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-12",
        title: "Data Analytics Fundamentals",
        provider: "Google",
        category: "data",
        difficulty: "beginner",
        duration: "4 months",
        cost: "paid",
        costAmount: "$39/month",
        rating: 4.9,
        reviews: 7200,
        description: "Learn to collect, transform, and organize data to draw business insights.",
        skills: ["Data Analysis", "SQL", "Spreadsheets", "Data Visualization", "R Programming"],
        popularity: 91,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-13",
        title: "CompTIA Security+",
        provider: "CompTIA",
        category: "security",
        difficulty: "intermediate",
        duration: "2 months",
        cost: "paid",
        costAmount: "$349 exam fee",
        rating: 4.6,
        reviews: 8900,
        description: "Validate baseline cybersecurity skills required for IT security roles.",
        skills: ["Network Security", "Threats & Vulnerabilities", "Cryptography", "Identity Management"],
        popularity: 87,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-14",
        title: "Certified Scrum Master (CSM)",
        provider: "Scrum Alliance",
        category: "project-management",
        difficulty: "intermediate",
        duration: "2 weeks",
        cost: "paid",
        costAmount: "$995 course fee",
        rating: 4.7,
        reviews: 5100,
        description: "Learn to facilitate daily scrums, sprint planning, and retrospectives.",
        skills: ["Scrum Framework", "Agile Principles", "Team Facilitation", "Sprint Planning"],
        popularity: 84,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "cert-15",
        title: "Responsive Web Design",
        provider: "freeCodeCamp",
        category: "web-development",
        difficulty: "beginner",
        duration: "1 month",
        cost: "free",
        costAmount: "$0",
        rating: 4.8,
        reviews: 12000,
        description: "Learn HTML, CSS, and responsive design principles with hands-on projects.",
        skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "CSS Grid"],
        popularity: 93,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  }

  // Experts for guidance
  const experts = [
    {
      id: "expert-1",
      name: "Dr. Sarah Chen",
      title: "Data Science Lead",
      company: "Tech Innovations Inc.",
      expertise: ["Data Science", "Machine Learning", "Python"],
      certifications: ["IBM Data Science Professional", "AWS Machine Learning Specialty"],
      rating: 4.9,
      sessions: 124,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "expert-2",
      name: "Michael Rodriguez",
      title: "Senior Project Manager",
      company: "Global Solutions",
      expertise: ["Project Management", "Agile", "Scrum"],
      certifications: ["PMP", "CSM", "PMI-ACP"],
      rating: 4.8,
      sessions: 98,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "expert-3",
      name: "Jennifer Wu",
      title: "Cloud Architect",
      company: "CloudScale Systems",
      expertise: ["AWS", "Azure", "Cloud Architecture"],
      certifications: ["AWS Solutions Architect", "Azure Solutions Architect"],
      rating: 4.7,
      sessions: 87,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Filter certifications based on search and filters
  const filterCertifications = (certifications) => {
    return certifications.filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cert.description && cert.description.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || cert.difficulty === selectedDifficulty
      const matchesDuration =
        selectedDuration === "all" ||
        (selectedDuration === "short" && cert.duration.includes("week")) ||
        (selectedDuration === "medium" && (cert.duration.includes("month") || Number.parseInt(cert.duration) <= 3)) ||
        (selectedDuration === "long" && Number.parseInt(cert.duration) > 3)
      const matchesCost = selectedCost === "all" || cert.cost === selectedCost

      return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration && matchesCost
    })
  }

  const filteredCertifications = filterCertifications(certificationsData.all)

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
            <span>Certification Center</span>
          </div>
          <h1 className="text-3xl font-bold">Micro-Certification Center</h1>
          <p className="text-muted-foreground mt-1">Discover, track, and earn industry-recognized credentials</p>
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
            Add Certification
          </Button>
        </div>
      </div>

      {/* Featured Certifications */}
      <h2 className="text-xl font-semibold mb-4">Featured Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {certificationsData.featured.map((cert) => (
          <Card key={cert.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.provider}
                    className="w-12 h-12 object-contain rounded-md border p-1"
                  />
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        cert.difficulty === "beginner"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : cert.difficulty === "intermediate"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {cert.difficulty}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-1">{cert.provider}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-500" />
                  <span className="text-sm font-medium">{cert.rating}</span>
                </div>
              </div>
              <CardTitle className="text-lg mt-2">{cert.title}</CardTitle>
              <CardDescription className="line-clamp-2">{cert.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{cert.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cost</div>
                    <div className="font-medium">{cert.costAmount}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Key Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{cert.skills.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Benefits</div>
                  <ul className="text-sm space-y-1">
                    {cert.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{cert.reviews.toLocaleString()} reviews</span>
              </div>
              <Button asChild>
                <Link href={`/certifications/${cert.id}`}>
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Your Certifications */}
      <h2 className="text-xl font-semibold mb-4">Your Certifications</h2>
      <Tabs defaultValue="in-progress" className="mb-8">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="mt-6">
          {certificationsData.inProgress.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.inProgress.map((cert) => (
                <Card key={cert.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.provider}
                          className="w-10 h-10 object-contain rounded-md border p-1"
                        />
                        <div>
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <div className="text-sm text-muted-foreground">{cert.provider}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        In Progress
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{cert.progress}%</span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Started</div>
                          <div>{formatDate(cert.startDate)}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Est. Completion</div>
                          <div>{formatDate(cert.estimatedCompletion)}</div>
                        </div>
                      </div>

                      <div className="border rounded-md p-3 bg-muted/30">
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <div className="text-sm font-medium">Next Milestone</div>
                            <div className="text-sm text-muted-foreground">{cert.nextMilestone}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Due: {formatDate(cert.nextDeadline)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/certifications/${cert.id}/progress`}>
                        Continue Learning
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/10">
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Certifications In Progress</h3>
              <p className="text-muted-foreground mb-4">Start your certification journey today!</p>
              <Button>Browse Certifications</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          {certificationsData.completed.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.completed.map((cert) => (
                <Card key={cert.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.provider}
                          className="w-10 h-10 object-contain rounded-md border p-1"
                        />
                        <div>
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <div className="text-sm text-muted-foreground">{cert.provider}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Completed on</div>
                        <div className="font-medium">{formatDate(cert.completionDate)}</div>
                      </div>

                      <div className="border rounded-md p-3 bg-muted/30">
                        <div className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <div className="text-sm font-medium">Verification ID</div>
                            <div className="text-sm">{cert.verificationId}</div>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
                              <Link href={cert.verificationLink} target="_blank">
                                Verify Certificate
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Download Certificate</Button>
                    <Button variant="outline">Share</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/10">
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Completed Certifications</h3>
              <p className="text-muted-foreground mb-4">Complete your first certification to see it here!</p>
              <Button>View In-Progress Certifications</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="text-center py-12 border rounded-lg bg-muted/10">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Saved Certifications</h3>
            <p className="text-muted-foreground mb-4">Save certifications you're interested in for later!</p>
            <Button>Browse Certifications</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Certification Database */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Certification Database</h2>
        <div className="flex flex-wrap gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search certifications..."
              className="pl-8 w-full md:w-[250px] h-9"
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
                <SheetTitle>Filter Certifications</SheetTitle>
                <SheetDescription>Refine the certifications displayed</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="project-management">Project Management</SelectItem>
                      <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                      <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="data">Data Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                    <SelectTrigger id="duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Duration</SelectItem>
                      <SelectItem value="short">Short (&lt; 1 month)</SelectItem>
                      <SelectItem value="medium">Medium (1-3 months)</SelectItem>
                      <SelectItem value="long">Long (&gt; 3 months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cost">Cost</Label>
                  <Select value={selectedCost} onValueChange={setSelectedCost}>
                    <SelectTrigger id="cost">
                      <SelectValue placeholder="Select cost" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Cost</SelectItem>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="rounded-md border mb-8">
        <div className="grid grid-cols-12 p-4 text-sm font-medium border-b bg-muted/50">
          <div className="col-span-5">Certification</div>
          <div className="col-span-2">Provider</div>
          <div className="col-span-1">Difficulty</div>
          <div className="col-span-1">Duration</div>
          <div className="col-span-1">Cost</div>
          <div className="col-span-1">Rating</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        <div className="divide-y">
          {filteredCertifications.length > 0 ? (
            filteredCertifications.map((cert) => (
              <div key={cert.id} className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-5 flex items-center gap-3">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.provider}
                    className="w-8 h-8 object-contain rounded-md border p-1"
                  />
                  <div>
                    <div className="font-medium">{cert.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {cert.description || "No description available"}
                    </div>
                  </div>
                </div>
                <div className="col-span-2">{cert.provider}</div>
                <div className="col-span-1">
                  <Badge
                    variant="outline"
                    className={
                      cert.difficulty === "beginner"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : cert.difficulty === "intermediate"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {cert.difficulty}
                  </Badge>
                </div>
                <div className="col-span-1">{cert.duration}</div>
                <div className="col-span-1">{cert.cost === "free" ? "Free" : cert.costAmount || "Paid"}</div>
                <div className="col-span-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span>{cert.rating}</span>
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
                      <DropdownMenuItem asChild>
                        <Link href={`/certifications/${cert.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Save for Later</DropdownMenuItem>
                      <DropdownMenuItem>Add to Learning Path</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <Search className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Certifications Found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedDifficulty("all")
                  setSelectedDuration("all")
                  setSelectedCost("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Expert Guidance */}
      <h2 className="text-xl font-semibold mb-4">Connect with Certification Experts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {experts.map((expert) => (
          <Card key={expert.id}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-4">
                <Avatar className="h-20 w-20 mb-3">
                  <AvatarImage src={expert.image || "/placeholder.svg"} alt={expert.name} />
                  <AvatarFallback>
                    {expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg">{expert.name}</h3>
                <p className="text-sm text-muted-foreground">{expert.title}</p>
                <p className="text-sm text-muted-foreground">{expert.company}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm">
                    {expert.rating} • {expert.sessions} sessions
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium mb-1">Expertise</div>
                  <div className="flex flex-wrap gap-1">
                    {expert.expertise.map((item, index) => (
                      <Badge key={index} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Certifications</div>
                  <div className="flex flex-wrap gap-1">
                    {expert.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/10 text-primary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Schedule Session
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Verification Tools */}
      <h2 className="text-xl font-semibold mb-4">Certification Verification Tools</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Verify a Certification</CardTitle>
          <CardDescription>Check the authenticity of a certification using its verification ID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="verification-id" className="mb-2 block">
                Verification ID
              </Label>
              <Input id="verification-id" placeholder="Enter certification verification ID" />
            </div>
            <div className="flex items-end">
              <Button className="w-full">Verify Certificate</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

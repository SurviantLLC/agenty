"use client"

import { useState } from "react"
import { type CheckedState } from "@radix-ui/react-checkbox"

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  industry: string;
  duration: string;
  paid: boolean;
  salary: string;
  matchScore: number;
  deadline: string;
  description?: string;
  requirements?: string[];
  skills: string[];
  applicationProcess?: string[];
  companySize?: string;
  companyRating?: number;
  logo: string;
  submittedDate?: string;
  status?: string;
  nextStep?: string;
  completedRequirements?: number;
  totalRequirements?: number;
}

type SortKey = "match" | "deadline" | "salary";

import Link from "next/link"
import {
  AlertCircle,
  ArrowUpDown,
  Briefcase,
  Building,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Filter,
  Home,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  ThumbsUp,
  Users,
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function InternshipExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedPaid, setSelectedPaid] = useState("all")
  const [sortBy, setSortBy] = useState("match")
  const [showOnlyMatching, setShowOnlyMatching] = useState(false)

  // Sample internships data
  const sortInternships = (a: Internship, b: Internship): number => {
    if (sortBy === "match") return b.matchScore - a.matchScore
    if (sortBy === "deadline") return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    if (sortBy === "salary") {
      if (a.paid && b.paid) {
        const aSalary = Number.parseInt(a.salary.replace(/[^0-9]/g, ""))
        const bSalary = Number.parseInt(b.salary.replace(/[^0-9]/g, ""))
        return bSalary - aSalary
      }
      return a.paid ? -1 : 1
    }
    return 0
  }

  const internshipsData = {
    recommended: [
      {
        id: "int-1",
        title: "Data Science Intern",
        company: "TechCorp Solutions",
        location: "San Francisco, CA (Remote Option)",
        industry: "technology",
        duration: "3 months",
        paid: true,
        salary: "$25/hour",
        matchScore: 92,
        deadline: "2024-06-15",
        description:
          "Join our data science team to work on real-world machine learning projects. You'll analyze large datasets, build predictive models, and present insights to stakeholders.",
        requirements: [
          "Currently pursuing a degree in Computer Science, Statistics, or related field",
          "Experience with Python and data analysis libraries",
          "Knowledge of machine learning concepts",
          "Strong analytical and problem-solving skills",
        ],
        skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
        applicationProcess: ["Resume", "Cover Letter", "Technical Assessment", "Interview"],
        companySize: "1000-5000 employees",
        companyRating: 4.7,
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "int-2",
        title: "UX Research Intern",
        company: "DesignHub",
        location: "New York, NY (Hybrid)",
        industry: "design",
        duration: "6 months",
        paid: true,
        salary: "$22/hour",
        matchScore: 88,
        deadline: "2024-06-30",
        description:
          "Assist our UX team in conducting user research, creating personas, and designing user testing protocols. Help translate research findings into actionable design recommendations.",
        requirements: [
          "Currently pursuing a degree in HCI, Psychology, Design, or related field",
          "Experience with user research methods",
          "Knowledge of UX design principles",
          "Excellent communication skills",
        ],
        skills: ["User Research", "Usability Testing", "Prototyping", "Data Analysis"],
        applicationProcess: ["Portfolio", "Resume", "Design Challenge", "Interview"],
        companySize: "100-500 employees",
        companyRating: 4.5,
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "int-3",
        title: "Product Management Intern",
        company: "InnovateTech",
        location: "Austin, TX (On-site)",
        industry: "technology",
        duration: "4 months",
        paid: true,
        salary: "$24/hour",
        matchScore: 85,
        deadline: "2024-07-15",
        description:
          "Work alongside our product team to define requirements, conduct market research, and help prioritize features. Gain hands-on experience in the product development lifecycle.",
        requirements: [
          "Currently pursuing a degree in Business, Computer Science, or related field",
          "Strong analytical and problem-solving skills",
          "Excellent communication and collaboration abilities",
          "Interest in technology and product development",
        ],
        skills: ["Market Research", "Product Strategy", "User Stories", "Data Analysis"],
        applicationProcess: ["Resume", "Cover Letter", "Case Study", "Interview"],
        companySize: "500-1000 employees",
        companyRating: 4.3,
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    applied: [
      {
        id: "int-4",
        title: "Machine Learning Intern",
        company: "AI Innovations",
        location: "Boston, MA (Remote)",
        industry: "technology",
        duration: "3 months",
        status: "submitted",
        submittedDate: "2024-04-10",
        nextStep: "Technical Assessment scheduled for May 5, 2024",
        completedRequirements: 2,
        totalRequirements: 4,
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-5",
        title: "Data Analyst Intern",
        company: "FinTech Solutions",
        location: "Chicago, IL (Hybrid)",
        industry: "finance",
        duration: "4 months",
        status: "in-progress",
        submittedDate: null,
        nextStep: "Complete online application",
        completedRequirements: 1,
        totalRequirements: 3,
        logo: "/placeholder.svg?height=50&width=50",
      },
    ],
    all: [
      {
        id: "int-6",
        title: "Software Engineering Intern",
        company: "TechGiant",
        location: "Seattle, WA (On-site)",
        industry: "technology",
        duration: "3 months",
        paid: true,
        salary: "$30/hour",
        matchScore: 80,
        deadline: "2024-06-20",
        skills: ["Java", "JavaScript", "Algorithms", "Git"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-7",
        title: "Marketing Analytics Intern",
        company: "BrandBoost",
        location: "Los Angeles, CA (Hybrid)",
        industry: "marketing",
        duration: "6 months",
        paid: true,
        salary: "$20/hour",
        matchScore: 75,
        deadline: "2024-07-01",
        skills: ["Data Analysis", "Marketing", "Social Media", "Excel"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-8",
        title: "Financial Analyst Intern",
        company: "Global Finance",
        location: "New York, NY (On-site)",
        industry: "finance",
        duration: "4 months",
        paid: true,
        salary: "$25/hour",
        matchScore: 70,
        deadline: "2024-06-15",
        skills: ["Financial Modeling", "Excel", "Accounting", "Research"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-9",
        title: "UI/UX Design Intern",
        company: "Creative Solutions",
        location: "San Francisco, CA (Remote)",
        industry: "design",
        duration: "3 months",
        paid: true,
        salary: "$22/hour",
        matchScore: 85,
        deadline: "2024-07-10",
        skills: ["Figma", "UI Design", "Prototyping", "User Research"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-10",
        title: "Research Assistant Intern",
        company: "BioTech Innovations",
        location: "Boston, MA (On-site)",
        industry: "healthcare",
        duration: "6 months",
        paid: true,
        salary: "$23/hour",
        matchScore: 65,
        deadline: "2024-06-30",
        skills: ["Research", "Data Analysis", "Lab Techniques", "Documentation"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-11",
        title: "Content Marketing Intern",
        company: "Digital Media Group",
        location: "Chicago, IL (Hybrid)",
        industry: "marketing",
        duration: "3 months",
        paid: false,
        salary: "Unpaid",
        matchScore: 60,
        deadline: "2024-07-15",
        skills: ["Content Creation", "SEO", "Social Media", "Copywriting"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-12",
        title: "Business Development Intern",
        company: "Growth Ventures",
        location: "Austin, TX (On-site)",
        industry: "business",
        duration: "4 months",
        paid: true,
        salary: "$18/hour",
        matchScore: 72,
        deadline: "2024-06-25",
        skills: ["Sales", "Market Research", "CRM", "Presentation"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-13",
        title: "Human Resources Intern",
        company: "People First",
        location: "Denver, CO (Hybrid)",
        industry: "human-resources",
        duration: "3 months",
        paid: true,
        salary: "$19/hour",
        matchScore: 68,
        deadline: "2024-07-05",
        skills: ["Recruiting", "Employee Relations", "HRIS", "Onboarding"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-14",
        title: "Data Engineering Intern",
        company: "DataWorks",
        location: "Remote",
        industry: "technology",
        duration: "6 months",
        paid: true,
        salary: "$28/hour",
        matchScore: 82,
        deadline: "2024-06-18",
        skills: ["SQL", "Python", "ETL", "Data Warehousing"],
        logo: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "int-15",
        title: "Sustainability Intern",
        company: "EcoSolutions",
        location: "Portland, OR (On-site)",
        industry: "environmental",
        duration: "4 months",
        paid: false,
        salary: "Unpaid",
        matchScore: 55,
        deadline: "2024-07-20",
        skills: ["Environmental Science", "Research", "Data Analysis", "Reporting"],
        logo: "/placeholder.svg?height=50&width=50",
      },
    ],
  }

  // Document templates
  const documentTemplates = [
    {
      id: "doc-1",
      title: "Data Science Resume Template",
      type: "resume",
      description: "Tailored resume template highlighting data science skills and projects",
      downloads: 1250,
      rating: 4.8,
    },
    {
      id: "doc-2",
      title: "Tech Internship Cover Letter",
      type: "cover-letter",
      description: "Professional cover letter template for technology internship applications",
      downloads: 980,
      rating: 4.6,
    },
    {
      id: "doc-3",
      title: "Portfolio Presentation Template",
      type: "portfolio",
      description: "Clean, modern template for showcasing your projects and skills",
      downloads: 750,
      rating: 4.7,
    },
  ]

  // Interview preparation resources
  const interviewResources = [
    {
      id: "res-1",
      title: "Technical Interview Preparation Guide",
      type: "guide",
      description: "Comprehensive guide covering common technical interview questions and strategies",
      duration: "2 hours",
      difficulty: "Intermediate",
    },
    {
      id: "res-2",
      title: "Behavioral Interview Question Bank",
      type: "practice",
      description: "100+ behavioral questions with example answers and frameworks",
      duration: "1.5 hours",
      difficulty: "Beginner",
    },
    {
      id: "res-3",
      title: "Mock Interview Simulator",
      type: "interactive",
      description: "Practice with AI-powered mock interviews tailored to your target role",
      duration: "30 min per session",
      difficulty: "Advanced",
    },
  ]

  // Filter internships based on search and filters
  const filterInternships = (internships: Internship[]): Internship[] => {
    return internships
      .filter((internship: Internship) => {
        const matchesSearch =
          internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (internship.description && internship.description.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesLocation =
          selectedLocation === "all" ||
          (selectedLocation === "remote" && internship.location.toLowerCase().includes("remote")) ||
          (selectedLocation === "hybrid" && internship.location.toLowerCase().includes("hybrid")) ||
          (selectedLocation === "on-site" && internship.location.toLowerCase().includes("on-site"))

        const matchesIndustry = selectedIndustry === "all" || internship.industry === selectedIndustry

        const matchesDuration =
          selectedDuration === "all" ||
          (selectedDuration === "short" && Number.parseInt(internship.duration) <= 3) ||
          (selectedDuration === "medium" &&
            Number.parseInt(internship.duration) > 3 &&
            Number.parseInt(internship.duration) <= 6) ||
          (selectedDuration === "long" && Number.parseInt(internship.duration) > 6)

        const matchesPaid =
          selectedPaid === "all" ||
          (selectedPaid === "paid" && internship.paid) ||
          (selectedPaid === "unpaid" && !internship.paid)

        const matchesScore = !showOnlyMatching || internship.matchScore >= 70

        return matchesSearch && matchesLocation && matchesIndustry && matchesDuration && matchesPaid && matchesScore
      })
      .sort(sortInternships)
  }

  const filteredInternships = filterInternships(internshipsData.all)

  // Calculate days remaining until deadline
  const getDaysRemaining = (deadlineDate: string): number => {
    const today = new Date()
    const deadline = new Date(deadlineDate)
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Get urgency level based on days remaining
  const getUrgencyLevel = (daysRemaining: number): string => {
    if (daysRemaining <= 7) return "high"
    if (daysRemaining <= 14) return "medium"
    return "low"
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
            <span>Internship Explorer</span>
          </div>
          <h1 className="text-3xl font-bold">Internship Explorer</h1>
          <p className="text-muted-foreground mt-1">Find and apply for internships matched to your profile</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" asChild>
            <Link href="/documents">
              <FileText className="h-4 w-4 mr-2" />
              My Documents
            </Link>
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Track External Internship
          </Button>
        </div>
      </div>

      {/* Profile Match Alert */}
      <Alert className="mb-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Profile Match</AlertTitle>
        <AlertDescription>
          Based on your skills and interests, we've found 8 internships with a match rate of 70% or higher.
        </AlertDescription>
      </Alert>

      {/* Recommended Internships */}
      <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {internshipsData.recommended.map((internship) => (
          <Card key={internship.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img
                    src={internship.logo || "/placeholder.svg"}
                    alt={internship.company}
                    className="w-12 h-12 object-contain rounded-md border p-1"
                  />
                  <div>
                    <div className="text-sm text-muted-foreground">{internship.company}</div>
                    <Badge
                      variant="outline"
                      className={
                        internship.matchScore >= 90
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : internship.matchScore >= 80
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                      }
                    >
                      {internship.matchScore}% Match
                    </Badge>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className={
                          internship.paid
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                        }
                      >
                        {internship.paid ? internship.salary : "Unpaid"}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{internship.paid ? "Paid internship" : "Unpaid internship"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardTitle className="text-lg mt-2">{internship.title}</CardTitle>
              <CardDescription className="line-clamp-2">{internship.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="truncate">{internship.location}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{internship.duration}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Deadline</div>
                  <div className="font-medium flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{formatDate(internship.deadline)}</span>
                    <Badge
                      variant="outline"
                      className={
                        getUrgencyLevel(getDaysRemaining(internship.deadline)) === "high"
                          ? "bg-red-100 text-red-800 hover:bg-red-100 ml-1"
                          : getUrgencyLevel(getDaysRemaining(internship.deadline)) === "medium"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100 ml-1"
                            : "bg-green-100 text-green-800 hover:bg-green-100 ml-1"
                      }
                    >
                      {getDaysRemaining(internship.deadline)} days left
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Required Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {internship.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/companies/${internship.company.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Building className="h-3.5 w-3.5 mr-1" />
                  Company Profile
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={`/internships/${internship.id}`}>
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Your Applications */}
      <h2 className="text-xl font-semibold mb-4">Your Applications</h2>
      <Tabs defaultValue="in-progress" className="mb-8">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="offers">Offers</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="mt-6">
          {internshipsData.applied.filter((s) => s.status === "in-progress").length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipsData.applied
                .filter((s) => s.status === "in-progress")
                .map((internship) => (
                  <Card key={internship.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <img
                            src={internship.logo || "/placeholder.svg"}
                            alt={internship.company}
                            className="w-10 h-10 object-contain rounded-md border p-1"
                          />
                          <div>
                            <CardTitle className="text-lg">{internship.title}</CardTitle>
                            <div className="text-sm text-muted-foreground">{internship.company}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          In Progress
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Location</div>
                            <div className="font-medium">{internship.location}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Duration</div>
                            <div className="font-medium">{internship.duration}</div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Application Progress</span>
                            <span>
                              {internship.completedRequirements}/{internship.totalRequirements} requirements
                            </span>
                          </div>
                          <Progress
                            value={(internship.completedRequirements / internship.totalRequirements) * 100}
                            className="h-2"
                          />
                        </div>

                        <div className="border rounded-md p-3 bg-muted/30">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                            <div>
                              <div className="text-sm font-medium">Next Step</div>
                              <div className="text-sm text-muted-foreground">{internship.nextStep}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/internships/${internship.id}/apply`}>
                          Continue Application
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/10">
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Applications In Progress</h3>
              <p className="text-muted-foreground mb-4">Start applying to internships to see them here!</p>
              <Button>Browse Internships</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="submitted" className="mt-6">
          {internshipsData.applied.filter((s) => s.status === "submitted").length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipsData.applied
                .filter((s) => s.status === "submitted")
                .map((internship) => (
                  <Card key={internship.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <img
                            src={internship.logo || "/placeholder.svg"}
                            alt={internship.company}
                            className="w-10 h-10 object-contain rounded-md border p-1"
                          />
                          <div>
                            <CardTitle className="text-lg">{internship.title}</CardTitle>
                            <div className="text-sm text-muted-foreground">{internship.company}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                          Submitted
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Location</div>
                            <div className="font-medium">{internship.location}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Submitted On</div>
                            <div className="font-medium">{internship.submittedDate ? formatDate(internship.submittedDate) : 'N/A'}</div>
                          </div>
                        </div>

                        <div className="border rounded-md p-3 bg-muted/30">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                            <div>
                              <div className="text-sm font-medium">Next Step</div>
                              <div className="text-sm text-muted-foreground">{internship.nextStep}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/internships/${internship.id}/status`}>
                          Check Status
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/10">
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Submitted Applications</h3>
              <p className="text-muted-foreground mb-4">Complete and submit your applications to see them here!</p>
              <Button>View In-Progress Applications</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="interviews" className="mt-6">
          <div className="text-center py-12 border rounded-lg bg-muted/10">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Upcoming Interviews</h3>
            <p className="text-muted-foreground mb-4">When you're invited to interviews, they'll appear here.</p>
            <Button>Prepare for Interviews</Button>
          </div>
        </TabsContent>

        <TabsContent value="offers" className="mt-6">
          <div className="text-center py-12 border rounded-lg bg-muted/10">
            <ThumbsUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Offers Yet</h3>
            <p className="text-muted-foreground mb-4">When you receive offers, they'll appear here.</p>
            <Button>View Submitted Applications</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Internship Database */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Internship Database</h2>
        <div className="flex flex-wrap gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search internships..."
              className="pl-8 w-full md:w-[250px] h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort By: {sortBy === "match" ? "Match" : sortBy === "deadline" ? "Deadline" : "Salary"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("match")}>Match Score</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("deadline")}>Application Deadline</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("salary")}>Salary</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Internships</SheetTitle>
                <SheetDescription>Refine the internships displayed</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="on-site">On-site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="environmental">Environmental</SelectItem>
                      <SelectItem value="human-resources">Human Resources</SelectItem>
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
                      <SelectItem value="short">Short (≤ 3 months)</SelectItem>
                      <SelectItem value="medium">Medium (4-6 months)</SelectItem>
                      <SelectItem value="long">Long ({'>'}6 months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paid">Compensation</Label>
                  <Select value={selectedPaid} onValueChange={setSelectedPaid}>
                    <SelectTrigger id="paid">
                      <SelectValue placeholder="Select compensation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Internships</SelectItem>
                      <SelectItem value="paid">Paid Only</SelectItem>
                      <SelectItem value="unpaid">Unpaid Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-matching">Show Only Matching</Label>
                    <Checkbox
                      id="show-matching"
                      checked={showOnlyMatching}
                      onCheckedChange={(checked: CheckedState) => setShowOnlyMatching(checked === true)}
                      className="mr-2"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Only show internships with a high match to your profile (70%+ match)
                  </p>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="rounded-md border mb-8">
        <div className="grid grid-cols-12 p-4 text-sm font-medium border-b bg-muted/50">
          <div className="col-span-4">Internship</div>
          <div className="col-span-2">Company</div>
          <div className="col-span-2">Location</div>
          <div className="col-span-1">Duration</div>
          <div className="col-span-1">Compensation</div>
          <div className="col-span-1">Match</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        <div className="divide-y">
          {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div key={internship.id} className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src={internship.logo || "/placeholder.svg"}
                    alt={internship.company}
                    className="w-8 h-8 object-contain rounded-md border p-1"
                  />
                  <div>
                    <div className="font-medium">{internship.title}</div>
                    <div className="text-sm text-muted-foreground">Deadline: {formatDate(internship.deadline)}</div>
                  </div>
                </div>
                <div className="col-span-2">{internship.company}</div>
                <div className="col-span-2 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="truncate">{internship.location}</span>
                </div>
                <div className="col-span-1">{internship.duration}</div>
                <div className="col-span-1">
                  <Badge
                    variant="outline"
                    className={
                      internship.paid
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {internship.paid ? "Paid" : "Unpaid"}
                  </Badge>
                </div>
                <div className="col-span-1">
                  <Badge
                    variant="outline"
                    className={
                      internship.matchScore >= 90
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : internship.matchScore >= 70
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : "bg-slate-100 text-slate-800 hover:bg-slate-100"
                    }
                  >
                    {internship.matchScore}%
                  </Badge>
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
                        <Link href={`/internships/${internship.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/internships/${internship.id}/apply`}>Apply Now</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Save for Later</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <Search className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Internships Found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedLocation("all")
                  setSelectedIndustry("all")
                  setSelectedDuration("all")
                  setSelectedPaid("all")
                  setShowOnlyMatching(false)
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Application Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Document Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Document Templates</CardTitle>
            <CardDescription>Professionally designed templates for your applications</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {documentTemplates.map((template) => (
                <div key={template.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">{template.title}</div>
                      <div className="text-sm text-muted-foreground">{template.description}</div>
                    </div>
                    <Badge variant="secondary">{template.type}</Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      <span>{template.downloads} downloads</span>
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 ml-2" />
                      <span>{template.rating}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/documents/templates">
                View All Templates
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Interview Preparation */}
        <Card>
          <CardHeader>
            <CardTitle>Interview Preparation</CardTitle>
            <CardDescription>Resources to help you ace your interviews</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {interviewResources.map((resource) => (
                <div key={resource.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">{resource.title}</div>
                      <div className="text-sm text-muted-foreground">{resource.description}</div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        resource.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : resource.difficulty === "Intermediate"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {resource.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{resource.duration}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/interviews/resources/${resource.id}`}>Start Preparing</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/interviews/resources">
                View All Resources
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Application Tracker */}
        <Card>
          <CardHeader>
            <CardTitle>Application Tracker</CardTitle>
            <CardDescription>Monitor your application progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span>In Progress</span>
                </div>
                <span className="font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Submitted</span>
                </div>
                <span className="font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Interviews</span>
                </div>
                <span className="font-medium">0</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Offers</span>
                </div>
                <span className="font-medium">0</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Rejected</span>
                </div>
                <span className="font-medium">0</span>
              </div>

              <Separator className="my-2" />

              <div className="flex items-center justify-between">
                <span className="font-medium">Total Applications</span>
                <span className="font-medium">2</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/applications/tracker">
                View Detailed Tracker
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Company Spotlights */}
      <h2 className="text-xl font-semibold mb-4">Company Spotlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="TechCorp Solutions" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                Technology
              </Badge>
            </div>
            <CardTitle className="mt-2">TechCorp Solutions</CardTitle>
            <CardDescription>Leading technology solutions provider</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>1000-5000 employees</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-medium">4.7 company rating</span>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Active Internships</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Data Science Intern</span>
                    <Badge variant="secondary">92% Match</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Software Engineering Intern</span>
                    <Badge variant="secondary">80% Match</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/companies/techcorp-solutions">
                View Company Profile
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="DesignHub" />
                <AvatarFallback>DH</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                Design
              </Badge>
            </div>
            <CardTitle className="mt-2">DesignHub</CardTitle>
            <CardDescription>Creative design and UX research agency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>100-500 employees</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-medium">4.5 company rating</span>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Active Internships</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>UX Research Intern</span>
                    <Badge variant="secondary">88% Match</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>UI/UX Design Intern</span>
                    <Badge variant="secondary">85% Match</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/companies/designhub">
                View Company Profile
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="InnovateTech" />
                <AvatarFallback>IT</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                Startup
              </Badge>
            </div>
            <CardTitle className="mt-2">InnovateTech</CardTitle>
            <CardDescription>Fast-growing technology startup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Austin, TX</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>500-1000 employees</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-medium">4.3 company rating</span>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Active Internships</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Product Management Intern</span>
                    <Badge variant="secondary">85% Match</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Business Development Intern</span>
                    <Badge variant="secondary">72% Match</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/companies/innovatetech">
                View Company Profile
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

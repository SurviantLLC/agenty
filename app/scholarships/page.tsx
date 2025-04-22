"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowUpDown,
  Award,
  Calendar,
  ChevronRight,
  DollarSign,
  ExternalLink,
  Filter,
  GraduationCap,
  Home,
  Info,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  Tag,
  ThumbsUp,
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

export default function ScholarshipMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAmount, setSelectedAmount] = useState("all")
  const [selectedEligibility, setSelectedEligibility] = useState("all")
  const [sortBy, setSortBy] = useState("deadline")
  const [showOnlyEligible, setShowOnlyEligible] = useState(false)

  // Sample scholarships data
  const scholarshipsData = {
    recommended: [
      {
        id: "sch-1",
        title: "Future Tech Leaders Scholarship",
        organization: "Tech Foundation",
        category: "stem",
        amount: 5000,
        deadline: "2024-06-15",
        eligibility: {
          gpa: "3.5+",
          fieldOfStudy: ["Computer Science", "Data Science", "Engineering"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["US Citizen", "Permanent Resident"],
        },
        eligibilityScore: 95,
        description:
          "Supporting students pursuing degrees in technology fields with demonstrated leadership potential.",
        requirements: ["Academic transcript", "Personal statement", "Two letters of recommendation", "Resume/CV"],
        applicationLink: "#",
        popularity: 92,
        competitiveness: "High",
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "sch-2",
        title: "Women in Data Science Scholarship",
        organization: "Data Alliance",
        category: "diversity",
        amount: 7500,
        deadline: "2024-07-01",
        eligibility: {
          gpa: "3.2+",
          fieldOfStudy: ["Data Science", "Statistics", "Computer Science"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["All"],
          demographics: ["Women"],
        },
        eligibilityScore: 90,
        description:
          "Empowering women pursuing careers in data science and analytics with financial support and mentorship.",
        requirements: [
          "Academic transcript",
          "Personal statement",
          "One letter of recommendation",
          "Portfolio of projects (optional)",
        ],
        applicationLink: "#",
        popularity: 88,
        competitiveness: "Medium",
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "sch-3",
        title: "Global Leadership Fellowship",
        organization: "International Education Fund",
        category: "leadership",
        amount: 10000,
        deadline: "2024-08-15",
        eligibility: {
          gpa: "3.7+",
          fieldOfStudy: ["All"],
          academicLevel: ["Graduate"],
          citizenship: ["All"],
        },
        eligibilityScore: 85,
        description:
          "Supporting future global leaders with demonstrated commitment to international cooperation and development.",
        requirements: [
          "Academic transcript",
          "Personal statement",
          "Research proposal",
          "Three letters of recommendation",
          "Leadership experience evidence",
        ],
        applicationLink: "#",
        popularity: 95,
        competitiveness: "Very High",
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
    applied: [
      {
        id: "sch-4",
        title: "Digital Innovation Scholarship",
        organization: "Future Tech Institute",
        category: "innovation",
        amount: 3000,
        deadline: "2024-05-30",
        status: "submitted",
        submittedDate: "2024-04-10",
        nextStep: "Interview scheduled for May 5, 2024",
        completedRequirements: 4,
        totalRequirements: 4,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-5",
        title: "Community Leadership Award",
        organization: "Civic Foundation",
        category: "community",
        amount: 2500,
        deadline: "2024-06-10",
        status: "in-progress",
        submittedDate: null,
        nextStep: "Complete personal statement",
        completedRequirements: 2,
        totalRequirements: 5,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    all: [
      {
        id: "sch-6",
        title: "Emerging Researchers Grant",
        organization: "Science Foundation",
        category: "research",
        amount: 8000,
        deadline: "2024-07-15",
        eligibility: {
          gpa: "3.5+",
          fieldOfStudy: ["Sciences", "Engineering"],
          academicLevel: ["Graduate", "PhD"],
          citizenship: ["All"],
        },
        eligibilityScore: 80,
        description: "Supporting innovative research projects by emerging scholars.",
        competitiveness: "High",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-7",
        title: "First-Generation College Scholarship",
        organization: "Education Access Alliance",
        category: "diversity",
        amount: 5000,
        deadline: "2024-06-30",
        eligibility: {
          gpa: "3.0+",
          fieldOfStudy: ["All"],
          academicLevel: ["Undergraduate"],
          citizenship: ["US Citizen", "Permanent Resident"],
          demographics: ["First-Generation College Student"],
        },
        eligibilityScore: 100,
        description: "Supporting students who are the first in their family to attend college.",
        competitiveness: "Medium",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-8",
        title: "Sustainable Development Fellowship",
        organization: "Green Future Foundation",
        category: "environment",
        amount: 12000,
        deadline: "2024-09-01",
        eligibility: {
          gpa: "3.3+",
          fieldOfStudy: ["Environmental Science", "Sustainability", "Engineering"],
          academicLevel: ["Graduate", "PhD"],
          citizenship: ["All"],
        },
        eligibilityScore: 75,
        description:
          "Supporting research and projects focused on sustainable development and environmental conservation.",
        competitiveness: "High",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-9",
        title: "Creative Arts Grant",
        organization: "Arts Council",
        category: "arts",
        amount: 3500,
        deadline: "2024-06-15",
        eligibility: {
          gpa: "3.0+",
          fieldOfStudy: ["Fine Arts", "Performing Arts", "Design"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["All"],
        },
        eligibilityScore: 65,
        description: "Supporting students pursuing degrees in creative and performing arts.",
        competitiveness: "Medium",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-10",
        title: "Healthcare Leaders of Tomorrow",
        organization: "Medical Foundation",
        category: "healthcare",
        amount: 7500,
        deadline: "2024-07-30",
        eligibility: {
          gpa: "3.6+",
          fieldOfStudy: ["Medicine", "Nursing", "Public Health"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["US Citizen", "Permanent Resident"],
        },
        eligibilityScore: 70,
        description: "Supporting students pursuing careers in healthcare with leadership potential.",
        competitiveness: "High",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-11",
        title: "Community College Transfer Scholarship",
        organization: "Higher Education Access Fund",
        category: "transfer",
        amount: 4000,
        deadline: "2024-08-15",
        eligibility: {
          gpa: "3.2+",
          fieldOfStudy: ["All"],
          academicLevel: ["Undergraduate"],
          citizenship: ["US Citizen", "Permanent Resident"],
          demographics: ["Community College Transfer"],
        },
        eligibilityScore: 90,
        description: "Supporting students transferring from community colleges to four-year institutions.",
        competitiveness: "Medium",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-12",
        title: "International Student Excellence Award",
        organization: "Global Education Fund",
        category: "international",
        amount: 9000,
        deadline: "2024-07-01",
        eligibility: {
          gpa: "3.7+",
          fieldOfStudy: ["All"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["International Students"],
        },
        eligibilityScore: 60,
        description: "Supporting outstanding international students pursuing degrees in the United States.",
        competitiveness: "Very High",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-13",
        title: "Entrepreneurship Innovation Grant",
        organization: "Business Leaders Foundation",
        category: "business",
        amount: 6000,
        deadline: "2024-08-30",
        eligibility: {
          gpa: "3.3+",
          fieldOfStudy: ["Business", "Entrepreneurship", "Economics"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["All"],
        },
        eligibilityScore: 85,
        description: "Supporting students with innovative business ideas and entrepreneurial spirit.",
        competitiveness: "High",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-14",
        title: "Public Service Commitment Scholarship",
        organization: "Civic Engagement Institute",
        category: "public-service",
        amount: 5500,
        deadline: "2024-06-30",
        eligibility: {
          gpa: "3.0+",
          fieldOfStudy: ["Public Policy", "Government", "Social Work", "Education"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["US Citizen"],
        },
        eligibilityScore: 95,
        description: "Supporting students committed to careers in public service and civic engagement.",
        competitiveness: "Medium",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "sch-15",
        title: "STEM Diversity Scholarship",
        organization: "Inclusive Tech Alliance",
        category: "diversity",
        amount: 7000,
        deadline: "2024-07-15",
        eligibility: {
          gpa: "3.2+",
          fieldOfStudy: ["STEM Fields"],
          academicLevel: ["Undergraduate"],
          citizenship: ["US Citizen", "Permanent Resident"],
          demographics: ["Underrepresented Groups in STEM"],
        },
        eligibilityScore: 100,
        description: "Promoting diversity in STEM fields by supporting students from underrepresented backgrounds.",
        competitiveness: "Medium",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  }

  // Financial aid profile
  const financialProfile = {
    expectedFamilyContribution: 5000,
    costOfAttendance: 25000,
    currentAid: 12000,
    remainingNeed: 8000,
    eligibleAidTypes: ["Merit-Based", "Need-Based", "Field-Specific"],
    strengths: ["Academic Excellence", "Leadership Experience", "Community Service"],
    recommendations: [
      "Focus on merit-based scholarships with GPA requirements of 3.5+",
      "Apply for field-specific scholarships in your major",
      "Highlight leadership experience in applications",
    ],
  }

  // Filter scholarships based on search and filters
  const filterScholarships = (scholarships) => {
    return scholarships
      .filter((scholarship) => {
        const matchesSearch =
          scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          scholarship.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (scholarship.description && scholarship.description.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory

        const matchesAmount =
          selectedAmount === "all" ||
          (selectedAmount === "low" && scholarship.amount <= 3000) ||
          (selectedAmount === "medium" && scholarship.amount > 3000 && scholarship.amount <= 7000) ||
          (selectedAmount === "high" && scholarship.amount > 7000)

        const matchesEligibility =
          selectedEligibility === "all" ||
          (selectedEligibility === "high" && scholarship.eligibilityScore >= 90) ||
          (selectedEligibility === "medium" &&
            scholarship.eligibilityScore >= 70 &&
            scholarship.eligibilityScore < 90) ||
          (selectedEligibility === "low" && scholarship.eligibilityScore < 70)

        const matchesEligibleOnly = !showOnlyEligible || scholarship.eligibilityScore >= 80

        return matchesSearch && matchesCategory && matchesAmount && matchesEligibility && matchesEligibleOnly
      })
      .sort((a, b) => {
        if (sortBy === "deadline") {
          return new Date(a.deadline) - new Date(b.deadline)
        } else if (sortBy === "amount") {
          return b.amount - a.amount
        } else if (sortBy === "eligibility") {
          return b.eligibilityScore - a.eligibilityScore
        }
        return 0
      })
  }

  const filteredScholarships = filterScholarships(scholarshipsData.all)

  // Calculate days remaining until deadline
  const getDaysRemaining = (deadlineDate) => {
    const today = new Date()
    const deadline = new Date(deadlineDate)
    const diffTime = deadline - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Get urgency level based on days remaining
  const getUrgencyLevel = (daysRemaining) => {
    if (daysRemaining <= 7) return "high"
    if (daysRemaining <= 30) return "medium"
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
            <span>Scholarship Marketplace</span>
          </div>
          <h1 className="text-3xl font-bold">Scholarship Marketplace</h1>
          <p className="text-muted-foreground mt-1">Find and apply for scholarships tailored to your profile</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" asChild>
            <Link href="/financial-aid">
              <DollarSign className="h-4 w-4 mr-2" />
              Financial Aid
            </Link>
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add External Scholarship
          </Button>
        </div>
      </div>

      {/* Financial Aid Profile */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Your Financial Aid Profile</CardTitle>
              <CardDescription>Personalized scholarship recommendations based on your profile</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Update Profile
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Financial Overview</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cost of Attendance:</span>
                  <span className="font-medium">${financialProfile.costOfAttendance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Expected Family Contribution:</span>
                  <span className="font-medium">${financialProfile.expectedFamilyContribution.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Current Financial Aid:</span>
                  <span className="font-medium">${financialProfile.currentAid.toLocaleString()}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-sm font-medium">
                  <span>Remaining Need:</span>
                  <span className="text-primary">${financialProfile.remainingNeed.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Eligibility Strengths</h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Eligible Aid Types:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {financialProfile.eligibleAidTypes.map((type, index) => (
                      <Badge key={index} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-sm mt-3">
                  <span className="text-muted-foreground">Profile Strengths:</span>
                  <ul className="mt-1 space-y-1">
                    {financialProfile.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Recommendations</h3>
              <ul className="space-y-2 text-sm">
                {financialProfile.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Scholarship Opportunity</AlertTitle>
            <AlertDescription>
              Based on your profile, you have a high match rate for 5 scholarships with upcoming deadlines.
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>

      {/* Recommended Scholarships */}
      <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {scholarshipsData.recommended.map((scholarship) => (
          <Card key={scholarship.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img
                    src={scholarship.image || "/placeholder.svg"}
                    alt={scholarship.organization}
                    className="w-12 h-12 object-contain rounded-md border p-1"
                  />
                  <div>
                    <div className="text-sm text-muted-foreground">{scholarship.organization}</div>
                    <Badge
                      variant="outline"
                      className={
                        scholarship.eligibilityScore >= 90
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : scholarship.eligibilityScore >= 70
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {scholarship.eligibilityScore}% Match
                    </Badge>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className={
                          scholarship.competitiveness === "Very High"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : scholarship.competitiveness === "High"
                              ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                        }
                      >
                        {scholarship.competitiveness} Competition
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Based on applicant pool and requirements</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardTitle className="text-lg mt-2">{scholarship.title}</CardTitle>
              <CardDescription className="line-clamp-2">{scholarship.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Award Amount</div>
                    <div className="font-medium">${scholarship.amount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Deadline</div>
                    <div className="font-medium flex items-center gap-1">
                      {formatDate(scholarship.deadline)}
                      <Badge
                        variant="outline"
                        className={
                          getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                            ? "bg-red-100 text-red-800 hover:bg-red-100 ml-1"
                            : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                              ? "bg-amber-100 text-amber-800 hover:bg-amber-100 ml-1"
                              : "bg-green-100 text-green-800 hover:bg-green-100 ml-1"
                        }
                      >
                        {getDaysRemaining(scholarship.deadline)} days
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Eligibility</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {scholarship.eligibility.academicLevel.join(", ")} • GPA: {scholarship.eligibility.gpa}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {scholarship.eligibility.fieldOfStudy.length > 2
                          ? `${scholarship.eligibility.fieldOfStudy.slice(0, 2).join(", ")} +${
                              scholarship.eligibility.fieldOfStudy.length - 2
                            } more`
                          : scholarship.eligibility.fieldOfStudy.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={scholarship.applicationLink} target="_blank">
                  Visit Website
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={`/scholarships/${scholarship.id}`}>
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
          <TabsTrigger value="awarded">Awarded</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="mt-6">
          {scholarshipsData.applied.filter((s) => s.status === "in-progress").length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarshipsData.applied
                .filter((s) => s.status === "in-progress")
                .map((scholarship) => (
                  <Card key={scholarship.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <img
                            src={scholarship.image || "/placeholder.svg"}
                            alt={scholarship.organization}
                            className="w-10 h-10 object-contain rounded-md border p-1"
                          />
                          <div>
                            <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                            <div className="text-sm text-muted-foreground">{scholarship.organization}</div>
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
                            <div className="text-muted-foreground">Award Amount</div>
                            <div className="font-medium">${scholarship.amount.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Deadline</div>
                            <div className="font-medium flex items-center gap-1">
                              {formatDate(scholarship.deadline)}
                              <Badge
                                variant="outline"
                                className={
                                  getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                                    ? "bg-red-100 text-red-800 hover:bg-red-100 ml-1"
                                    : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                                      ? "bg-amber-100 text-amber-800 hover:bg-amber-100 ml-1"
                                      : "bg-green-100 text-green-800 hover:bg-green-100 ml-1"
                                }
                              >
                                {getDaysRemaining(scholarship.deadline)} days
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Application Progress</span>
                            <span>
                              {scholarship.completedRequirements}/{scholarship.totalRequirements} requirements
                            </span>
                          </div>
                          <Progress
                            value={(scholarship.completedRequirements / scholarship.totalRequirements) * 100}
                            className="h-2"
                          />
                        </div>

                        <div className="border rounded-md p-3 bg-muted/30">
                          <div className="flex items-start gap-2">
                            <Info className="h-4 w-4 text-primary mt-0.5" />
                            <div>
                              <div className="text-sm font-medium">Next Step</div>
                              <div className="text-sm text-muted-foreground">{scholarship.nextStep}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/scholarships/${scholarship.id}/apply`}>
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
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Applications In Progress</h3>
              <p className="text-muted-foreground mb-4">Start applying to scholarships to see them here!</p>
              <Button>Browse Scholarships</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="submitted" className="mt-6">
          {scholarshipsData.applied.filter((s) => s.status === "submitted").length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarshipsData.applied
                .filter((s) => s.status === "submitted")
                .map((scholarship) => (
                  <Card key={scholarship.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <img
                            src={scholarship.image || "/placeholder.svg"}
                            alt={scholarship.organization}
                            className="w-10 h-10 object-contain rounded-md border p-1"
                          />
                          <div>
                            <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                            <div className="text-sm text-muted-foreground">{scholarship.organization}</div>
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
                            <div className="text-muted-foreground">Award Amount</div>
                            <div className="font-medium">${scholarship.amount.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Submitted On</div>
                            <div className="font-medium">{formatDate(scholarship.submittedDate)}</div>
                          </div>
                        </div>

                        <div className="border rounded-md p-3 bg-muted/30">
                          <div className="flex items-start gap-2">
                            <Info className="h-4 w-4 text-primary mt-0.5" />
                            <div>
                              <div className="text-sm font-medium">Next Step</div>
                              <div className="text-sm text-muted-foreground">{scholarship.nextStep}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/scholarships/${scholarship.id}/status`}>
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
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Submitted Applications</h3>
              <p className="text-muted-foreground mb-4">Complete and submit your applications to see them here!</p>
              <Button>View In-Progress Applications</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="awarded" className="mt-6">
          <div className="text-center py-12 border rounded-lg bg-muted/10">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Awarded Scholarships Yet</h3>
            <p className="text-muted-foreground mb-4">Keep applying! Your awards will appear here.</p>
            <Button>Browse More Scholarships</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Scholarship Database */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Scholarship Database</h2>
        <div className="flex flex-wrap gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search scholarships..."
              className="pl-8 w-full md:w-[250px] h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort By: {sortBy === "deadline" ? "Deadline" : sortBy === "amount" ? "Amount" : "Match"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("deadline")}>Deadline (Soonest)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("amount")}>Amount (Highest)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("eligibility")}>Match Rate (Highest)</DropdownMenuItem>
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
                <SheetTitle>Filter Scholarships</SheetTitle>
                <SheetDescription>Refine the scholarships displayed</SheetDescription>
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
                      <SelectItem value="stem">STEM</SelectItem>
                      <SelectItem value="diversity">Diversity & Inclusion</SelectItem>
                      <SelectItem value="leadership">Leadership</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="public-service">Public Service</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Award Amount</Label>
                  <Select value={selectedAmount} onValueChange={setSelectedAmount}>
                    <SelectTrigger id="amount">
                      <SelectValue placeholder="Select amount range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Amount</SelectItem>
                      <SelectItem value="low">Up to $3,000</SelectItem>
                      <SelectItem value="medium">$3,001 - $7,000</SelectItem>
                      <SelectItem value="high">$7,001+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eligibility">Eligibility Match</Label>
                  <Select value={selectedEligibility} onValueChange={setSelectedEligibility}>
                    <SelectTrigger id="eligibility">
                      <SelectValue placeholder="Select match level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Match Level</SelectItem>
                      <SelectItem value="high">High Match (90%+)</SelectItem>
                      <SelectItem value="medium">Medium Match (70-89%)</SelectItem>
                      <SelectItem value="low">Low Match (Below 70%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-eligible">Show Only Eligible</Label>
                    <Checkbox id="show-eligible" checked={showOnlyEligible} onCheckedChange={setShowOnlyEligible} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Only show scholarships with a high match to your profile (80%+ match)
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
          <div className="col-span-4">Scholarship</div>
          <div className="col-span-2">Organization</div>
          <div className="col-span-1">Amount</div>
          <div className="col-span-2">Deadline</div>
          <div className="col-span-2">Eligibility</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        <div className="divide-y">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship) => (
              <div key={scholarship.id} className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src={scholarship.image || "/placeholder.svg"}
                    alt={scholarship.organization}
                    className="w-8 h-8 object-contain rounded-md border p-1"
                  />
                  <div>
                    <div className="font-medium">{scholarship.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {scholarship.description || "No description available"}
                    </div>
                  </div>
                </div>
                <div className="col-span-2">{scholarship.organization}</div>
                <div className="col-span-1">${scholarship.amount.toLocaleString()}</div>
                <div className="col-span-2">
                  <div>{formatDate(scholarship.deadline)}</div>
                  <Badge
                    variant="outline"
                    className={
                      getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                        ? "bg-red-100 text-red-800 hover:bg-red-100 mt-1"
                        : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100 mt-1"
                          : "bg-green-100 text-green-800 hover:bg-green-100 mt-1"
                    }
                  >
                    {getDaysRemaining(scholarship.deadline)} days left
                  </Badge>
                </div>
                <div className="col-span-2">
                  <Badge
                    variant="outline"
                    className={
                      scholarship.eligibilityScore >= 90
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : scholarship.eligibilityScore >= 70
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {scholarship.eligibilityScore}% Match
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">
                    {scholarship.eligibility.academicLevel.join(", ")}
                  </div>
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
                        <Link href={`/scholarships/${scholarship.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/scholarships/${scholarship.id}/apply`}>Start Application</Link>
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
              <h3 className="text-lg font-medium mb-2">No Scholarships Found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedAmount("all")
                  setSelectedEligibility("all")
                  setShowOnlyEligible(false)
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Application Deadlines */}
      <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scholarship Deadline Calendar</CardTitle>
          <CardDescription>Track important application deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredScholarships
              .filter((s) => getDaysRemaining(s.deadline) <= 30)
              .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
              .slice(0, 5)
              .map((scholarship) => (
                <div key={scholarship.id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                          ? "bg-red-100"
                          : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                            ? "bg-amber-100"
                            : "bg-green-100"
                      }`}
                    >
                      <Calendar
                        className={`h-5 w-5 ${
                          getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                            ? "text-red-600"
                            : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                              ? "text-amber-600"
                              : "text-green-600"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{scholarship.title}</div>
                      <div className="text-sm text-muted-foreground">{scholarship.organization}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatDate(scholarship.deadline)}</div>
                    <div
                      className={`text-sm ${
                        getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                          ? "text-red-600"
                          : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                            ? "text-amber-600"
                            : "text-green-600"
                      }`}
                    >
                      {getDaysRemaining(scholarship.deadline)} days remaining
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/calendar">
              View Full Calendar
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

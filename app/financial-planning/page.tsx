"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, ArrowUpDown, Award, Calendar, ChevronRight, DollarSign, ExternalLink, Filter, GraduationCap, Home, Info, MoreHorizontal, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Helper functions
function getDaysRemaining(deadline: string): number {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function getUrgencyLevel(daysRemaining: number): string {
  if (daysRemaining <= 7) return "high";
  if (daysRemaining <= 30) return "medium";
  return "low";
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

interface Scholarship {
  id: string;
  title: string;
  organization: string;
  category: string;
  amount: number;
  deadline: string;
  eligibility: {
    gpa: string;
    fieldOfStudy: string[];
    academicLevel: string[];
    citizenship: string[];
    demographics?: string[];
  };
  eligibilityScore: number;
  description: string;
  competitiveness: string;
  image: string;
  status: string;
  requirements: string[];
  tags: string[];
  applicationLink?: string;
  nextStep?: string;
  completedRequirements?: number;
  totalRequirements?: number;
  submittedDate?: string;
  popularity?: number;
}

type SortOption = "deadline" | "amount" | "eligibility" | "popularity";

// Sample scholarships data
const mockScholarships: Scholarship[] = [
  {
    id: "1",
    title: "Tech Diversity Scholarship",
    organization: "Tech Foundation",
    category: "Technology",
    amount: 5000,
    deadline: "2024-06-15",
    eligibility: {
      gpa: "3.0",
      fieldOfStudy: ["Computer Science", "Engineering"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["US Citizen", "Permanent Resident"],
      demographics: ["Underrepresented Groups"]
    },
    eligibilityScore: 85,
    description: "Scholarship for underrepresented groups in tech",
    competitiveness: "High",
    image: "/placeholder.svg?height=50&width=50",
    status: "Open",
    requirements: ["Transcript", "Essay", "Recommendation Letter"],
    tags: ["Technology", "Diversity", "STEM"],
    applicationLink: "https://example.com/apply",
    nextStep: "Complete application",
    completedRequirements: 0,
    totalRequirements: 3,
    popularity: 92
  },
  {
    id: "2",
    title: "Women in STEM Scholarship",
    organization: "STEM Foundation",
    category: "stem",
    amount: 7500,
    deadline: "2024-07-01",
    eligibility: {
      gpa: "3.0",
      fieldOfStudy: ["STEM Fields"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["US Citizen", "Permanent Resident"],
      demographics: ["Women"]
    },
    eligibilityScore: 85,
    description: "Empowering women in STEM fields.",
    competitiveness: "Medium",
    image: "/placeholder.svg?height=50&width=50",
    status: "Open",
    requirements: ["Transcript", "Essay", "Letters of Recommendation"],
    tags: ["STEM", "Women", "Diversity"],
    applicationLink: "https://example.com/women-stem",
    nextStep: "Submit application",
    completedRequirements: 1,
    totalRequirements: 3,
    popularity: 88
  },
  {
    id: "3",
    title: "First-Generation Student Scholarship",
    organization: "Education Access Fund",
    category: "general",
    amount: 6000,
    deadline: "2024-08-15",
    eligibility: {
      gpa: "3.0",
      fieldOfStudy: ["Any"],
      academicLevel: ["Undergraduate"],
      citizenship: ["US Citizen"]
    },
    eligibilityScore: 80,
    description: "Supporting first-generation college students.",
    competitiveness: "Medium",
    image: "/placeholder.svg?height=50&width=50",
    status: "Open",
    requirements: ["Transcript", "Personal Statement", "Financial Documents"],
    tags: ["First-Generation", "General", "Need-based"],
    applicationLink: "https://example.com/first-gen",
    nextStep: "Submit personal statement",
    completedRequirements: 0,
    totalRequirements: 3,
    popularity: 85
  },
  {
    id: "4",
    title: "Academic Excellence Award",
    organization: "Education Foundation",
    category: "Academic",
    amount: 10000,
    deadline: "2024-07-01",
    eligibility: {
      gpa: "3.8",
      fieldOfStudy: ["Any"],
      academicLevel: ["Undergraduate"],
      citizenship: ["US Citizen", "Permanent Resident", "International"]
    },
    eligibilityScore: 90,
    description: "Scholarship for outstanding academic achievement",
    competitiveness: "Very High",
    image: "/placeholder.svg?height=50&width=50",
    status: "Open",
    requirements: ["Transcript", "Academic Record", "Research Proposal"],
    tags: ["Academic", "Merit-based", "All Fields"],
    applicationLink: "https://example.com/academic-award",
    nextStep: "Submit research proposal",
    completedRequirements: 1,
    totalRequirements: 3,
    popularity: 88
  }
];

const submittedScholarship: Scholarship = {
  id: "submitted-1",
  title: "Merit Scholarship",
  organization: "University Foundation",
  category: "Academic",
  amount: 10000,
  deadline: "2024-07-01",
  eligibility: {
    gpa: "3.8",
    fieldOfStudy: ["Any"],
    academicLevel: ["Undergraduate"],
    citizenship: ["US Citizen", "Permanent Resident", "International"]
  },
  eligibilityScore: 90,
  description: "Scholarship for outstanding academic achievement",
  competitiveness: "Very High",
  image: "/placeholder.svg?height=50&width=50",
  status: "submitted",
  requirements: ["Transcript", "Academic Record", "Research Proposal"],
  tags: ["Academic", "Merit-based", "All Fields"],
  applicationLink: "https://example.com/academic-award",
  nextStep: "Wait for review",
  completedRequirements: 3,
  totalRequirements: 3,
  submittedDate: "2024-03-15"
};

export default function ScholarshipMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [includeExpired, setIncludeExpired] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAmount, setSelectedAmount] = useState("all");
  const [selectedEligibility, setSelectedEligibility] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("deadline");
  const [showOnlyEligible, setShowOnlyEligible] = useState(false);

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
          gpa: "3.5",
          fieldOfStudy: ["Computer Science", "Engineering"],
          academicLevel: ["Undergraduate"],
          citizenship: ["US Citizen", "Permanent Resident"]
        },
        eligibilityScore: 90,
        description: "Supporting the next generation of technology leaders.",
        competitiveness: "High",
        image: "/placeholder.svg?height=50&width=50",
        status: "Open",
        requirements: ["Transcript", "Essay", "Resume"],
        tags: ["Technology", "Leadership", "STEM"],
        applicationLink: "https://example.com/tech-leaders",
        nextStep: "Submit application",
        completedRequirements: 0,
        totalRequirements: 3,
        popularity: 92,
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
        competitiveness: "Medium",
        image: "/placeholder.svg?height=60&width=60",
        status: "Open",
        requirements: [
          "Academic transcript",
          "Personal statement",
          "One letter of recommendation",
          "Portfolio of projects (optional)",
        ],
        tags: ["Data Science", "Women", "STEM"],
        applicationLink: "https://example.com/data-women",
        nextStep: "Submit application",
        completedRequirements: 0,
        totalRequirements: 4,
        popularity: 88,
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
        competitiveness: "Very High",
        image: "/placeholder.svg?height=60&width=60",
        status: "Open",
        requirements: [
          "Academic transcript",
          "Personal statement",
          "Research proposal",
          "Three letters of recommendation",
          "Leadership experience evidence",
        ],
        tags: ["Leadership", "International", "Graduate"],
        applicationLink: "https://example.com/global-leadership",
        nextStep: "Submit application",
        completedRequirements: 0,
        totalRequirements: 5,
        popularity: 95,
      }
    ],
    applied: [
      {
        id: "applied-1",
        title: "Future Leaders Scholarship",
        organization: "Leadership Foundation",
        category: "leadership",
        amount: 8000,
        deadline: "2024-09-01",
        eligibility: {
          gpa: "3.5",
          fieldOfStudy: ["Any"],
          academicLevel: ["Undergraduate", "Graduate"],
          citizenship: ["All"]
        },
        eligibilityScore: 85,
        description: "Supporting students with leadership potential",
        competitiveness: "High",
        image: "/placeholder.svg?height=50&width=50",
        status: "in-progress",
        requirements: ["Transcript", "Resume", "Essay", "Reference Letters"],
        tags: ["Leadership", "All Fields"],
        applicationLink: "https://example.com/leaders",
        nextStep: "Complete essay",
        completedRequirements: 2,
        totalRequirements: 4,
      },
      submittedScholarship
    ],
    all: [...mockScholarships]
  };

  const getAmountRange = (amount: number): string => {
    if (amount < 1000) return "< $1,000";
    if (amount < 5000) return "$1,000 - $5,000";
    if (amount < 10000) return "$5,000 - $10,000";
    return "> $10,000";
  };

  const filterScholarships = (scholarships: Scholarship[]): Scholarship[] => {
    return scholarships.filter((scholarship: Scholarship) => {
      const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || scholarship.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesAmount = selectedAmount === "all" || getAmountRange(scholarship.amount) === selectedAmount;
      const matchesEligibility = selectedEligibility === "all" || scholarship.eligibilityScore >= parseInt(selectedEligibility);
      const matchesExpired = includeExpired || getDaysRemaining(scholarship.deadline) > 0;
      const matchesEligible = !showOnlyEligible || scholarship.eligibilityScore >= 80;

      return matchesSearch && matchesCategory && matchesAmount && matchesEligibility && matchesExpired && matchesEligible;
    });
  };

  const sortScholarships = (scholarships: Scholarship[]): Scholarship[] => {
    return [...scholarships].sort((a, b) => {
      switch (sortBy) {
        case "deadline":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case "amount":
          return b.amount - a.amount;
        case "eligibility":
          return b.eligibilityScore - a.eligibilityScore;
        case "popularity":
          return (b.popularity || 0) - (a.popularity || 0);
        default:
          return 0;
      }
    });
  };

  const filteredScholarships = sortScholarships(filterScholarships(scholarshipsData.all));

  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="explore" className="mb-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="applied">My Applications</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="mt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarshipsData.recommended.map((scholarship) => (
                  <Card key={scholarship.id}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={scholarship.image}
                            alt={scholarship.organization}
                            className="w-10 h-10 object-contain rounded-md border p-1"
                          />
                          <div>
                            <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                            <div className="text-sm text-muted-foreground">{scholarship.organization}</div>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "high"
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : getUrgencyLevel(getDaysRemaining(scholarship.deadline)) === "medium"
                              ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                              : "bg-green-100 text-green-800 hover:bg-green-100"
                          }
                        >
                          {getDaysRemaining(scholarship.deadline)} days left
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {scholarship.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardDescription>{scholarship.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Award Amount</div>
                            <div className="font-medium flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />
                              {scholarship.amount.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Eligibility Match</div>
                            <div className="font-medium flex items-center">
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
                        </div>

                        <div>
                          <div className="text-sm font-medium mb-1">Requirements</div>
                          <ul className="space-y-1">
                            {scholarship.requirements.slice(0, 3).map((req, index) => (
                              <li key={index} className="text-sm flex items-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                                {req}
                              </li>
                            ))}
                            {scholarship.requirements.length > 3 && (
                              <li className="text-sm text-muted-foreground">
                                +{scholarship.requirements.length - 3} more requirements
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={scholarship.applicationLink || "#"} target="_blank">
                          Visit Website
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/scholarships/${scholarship.id}/apply`}>
                          Apply Now
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applied" className="mt-6">
          <Tabs defaultValue="in-progress">
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
                                src={scholarship.image}
                                alt={scholarship.organization}
                                className="w-10 h-10 object-contain rounded-md border p-1"
                              />
                              <div>
                                <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                                <div className="text-sm text-muted-foreground">{scholarship.organization}</div>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
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
                                <div className="font-medium">{formatDate(scholarship.deadline)}</div>
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
                                value={scholarship.completedRequirements && scholarship.totalRequirements
                                  ? Math.round((scholarship.completedRequirements / scholarship.totalRequirements) * 100)
                                  : 0} 
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
                                src={scholarship.image}
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
                                <div className="font-medium">{scholarship.submittedDate ? formatDate(scholarship.submittedDate) : 'Not submitted'}</div>
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
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="text-center py-12 border rounded-lg bg-muted/10">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Saved Scholarships</h3>
            <p className="text-muted-foreground mb-4">Save scholarships you're interested in for later.</p>
            <Button>Browse Scholarships</Button>
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
              <DropdownMenuItem onClick={() => setSortBy("popularity")}>Popularity (Highest)</DropdownMenuItem>
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
                      <SelectItem value="< $1,000">Less than $1,000</SelectItem>
                      <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="> $10,000">More than $10,000</SelectItem>
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
                      <SelectItem value="90">High Match (90%+)</SelectItem>
                      <SelectItem value="80">Medium Match (80-89%)</SelectItem>
                      <SelectItem value="70">Low Match (70-79%)</SelectItem>
                      <SelectItem value="60">Poor Match (Below 70%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="show-eligible"
                      checked={showOnlyEligible}
                      onCheckedChange={(checked) => setShowOnlyEligible(!!checked)}
                    />
                    <Label htmlFor="show-eligible">Show Only Eligible</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Only show scholarships with a high match to your profile (80%+ match)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="include-expired"
                      checked={includeExpired}
                      onCheckedChange={(checked) => setIncludeExpired(!!checked)}
                    />
                    <Label htmlFor="include-expired">Include Expired</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Show scholarships with passed deadlines
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
                    src={scholarship.image}
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
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedAmount("all");
                  setSelectedEligibility("all");
                  setShowOnlyEligible(false);
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
              .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
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
  );
}
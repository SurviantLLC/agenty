"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, BriefcaseBusiness, ChevronRight, Heart, Home, Sliders } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function CareerMatches() {
  const [sortBy, setSortBy] = useState("match")
  const [favoriteJobs, setFavoriteJobs] = useState<string[]>([])

  // Factor weights for personalization
  const [weights, setWeights] = useState({
    personality: 25,
    skills: 25,
    interests: 25,
    marketDemand: 25,
  })

  const toggleFavorite = (jobId: string) => {
    if (favoriteJobs.includes(jobId)) {
      setFavoriteJobs(favoriteJobs.filter((id) => id !== jobId))
    } else {
      setFavoriteJobs([...favoriteJobs, jobId])
    }
  }

  // Sample career matches data
  const careerMatches = [
    {
      id: "data-scientist",
      title: "Data Scientist",
      match: 92,
      factors: {
        personality: 95,
        skills: 88,
        interests: 90,
        marketDemand: 94,
      },
      description: "Analyze complex data to help organizations make better decisions",
      salary: "$105,000 - $150,000",
      growth: "High (16% growth)",
      education: "Master's Degree",
      topSkills: ["Python", "Machine Learning", "Statistics"],
    },
    {
      id: "ux-researcher",
      title: "UX Researcher",
      match: 88,
      factors: {
        personality: 92,
        skills: 85,
        interests: 94,
        marketDemand: 82,
      },
      description: "Study user behavior and needs to improve product design",
      salary: "$90,000 - $130,000",
      growth: "Above Average (13% growth)",
      education: "Bachelor's Degree",
      topSkills: ["User Testing", "Interviewing", "Data Analysis"],
    },
    {
      id: "product-manager",
      title: "Product Manager",
      match: 85,
      factors: {
        personality: 90,
        skills: 82,
        interests: 88,
        marketDemand: 80,
      },
      description: "Lead product development from conception to launch",
      salary: "$100,000 - $145,000",
      growth: "Above Average (10% growth)",
      education: "Bachelor's Degree",
      topSkills: ["Strategy", "Communication", "Market Analysis"],
    },
    {
      id: "software-engineer",
      title: "Software Engineer",
      match: 83,
      factors: {
        personality: 78,
        skills: 92,
        interests: 85,
        marketDemand: 96,
      },
      description: "Design and build software applications and systems",
      salary: "$95,000 - $140,000",
      growth: "High (22% growth)",
      education: "Bachelor's Degree",
      topSkills: ["Programming", "Problem Solving", "System Design"],
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      match: 80,
      factors: {
        personality: 85,
        skills: 90,
        interests: 82,
        marketDemand: 88,
      },
      description: "Interpret data to identify trends and insights",
      salary: "$75,000 - $110,000",
      growth: "Above Average (18% growth)",
      education: "Bachelor's Degree",
      topSkills: ["SQL", "Data Visualization", "Excel"],
    },
    {
      id: "ai-specialist",
      title: "AI Specialist",
      match: 78,
      factors: {
        personality: 75,
        skills: 80,
        interests: 92,
        marketDemand: 98,
      },
      description: "Develop and implement artificial intelligence solutions",
      salary: "$110,000 - $160,000",
      growth: "Very High (30% growth)",
      education: "Master's Degree",
      topSkills: ["Deep Learning", "NLP", "Python"],
    },
  ]

  // Sort careers based on selected criteria
  const sortedCareers = [...careerMatches].sort((a, b) => {
    if (sortBy === "match") return b.match - a.match
    if (sortBy === "salary") {
      const aAvg =
        Number.parseInt(a.salary.replace(/[^0-9]/g, "").slice(0, 6)) +
        Number.parseInt(a.salary.replace(/[^0-9]/g, "").slice(6)) / 2
      const bAvg =
        Number.parseInt(b.salary.replace(/[^0-9]/g, "").slice(0, 6)) +
        Number.parseInt(b.salary.replace(/[^0-9]/g, "").slice(6)) / 2
      return bAvg - aAvg
    }
    if (sortBy === "growth") {
      const aGrowth = Number.parseInt(a.growth.match(/\d+/)[0])
      const bGrowth = Number.parseInt(b.growth.match(/\d+/)[0])
      return bGrowth - aGrowth
    }
    return 0
  })

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
            <span>Career Matches</span>
          </div>
          <h1 className="text-3xl font-bold">Your Career Matches</h1>
          <p className="text-muted-foreground mt-1">Based on your assessment results</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Sliders className="h-4 w-4 mr-2" />
                Adjust Factors
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Personalize Your Matches</SheetTitle>
                <SheetDescription>
                  Adjust the importance of each factor to see different career recommendations.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Personality Match</label>
                    <span className="text-sm">{weights.personality}%</span>
                  </div>
                  <Slider
                    value={[weights.personality]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setWeights({ ...weights, personality: value[0] })}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Skills Match</label>
                    <span className="text-sm">{weights.skills}%</span>
                  </div>
                  <Slider
                    value={[weights.skills]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setWeights({ ...weights, skills: value[0] })}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Interest Alignment</label>
                    <span className="text-sm">{weights.interests}%</span>
                  </div>
                  <Slider
                    value={[weights.interests]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setWeights({ ...weights, interests: value[0] })}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Market Demand</label>
                    <span className="text-sm">{weights.marketDemand}%</span>
                  </div>
                  <Slider
                    value={[weights.marketDemand]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setWeights({ ...weights, marketDemand: value[0] })}
                  />
                </div>
                <Button className="w-full">Apply Changes</Button>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort By
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("match")}>Match Score</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("salary")}>Salary Range</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("growth")}>Growth Potential</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Matches</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="recommended">Highly Recommended</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Career Match Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCareers.map((career) => (
          <Card key={career.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{career.education}</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(career.id)}
                  className={favoriteJobs.includes(career.id) ? "text-red-500" : ""}
                >
                  <Heart className="h-5 w-5" fill={favoriteJobs.includes(career.id) ? "currentColor" : "none"} />
                  <span className="sr-only">Favorite</span>
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <CardTitle className="text-xl">{career.title}</CardTitle>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                  {career.match}%
                </div>
              </div>
              <CardDescription className="mt-1">{career.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Salary Range</p>
                    <p className="font-medium">{career.salary}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="font-medium">{career.growth}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Match Breakdown</p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Personality</span>
                        <span>{career.factors.personality}%</span>
                      </div>
                      <Progress value={career.factors.personality} className="h-1" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Skills</span>
                        <span>{career.factors.skills}%</span>
                      </div>
                      <Progress value={career.factors.skills} className="h-1" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Interests</span>
                        <span>{career.factors.interests}%</span>
                      </div>
                      <Progress value={career.factors.interests} className="h-1" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Market Demand</span>
                        <span>{career.factors.marketDemand}%</span>
                      </div>
                      <Progress value={career.factors.marketDemand} className="h-1" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Top Skills Required</p>
                  <div className="flex flex-wrap gap-2">
                    {career.topSkills.map((skill) => (
                      <div key={skill} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/career-detail/${career.id}`}>
                  View Career Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

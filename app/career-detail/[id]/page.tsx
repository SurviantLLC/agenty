"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Building,
  ChevronRight,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Home,
  LineChart,
  Lightbulb,
  Star,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CareerDetail({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [educationLevel, setEducationLevel] = useState("bachelors")
  const [experienceLevel, setExperienceLevel] = useState("entry")
  const [location, setLocation] = useState("urban")

  // This would come from an API in a real application
  const careerData = {
    id: params.id,
    title: "Data Scientist",
    description:
      "Data scientists gather and analyze large sets of structured and unstructured data. They build and implement predictive models and machine learning algorithms to extract meaning from data and solve complex problems.",
    match: 92,
    factors: {
      personality: 95,
      skills: 88,
      interests: 90,
      marketDemand: 94,
    },
    salary: {
      entry: "$85,000 - $105,000",
      mid: "$105,000 - $135,000",
      senior: "$135,000 - $180,000",
    },
    growth: {
      rate: "16% (Much faster than average)",
      outlook:
        "Excellent job prospects expected over the next decade as organizations increasingly rely on data-driven decision making.",
    },
    education: {
      minimum: "Bachelor's degree in Computer Science, Statistics, or related field",
      recommended: "Master's degree in Data Science, Machine Learning, or related field",
      alternative: "Bootcamps + strong portfolio for some positions",
    },
    skills: {
      technical: [
        { name: "Python", userLevel: 80, required: 90 },
        { name: "SQL", userLevel: 75, required: 85 },
        { name: "Machine Learning", userLevel: 60, required: 80 },
        { name: "Data Visualization", userLevel: 70, required: 75 },
        { name: "Statistics", userLevel: 65, required: 85 },
        { name: "Big Data Technologies", userLevel: 40, required: 70 },
      ],
      soft: [
        { name: "Problem Solving", userLevel: 85, required: 90 },
        { name: "Communication", userLevel: 80, required: 80 },
        { name: "Critical Thinking", userLevel: 90, required: 85 },
        { name: "Teamwork", userLevel: 75, required: 75 },
        { name: "Business Acumen", userLevel: 60, required: 70 },
      ],
    },
    progression: [
      {
        title: "Junior Data Scientist",
        years: "0-2 years",
        description: "Focus on data cleaning, basic analysis, and implementing established models under supervision.",
      },
      {
        title: "Data Scientist",
        years: "2-5 years",
        description: "Develop models independently, lead analysis projects, and provide insights to stakeholders.",
      },
      {
        title: "Senior Data Scientist",
        years: "5-8 years",
        description:
          "Lead complex projects, mentor junior staff, and influence strategic decisions with data insights.",
      },
      {
        title: "Lead Data Scientist / Manager",
        years: "8+ years",
        description:
          "Oversee data science teams, set technical direction, and align data initiatives with business goals.",
      },
      {
        title: "Director of Data Science",
        years: "10+ years",
        description:
          "Define organizational data strategy, manage multiple teams, and drive innovation in data practices.",
      },
    ],
    industries: ["Technology", "Finance", "Healthcare", "E-commerce", "Manufacturing", "Consulting"],
    dayToDay: [
      "Clean and preprocess large datasets",
      "Build and optimize machine learning models",
      "Collaborate with cross-functional teams",
      "Present findings to stakeholders",
      "Stay current with latest research and technologies",
      "Develop data pipelines and workflows",
    ],
    relatedCareers: [
      {
        title: "Machine Learning Engineer",
        match: 88,
        description: "Focus more on implementing ML systems in production",
      },
      {
        title: "Data Engineer",
        match: 82,
        description: "Specialize in building data infrastructure and pipelines",
      },
      {
        title: "Business Intelligence Analyst",
        match: 78,
        description: "Focus on reporting and business insights from data",
      },
      {
        title: "Research Scientist",
        match: 75,
        description: "More academic focus on developing new algorithms and methods",
      },
    ],
  }

  // Calculate adjusted salary based on scenario inputs
  const calculateScenarioSalary = () => {
    let baseSalary = 0

    if (experienceLevel === "entry") baseSalary = 95000
    else if (experienceLevel === "mid") baseSalary = 120000
    else if (experienceLevel === "senior") baseSalary = 155000

    // Education multiplier
    let eduMultiplier = 1.0
    if (educationLevel === "phd") eduMultiplier = 1.15
    else if (educationLevel === "masters") eduMultiplier = 1.1
    else if (educationLevel === "bachelors") eduMultiplier = 1.0
    else eduMultiplier = 0.9

    // Location multiplier
    let locMultiplier = 1.0
    if (location === "major") locMultiplier = 1.25
    else if (location === "urban") locMultiplier = 1.0
    else locMultiplier = 0.85

    return Math.round(baseSalary * eduMultiplier * locMultiplier).toLocaleString()
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
              <Link href="/career-matches">Career Matches</Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <span>{careerData.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{careerData.title}</h1>
            <div className="flex items-center justify-center h-8 px-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
              {careerData.match}% Match
            </div>
          </div>
          <p className="text-muted-foreground mt-1">{careerData.description}</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button
            variant="outline"
            className={isFavorite ? "text-red-500" : ""}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className="h-4 w-4 mr-2" fill={isFavorite ? "currentColor" : "none"} />
            {isFavorite ? "Saved" : "Save Career"}
          </Button>
          <Button asChild>
            <Link href="/assessment">
              <Zap className="h-4 w-4 mr-2" />
              Improve Match
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Career Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Career Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Match Factors */}
              <div>
                <h3 className="text-lg font-medium mb-3">Match Breakdown</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Personality Alignment</span>
                        <span className="font-medium">{careerData.factors.personality}%</span>
                      </div>
                      <Progress value={careerData.factors.personality} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Skills Match</span>
                        <span className="font-medium">{careerData.factors.skills}%</span>
                      </div>
                      <Progress value={careerData.factors.skills} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Interest Correlation</span>
                        <span className="font-medium">{careerData.factors.interests}%</span>
                      </div>
                      <Progress value={careerData.factors.interests} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Market Demand</span>
                        <span className="font-medium">{careerData.factors.marketDemand}%</span>
                      </div>
                      <Progress value={careerData.factors.marketDemand} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Salary & Growth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Salary Ranges</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-secondary">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <span>Entry Level</span>
                      </div>
                      <span className="font-medium">{careerData.salary.entry}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-secondary">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <span>Mid-Career</span>
                      </div>
                      <span className="font-medium">{careerData.salary.mid}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-secondary">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <span>Senior Level</span>
                      </div>
                      <span className="font-medium">{careerData.salary.senior}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Growth & Outlook</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <LineChart className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Growth Rate</p>
                        <p className="text-sm text-muted-foreground">{careerData.growth.rate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Future Outlook</p>
                        <p className="text-sm text-muted-foreground">{careerData.growth.outlook}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Education Requirements */}
              <div>
                <h3 className="text-lg font-medium mb-3">Education & Qualifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Minimum Requirement</p>
                      <p className="text-sm text-muted-foreground">{careerData.education.minimum}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Recommended</p>
                      <p className="text-sm text-muted-foreground">{careerData.education.recommended}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Alternative Paths</p>
                      <p className="text-sm text-muted-foreground">{careerData.education.alternative}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Progression */}
          <Card>
            <CardHeader>
              <CardTitle>Career Progression</CardTitle>
              <CardDescription>Typical career path for a {careerData.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                {/* Timeline items */}
                <div className="space-y-8">
                  {careerData.progression.map((stage, index) => (
                    <div key={index} className="relative pl-10">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{stage.title}</h3>
                          <span className="text-sm bg-secondary px-2 py-1 rounded-md">{stage.years}</span>
                        </div>
                        <p className="text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Assessment */}
          <Card>
            <CardHeader>
              <CardTitle>Skills Assessment</CardTitle>
              <CardDescription>Your current skills compared to job requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="technical">
                <TabsList className="mb-4">
                  <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>

                <TabsContent value="technical" className="space-y-4">
                  {careerData.skills.technical.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          Your level: {skill.userLevel}% | Required: {skill.required}%
                        </span>
                      </div>
                      <div className="h-3 w-full bg-secondary rounded-full overflow-hidden relative">
                        {/* Required level */}
                        <div
                          className="absolute h-full bg-secondary-foreground opacity-20"
                          style={{ width: `${skill.required}%` }}
                        />
                        {/* User level */}
                        <div
                          className={`h-full ${skill.userLevel >= skill.required ? "bg-green-500" : "bg-amber-500"}`}
                          style={{ width: `${skill.userLevel}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="soft" className="space-y-4">
                  {careerData.skills.soft.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          Your level: {skill.userLevel}% | Required: {skill.required}%
                        </span>
                      </div>
                      <div className="h-3 w-full bg-secondary rounded-full overflow-hidden relative">
                        {/* Required level */}
                        <div
                          className="absolute h-full bg-secondary-foreground opacity-20"
                          style={{ width: `${skill.required}%` }}
                        />
                        {/* User level */}
                        <div
                          className={`h-full ${skill.userLevel >= skill.required ? "bg-green-500" : "bg-amber-500"}`}
                          style={{ width: `${skill.userLevel}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <Button asChild>
                  <Link href="/skills-hub">
                    Develop Missing Skills
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* What-if Scenario Tool */}
          <Card>
            <CardHeader>
              <CardTitle>What-If Scenario</CardTitle>
              <CardDescription>See how different factors affect your career</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Education Level</label>
                <Select value={educationLevel} onValueChange={setEducationLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phd">PhD Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="bootcamp">Bootcamp / Self-taught</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Experience Level</label>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid-Level (3-7 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (8+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Location Type</label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="major">Major Tech Hub</SelectItem>
                    <SelectItem value="urban">Urban Area</SelectItem>
                    <SelectItem value="rural">Rural / Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-muted-foreground mb-2">Estimated Salary</div>
                <div className="text-2xl font-bold">${calculateScenarioSalary()}</div>
              </div>
            </CardContent>
          </Card>

          {/* Day to Day */}
          <Card>
            <CardHeader>
              <CardTitle>Day-to-Day Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {careerData.dayToDay.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Clock className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Industries */}
          <Card>
            <CardHeader>
              <CardTitle>Top Industries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {careerData.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm flex items-center gap-1.5"
                  >
                    <Building className="h-3.5 w-3.5" />
                    {industry}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Careers */}
          <Card>
            <CardHeader>
              <CardTitle>Related Careers</CardTitle>
              <CardDescription>Other careers that match your profile</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {careerData.relatedCareers.map((career, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium">{career.title}</h3>
                      <span className="text-sm font-medium">{career.match}% Match</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{career.description}</p>
                    <Button variant="ghost" size="sm" className="mt-2 h-8 px-2" asChild>
                      <Link href={`/career-detail/${career.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import { Search, Filter, MapPin, BarChart, Check, Star, Bookmark, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "University Comparison Tool | Career Development Platform",
  description: "Compare universities side by side to find your perfect educational match",
}

// Mock data for universities
const universities = [
  {
    id: 1,
    name: "Stanford University",
    location: "Stanford, CA",
    type: "Private",
    ranking: 5,
    tuition: {
      inState: 56169,
      outOfState: 56169,
    },
    acceptanceRate: 4.3,
    studentFacultyRatio: "5:1",
    enrollment: 16914,
    popularPrograms: ["Computer Science", "Engineering", "Business"],
    strengths: ["Research Opportunities", "Alumni Network", "Entrepreneurship"],
    campusLife: ["Vibrant", "Diverse", "Collaborative"],
    admissionRequirements: {
      gpa: "4.0+",
      sat: "1450-1570",
      act: "32-35",
    },
    matchScore: 92,
  },
  {
    id: 2,
    name: "University of California, Berkeley",
    location: "Berkeley, CA",
    type: "Public",
    ranking: 22,
    tuition: {
      inState: 14312,
      outOfState: 44048,
    },
    acceptanceRate: 14.5,
    studentFacultyRatio: "19:1",
    enrollment: 43027,
    popularPrograms: ["Engineering", "Computer Science", "Economics"],
    strengths: ["Academic Excellence", "Research", "Diversity"],
    campusLife: ["Politically Active", "Urban", "Diverse"],
    admissionRequirements: {
      gpa: "3.9+",
      sat: "1330-1530",
      act: "29-35",
    },
    matchScore: 87,
  },
  {
    id: 3,
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    type: "Private",
    ranking: 3,
    tuition: {
      inState: 55878,
      outOfState: 55878,
    },
    acceptanceRate: 6.7,
    studentFacultyRatio: "3:1",
    enrollment: 11376,
    popularPrograms: ["Engineering", "Computer Science", "Physics"],
    strengths: ["Innovation", "Research", "STEM Focus"],
    campusLife: ["Intellectual", "Collaborative", "Intense"],
    admissionRequirements: {
      gpa: "4.0+",
      sat: "1520-1580",
      act: "34-36",
    },
    matchScore: 89,
  },
  {
    id: 4,
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    type: "Public",
    ranking: 25,
    tuition: {
      inState: 15948,
      outOfState: 52266,
    },
    acceptanceRate: 20.2,
    studentFacultyRatio: "15:1",
    enrollment: 47907,
    popularPrograms: ["Business", "Engineering", "Psychology"],
    strengths: ["Athletics", "Research", "School Spirit"],
    campusLife: ["Lively", "Traditional", "Diverse"],
    admissionRequirements: {
      gpa: "3.8+",
      sat: "1340-1530",
      act: "31-34",
    },
    matchScore: 84,
  },
];

// Mock data for admission likelihood
const admissionLikelihood = {
  veryLikely: ["University of Michigan", "University of Washington"],
  likely: ["University of California, Berkeley"],
  possible: ["Stanford University"],
  reach: ["Massachusetts Institute of Technology", "Harvard University"],
}

export default function UniversityComparisonTool() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">University Comparison Tool</h1>
          <p className="text-muted-foreground mt-1">
            Compare universities side by side to find your perfect educational match
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Bookmark className="mr-2 h-4 w-4" />
            Saved Comparisons
          </Button>
          <Button>
            <Share2 className="mr-2 h-4 w-4" />
            Share Results
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Find and Compare Universities</CardTitle>
          <CardDescription>Search for universities and add them to your comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search universities by name, location, or program..."
                  className="pl-8"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="University Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="community">Community College</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {universities.map((university) => (
                  <Card key={university.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{university.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {university.location}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">#{university.ranking}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span>{university.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tuition (In/Out):</span>
                          <span>
                            ${university.tuition.inState.toLocaleString()} / $
                            {university.tuition.outOfState.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Acceptance:</span>
                          <span>{university.acceptanceRate}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Match Score:</span>
                          <div className="flex items-center gap-2">
                            <Progress value={university.matchScore} className="h-2 w-16" />
                            <span className="font-medium">{university.matchScore}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Add to Compare</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="comparison">Side-by-Side Comparison</TabsTrigger>
          <TabsTrigger value="admission">Admission Likelihood</TabsTrigger>
          <TabsTrigger value="map">Location Evaluation</TabsTrigger>
        </TabsList>

        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>University Comparison</CardTitle>
              <CardDescription>Compare universities side by side across key metrics</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Criteria</th>
                    <th className="text-left p-2 font-medium">Stanford University</th>
                    <th className="text-left p-2 font-medium">UC Berkeley</th>
                    <th className="text-left p-2 font-medium">MIT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Location</td>
                    <td className="p-2">Stanford, CA</td>
                    <td className="p-2">Berkeley, CA</td>
                    <td className="p-2">Cambridge, MA</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-2 font-medium">Type</td>
                    <td className="p-2">Private</td>
                    <td className="p-2">Public</td>
                    <td className="p-2">Private</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Ranking</td>
                    <td className="p-2">#5</td>
                    <td className="p-2">#22</td>
                    <td className="p-2">#3</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-2 font-medium">Tuition (In-State)</td>
                    <td className="p-2">$56,169</td>
                    <td className="p-2">$14,312</td>
                    <td className="p-2">$55,878</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Tuition (Out-of-State)</td>
                    <td className="p-2">$56,169</td>
                    <td className="p-2">$44,066</td>
                    <td className="p-2">$55,878</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-2 font-medium">Acceptance Rate</td>
                    <td className="p-2">4.3%</td>
                    <td className="p-2">14.5%</td>
                    <td className="p-2">6.7%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Student-Faculty Ratio</td>
                    <td className="p-2">5:1</td>
                    <td className="p-2">19:1</td>
                    <td className="p-2">3:1</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-2 font-medium">Enrollment</td>
                    <td className="p-2">16,914</td>
                    <td className="p-2">42,327</td>
                    <td className="p-2">11,376</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Popular Programs</td>
                    <td className="p-2">
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="w-fit">
                          Computer Science
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          Engineering
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          Business
                        </Badge>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="w-fit">
                          Engineering
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          Computer Science
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          Economics
                        </Badge>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="w-fit">
                          Engineering
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          Computer Science
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          Physics
                        </Badge>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-2 font-medium">Admission Requirements</td>
                    <td className="p-2">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">GPA:</span>
                          <span>4.0+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SAT:</span>
                          <span>1450-1570</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ACT:</span>
                          <span>32-35</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">GPA:</span>
                          <span>3.9+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SAT:</span>
                          <span>1330-1530</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ACT:</span>
                          <span>29-35</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">GPA:</span>
                          <span>4.0+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SAT:</span>
                          <span>1520-1580</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ACT:</span>
                          <span>34-36</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Match Score</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Progress value={92} className="h-2 w-16" />
                        <span className="font-medium">92%</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Progress value={87} className="h-2 w-16" />
                        <span className="font-medium">87%</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Progress value={89} className="h-2 w-16" />
                        <span className="font-medium">89%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campus Culture Comparison</CardTitle>
              <CardDescription>Understanding the unique environment at each university</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stanford University</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Campus Atmosphere</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge>Vibrant</Badge>
                          <Badge>Diverse</Badge>
                          <Badge>Collaborative</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Strengths</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Research Opportunities</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Alumni Network</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Entrepreneurship</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Student Reviews</h4>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm ml-1">4.8/5</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Amazing campus with endless opportunities. The entrepreneurial spirit is everywhere."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">UC Berkeley</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Campus Atmosphere</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge>Politically Active</Badge>
                          <Badge>Urban</Badge>
                          <Badge>Diverse</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Strengths</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Academic Excellence</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Research</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Diversity</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Student Reviews</h4>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm ml-1">4.2/5</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Challenging academics and a vibrant, politically engaged student body."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">MIT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Campus Atmosphere</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge>Intellectual</Badge>
                          <Badge>Collaborative</Badge>
                          <Badge>Intense</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Strengths</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Innovation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Research</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>STEM Focus</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Student Reviews</h4>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm ml-1">4.7/5</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Rigorous academics with incredible research opportunities and brilliant peers."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admission" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admission Likelihood Calculator</CardTitle>
              <CardDescription>See your chances of admission based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Your Academic Profile</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">GPA</label>
                      <div className="flex items-center gap-4">
                        <Slider defaultValue={[3.8]} max={4.0} step={0.1} className="flex-1" />
                        <span className="font-medium w-10 text-right">3.8</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">SAT Score</label>
                      <div className="flex items-center gap-4">
                        <Slider defaultValue={[1450]} min={400} max={1600} step={10} className="flex-1" />
                        <span className="font-medium w-16 text-right">1450</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">ACT Score</label>
                      <div className="flex items-center gap-4">
                        <Slider defaultValue={[32]} min={1} max={36} step={1} className="flex-1" />
                        <span className="font-medium w-10 text-right">32</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Extracurricular Strength</label>
                      <Select defaultValue="strong">
                        <SelectTrigger>
                          <SelectValue placeholder="Select strength" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exceptional">Exceptional</SelectItem>
                          <SelectItem value="strong">Strong</SelectItem>
                          <SelectItem value="average">Average</SelectItem>
                          <SelectItem value="limited">Limited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Essay Quality</label>
                      <Select defaultValue="strong">
                        <SelectTrigger>
                          <SelectValue placeholder="Select quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exceptional">Exceptional</SelectItem>
                          <SelectItem value="strong">Strong</SelectItem>
                          <SelectItem value="average">Average</SelectItem>
                          <SelectItem value="needs-work">Needs Work</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Recalculate Chances</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Admission Likelihood</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-600 mb-2">Very Likely (70-100%)</h4>
                      <div className="space-y-2">
                        {admissionLikelihood.veryLikely.map((uni) => (
                          <Card key={uni}>
                            <CardContent className="p-3 flex justify-between items-center">
                              <span>{uni}</span>
                              <Badge variant="outline" className="bg-green-50">
                                85%
                              </Badge>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">Likely (50-70%)</h4>
                      <div className="space-y-2">
                        {admissionLikelihood.likely.map((uni) => (
                          <Card key={uni}>
                            <CardContent className="p-3 flex justify-between items-center">
                              <span>{uni}</span>
                              <Badge variant="outline" className="bg-blue-50">
                                65%
                              </Badge>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-600 mb-2">Possible (30-50%)</h4>
                      <div className="space-y-2">
                        {admissionLikelihood.possible.map((uni) => (
                          <Card key={uni}>
                            <CardContent className="p-3 flex justify-between items-center">
                              <span>{uni}</span>
                              <Badge variant="outline" className="bg-yellow-50">
                                40%
                              </Badge>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-2">Reach (0-30%)</h4>
                      <div className="space-y-2">
                        {admissionLikelihood.reach.map((uni) => (
                          <Card key={uni}>
                            <CardContent className="p-3 flex justify-between items-center">
                              <span>{uni}</span>
                              <Badge variant="outline" className="bg-red-50">
                                15%
                              </Badge>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Admission Data</CardTitle>
              <CardDescription>Trends and statistics for admission rates over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[300px] bg-muted/20 rounded-lg border border-dashed flex items-center justify-center">
                <BarChart className="h-16 w-16 text-muted-foreground/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-medium">Admission Rate Trends (2018-2023)</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Historical data visualization showing admission rate changes
                    </p>
                    <Button className="mt-4" size="sm">
                      View Full Data
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="map" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Location Evaluation</CardTitle>
              <CardDescription>Compare university locations and surrounding areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[400px] bg-muted/20 rounded-lg border border-dashed flex items-center justify-center mb-6">
                <MapPin className="h-16 w-16 text-muted-foreground/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-medium">Interactive Map</h3>
                    <p className="text-sm text-muted-foreground mt-1">View and compare university locations</p>
                    <Button className="mt-4" size="sm">
                      Enable Location
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stanford, CA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="climate">
                        <AccordionTrigger>Climate</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Mediterranean climate with warm, dry summers and mild, wet winters. Average temperatures
                            range from 50°F to 75°F throughout the year.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="cost">
                        <AccordionTrigger>Cost of Living</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Very high cost of living. Housing is particularly expensive, with average apartment rentals
                            starting at $2,500 for a studio.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="transportation">
                        <AccordionTrigger>Transportation</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Good public transportation options including Caltrain and bus services. Bike-friendly campus
                            and surrounding areas.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="activities">
                        <AccordionTrigger>Activities</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Close to San Francisco, Silicon Valley, and outdoor recreation areas. Vibrant cultural scene
                            with museums, theaters, and restaurants.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Berkeley, CA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="climate">
                        <AccordionTrigger>Climate</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Mediterranean climate similar to San Francisco with mild temperatures year-round. Foggy
                            mornings are common with average temperatures from 45°F to 75°F.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="cost">
                        <AccordionTrigger>Cost of Living</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            High cost of living, though slightly lower than Stanford/Palo Alto. Average apartment
                            rentals start around $2,000 for a studio.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="transportation">
                        <AccordionTrigger>Transportation</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Excellent public transportation with BART and bus services. Very walkable and bike-friendly
                            city with dedicated lanes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="activities">
                        <AccordionTrigger>Activities</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Rich cultural scene with diverse restaurants, music venues, and theaters. Close to San
                            Francisco and outdoor recreation in Tilden Regional Park.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cambridge, MA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="climate">
                        <AccordionTrigger>Climate</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Four distinct seasons with cold, snowy winters and warm summers. Winter temperatures can
                            drop below 20°F, while summers average around 80°F.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="cost">
                        <AccordionTrigger>Cost of Living</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            High cost of living, particularly for housing. Average apartment rentals start around $2,200
                            for a studio.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="transportation">
                        <AccordionTrigger>Transportation</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Excellent public transportation with the MBTA subway and bus system. Very walkable city with
                            good bike infrastructure.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="activities">
                        <AccordionTrigger>Activities</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">
                            Rich in history and culture with museums, theaters, and historic sites. Vibrant student
                            population creates a lively atmosphere with many events and activities.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

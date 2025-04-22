import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, DollarSign, BookOpen, Calendar, CheckSquare, Filter, Search } from "lucide-react"

export default function TargetSchoolSelector() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Target School Selector</h1>
          <p className="text-muted-foreground mt-2">
            Find your perfect match schools based on your profile, preferences, and goals
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="mr-2">Save Selections</Button>
          <Button variant="outline">Export List</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Search Filters</CardTitle>
              <CardDescription>Refine your school search</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search Schools</Label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="Search by name or program..." className="pl-8" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Program Type</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Bachelor's
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Master's
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    PhD
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Certificate
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Associate's
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Northeast
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Midwest
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    South
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    West
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    International
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Tuition Range</Label>
                  <span className="text-sm text-muted-foreground">$0 - $50,000+</span>
                </div>
                <Slider defaultValue={[20000]} max={50000} step={1000} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Acceptance Rate</Label>
                  <span className="text-sm text-muted-foreground">0% - 100%</span>
                </div>
                <Slider defaultValue={[70]} max={100} step={5} />
              </div>

              <div className="space-y-2">
                <Label>School Size</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Small
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Medium
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    Large
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Special Features</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="research" />
                    <label
                      htmlFor="research"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Research Opportunities
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="internships" />
                    <label
                      htmlFor="internships"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Strong Internship Programs
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="aid" />
                    <label
                      htmlFor="aid"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Generous Financial Aid
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="transfer" />
                    <label
                      htmlFor="transfer"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Transfer-Friendly
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4" variant="secondary">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Profile Match Analysis</CardTitle>
              <CardDescription>How your profile matches with requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>GPA Match</Label>
                  <span className="text-sm font-medium">3.5/4.0</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Credit Transfer</Label>
                  <span className="text-sm font-medium">45/60 credits</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Program Alignment</Label>
                  <span className="text-sm font-medium">High</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Financial Fit</Label>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="matches">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="matches">Matches</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="matches" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>University of Innovation</CardTitle>
                      <CardDescription>Computer Science, Data Science</CardDescription>
                    </div>
                    <Badge className="bg-green-600">98% Match</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Location</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">Boston, MA</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Tuition</span>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">$32,500/year</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Acceptance</span>
                      <div className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">68%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Credits Transfer</span>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">52/60 credits</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Strong program with excellent internship opportunities and research facilities. Financial aid
                    packages available for transfer students.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Add to My List</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Tech Future College</CardTitle>
                      <CardDescription>Software Engineering, AI Studies</CardDescription>
                    </div>
                    <Badge className="bg-green-500">92% Match</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Location</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">San Jose, CA</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Tuition</span>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">$28,750/year</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Acceptance</span>
                      <div className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">72%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Credits Transfer</span>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">48/60 credits</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Industry connections with Silicon Valley companies. Specialized AI and machine learning tracks
                    available.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Add to My List</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Metropolitan University</CardTitle>
                      <CardDescription>Information Systems, Cybersecurity</CardDescription>
                    </div>
                    <Badge className="bg-green-400">85% Match</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Location</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">Chicago, IL</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Tuition</span>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">$24,200/year</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Acceptance</span>
                      <div className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Credits Transfer</span>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">45/60 credits</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Strong cybersecurity program with dedicated labs and certification preparation. Evening and weekend
                    classes available.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Add to My List</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="comparison" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>School Comparison</CardTitle>
                  <CardDescription>Compare your selected schools side by side</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">School</th>
                          <th className="text-left py-3 px-4">Match %</th>
                          <th className="text-left py-3 px-4">Tuition</th>
                          <th className="text-left py-3 px-4">Credits</th>
                          <th className="text-left py-3 px-4">Location</th>
                          <th className="text-left py-3 px-4">Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">University of Innovation</td>
                          <td className="py-3 px-4">98%</td>
                          <td className="py-3 px-4">$32,500</td>
                          <td className="py-3 px-4">52/60</td>
                          <td className="py-3 px-4">Boston, MA</td>
                          <td className="py-3 px-4">Jan 15, 2024</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">Tech Future College</td>
                          <td className="py-3 px-4">92%</td>
                          <td className="py-3 px-4">$28,750</td>
                          <td className="py-3 px-4">48/60</td>
                          <td className="py-3 px-4">San Jose, CA</td>
                          <td className="py-3 px-4">Feb 1, 2024</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">Metropolitan University</td>
                          <td className="py-3 px-4">85%</td>
                          <td className="py-3 px-4">$24,200</td>
                          <td className="py-3 px-4">45/60</td>
                          <td className="py-3 px-4">Chicago, IL</td>
                          <td className="py-3 px-4">Mar 1, 2024</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>University of Innovation</CardTitle>
                  <CardDescription>Application Requirements Checklist</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="transcript1" />
                      <label htmlFor="transcript1" className="text-sm font-medium leading-none">
                        Official Transcripts
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="essay1" />
                      <label htmlFor="essay1" className="text-sm font-medium leading-none">
                        Personal Statement (500-750 words)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="letters1" />
                      <label htmlFor="letters1" className="text-sm font-medium leading-none">
                        2 Letters of Recommendation
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="portfolio1" />
                      <label htmlFor="portfolio1" className="text-sm font-medium leading-none">
                        Portfolio of Projects (CS applicants)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="test1" />
                      <label htmlFor="test1" className="text-sm font-medium leading-none">
                        SAT/ACT Scores (optional)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="app1" />
                      <label htmlFor="app1" className="text-sm font-medium leading-none">
                        Application Fee ($75)
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Download Complete Checklist
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Future College</CardTitle>
                  <CardDescription>Application Requirements Checklist</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="transcript2" />
                      <label htmlFor="transcript2" className="text-sm font-medium leading-none">
                        Official Transcripts
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="essay2" />
                      <label htmlFor="essay2" className="text-sm font-medium leading-none">
                        Statement of Purpose (2 pages max)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="letters2" />
                      <label htmlFor="letters2" className="text-sm font-medium leading-none">
                        3 Letters of Recommendation
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="resume2" />
                      <label htmlFor="resume2" className="text-sm font-medium leading-none">
                        Resume/CV
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="github2" />
                      <label htmlFor="github2" className="text-sm font-medium leading-none">
                        GitHub/Project Links
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="app2" />
                      <label htmlFor="app2" className="text-sm font-medium leading-none">
                        Application Fee ($90)
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Download Complete Checklist
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Application Timeline</CardTitle>
                  <CardDescription>Coordinated schedule for all your applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="relative pl-8 pb-6 border-l border-muted">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-1">
                        <span className="text-sm text-muted-foreground">Now - Dec 15, 2023</span>
                      </div>
                      <h4 className="text-base font-medium">Preparation Phase</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Gather transcripts, request recommendation letters, prepare personal statements
                      </p>
                    </div>

                    <div className="relative pl-8 pb-6 border-l border-muted">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/70"></div>
                      <div className="mb-1">
                        <span className="text-sm text-muted-foreground">Jan 15, 2024</span>
                      </div>
                      <h4 className="text-base font-medium">University of Innovation Deadline</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Complete application with all supporting documents
                      </p>
                      <Badge className="mt-2" variant="outline">
                        Priority
                      </Badge>
                    </div>

                    <div className="relative pl-8 pb-6 border-l border-muted">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/60"></div>
                      <div className="mb-1">
                        <span className="text-sm text-muted-foreground">Feb 1, 2024</span>
                      </div>
                      <h4 className="text-base font-medium">Tech Future College Deadline</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Submit application with portfolio and GitHub links
                      </p>
                    </div>

                    <div className="relative pl-8 pb-6 border-l border-muted">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/50"></div>
                      <div className="mb-1">
                        <span className="text-sm text-muted-foreground">Mar 1, 2024</span>
                      </div>
                      <h4 className="text-base font-medium">Metropolitan University Deadline</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Complete application with all supporting materials
                      </p>
                    </div>

                    <div className="relative pl-8 pb-0">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/40"></div>
                      <div className="mb-1">
                        <span className="text-sm text-muted-foreground">Apr - May 2024</span>
                      </div>
                      <h4 className="text-base font-medium">Decision Period</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Receive admission decisions and financial aid offers
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" /> Add to Calendar
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

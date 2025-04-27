import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BarChart,
  LineChart,
  PieChart,
  ScatterChartIcon as RadarChart,
  DollarSign,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  Award,
  TrendingUp,
  Building,
  Search,
  Filter,
  ChevronRight,
  Star,
  Clock,
} from "lucide-react"

export default function ProgramEvaluationPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Program Evaluation</h1>
        <p className="text-muted-foreground">Compare and analyze academic programs to find your best fit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search programs or majors..."
              className="pl-9 w-full"
              aria-label="Search programs"
            />
          </div>
        </div>
        <div className="md:col-span-1">
          <Select defaultValue="all">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Program Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="undergraduate">Undergraduate</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="certificate">Certificate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 md:col-span-1">
          <Button variant="outline" className="flex-1 md:flex-none gap-2" aria-label="Show more filters">
            <Filter className="h-4 w-4" />
            <span className="hidden md:inline">More Filters</span>
          </Button>
          <Button className="flex-1 md:flex-none" aria-label="Compare selected programs">
            <span className="hidden md:inline">Compare</span>
            <span className="md:hidden">Compare Selected</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card className="col-span-1 lg:col-span-2 h-fit">
          <div className="overflow-x-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Computer Science (B.S.)</span>
                <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">96% Match</Badge>
              </CardTitle>
              <CardDescription>School of Engineering, Stanford University</CardDescription>
            </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-4 gap-2">
                <TabsTrigger value="overview" className="whitespace-nowrap">Overview</TabsTrigger>
                <TabsTrigger value="curriculum" className="whitespace-nowrap">Curriculum</TabsTrigger>
                <TabsTrigger value="outcomes" className="whitespace-nowrap">Outcomes</TabsTrigger>
                <TabsTrigger value="faculty" className="whitespace-nowrap">Faculty</TabsTrigger>
                <TabsTrigger value="research" className="whitespace-nowrap">Research</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" /> Program Highlights
                    </h3>
                    <ul className="ml-6 list-disc text-sm space-y-1">
                      <li>Flexible curriculum with 7 specialized tracks</li>
                      <li>Strong industry connections with Silicon Valley</li>
                      <li>Undergraduate research opportunities</li>
                      <li>92% job placement rate within 6 months</li>
                      <li>Average starting salary: $112,000</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center">
                      <Award className="mr-2 h-4 w-4" /> Program Recognition
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm">4.2/5 Student Rating</span>
                    </div>
                    <p className="text-sm">#3 in Computer Science Programs Nationally</p>
                    <p className="text-sm">#1 for Artificial Intelligence Specialization</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" /> Financial Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="py-2">
                        <CardTitle className="text-sm font-medium">Annual Tuition</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">$56,250</p>
                        <p className="text-xs text-muted-foreground">Before financial aid</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="py-2">
                        <CardTitle className="text-sm font-medium">Average Aid</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">$32,800</p>
                        <p className="text-xs text-muted-foreground">For qualifying students</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="py-2">
                        <CardTitle className="text-sm font-medium">ROI (10yr)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-green-600">+$845K</p>
                        <p className="text-xs text-muted-foreground">Estimated lifetime value</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <Briefcase className="mr-2 h-4 w-4" /> Career Outcomes
                  </h3>
                  <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2">Employment & Salary Projection Graph</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Core Requirements (45 units)</h3>
                    <Badge variant="outline">15 courses</Badge>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Programming Fundamentals",
                      "Data Structures",
                      "Computer Systems",
                      "Algorithms",
                      "Software Engineering",
                    ].map((course, i) => (
                      <div key={i} className="flex items-center p-2 border rounded-md">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">{i + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{course}</p>
                          <p className="text-xs text-muted-foreground">3 units • Required</p>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                    <Button variant="ghost" className="w-full text-primary">
                      View all core courses
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Specialization Tracks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Artificial Intelligence",
                        "Systems",
                        "Theory",
                        "Human-Computer Interaction",
                        "Graphics",
                        "Information",
                        "Unspecialized",
                      ].map((track, i) => (
                        <div key={i} className="flex items-center p-2 border rounded-md">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          <span>{track}</span>
                          <Badge variant="outline" className="ml-auto text-xs">
                            {Math.floor(Math.random() * 10) + 5} courses
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                    <div className="text-center">
                      <RadarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2">Curriculum Comparison Visualization</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="outcomes" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center">
                      <Briefcase className="mr-2 h-4 w-4" /> Employment Outcomes
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Employed within 6 months</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Graduate school placement</span>
                          <span className="text-sm font-medium">23%</span>
                        </div>
                        <Progress value={23} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Internship placement</span>
                          <span className="text-sm font-medium">98%</span>
                        </div>
                        <Progress value={98} className="h-2" />
                      </div>
                    </div>

                    <h3 className="font-medium mt-4">Top Employers</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Google", "Microsoft", "Apple", "Amazon", "Meta", "Tesla"].map((employer, i) => (
                        <div key={i} className="flex items-center p-2 border rounded-md">
                          <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{employer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center">
                      <TrendingUp className="mr-2 h-4 w-4" /> Salary Outcomes
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Starting Salary (Average)</span>
                        <span className="font-medium">$112,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Mid-Career Salary (10yr)</span>
                        <span className="font-medium">$189,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Salary Range (Starting)</span>
                        <span className="font-medium">$95K - $135K</span>
                      </div>
                    </div>

                    <div className="h-48 border rounded-md p-4 flex items-center justify-center mt-4">
                      <div className="text-center">
                        <LineChart className="h-10 w-10 mx-auto text-muted-foreground" />
                        <p className="mt-2">Salary Progression Graph</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium flex items-center mb-4">
                    <Users className="mr-2 h-4 w-4" /> Graduate Success Stories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2].map((_, i) => (
                      <Card key={i}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Alex Johnson, Class of 2021</h4>
                              <p className="text-sm text-muted-foreground mb-2">Software Engineer at Google</p>
                              <p className="text-sm">
                                "The program prepared me with both theoretical knowledge and practical skills. The
                                industry connections helped me land my dream job."
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faculty" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Faculty Expertise</h3>
                  <Badge variant="outline">42 Faculty Members</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Dr. Sarah Chen", area: "Artificial Intelligence", publications: 78 },
                    { name: "Dr. Michael Rodriguez", area: "Computer Systems", publications: 64 },
                    { name: "Dr. James Wilson", area: "Human-Computer Interaction", publications: 52 },
                    { name: "Dr. Emily Taylor", area: "Algorithms & Theory", publications: 93 },
                  ].map((faculty, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{faculty.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {faculty.area} • {faculty.publications} Publications
                            </p>
                            <div className="flex mt-2">
                              <Badge variant="secondary" className="mr-2 text-xs">
                                Research Active
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Mentorship Available
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="mt-2">Faculty Expertise Distribution</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="research" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Research Opportunities</h3>
                  <Badge variant="outline">24 Active Projects</Badge>
                </div>

                <div className="space-y-3">
                  {[
                    { title: "Machine Learning for Healthcare", type: "Lab Research", availability: "Fall 2023" },
                    {
                      title: "Next-Generation Cybersecurity",
                      type: "Industry Partnership",
                      availability: "Year-round",
                    },
                    { title: "Human-AI Collaboration", type: "Faculty Research", availability: "Spring 2024" },
                    { title: "Quantum Computing Algorithms", type: "Graduate Research", availability: "Summer 2024" },
                  ].map((project, i) => (
                    <div key={i} className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{project.title}</h4>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" className="mr-2 text-xs">
                              {project.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> {project.availability}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="font-medium mb-3">Research Funding & Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium">$42M</h4>
                        <p className="text-sm text-muted-foreground">Annual Research Funding</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium">12</h4>
                        <p className="text-sm text-muted-foreground">Research Labs</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium">85%</h4>
                        <p className="text-sm text-muted-foreground">Undergrads in Research</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Program Comparison</CardTitle>
              <CardDescription>Compare with other similar programs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Computer Science (Stanford)</span>
                  </div>
                  <Badge>Selected</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Computer Science (MIT)</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Add
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm">Computer Science (Berkeley)</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Add
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <span className="text-sm">Computer Science (CMU)</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Add
                  </Button>
                </div>
              </div>
              <Button className="w-full">Compare Selected Programs</Button>
            </CardContent>
          </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROI Calculator</CardTitle>
            <CardDescription>Estimate your return on investment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Expected Annual Salary</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">$80K</span>
                <Slider defaultValue={[110]} max={200} min={80} step={5} className="flex-1" />
                <span className="text-sm">$200K</span>
              </div>
              <div className="text-right text-sm font-medium">$110,000</div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Years to Calculate</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">5</span>
                <Slider defaultValue={[10]} max={30} min={5} step={5} className="flex-1" />
                <span className="text-sm">30</span>
              </div>
              <div className="text-right text-sm font-medium">10 years</div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Financial Aid Estimate</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">$0</span>
                <Slider defaultValue={[30000]} max={60000} min={0} step={5000} className="flex-1" />
                <span className="text-sm">$60K</span>
              </div>
              <div className="text-right text-sm font-medium">$30,000</div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Total Program Cost</span>
                <span className="font-medium">$105,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">10-Year Earnings</span>
                <span className="font-medium">$1,320,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">10-Year ROI</span>
                <span className="font-medium text-green-600">+$845,000</span>
              </div>
            </div>

            <Button className="w-full">Generate Detailed Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

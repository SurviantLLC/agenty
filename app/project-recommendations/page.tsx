import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  BookOpen,
  Bookmark,
  Code,
  ExternalLink,
  Filter,
  Github,
  GraduationCap,
  Layers,
  MessageSquare,
  Search,
  Star,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ProjectRecommendationsPage() {
  return (
    <main className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Recommendation Engine</h1>
          <p className="text-muted-foreground">
            Discover projects aligned with your career goals and skill development needs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filters
          </Button>
          <Button className="gap-2">
            <Search size={16} />
            Find Projects
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filter Projects</CardTitle>
              <CardDescription>Refine recommendations based on your preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Career Alignment</Label>
                <Select defaultValue="software-development">
                  <SelectTrigger>
                    <SelectValue placeholder="Select career path" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-development">Software Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="ai-ml">AI/Machine Learning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Skill Focus</Label>
                <div className="space-y-2">
                  {["Python", "JavaScript", "React", "Data Analysis", "Machine Learning", "UI/UX Design"].map(
                    (skill, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`skill-${i}`} defaultChecked={i < 3} />
                        <Label htmlFor={`skill-${i}`} className="text-sm font-normal">
                          {skill}
                        </Label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label>Difficulty Level</Label>
                  <span className="text-sm text-muted-foreground">Intermediate</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Advanced</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Time Commitment</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time commitment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quick">Quick (&lt; 5 hours)</SelectItem>
                    <SelectItem value="medium">Medium (5-20 hours)</SelectItem>
                    <SelectItem value="long">Long (20-50 hours)</SelectItem>
                    <SelectItem value="extensive">Extensive (50+ hours)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Project Type</Label>
                <div className="space-y-2">
                  {[
                    { label: "Individual", checked: true },
                    { label: "Team-based", checked: false },
                    { label: "Open Source Contribution", checked: true },
                    { label: "Competition/Hackathon", checked: false },
                    { label: "Research", checked: false },
                  ].map((type, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Checkbox id={`type-${i}`} defaultChecked={type.checked} />
                      <Label htmlFor={`type-${i}`} className="text-sm font-normal">
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Apply Filters
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Saved Projects</CardTitle>
              <CardDescription>Projects you've bookmarked for later</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Personal Portfolio Website", type: "Web Development" },
                { title: "Machine Learning Image Classifier", type: "AI/ML" },
                { title: "Budget Tracker App", type: "Mobile Development" },
              ].map((project, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium text-sm">{project.title}</div>
                    <div className="text-xs text-muted-foreground">{project.type}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View All Saved
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <div className="flex items-center justify-between my-4">
              <div className="text-sm text-muted-foreground">Showing 12 projects</div>
              <div className="flex items-center gap-2">
                <Input placeholder="Search projects..." className="w-[200px]" />
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="difficulty">Difficulty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Personal Portfolio Website",
                    description: "Create a responsive portfolio website to showcase your projects and skills",
                    difficulty: "Intermediate",
                    time: "15-20 hours",
                    skills: ["HTML/CSS", "JavaScript", "React"],
                    category: "Web Development",
                    resources: 5,
                    tutorials: 3,
                    collaborators: 0,
                  },
                  {
                    title: "Machine Learning Image Classifier",
                    description: "Build an image classification model using TensorFlow or PyTorch",
                    difficulty: "Advanced",
                    time: "25-30 hours",
                    skills: ["Python", "TensorFlow", "Machine Learning"],
                    category: "AI/ML",
                    resources: 7,
                    tutorials: 4,
                    collaborators: 2,
                  },
                  {
                    title: "Budget Tracker App",
                    description: "Develop a mobile app to track personal expenses and budget",
                    difficulty: "Intermediate",
                    time: "20-25 hours",
                    skills: ["React Native", "JavaScript", "UI Design"],
                    category: "Mobile Development",
                    resources: 4,
                    tutorials: 2,
                    collaborators: 1,
                  },
                  {
                    title: "E-commerce API",
                    description: "Build a RESTful API for an e-commerce platform with authentication",
                    difficulty: "Intermediate",
                    time: "15-20 hours",
                    skills: ["Node.js", "Express", "MongoDB"],
                    category: "Backend Development",
                    resources: 6,
                    tutorials: 3,
                    collaborators: 0,
                  },
                  {
                    title: "Data Visualization Dashboard",
                    description: "Create an interactive dashboard to visualize complex datasets",
                    difficulty: "Intermediate",
                    time: "15-20 hours",
                    skills: ["D3.js", "React", "Data Analysis"],
                    category: "Data Science",
                    resources: 5,
                    tutorials: 2,
                    collaborators: 1,
                  },
                  {
                    title: "Social Media Analyzer",
                    description: "Build a tool to analyze social media sentiment and trends",
                    difficulty: "Advanced",
                    time: "25-30 hours",
                    skills: ["Python", "NLP", "API Integration"],
                    category: "Data Science",
                    resources: 8,
                    tutorials: 3,
                    collaborators: 2,
                  },
                ].map((project, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark size={16} />
                        </Button>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.skills.map((skill, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Layers size={14} className="text-muted-foreground" />
                          <span>
                            Difficulty: <span className="font-medium">{project.difficulty}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-muted-foreground" />
                          <span>
                            Time: <span className="font-medium">{project.time}</span>
                          </span>
                        </div>
                      </div>

                      <Separator className="my-3" />

                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <BookOpen size={14} className="text-muted-foreground" />
                          <span>{project.resources} Resources</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap size={14} className="text-muted-foreground" />
                          <span>{project.tutorials} Tutorials</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} className="text-muted-foreground" />
                          <span>{project.collaborators} Collaborators</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button className="w-full">View Project Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Similar project cards would go here */}
                <Card className="flex items-center justify-center h-40 bg-gray-50 border-dashed">
                  <p className="text-muted-foreground">Select the "Recommended" tab to view projects</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="beginner" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Similar project cards would go here */}
                <Card className="flex items-center justify-center h-40 bg-gray-50 border-dashed">
                  <p className="text-muted-foreground">Select the "Recommended" tab to view projects</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Similar project cards would go here */}
                <Card className="flex items-center justify-center h-40 bg-gray-50 border-dashed">
                  <p className="text-muted-foreground">Select the "Recommended" tab to view projects</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Featured Project: Full-Stack Social Platform</CardTitle>
              <CardDescription>Build a complete social networking platform with modern technologies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <Code size={40} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-muted-foreground">Project Architecture Diagram</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Skills You'll Develop</h3>
                  <div className="space-y-1">
                    {["React", "Node.js", "MongoDB", "Authentication", "Real-time Features", "Deployment"].map(
                      (skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={14} className="text-green-500" />
                          <span>{skill}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Project Components</h3>
                  <div className="space-y-1">
                    {[
                      "User Authentication",
                      "Profile Management",
                      "Post Creation",
                      "Comments & Likes",
                      "Friend System",
                      "Notifications",
                    ].map((component, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Layers size={14} className="text-purple-500" />
                        <span>{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Career Relevance</h3>
                  <div className="space-y-1">
                    {[
                      "Full-Stack Developer",
                      "Frontend Developer",
                      "Backend Developer",
                      "Software Engineer",
                      "Web Developer",
                      "App Developer",
                    ].map((career, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Star size={14} className="text-amber-500" />
                        <span>{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Expert Guidance</h3>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jennifer Smith</div>
                      <div className="text-sm text-muted-foreground">Senior Software Engineer at Tech Co.</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Collaboration Opportunities</h3>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Current Team</span>
                      <Badge>3 Members</Badge>
                    </div>
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>B</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>C</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button className="sm:flex-1 gap-2">
                <Github size={16} />
                View on GitHub
              </Button>
              <Button variant="outline" className="sm:flex-1 gap-2">
                <MessageSquare size={16} />
                Join Discussion
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

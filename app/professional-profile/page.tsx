"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  CalendarIcon,
  Edit,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Plus,
  RefreshCw,
  Save,
  Trash2,
  Upload,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface ChartData {
  month: string;
  profit: number;
}

function parseCSV(text: string): ChartData[] {
  return text.split('\n')
    .filter(line => line.trim())
    .map(line => {
      const [month, profit] = line.split(',');
      return {
        month,
        profit: parseFloat(profit)
      };
    });
}

function MonthlyProfitChart() {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/monthly-profits');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-64">
      {/* Chart implementation */}
    </div>
  );
}

export default function ProfessionalProfilePage() {
  const [date, setDate] = useState<Date>()

  return (
    <main className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Professional Profile Manager</h1>
          <p className="text-muted-foreground">Build and optimize your professional presence across platforms</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <RefreshCw size={16} />
            Refresh Analysis
          </Button>
          <Button className="gap-2">
            <Save size={16} />
            Save All Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="linkedin" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="github">GitHub</TabsTrigger>
            </TabsList>

            <TabsContent value="linkedin" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      LinkedIn Profile Optimizer
                    </CardTitle>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink size={14} />
                      View Profile
                    </Button>
                  </div>
                  <CardDescription>
                    Optimize your LinkedIn profile to attract recruiters and showcase your professional brand
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="headline">Professional Headline</Label>
                      <span className="text-xs text-muted-foreground">Optimization Score: 85%</span>
                    </div>
                    <Input
                      id="headline"
                      placeholder="e.g., Computer Science Student | Data Science Enthusiast | Python Developer"
                      defaultValue="Computer Science Student at Stanford University"
                    />
                    <p className="text-sm text-amber-600">
                      Suggestion: Add your key skills and interests to your headline
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="summary">Professional Summary</Label>
                      <span className="text-xs text-muted-foreground">Optimization Score: 70%</span>
                    </div>
                    <Textarea
                      id="summary"
                      placeholder="Write a compelling summary that highlights your skills, experiences, and career goals"
                      className="min-h-[120px]"
                      defaultValue="Computer Science student at Stanford University with a passion for machine learning and data analysis. Looking for internship opportunities in software development."
                    />
                    <p className="text-sm text-amber-600">
                      Suggestion: Expand your summary with specific achievements and quantifiable results
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Profile Photo</Label>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full gap-1">
                            <Upload size={14} />
                            Upload New
                          </Button>
                          <p className="text-xs text-green-600">Professional photo detected ✓</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Background Image</Label>
                      <div className="h-16 bg-gray-100 rounded-md flex items-center justify-center relative">
                        <Button variant="outline" size="sm" className="absolute gap-1">
                          <Upload size={14} />
                          Upload Background
                        </Button>
                      </div>
                      <p className="text-xs text-amber-600">Suggestion: Add a professional background image</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label>Skills Optimization</Label>
                      <Button variant="ghost" size="sm" className="h-7 gap-1">
                        <Plus size={14} />
                        Add Skill
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {["Python", "Data Analysis", "Machine Learning", "JavaScript", "React"].map((skill, i) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <Badge variant={i < 3 ? "default" : "outline"} className={i < 3 ? "" : "text-gray-500"}>
                              {i < 3 ? "Top Skill" : "Additional"}
                            </Badge>
                            <span>{skill}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <Edit size={14} />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500">
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-amber-600">Suggestion: Add endorsements for your top skills</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Save size={16} />
                    Save LinkedIn Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="portfolio" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Portfolio Creation Assistant
                    </CardTitle>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink size={14} />
                      Preview Portfolio
                    </Button>
                  </div>
                  <CardDescription>
                    Build a professional portfolio to showcase your projects and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-2 border-purple-200 bg-purple-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Minimalist</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-24 bg-white rounded-md mb-2"></div>
                        <div className="space-y-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                          <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Creative</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-24 bg-gray-100 rounded-md mb-2"></div>
                        <div className="space-y-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                          <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Technical</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-24 bg-gray-100 rounded-md mb-2"></div>
                        <div className="space-y-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                          <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio-domain">Custom Domain</Label>
                    <div className="flex gap-2">
                      <Input id="portfolio-domain" placeholder="yourname" />
                      <div className="flex items-center bg-gray-100 px-3 rounded-md text-sm text-gray-500">
                        .portfolio.dev
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label>Featured Projects</Label>
                      <Button variant="ghost" size="sm" className="h-7 gap-1">
                        <Plus size={14} />
                        Add Project
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {["Machine Learning Image Classifier", "Personal Finance Dashboard", "E-commerce Website"].map(
                        (project, i) => (
                          <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                            <span>{project}</span>
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon" className="h-7 w-7">
                                <Edit size={14} />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500">
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Portfolio</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="github" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Github className="h-5 w-5" />
                      GitHub Profile Enhancer
                    </CardTitle>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink size={14} />
                      View GitHub
                    </Button>
                  </div>
                  <CardDescription>
                    Optimize your GitHub profile to showcase your coding projects and contributions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="github-bio">GitHub Bio</Label>
                    <Textarea
                      id="github-bio"
                      placeholder="Write a short bio for your GitHub profile"
                      className="min-h-[80px]"
                      defaultValue="CS student passionate about ML and web development. Building projects that solve real problems."
                    />
                    <p className="text-sm text-amber-600">Suggestion: Add your current focus areas and technologies</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="github-readme">README.md Profile</Label>
                    <Textarea
                      id="github-readme"
                      placeholder="Create a README.md for your GitHub profile"
                      className="min-h-[120px] font-mono text-sm"
                      defaultValue="# Hi there 👋\n\nI'm a Computer Science student at Stanford University.\n\n## Skills\n- Python\n- JavaScript\n- Machine Learning\n\n## Projects\n- Coming soon..."
                    />
                    <p className="text-sm text-green-600">
                      Tip: Add badges, stats, and project links to make your profile stand out
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Profile Visibility Settings</Label>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-contributions" className="text-sm">
                            Show Contribution Graph
                          </Label>
                          <p className="text-xs text-muted-foreground">Display your activity on your profile</p>
                        </div>
                        <Switch id="show-contributions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-organizations" className="text-sm">
                            Show Organizations
                          </Label>
                          <p className="text-xs text-muted-foreground">Display organizations you're a member of</p>
                        </div>
                        <Switch id="show-organizations" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-stars" className="text-sm">
                            Show Stars
                          </Label>
                          <p className="text-xs text-muted-foreground">Display repositories you've starred</p>
                        </div>
                        <Switch id="show-stars" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Update GitHub Profile</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Achievement Tracking Database</CardTitle>
              <CardDescription>Document and organize your professional achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="font-medium">Recent Achievements</h3>
                  <p className="text-sm text-muted-foreground">Track your professional milestones</p>
                </div>
                <Button className="gap-2">
                  <Plus size={16} />
                  Add Achievement
                </Button>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Completed Machine Learning Certification", date: "Mar 15, 2023", category: "Education" },
                  { title: "Published Research Paper on Data Analysis", date: "Jan 10, 2023", category: "Research" },
                  { title: "Won 2nd Place in Hackathon", date: "Nov 5, 2022", category: "Competition" },
                ].map((achievement, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{achievement.title}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{achievement.date}</span>
                        <span>•</span>
                        <Badge variant="outline">{achievement.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Strength Analyzer</CardTitle>
              <CardDescription>Track your professional profile completeness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Strength</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>

              <div className="space-y-3">
                {[
                  { platform: "LinkedIn", score: 85, icon: <Linkedin size={16} className="text-blue-600" /> },
                  { platform: "Portfolio", score: 60, icon: <FileText size={16} className="text-purple-600" /> },
                  { platform: "GitHub", score: 70, icon: <Github size={16} /> },
                ].map((platform, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {platform.icon}
                        <span className="text-sm font-medium">{platform.platform}</span>
                      </div>
                      <span className="text-sm font-medium">{platform.score}%</span>
                    </div>
                    <Progress value={platform.score} className="h-1.5" />
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-medium mb-2">Improvement Suggestions</h3>
                <div className="space-y-2">
                  {[
                    "Add more specific skills to your LinkedIn profile",
                    "Create a portfolio to showcase your projects",
                    "Add a professional README to your GitHub profile",
                    "Request endorsements for your top skills",
                  ].map((suggestion, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className="mt-0.5 text-amber-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-alert-circle"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" x2="12" y1="8" y2="12" />
                          <line x1="12" x2="12.01" y1="16" y2="16" />
                        </svg>
                      </div>
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Management</CardTitle>
              <CardDescription>Keep your profiles fresh and relevant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Refresh Schedule</h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="refresh-linkedin" className="flex items-center gap-2 text-sm">
                      <Linkedin size={16} className="text-blue-600" />
                      LinkedIn Profile
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[180px] justify-start text-left font-normal",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Every 3 months</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="refresh-portfolio" className="flex items-center gap-2 text-sm">
                      <FileText size={16} className="text-purple-600" />
                      Portfolio
                    </Label>
                    <Button
                      variant="outline"
                      className="w-[180px] justify-start text-left font-normal text-muted-foreground"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>After each project</span>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="refresh-github" className="flex items-center gap-2 text-sm">
                      <Github size={16} />
                      GitHub Profile
                    </Label>
                    <Button
                      variant="outline"
                      className="w-[180px] justify-start text-left font-normal text-muted-foreground"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Every 6 months</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-medium mb-2">Update History</h3>
                <div className="space-y-2">
                  {[
                    { platform: "LinkedIn", action: "Updated Skills", date: "2 weeks ago" },
                    { platform: "GitHub", action: "Updated README", date: "1 month ago" },
                    { platform: "Portfolio", action: "Added New Project", date: "3 months ago" },
                  ].map((update, i) => (
                    <div key={i} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        {update.platform === "LinkedIn" && <Linkedin size={14} className="text-blue-600" />}
                        {update.platform === "GitHub" && <Github size={14} />}
                        {update.platform === "Portfolio" && <FileText size={14} className="text-purple-600" />}
                        <span>{update.action}</span>
                      </div>
                      <span className="text-muted-foreground">{update.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2">
                <RefreshCw size={16} />
                Update All Profiles
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

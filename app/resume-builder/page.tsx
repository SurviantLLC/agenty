import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  Edit,
  FileText,
  Layout,
  Lightbulb,
  Plus,
  Sparkles,
  Star,
  ThumbsUp,
  Trash,
  Upload,
  Wand2,
} from "lucide-react"

export default function ResumeBuilderPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume Builder</h1>
          <p className="text-muted-foreground mt-1">
            Create a professional resume tailored to your target opportunities
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import Resume
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Editor</CardTitle>
              <CardDescription>Build and customize your resume content</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid grid-cols-5 mb-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" defaultValue="Alex Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input id="title" placeholder="Software Engineer" defaultValue="Computer Science Student" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        defaultValue="alex.johnson@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(123) 456-7890" defaultValue="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, State" defaultValue="Boston, MA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website/LinkedIn</Label>
                      <Input
                        id="website"
                        placeholder="linkedin.com/in/username"
                        defaultValue="linkedin.com/in/alexjohnson"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      placeholder="Brief overview of your background and career goals"
                      className="min-h-[100px]"
                      defaultValue="Dedicated Computer Science student with strong programming skills and experience in web development and data analysis. Seeking opportunities to apply technical knowledge in a challenging internship position."
                    />
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Wand2 className="h-3 w-3" />
                        <span>Generate Summary</span>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="space-y-6">
                  <Card className="p-4 border-dashed">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">Boston University</h3>
                        <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
                        <p className="text-sm text-muted-foreground">2020 - 2024 (Expected)</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">GPA: 3.8/4.0</p>
                      <p className="text-sm">
                        Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning, Web
                        Development
                      </p>
                      <p className="text-sm">Honors: Dean's List (All Semesters), Academic Excellence Scholarship</p>
                    </div>
                  </Card>

                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Education
                  </Button>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <Card className="p-4 border-dashed">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">Tech Solutions Inc.</h3>
                        <p className="text-sm text-muted-foreground">Software Development Intern</p>
                        <p className="text-sm text-muted-foreground">June 2022 - August 2022</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Developed and maintained web applications using React.js and Node.js, improving user
                          experience and site performance by 30%
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Collaborated with a team of 5 developers to implement new features and fix bugs in the
                          company's main product
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Participated in code reviews and agile development processes, contributing to improved code
                          quality and team efficiency
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Wand2 className="h-3 w-3" />
                        <span>Enhance Bullet Points</span>
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 border-dashed">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">University Research Lab</h3>
                        <p className="text-sm text-muted-foreground">Research Assistant</p>
                        <p className="text-sm text-muted-foreground">September 2021 - Present</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Assist in data collection and analysis for machine learning research project, processing over
                          10,000 data points
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Develop Python scripts to automate data processing tasks, reducing analysis time by 40%
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Contribute to research papers and presentations for academic conferences
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Wand2 className="h-3 w-3" />
                        <span>Enhance Bullet Points</span>
                      </Button>
                    </div>
                  </Card>

                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Experience
                  </Button>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base">Technical Skills</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {[
                          "Python",
                          "JavaScript",
                          "Java",
                          "HTML/CSS",
                          "React.js",
                          "Node.js",
                          "SQL",
                          "Git",
                          "Docker",
                          "AWS",
                          "Data Analysis",
                          "Machine Learning",
                        ].map((skill, i) => (
                          <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                            <span className="text-sm">{skill}</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Trash className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Input placeholder="Add a skill" className="max-w-xs" />
                        <Button variant="outline">Add</Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="text-base">Soft Skills</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {[
                          "Problem Solving",
                          "Team Collaboration",
                          "Communication",
                          "Time Management",
                          "Leadership",
                          "Critical Thinking",
                        ].map((skill, i) => (
                          <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                            <span className="text-sm">{skill}</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Trash className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Input placeholder="Add a skill" className="max-w-xs" />
                        <Button variant="outline">Add</Button>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-primary/5 rounded-md">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Skill Optimization Suggestions</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Based on your target roles and industry trends
                          </p>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                              >
                                Add
                              </Badge>
                              <span className="text-sm">TensorFlow, Cloud Computing, Agile Methodologies</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300"
                              >
                                Emphasize
                              </Badge>
                              <span className="text-sm">React.js, Python, Data Analysis</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">
                            Apply Suggestions
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="space-y-6">
                  <Card className="p-4 border-dashed">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">Personal Portfolio Website</h3>
                        <p className="text-sm text-muted-foreground">Web Development</p>
                        <p className="text-sm text-muted-foreground">January 2023 - March 2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Designed and developed a responsive personal portfolio website using React.js, Next.js, and
                          Tailwind CSS
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Implemented a contact form with serverless functions and email integration
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">Optimized site performance achieving a 95+ Lighthouse score</p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Wand2 className="h-3 w-3" />
                        <span>Enhance Description</span>
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 border-dashed">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">Data Analysis Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Data Visualization</p>
                        <p className="text-sm text-muted-foreground">October 2022 - December 2022</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">
                          Created an interactive data visualization dashboard using Python, Pandas, and Plotly
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">Processed and analyzed large datasets to extract meaningful insights</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <p className="text-sm">Implemented filtering and sorting features to enhance user experience</p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Wand2 className="h-3 w-3" />
                        <span>Enhance Description</span>
                      </Button>
                    </div>
                  </Card>

                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Project
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button>Update Resume</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Optimization</CardTitle>
              <CardDescription>AI-powered suggestions to enhance your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-md">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-amber-800 dark:text-amber-300">Action Verb Suggestions</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Replace generic verbs with stronger action verbs to make your accomplishments stand out.
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="line-through">Helped</span>
                        <ArrowRight className="h-4 w-4 mx-1" />
                        <span className="font-medium">Facilitated, Supported, Guided</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="line-through">Made</span>
                        <ArrowRight className="h-4 w-4 mx-1" />
                        <span className="font-medium">Developed, Created, Produced</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="line-through">Used</span>
                        <ArrowRight className="h-4 w-4 mx-1" />
                        <span className="font-medium">Utilized, Implemented, Leveraged</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Apply Suggestions
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-md">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-300">Keyword Integration</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Add these industry-specific keywords to improve your resume's visibility to recruiters and ATS
                      systems.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        "Full-stack development",
                        "Agile methodology",
                        "Cross-functional collaboration",
                        "Data visualization",
                        "API integration",
                        "Version control",
                        "Unit testing",
                      ].map((keyword, i) => (
                        <Badge key={i} variant="outline" className="bg-blue-100/50 dark:bg-blue-900/30">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Add Keywords
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-md">
                <div className="flex items-start gap-3">
                  <ThumbsUp className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-300">
                      Accomplishment Statement Generator
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Transform your responsibilities into achievement-focused statements with measurable results.
                    </p>
                    <div className="mt-3 space-y-3">
                      <div>
                        <Label htmlFor="responsibility" className="text-sm">
                          Enter a job responsibility:
                        </Label>
                        <Textarea
                          id="responsibility"
                          placeholder="Describe what you did in your role"
                          className="mt-1 min-h-[60px]"
                          defaultValue="Worked on a team project to develop a new website feature"
                        />
                      </div>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <Wand2 className="h-4 w-4" />
                        Generate Accomplishment Statement
                      </Button>
                      <div className="p-3 bg-green-100/50 dark:bg-green-900/30 rounded-md">
                        <p className="text-sm">
                          <span className="font-medium">Result:</span> Collaborated with a cross-functional team of 5
                          developers to design and implement a new website feature that increased user engagement by 25%
                          and reduced bounce rate by 15%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
              <CardDescription>See how your resume will look</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-white dark:bg-slate-900 border-t p-6 min-h-[600px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md p-6 bg-white dark:bg-slate-800 shadow-lg rounded-md">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold">Alex Johnson</h2>
                      <p className="text-muted-foreground">Computer Science Student</p>
                      <div className="flex justify-center items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <span>alex.johnson@email.com</span>
                        <span>•</span>
                        <span>(555) 123-4567</span>
                        <span>•</span>
                        <span>Boston, MA</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold border-b pb-1 mb-2">Summary</h3>
                      <p className="text-sm">
                        Dedicated Computer Science student with strong programming skills and experience in web
                        development and data analysis. Seeking opportunities to apply technical knowledge in a
                        challenging internship position.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold border-b pb-1 mb-2">Education</h3>
                      <div className="mb-2">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Boston University</h4>
                          <span className="text-sm">2020 - 2024 (Expected)</span>
                        </div>
                        <p className="text-sm">Bachelor of Science in Computer Science</p>
                        <p className="text-sm">GPA: 3.8/4.0</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold border-b pb-1 mb-2">Experience</h3>
                      <div className="mb-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Tech Solutions Inc.</h4>
                          <span className="text-sm">Jun 2022 - Aug 2022</span>
                        </div>
                        <p className="text-sm italic mb-1">Software Development Intern</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          <li>Developed and maintained web applications using React.js and Node.js</li>
                          <li>Collaborated with a team of 5 developers to implement new features</li>
                          <li>Participated in code reviews and agile development processes</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "Python",
                          "JavaScript",
                          "React.js",
                          "Node.js",
                          "SQL",
                          "Git",
                          "Data Analysis",
                          "Problem Solving",
                          "Team Collaboration",
                        ].map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Change Template
              </Button>
              <Button className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Full Preview
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template Gallery</CardTitle>
              <CardDescription>Choose from professional resume templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Modern", active: true },
                  { name: "Professional" },
                  { name: "Creative" },
                  { name: "Minimal" },
                ].map((template, i) => (
                  <div
                    key={i}
                    className={`border rounded-md p-2 cursor-pointer hover:border-primary transition-colors ${
                      template.active ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div className="aspect-[8.5/11] bg-slate-100 dark:bg-slate-800 rounded mb-2 flex items-center justify-center">
                      <div
                        className={`w-3/4 h-3/4 flex flex-col ${i === 0 ? "items-center" : i === 1 ? "items-start" : i === 2 ? "items-end" : "items-start"}`}
                      >
                        <div className="w-full h-1/6 bg-slate-300 dark:bg-slate-700 rounded mb-2"></div>
                        <div className="w-full h-2/6 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
                        <div className="w-full h-3/6 bg-slate-300 dark:bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{template.name}</span>
                      {template.active && <Check className="h-4 w-4 text-primary" />}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Templates
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry Recommendations</CardTitle>
              <CardDescription>Tailored advice for your target industry</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="industry">Target Industry</Label>
                <Select defaultValue="tech">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="role">Target Role</Label>
                <Select defaultValue="software">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software Engineer</SelectItem>
                    <SelectItem value="data">Data Scientist</SelectItem>
                    <SelectItem value="product">Product Manager</SelectItem>
                    <SelectItem value="ux">UX Designer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="font-medium">Technology Industry - Software Engineer</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-sm">Emphasize technical skills and programming languages</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-sm">Highlight project work with quantifiable results</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-sm">Include GitHub profile and portfolio links</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-sm">Mention experience with agile methodologies</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-sm">Focus on problem-solving abilities and collaboration</p>
                  </div>
                </div>
                <Button className="w-full mt-2">Apply Industry Recommendations</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

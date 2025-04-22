import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Award,
  Briefcase,
  ChevronRight,
  Clock,
  Compass,
  ExternalLink,
  Heart,
  ListChecks,
  Lightbulb,
  PlusCircle,
  Search,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

export default function ProfileEnhancementPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile Enhancement Planner</h1>
          <p className="text-muted-foreground mt-1">Strategically build a standout application profile</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Find Opportunities
          </Button>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Achievement
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Strength Analysis</CardTitle>
            <CardDescription>See how your profile compares to successful applicants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { name: "Academic", score: 85, icon: <Award className="h-5 w-5" /> },
                { name: "Leadership", score: 62, icon: <Users className="h-5 w-5" /> },
                { name: "Extracurricular", score: 78, icon: <Heart className="h-5 w-5" /> },
                { name: "Community Service", score: 45, icon: <Briefcase className="h-5 w-5" /> },
              ].map((category, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="mr-2 text-primary">{category.icon}</div>
                      <h3 className="font-medium text-sm">{category.name}</h3>
                    </div>
                    <Badge variant={category.score >= 80 ? "default" : category.score >= 60 ? "outline" : "secondary"}>
                      {category.score}%
                    </Badge>
                  </div>
                  <Progress value={category.score} className="h-2" />
                </Card>
              ))}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg mb-6">
              <h3 className="font-medium mb-2 flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Competitive Analysis
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                How your profile compares to successful applicants at your target schools
              </p>
              <div className="space-y-4">
                {[
                  {
                    school: "State University",
                    match: 78,
                    strengths: ["Academic record", "Research experience"],
                    gaps: ["Leadership roles", "Community service"],
                  },
                  {
                    school: "Tech Institute",
                    match: 65,
                    strengths: ["Technical skills", "Project portfolio"],
                    gaps: ["Extracurricular diversity", "Volunteer work"],
                  },
                  {
                    school: "National College",
                    match: 82,
                    strengths: ["Academic record", "Leadership positions"],
                    gaps: ["Research experience"],
                  },
                ].map((school, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">{school.school}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="text-xs text-muted-foreground">Strengths:</span>
                        {school.strengths.map((strength, j) => (
                          <Badge
                            key={j}
                            variant="outline"
                            className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                          >
                            {strength}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="text-xs text-muted-foreground">Gaps:</span>
                        {school.gaps.map((gap, j) => (
                          <Badge
                            key={j}
                            variant="outline"
                            className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300"
                          >
                            {gap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Match:</span>
                        <Badge variant={school.match >= 80 ? "default" : "secondary"}>{school.match}%</Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Unique Value Proposition
                </h3>
                <p className="text-sm text-muted-foreground mb-3">What makes your application stand out from others</p>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                    Research experience in machine learning applications
                  </div>
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                    Multilingual skills (fluent in 3 languages)
                  </div>
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                    Founded coding club at high school
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full">
                  Build Your Value Proposition
                </Button>
              </Card>

              <Card className="p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Achievement Highlights
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Key accomplishments to emphasize in your applications
                </p>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                    National Merit Scholarship Finalist
                  </div>
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                    1st Place in Regional Science Fair
                  </div>
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                    Published research paper in student journal
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full">
                  Add More Achievements
                </Button>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
            <CardDescription>Prioritized steps to enhance your profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-md">
              <h3 className="font-medium text-amber-800 dark:text-amber-300 flex items-center">
                <ListChecks className="h-4 w-4 mr-2" />
                High Priority
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-amber-500" />
                  <span>Add community service experience (minimum 40 hours)</span>
                </li>
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-amber-500" />
                  <span>Take on leadership role in at least one organization</span>
                </li>
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-amber-500" />
                  <span>Improve standardized test scores (target: 90th percentile)</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-md">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Medium Priority
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-blue-500" />
                  <span>Participate in summer research program</span>
                </li>
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-blue-500" />
                  <span>Develop capstone project related to intended major</span>
                </li>
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-blue-500" />
                  <span>Secure one additional letter of recommendation</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-md">
              <h3 className="font-medium text-green-800 dark:text-green-300 flex items-center">
                <Lightbulb className="h-4 w-4 mr-2" />
                Additional Enhancements
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-green-500" />
                  <span>Attend workshops in specialized field of interest</span>
                </li>
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-green-500" />
                  <span>Join professional organization as student member</span>
                </li>
                <li className="text-sm flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-green-500" />
                  <span>Create online portfolio showcasing projects</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Enhancement Plan</Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="leadership" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="leadership" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Leadership Opportunity Suggestions</CardTitle>
              <CardDescription>Personalized leadership roles based on your interests and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Student Government Position",
                    type: "School",
                    commitment: "5-10 hrs/week",
                    impact: "High",
                    description:
                      "Run for class representative or committee chair to develop policy and event planning experience.",
                    deadline: "Sep 15, 2023",
                  },
                  {
                    title: "Tech Club President",
                    type: "School",
                    commitment: "3-5 hrs/week",
                    impact: "Medium",
                    description: "Lead the school's technology club, organizing workshops and hackathons.",
                    deadline: "Aug 30, 2023",
                  },
                  {
                    title: "Research Team Lead",
                    type: "Academic",
                    commitment: "8-12 hrs/week",
                    impact: "High",
                    description: "Coordinate a team on a research project under faculty supervision.",
                    deadline: "Rolling",
                  },
                  {
                    title: "Community Outreach Coordinator",
                    type: "Volunteer",
                    commitment: "4-6 hrs/week",
                    impact: "Medium",
                    description: "Organize community service events and manage volunteer teams.",
                    deadline: "Oct 1, 2023",
                  },
                  {
                    title: "Peer Tutoring Program Director",
                    type: "Academic",
                    commitment: "5-7 hrs/week",
                    impact: "Medium",
                    description: "Manage a peer tutoring program, matching tutors with students needing assistance.",
                    deadline: "Sep 5, 2023",
                  },
                  {
                    title: "Entrepreneurship Club Founder",
                    type: "Initiative",
                    commitment: "6-10 hrs/week",
                    impact: "High",
                    description: "Start a new club focused on entrepreneurship and business skills development.",
                    deadline: "Any time",
                  },
                ].map((opportunity, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="bg-primary/10 p-3">
                      <h3 className="font-medium">{opportunity.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {opportunity.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {opportunity.commitment}
                        </Badge>
                        <Badge variant={opportunity.impact === "High" ? "default" : "secondary"} className="text-xs">
                          {opportunity.impact} Impact
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Deadline: {opportunity.deadline}</span>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <span>Details</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="volunteer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Experience Recommendations</CardTitle>
              <CardDescription>Community service opportunities aligned with your interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Tech Literacy Program",
                    organization: "Community Center",
                    commitment: "4 hrs/week",
                    duration: "3 months",
                    description: "Teach basic computer skills to underserved communities.",
                    alignment: "High",
                  },
                  {
                    title: "Environmental Conservation",
                    organization: "Green Earth Initiative",
                    commitment: "6 hrs/month",
                    duration: "Ongoing",
                    description: "Participate in local conservation efforts and sustainability projects.",
                    alignment: "Medium",
                  },
                  {
                    title: "Hospital Volunteer",
                    organization: "Memorial Hospital",
                    commitment: "8 hrs/week",
                    duration: "6 months",
                    description: "Assist hospital staff and provide support to patients.",
                    alignment: "Medium",
                  },
                  {
                    title: "STEM Tutor",
                    organization: "Education For All",
                    commitment: "3 hrs/week",
                    duration: "School Year",
                    description: "Tutor K-12 students in math and science subjects.",
                    alignment: "High",
                  },
                  {
                    title: "Food Bank Assistant",
                    organization: "Community Food Bank",
                    commitment: "4 hrs/week",
                    duration: "Flexible",
                    description: "Help organize and distribute food to those in need.",
                    alignment: "Medium",
                  },
                  {
                    title: "Coding Workshop Instructor",
                    organization: "Code for Change",
                    commitment: "5 hrs/week",
                    duration: "10 weeks",
                    description: "Teach coding basics to middle and high school students.",
                    alignment: "High",
                  },
                ].map((opportunity, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="bg-primary/10 p-3">
                      <h3 className="font-medium">{opportunity.title}</h3>
                      <p className="text-sm text-muted-foreground">{opportunity.organization}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {opportunity.commitment}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {opportunity.duration}
                        </Badge>
                        <Badge variant={opportunity.alignment === "High" ? "default" : "secondary"} className="text-xs">
                          {opportunity.alignment} Alignment
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <span>Apply Now</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Development Pathway</CardTitle>
              <CardDescription>Recommended skills to develop based on your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Technical Skills</h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Python Programming", level: "Intermediate", priority: "High", resources: 12 },
                    { name: "Data Analysis", level: "Beginner", priority: "High", resources: 8 },
                    { name: "Machine Learning", level: "Beginner", priority: "Medium", resources: 15 },
                  ].map((skill, i) => (
                    <Card key={i} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <Badge variant={skill.priority === "High" ? "default" : "secondary"}>{skill.priority}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Current Level: {skill.level}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{skill.resources} learning resources</span>
                        <Button variant="ghost" size="sm">
                          Explore
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Soft Skills</h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Public Speaking", level: "Beginner", priority: "High", resources: 6 },
                    { name: "Team Leadership", level: "Intermediate", priority: "High", resources: 9 },
                    { name: "Project Management", level: "Beginner", priority: "Medium", resources: 11 },
                  ].map((skill, i) => (
                    <Card key={i} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <Badge variant={skill.priority === "High" ? "default" : "secondary"}>{skill.priority}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Current Level: {skill.level}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{skill.resources} learning resources</span>
                        <Button variant="ghost" size="sm">
                          Explore
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-medium mb-3 flex items-center">
                  <Compass className="h-5 w-5 mr-2 text-primary" />
                  Skill Development Roadmap
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A personalized pathway to develop the skills most valued by your target programs
                </p>
                <Button className="w-full">Generate Custom Skill Roadmap</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Activity Recommendations</CardTitle>
              <CardDescription>Extracurricular activities to enhance your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Hackathon Participation",
                    category: "Technical",
                    timeframe: "Weekend events",
                    impact: "High",
                    description:
                      "Participate in coding competitions to build projects and demonstrate technical skills.",
                  },
                  {
                    title: "Research Assistant",
                    category: "Academic",
                    timeframe: "10-15 hrs/week",
                    impact: "High",
                    description: "Work with a professor on a research project related to your field of interest.",
                  },
                  {
                    title: "Industry Internship",
                    category: "Professional",
                    timeframe: "Summer",
                    impact: "Very High",
                    description: "Gain hands-on experience working in your target industry.",
                  },
                  {
                    title: "Academic Competition",
                    category: "Academic",
                    timeframe: "Varies",
                    impact: "Medium",
                    description: "Participate in subject-specific competitions like math olympiads or science fairs.",
                  },
                  {
                    title: "Student Publication",
                    category: "Creative",
                    timeframe: "5-8 hrs/week",
                    impact: "Medium",
                    description: "Write for or edit a student newspaper, literary magazine, or research journal.",
                  },
                  {
                    title: "Professional Conference",
                    category: "Networking",
                    timeframe: "1-3 days",
                    impact: "Medium",
                    description: "Attend industry conferences to learn and network with professionals.",
                  },
                ].map((activity, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="bg-primary/10 p-3">
                      <h3 className="font-medium">{activity.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {activity.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {activity.timeframe}
                        </Badge>
                        <Badge
                          variant={
                            activity.impact === "High" || activity.impact === "Very High" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {activity.impact} Impact
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          Find Opportunities
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

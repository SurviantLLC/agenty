import type { Metadata } from "next"
import {
  Calendar,
  MessageSquare,
  Star,
  Users,
  Video,
  Clock,
  CheckCircle,
  Filter,
  Search,
  ChevronDown,
  ThumbsUp,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const metadata: Metadata = {
  title: "Mentor Matching Portal | Career Development Platform",
  description: "Find and connect with mentors who can guide your career journey",
}

// Mock data for mentors
const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Data Scientist",
    company: "TechCorp Analytics",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    reviews: 42,
    industries: ["Data Science", "AI", "Machine Learning"],
    experience: 12,
    availability: "Mon, Wed, Fri",
    compatibility: 95,
    bio: "Experienced data scientist with a PhD in Computer Science. Passionate about mentoring the next generation of data professionals.",
    achievements: [
      "Published 15+ research papers",
      "Led teams of 20+ data scientists",
      "Developed award-winning ML models",
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Design Director",
    company: "Creative Solutions Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    reviews: 36,
    industries: ["UX/UI Design", "Product Design", "User Research"],
    experience: 8,
    availability: "Tue, Thu, Sat",
    compatibility: 87,
    bio: "Design leader with experience at top tech companies. Specializes in user-centered design and design systems.",
    achievements: [
      "Redesigned products used by millions",
      "Speaker at major design conferences",
      "Design patent holder",
    ],
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Engineering Manager",
    company: "Global Tech Innovations",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    reviews: 29,
    industries: ["Software Engineering", "Leadership", "Project Management"],
    experience: 15,
    availability: "Mon, Tue, Thu",
    compatibility: 82,
    bio: "Engineering leader with a passion for developing talent. Experienced in scaling teams and delivering complex projects.",
    achievements: [
      "Built engineering teams from 5 to 50+",
      "Led major platform migrations",
      "Mentored 25+ engineers to senior roles",
    ],
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Marketing Executive",
    company: "Brand Elevate",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    reviews: 31,
    industries: ["Digital Marketing", "Brand Strategy", "Content Marketing"],
    experience: 10,
    availability: "Wed, Fri, Sun",
    compatibility: 78,
    bio: "Marketing strategist who has worked with Fortune 500 companies and startups alike. Passionate about data-driven marketing.",
    achievements: ["Increased conversion rates by 300%", "Managed $10M+ marketing budgets", "Award-winning campaigns"],
  },
]

// Mock data for upcoming meetings
const upcomingMeetings = [
  {
    id: 1,
    mentor: "Dr. Sarah Johnson",
    date: "May 15, 2023",
    time: "3:00 PM - 4:00 PM",
    topic: "Career Transition Strategy",
    platform: "Zoom",
  },
  {
    id: 2,
    mentor: "Michael Chen",
    date: "May 18, 2023",
    time: "2:00 PM - 3:00 PM",
    topic: "Portfolio Review",
    platform: "Google Meet",
  },
]

// Mock data for mentorship goals
const mentorshipGoals = [
  {
    id: 1,
    goal: "Improve technical interview skills",
    progress: 65,
    deadline: "June 30, 2023",
  },
  {
    id: 2,
    goal: "Build professional network in target industry",
    progress: 40,
    deadline: "August 15, 2023",
  },
  {
    id: 3,
    goal: "Develop leadership capabilities",
    progress: 25,
    deadline: "December 1, 2023",
  },
]

export default function MentorMatchingPortal() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mentor Matching Portal</h1>
          <p className="text-muted-foreground mt-1">
            Connect with industry professionals who can guide your career journey
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            My Schedule
          </Button>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
        </div>
      </div>

      <Tabs defaultValue="recommended" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="meetings">My Meetings</TabsTrigger>
          <TabsTrigger value="goals">Mentorship Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Find Your Perfect Mentor Match</CardTitle>
              <CardDescription>
                Our AI-powered system recommends mentors based on your career goals, skills, and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search mentors by name, role, or industry..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mentors.map((mentor) => (
                      <Card key={mentor.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                                <AvatarFallback>
                                  {mentor.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{mentor.name}</CardTitle>
                                <CardDescription className="text-sm">
                                  {mentor.role} at {mentor.company}
                                </CardDescription>
                              </div>
                            </div>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" /> {mentor.rating}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="mb-3">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {mentor.industries.map((industry) => (
                                <Badge key={industry} variant="outline" className="text-xs">
                                  {industry}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{mentor.bio}</p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Experience:</span>
                              <span>{mentor.experience} years</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Availability:</span>
                              <span>{mentor.availability}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Compatibility:</span>
                              <div className="flex items-center gap-2">
                                <Progress value={mentor.compatibility} className="h-2 w-16" />
                                <span className="font-medium">{mentor.compatibility}%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2">
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                          <Button size="sm">
                            <Calendar className="mr-2 h-3 w-3" />
                            Schedule
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why We Matched You</CardTitle>
              <CardDescription>Understanding your compatibility factors with recommended mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-medium">Industry Alignment</span>
                    </div>
                    <Progress value={90} className="h-2 w-24 md:w-40" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-medium">Career Path Similarity</span>
                    </div>
                    <Progress value={85} className="h-2 w-24 md:w-40" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">Skills Development Match</span>
                    </div>
                    <Progress value={75} className="h-2 w-24 md:w-40" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Availability Compatibility</span>
                    </div>
                    <Progress value={65} className="h-2 w-24 md:w-40" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingMeetings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <Card key={meeting.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <Calendar className="h-10 w-10 text-primary" />
                            <div>
                              <h3 className="font-medium">{meeting.topic}</h3>
                              <p className="text-sm text-muted-foreground">with {meeting.mentor}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {meeting.date}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {meeting.time}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 self-end md:self-center">
                            <Button variant="outline" size="sm">
                              <Calendar className="mr-2 h-3 w-3" />
                              Reschedule
                            </Button>
                            <Button size="sm">
                              <Video className="mr-2 h-3 w-3" />
                              Join {meeting.platform}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No upcoming meetings</h3>
                  <p className="text-muted-foreground mt-1">Schedule a session with a mentor to get started</p>
                  <Button className="mt-4">Find a Mentor</Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
              <CardDescription>Review and provide feedback on your previous mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <Video className="h-10 w-10 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">Resume Review Session</h3>
                          <p className="text-sm text-muted-foreground">with Michael Chen</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              May 5, 2023
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              2:00 PM - 3:00 PM
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end md:self-center">
                        <Button variant="outline" size="sm">
                          <ThumbsUp className="mr-2 h-3 w-3" />
                          Leave Feedback
                        </Button>
                        <Button size="sm">
                          <Calendar className="mr-2 h-3 w-3" />
                          Schedule Again
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Mentorship Goals</CardTitle>
                <CardDescription>Track your progress on career development goals</CardDescription>
              </div>
              <Button>
                <CheckCircle className="mr-2 h-4 w-4" />
                Add New Goal
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mentorshipGoals.map((goal) => (
                  <Card key={goal.id}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{goal.goal}</h3>
                          <Badge variant="outline">Due {goal.deadline}</Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                        <div className="flex justify-between pt-2">
                          <Button variant="outline" size="sm">
                            Update Progress
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Goal</DropdownMenuItem>
                              <DropdownMenuItem>Share with Mentor</DropdownMenuItem>
                              <DropdownMenuItem>Archive Goal</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback Exchange</CardTitle>
              <CardDescription>Share and receive feedback with your mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">Recent Feedback Received</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">Dr. Sarah Johnson</h4>
                            <Badge variant="outline" className="text-xs">
                              May 10, 2023
                            </Badge>
                          </div>
                          <p className="text-sm mt-1">
                            "Your technical skills are impressive, but I recommend focusing more on communication and
                            presentation skills. Consider joining Toastmasters or similar groups to practice public
                            speaking."
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">Feedback to Send</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Select defaultValue="michael">
                            <SelectTrigger>
                              <SelectValue placeholder="Select mentor" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="michael">Michael Chen</SelectItem>
                              <SelectItem value="sarah">Dr. Sarah Johnson</SelectItem>
                              <SelectItem value="amara">Amara Okafor</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select defaultValue="session">
                            <SelectTrigger>
                              <SelectValue placeholder="Feedback type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="session">Session Feedback</SelectItem>
                              <SelectItem value="mentor">Mentor Feedback</SelectItem>
                              <SelectItem value="platform">Platform Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <textarea
                          className="w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Write your feedback here..."
                        />
                        <div className="flex justify-end">
                          <Button>Send Feedback</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Favorite Mentors</CardTitle>
              <CardDescription>Quickly access mentors you've saved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">Dr. Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground">Senior Data Scientist at TechCorp Analytics</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current" /> 4.9
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Data Science
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm">
                        <Calendar className="mr-2 h-3 w-3" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Michael Chen" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">Michael Chen</h3>
                        <p className="text-sm text-muted-foreground">UX Design Director at Creative Solutions Inc.</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current" /> 4.8
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            UX/UI Design
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm">
                        <Calendar className="mr-2 h-3 w-3" />
                        Schedule
                      </Button>
                    </div>
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

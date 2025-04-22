import type { Metadata } from "next"
import {
  Users,
  MessageSquare,
  Share2,
  Calendar,
  Search,
  Filter,
  Plus,
  MessageCircle,
  BookOpen,
  Video,
  Heart,
  ThumbsUp,
  Network,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Peer Network Community | Career Development Platform",
  description: "Connect with peers, join groups, and collaborate on your career journey",
}

// Mock data for interest groups
const interestGroups = [
  {
    id: 1,
    name: "Data Science Enthusiasts",
    members: 342,
    description: "A community of data science learners and professionals sharing resources and experiences.",
    topics: ["Machine Learning", "Python", "Data Visualization", "Statistics"],
    activity: "Very Active",
  },
  {
    id: 2,
    name: "UX/UI Design Network",
    members: 256,
    description: "Connect with fellow designers to share portfolios, get feedback, and discuss design trends.",
    topics: ["User Research", "Prototyping", "Design Systems", "Accessibility"],
    activity: "Active",
  },
  {
    id: 3,
    name: "Software Engineering Mentorship",
    members: 189,
    description: "Peer mentorship group for software engineers at all levels to help each other grow.",
    topics: ["Web Development", "Mobile Apps", "System Design", "Career Growth"],
    activity: "Moderately Active",
  },
  {
    id: 4,
    name: "Career Changers Alliance",
    members: 421,
    description: "Support network for professionals transitioning to new career paths.",
    topics: ["Resume Building", "Networking", "Interview Prep", "Skill Transfer"],
    activity: "Very Active",
  },
]

// Mock data for discussion threads
const discussionThreads = [
  {
    id: 1,
    title: "How to prepare for technical interviews at FAANG companies?",
    author: "Alex Chen",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    group: "Software Engineering Mentorship",
    replies: 28,
    views: 342,
    lastActivity: "2 hours ago",
    tags: ["Interviews", "Tech Careers", "Preparation"],
  },
  {
    id: 2,
    title: "Best online courses for learning data visualization?",
    author: "Priya Sharma",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    group: "Data Science Enthusiasts",
    replies: 15,
    views: 187,
    lastActivity: "5 hours ago",
    tags: ["Courses", "Data Viz", "Learning"],
  },
  {
    id: 3,
    title: "Portfolio review thread - June 2023",
    author: "Jordan Taylor",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    group: "UX/UI Design Network",
    replies: 42,
    views: 256,
    lastActivity: "1 day ago",
    tags: ["Portfolio", "Feedback", "Design"],
  },
]

// Mock data for upcoming meetups
const upcomingMeetups = [
  {
    id: 1,
    title: "Resume Workshop & Peer Review",
    group: "Career Changers Alliance",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    format: "Virtual (Zoom)",
    attendees: 24,
    maxAttendees: 30,
  },
  {
    id: 2,
    title: "Machine Learning Project Collaboration",
    group: "Data Science Enthusiasts",
    date: "June 18, 2023",
    time: "2:00 PM - 4:00 PM",
    format: "Virtual (Google Meet)",
    attendees: 18,
    maxAttendees: 25,
  },
]

// Mock data for success stories
const successStories = [
  {
    id: 1,
    title: "How I Landed My Dream Job at Google",
    author: "Michael Rodriguez",
    authorAvatar: "/placeholder.svg?height=60&width=60",
    excerpt:
      "After 6 months of preparation and networking with peers in this community, I successfully transitioned from a small startup to Google as a Senior Software Engineer.",
    likes: 156,
    comments: 42,
    date: "May 10, 2023",
  },
  {
    id: 2,
    title: "Career Pivot: From Marketing to UX Research",
    author: "Sophia Williams",
    authorAvatar: "/placeholder.svg?height=60&width=60",
    excerpt:
      "With the support of the UX/UI Design Network group, I successfully transitioned from marketing to UX research in just 8 months. Here's my journey and lessons learned.",
    likes: 98,
    comments: 31,
    date: "May 25, 2023",
  },
]

export default function PeerNetworkCommunity() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Peer Network Community</h1>
          <p className="text-muted-foreground mt-1">
            Connect with peers, join groups, and collaborate on your career journey
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            My Network
          </Button>
        </div>
      </div>

      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="groups">Interest Groups</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="meetups">Meetups</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Find Your Community</CardTitle>
              <CardDescription>
                Join interest-based groups to connect with peers who share your career goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search groups by name, topic, or keyword..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="career">Career Development</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Popular Groups</h3>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Group
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interestGroups.map((group) => (
                    <Card key={group.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{group.name}</CardTitle>
                          <Badge>{group.activity}</Badge>
                        </div>
                        <CardDescription>{group.members} members</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {group.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        <Button variant="outline" size="sm">
                          <Users className="mr-2 h-3 w-3" />
                          View Group
                        </Button>
                        <Button size="sm">
                          <Plus className="mr-2 h-3 w-3" />
                          Join Group
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Network Visualization</CardTitle>
              <CardDescription>See how you're connected to peers and groups across the platform</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative w-full max-w-2xl h-[300px] bg-muted/20 rounded-lg border border-dashed flex items-center justify-center">
                <Network className="h-16 w-16 text-muted-foreground/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-medium">Network Visualization</h3>
                    <p className="text-sm text-muted-foreground mt-1">Connect with more peers to expand your network</p>
                    <Button className="mt-4" size="sm">
                      Explore Connections
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Discussion Forums</CardTitle>
              <CardDescription>Engage in conversations with peers on career-related topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search discussions..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Groups</SelectItem>
                      <SelectItem value="data">Data Science Enthusiasts</SelectItem>
                      <SelectItem value="ux">UX/UI Design Network</SelectItem>
                      <SelectItem value="software">Software Engineering Mentorship</SelectItem>
                      <SelectItem value="career">Career Changers Alliance</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Thread
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {discussionThreads.map((thread) => (
                  <Card key={thread.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={thread.authorAvatar || "/placeholder.svg"} alt={thread.author} />
                              <AvatarFallback>
                                {thread.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{thread.title}</h3>
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-sm text-muted-foreground">
                                <span>{thread.author}</span>
                                <span>•</span>
                                <Badge variant="outline" className="text-xs">
                                  {thread.group}
                                </Badge>
                                <span>•</span>
                                <span>{thread.lastActivity}</span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {thread.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground self-end md:self-center">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{thread.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{thread.views} views</span>
                          </div>
                          <Button size="sm">
                            <MessageSquare className="mr-2 h-3 w-3" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resource Sharing</CardTitle>
              <CardDescription>Discover and share valuable career resources with your peers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search resources..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Resource Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="articles">Articles</SelectItem>
                      <SelectItem value="courses">Courses</SelectItem>
                      <SelectItem value="tools">Tools</SelectItem>
                      <SelectItem value="templates">Templates</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Resource
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Popular Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col h-full">
                          <div className="bg-muted/30 rounded-md h-32 mb-3 flex items-center justify-center">
                            <BookOpen className="h-10 w-10 text-muted-foreground/70" />
                          </div>
                          <h3 className="font-medium">The Ultimate Tech Interview Handbook</h3>
                          <p className="text-sm text-muted-foreground mt-1 mb-3">
                            Comprehensive guide to acing technical interviews at top companies.
                          </p>
                          <div className="flex items-center gap-2 mt-auto">
                            <Badge variant="outline" className="text-xs">
                              Article
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Interviews
                            </Badge>
                            <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
                              <ThumbsUp className="h-3 w-3" />
                              <span>128</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col h-full">
                          <div className="bg-muted/30 rounded-md h-32 mb-3 flex items-center justify-center">
                            <Video className="h-10 w-10 text-muted-foreground/70" />
                          </div>
                          <h3 className="font-medium">Portfolio Building Workshop Recording</h3>
                          <p className="text-sm text-muted-foreground mt-1 mb-3">
                            Recording of our popular workshop on creating standout design portfolios.
                          </p>
                          <div className="flex items-center gap-2 mt-auto">
                            <Badge variant="outline" className="text-xs">
                              Video
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Design
                            </Badge>
                            <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
                              <ThumbsUp className="h-3 w-3" />
                              <span>95</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col h-full">
                          <div className="bg-muted/30 rounded-md h-32 mb-3 flex items-center justify-center">
                            <Share2 className="h-10 w-10 text-muted-foreground/70" />
                          </div>
                          <h3 className="font-medium">Resume Templates for Career Changers</h3>
                          <p className="text-sm text-muted-foreground mt-1 mb-3">
                            Collection of ATS-friendly resume templates designed for those changing careers.
                          </p>
                          <div className="flex items-center gap-2 mt-auto">
                            <Badge variant="outline" className="text-xs">
                              Template
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Resume
                            </Badge>
                            <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
                              <ThumbsUp className="h-3 w-3" />
                              <span>156</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Recently Shared</h3>
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jamie Lee" />
                            <AvatarFallback>JL</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Free Data Science Learning Path</h4>
                              <Badge variant="outline" className="text-xs">
                                Course
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Curated list of free resources to learn data science from beginner to advanced level.
                            </p>
                            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                              <span>Shared by Jamie Lee</span>
                              <span>•</span>
                              <span>2 days ago</span>
                              <div className="ml-auto flex items-center gap-3">
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <ThumbsUp className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Mendez" />
                            <AvatarFallback>CM</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Salary Negotiation Script Template</h4>
                              <Badge variant="outline" className="text-xs">
                                Template
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Word-for-word script I used to negotiate a 15% higher salary offer. Feel free to adapt!
                            </p>
                            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                              <span>Shared by Carlos Mendez</span>
                              <span>•</span>
                              <span>3 days ago</span>
                              <div className="ml-auto flex items-center gap-3">
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <ThumbsUp className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetups" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Virtual Meetups</CardTitle>
              <CardDescription>Join virtual events to connect with peers and learn together</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search meetups..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="upcoming">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="past">Past Events</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    Host Meetup
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Upcoming Meetups</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {upcomingMeetups.map((meetup) => (
                      <Card key={meetup.id}>
                        <CardContent className="p-4">
                          <div className="flex flex-col h-full">
                            <div className="flex items-start gap-3">
                              <div className="bg-primary/10 rounded-md p-2 flex items-center justify-center">
                                <Calendar className="h-8 w-8 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">{meetup.title}</h3>
                                <p className="text-sm text-muted-foreground">Hosted by {meetup.group}</p>
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2">
                                  <Badge variant="outline" className="text-xs">
                                    {meetup.date}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {meetup.time}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {meetup.format}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                  {meetup.attendees}/{meetup.maxAttendees} attending
                                </span>
                              </div>
                              <Button size="sm">
                                <Calendar className="mr-2 h-3 w-3" />
                                RSVP
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Collaboration Tools</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center text-center p-4 bg-muted/20 rounded-lg">
                          <Video className="h-10 w-10 text-primary mb-2" />
                          <h4 className="font-medium">Video Conferencing</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Connect face-to-face with peers for discussions and collaboration.
                          </p>
                          <Button variant="outline" className="mt-3" size="sm">
                            Start Meeting
                          </Button>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-muted/20 rounded-lg">
                          <Share2 className="h-10 w-10 text-primary mb-2" />
                          <h4 className="font-medium">Document Collaboration</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Work together on documents, presentations, and projects in real-time.
                          </p>
                          <Button variant="outline" className="mt-3" size="sm">
                            Create Document
                          </Button>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-muted/20 rounded-lg">
                          <MessageSquare className="h-10 w-10 text-primary mb-2" />
                          <h4 className="font-medium">Group Chat</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Communicate with your peers through text, voice, and file sharing.
                          </p>
                          <Button variant="outline" className="mt-3" size="sm">
                            Join Chat
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="success" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Success Stories & Alumni Experiences</CardTitle>
              <CardDescription>Learn from the journeys of peers who have achieved their career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search success stories..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Share Your Story
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {successStories.map((story) => (
                    <Card key={story.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col">
                          <div className="flex items-start gap-4 mb-4">
                            <Avatar className="h-14 w-14">
                              <AvatarImage src={story.authorAvatar || "/placeholder.svg"} alt={story.author} />
                              <AvatarFallback>
                                {story.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-lg font-medium">{story.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                By {story.author} • {story.date}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm mb-4">{story.excerpt}</p>
                          <div className="flex justify-between items-center mt-auto">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{story.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{story.comments}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Read Full Story
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Featured Alumni Interview</CardTitle>
                    <CardDescription>In-depth conversation with successful community members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-full max-w-[200px] aspect-square bg-muted/20 rounded-lg flex items-center justify-center">
                          <Avatar className="h-full w-full">
                            <AvatarImage src="/placeholder.svg?height=200&width=200" alt="Elena Kim" />
                            <AvatarFallback className="text-4xl">EK</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-medium">Elena Kim: From Junior Developer to CTO in 5 Years</h3>
                        <p className="text-muted-foreground mt-1">Software Engineering • Career Growth</p>
                        <div className="mt-4 space-y-3">
                          <p className="text-sm">
                            "The most important thing I learned was to focus on building systems, not just code.
                            Understanding the business impact of technical decisions completely changed my career
                            trajectory."
                          </p>
                          <p className="text-sm">
                            Elena shares her journey from being a self-taught developer to becoming the CTO of a
                            fast-growing startup, including the challenges she faced and the strategies that helped her
                            succeed.
                          </p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button>
                            <Video className="mr-2 h-4 w-4" />
                            Watch Interview
                          </Button>
                          <Button variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Ask Elena
                          </Button>
                        </div>
                      </div>
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

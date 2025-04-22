import Link from "next/link"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  LineChart,
  MessageSquare,
  Star,
  User,
  LayoutDashboard,
  Activity,
  SlidersHorizontal,
  UserCircle,
  Lightbulb,
  ListChecks,
  Users,
  Network,
  School2,
  BarChart3,
  Briefcase,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r py-8 px-3 space-y-6">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold">Career Platform</h2>
        </div>
        <div className="space-y-2">
          <SidebarLink href="/" icon={LayoutDashboard}>
            Dashboard
          </SidebarLink>
          <SidebarLink href="/academic-optimization" icon={BookOpen}>
            Academic Optimization
          </SidebarLink>
          <SidebarLink href="/wellness-center" icon={Activity}>
            Wellness Center
          </SidebarLink>
          <SidebarLink href="/balance-optimizer" icon={SlidersHorizontal}>
            Balance Optimizer
          </SidebarLink>
          <SidebarLink href="/professional-profile" icon={UserCircle}>
            Professional Profile
          </SidebarLink>
          <SidebarLink href="/project-recommendations" icon={Lightbulb}>
            Project Recommendations
          </SidebarLink>
          <SidebarLink href="/application-management" icon={ListChecks}>
            Application Management
          </SidebarLink>
          <SidebarLink href="/mentors" icon={Users}>
            Mentor Matching
          </SidebarLink>
          <SidebarLink href="/peer-network" icon={Network}>
            Peer Network
          </SidebarLink>
          <SidebarLink href="/universities" icon={School2}>
            University Comparison
          </SidebarLink>
          <SidebarLink href="/program-evaluation" icon={BarChart3}>
            Program Evaluation
          </SidebarLink>
          <SidebarLink href="/internships" icon={Briefcase}>
            Internship Explorer
          </SidebarLink>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Sarah!</h1>
              <p className="text-muted-foreground mt-1">Your career journey is 65% complete</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </div>
          </div>
          <Progress value={65} className="mt-4 h-2" />
        </div>

        {/* Quick Access Features */}
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <QuickAccessCard
            title="Assessment Center"
            description="Continue your personality assessment"
            icon={FileText}
            progress={75}
            href="/assessment"
          />
          <QuickAccessCard
            title="Career Roadmap"
            description="View your personalized career path"
            icon={LineChart}
            progress={40}
            href="/roadmap"
          />
          <QuickAccessCard
            title="Skills Hub"
            description="Develop key skills for your career"
            icon={Star}
            progress={30}
            href="/skills"
          />
          <QuickAccessCard
            title="Mentorship"
            description="Connect with industry mentors"
            icon={MessageSquare}
            progress={10}
            href="/mentorship"
          />
        </div>

        {/* Upcoming Deadlines */}
        <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="divide-y">
              <DeadlineItem title="Complete Personality Assessment" date="Tomorrow" type="Assessment" urgent />
              <DeadlineItem title="Submit Resume for Review" date="In 3 days" type="Task" />
              <DeadlineItem title="Schedule Mentor Meeting" date="Next week" type="Mentorship" />
              <DeadlineItem title="Finish Python Basics Course" date="In 2 weeks" type="Learning" />
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/calendar">
                View All Deadlines
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Recent Activity and Recommended Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <ActivityItem title="Completed Leadership Quiz" time="2 hours ago" icon={FileText} />
                  <ActivityItem title="Updated Career Preferences" time="Yesterday" icon={User} />
                  <ActivityItem title="Scheduled Interview Practice" time="2 days ago" icon={Calendar} />
                  <ActivityItem title="Started Python Course" time="1 week ago" icon={BookOpen} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <ResourceItem title="How to Ace Technical Interviews" type="Article" match="95% Match" />
                  <ResourceItem title="Data Science Fundamentals" type="Course" match="90% Match" />
                  <ResourceItem title="Resume Building Workshop" type="Event" match="85% Match" />
                  <ResourceItem title="Networking for Introverts" type="Webinar" match="80% Match" />
                </div>
              </CardContent>
            </Card>
            <CardFooter className="p-4">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/resources">
                  View All Resources
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function QuickAccessCard({ title, description, icon: Icon, progress, href }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Icon className="h-6 w-6 text-primary" />
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="w-full justify-between" asChild>
          <Link href={href}>
            Continue
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function DeadlineItem({ title, date, type, urgent = false }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${urgent ? "bg-red-100" : "bg-slate-100"}`}>
          <Clock className={`h-4 w-4 ${urgent ? "text-red-500" : "text-slate-500"}`} />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{type}</p>
        </div>
      </div>
      <span className={`text-sm font-medium ${urgent ? "text-red-500" : ""}`}>{date}</span>
    </div>
  )
}

function ActivityItem({ title, time, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="p-2 rounded-full bg-slate-100">
        <Icon className="h-4 w-4 text-slate-500" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}

function ResourceItem({ title, type, match }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{type}</p>
      </div>
      <span className="text-sm font-medium text-green-600">{match}</span>
    </div>
  )
}

function SidebarLink({ href, icon, children }) {
  return (
    <Link href={href} className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
      {icon && <span className="h-4 w-4">{icon}</span>}
      <span>{children}</span>
    </Link>
  )
}

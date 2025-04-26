import React from "react"
import Link from "next/link"
import {
  Bell,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  LineChart,
  MessageSquare,
  Star,
  User,
  BookOpen,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  BarChart3,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto animate-fade-in">
      {/* Welcome Section */}
      <div className="section-spacing bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground text-lg">Your career journey is 65% complete</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 focus-ring">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 focus-ring">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 transition-standard focus-ring">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Session
            </Button>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Progress</span>
            <span>65%</span>
          </div>
          <Progress value={65} className="h-2.5 bg-muted" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 section-spacing">
        <StatCard title="Assessments" value="7/10" icon={FileText} color="bg-primary/10" iconColor="text-primary" />
        <StatCard title="Skills" value="12" icon={Award} color="bg-accent/10" iconColor="text-accent" />
        <StatCard title="Meetings" value="3" icon={Calendar} color="bg-success/10" iconColor="text-success" />
        <StatCard title="Deadlines" value="4" icon={Clock} color="bg-warning/10" iconColor="text-warning" />
      </div>

      {/* Quick Access Features */}
      <div className="section-spacing">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Quick Access</h2>
          <Button variant="ghost" size="sm" className="text-primary focus-ring">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <QuickAccessCard
            title="Assessment Center"
            description="Continue your personality assessment"
            icon={BarChart3}
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
            icon={Sparkles}
            progress={30}
            href="/skills-hub"
          />
          <QuickAccessCard
            title="Mentorship"
            description="Connect with industry mentors"
            icon={GraduationCap}
            progress={10}
            href="/mentors"
          />
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="section-spacing">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Upcoming Deadlines</h2>
          <Button variant="outline" size="sm" className="focus-ring">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar View
          </Button>
        </div>
        <Card className="overflow-hidden border-border shadow-card hover:shadow-card-hover transition-standard">
          <CardHeader className="bg-muted/50 py-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium">This Week & Beyond</CardTitle>
              <Badge variant="outline" className="font-normal">4 Items</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <DeadlineItem title="Complete Personality Assessment" date="Tomorrow" type="Assessment" urgent />
              <DeadlineItem title="Submit Resume for Review" date="In 3 days" type="Task" />
              <DeadlineItem title="Schedule Mentor Meeting" date="Next week" type="Mentorship" />
              <DeadlineItem title="Finish Python Basics Course" date="In 2 weeks" type="Learning" />
            </div>
          </CardContent>
          <CardFooter className="py-3 px-6 bg-muted/30">
            <Button variant="ghost" className="w-full text-primary hover:text-primary/90 focus-ring" asChild>
              <Link href="/calendar" className="flex items-center justify-center">
                View All Deadlines
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity and Recommended Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 section-spacing">
        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Activity</h2>
            <Button variant="ghost" size="sm" className="text-primary focus-ring">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <Card className="shadow-card hover:shadow-card-hover transition-standard border-border h-full">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recommended For You</h2>
            <Badge className="bg-success/20 text-success hover:bg-success/30 transition-standard">
              Personalized
            </Badge>
          </div>
          <Card className="shadow-card hover:shadow-card-hover transition-standard border-border h-full">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                <ResourceItem title="How to Ace Technical Interviews" type="Article" match="95% Match" />
                <ResourceItem title="Data Science Fundamentals" type="Course" match="90% Match" />
                <ResourceItem title="Resume Building Workshop" type="Event" match="85% Match" />
                <ResourceItem title="Networking for Introverts" type="Webinar" match="80% Match" />
              </div>
            </CardContent>
            <CardFooter className="py-3 px-6 bg-muted/30">
              <Button variant="ghost" className="w-full text-primary hover:text-primary/90 focus-ring" asChild>
                <Link href="/resources" className="flex items-center justify-center">
                  View All Resources
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Career Insights */}
      <div className="section-spacing">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Career Insights</h2>
          <Button variant="outline" size="sm" className="focus-ring">
            <Briefcase className="mr-2 h-4 w-4" />
            Explore Careers
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InsightCard 
            title="Software Engineering" 
            description="Based on your skills and interests, this career path has a 92% match rate."
            metric="92%"
            metricLabel="Match"
            ctaText="View Details"
            ctaLink="/career-matches/software-engineering"
          />
          <InsightCard 
            title="Data Science" 
            description="Growing field with high demand for analytical skills you've demonstrated."
            metric="88%"
            metricLabel="Match"
            ctaText="View Details"
            ctaLink="/career-matches/data-science"
          />
          <InsightCard 
            title="UX/UI Design" 
            description="Your creative problem-solving skills align well with this career path."
            metric="85%"
            metricLabel="Match"
            ctaText="View Details"
            ctaLink="/career-matches/ux-design"
          />
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

function StatCard({ title, value, icon: Icon, color, iconColor }: StatCardProps) {
  return (
    <Card className="border-border shadow-card hover:shadow-card-hover transition-standard overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-4 h-full">
          <div className={`${color} p-3 rounded-lg mr-4`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Quick Access Card Component
interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  progress: number;
  href: string;
}

function QuickAccessCard({ title, description, icon: Icon, progress, href }: QuickAccessCardProps) {
  return (
    <Card className="border-border shadow-card hover:shadow-card-hover transition-standard overflow-hidden h-full">
      <CardHeader className="pb-3 pt-5 px-5">
        <div className="flex justify-between items-start">
          <div className="bg-primary/10 p-2.5 rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        </div>
        <CardTitle className="text-lg mt-4 font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-1">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0 pb-4 px-5">
        <Button 
          variant="ghost" 
          className="w-full justify-between text-primary hover:text-primary/90 hover:bg-primary/5 focus-ring" 
          asChild
        >
          <Link href={href} className="font-medium">
            Continue
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

// Deadline Item Component
interface DeadlineItemProps {
  title: string;
  date: string;
  type: string;
  urgent?: boolean;
}

function DeadlineItem({ title, date, type, urgent = false }: DeadlineItemProps) {
  return (
    <div className="flex items-center justify-between p-5 hover:bg-muted/20 transition-standard">
      <div className="flex items-center gap-4">
        <div className={`p-2.5 rounded-lg ${urgent ? "bg-destructive/10" : "bg-muted"}`}>
          <Clock className={`h-4 w-4 ${urgent ? "text-destructive" : "text-muted-foreground"}`} />
        </div>
        <div>
          <p className="font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground mt-0.5">{type}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className={`text-sm font-medium ${urgent ? "text-destructive" : "text-muted-foreground"}`}>
          {date}
        </span>
        {urgent && (
          <Badge variant="outline" className="text-xs mt-1 border-destructive text-destructive">
            Urgent
          </Badge>
        )}
      </div>
    </div>
  );
}

// Activity Item Component
interface ActivityItemProps {
  title: string;
  time: string;
  icon: React.ElementType;
}

function ActivityItem({ title, time, icon: Icon }: ActivityItemProps) {
  return (
    <div className="flex items-center gap-4 p-5 hover:bg-muted/20 transition-standard">
      <div className="p-2.5 rounded-lg bg-muted">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{time}</p>
      </div>
    </div>
  );
}

// Resource Item Component
interface ResourceItemProps {
  title: string;
  type: string;
  match: string;
}

function ResourceItem({ title, type, match }: ResourceItemProps) {
  return (
    <div className="flex items-center justify-between p-5 hover:bg-muted/20 transition-standard">
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{type}</p>
      </div>
      <Badge className="bg-success/10 text-success hover:bg-success/20 transition-standard font-medium">
        {match}
      </Badge>
    </div>
  );
}

// Career Insight Card Component
interface InsightCardProps {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  ctaText: string;
  ctaLink: string;
}

function InsightCard({ title, description, metric, metricLabel, ctaText, ctaLink }: InsightCardProps) {
  return (
    <Card className="border-border shadow-card hover:shadow-card-hover transition-standard overflow-hidden h-full">
      <CardHeader className="pb-3 pt-5 px-5">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="bg-accent/10 px-3 py-1.5 rounded-full flex items-center">
            <span className="text-sm font-semibold text-accent">{metric}</span>
            <span className="text-xs text-accent/80 ml-1">{metricLabel}</span>
          </div>
        </div>
        <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0 pb-4 px-5">
        <Button 
          variant="outline" 
          className="w-full justify-center border-primary text-primary hover:bg-primary/5 focus-ring" 
          asChild
        >
          <Link href={ctaLink}>
            {ctaText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}



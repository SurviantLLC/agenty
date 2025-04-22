"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ChevronRight, Clock, FileText, HelpCircle, Home, LayoutGrid, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssessmentCenter() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const totalQuestions = 10

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer("")
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <span>Assessment Center</span>
          </div>
          <h1 className="text-3xl font-bold">Assessment Center</h1>
          <p className="text-muted-foreground mt-1">Discover your strengths and career fit</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">Save Progress</Button>
          <Button>View Results</Button>
        </div>
      </div>

      {/* Assessment Tabs */}
      <Tabs defaultValue="personality" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="personality">Personality</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="interests">Interests</TabsTrigger>
          <TabsTrigger value="values">Values</TabsTrigger>
        </TabsList>

        <TabsContent value="personality" className="space-y-6">
          {/* Current Assessment */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Personality Assessment</CardTitle>
                  <CardDescription>
                    Question {currentQuestion} of {totalQuestions}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>15 minutes remaining</span>
                </div>
              </div>
              <Progress value={(currentQuestion / totalQuestions) * 100} className="h-2 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">When faced with a complex problem, I typically:</h3>
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-slate-50">
                        <RadioGroupItem value="a" id="a" />
                        <label htmlFor="a" className="flex-1 cursor-pointer">
                          Break it down into smaller, manageable parts
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-slate-50">
                        <RadioGroupItem value="b" id="b" />
                        <label htmlFor="b" className="flex-1 cursor-pointer">
                          Look for patterns and connections to solve it holistically
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-slate-50">
                        <RadioGroupItem value="c" id="c" />
                        <label htmlFor="c" className="flex-1 cursor-pointer">
                          Consult with others to get different perspectives
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-slate-50">
                        <RadioGroupItem value="d" id="d" />
                        <label htmlFor="d" className="flex-1 cursor-pointer">
                          Trust my intuition and go with my gut feeling
                        </label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 1}>
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!selectedAnswer}>
                {currentQuestion === totalQuestions ? "Finish" : "Next"}
              </Button>
            </CardFooter>
          </Card>

          {/* Assessment Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About This Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This personality assessment helps identify your natural tendencies, preferences, and working style to
                  match you with suitable career paths.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">20 minutes to complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">60 questions total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">No right or wrong answers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Personality Assessment</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Skills Assessment</span>
                      <span className="font-medium">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Interests Survey</span>
                      <span className="font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Values Assessment</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your current progress, these careers might be a good fit:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Data Scientist</span>
                    <span className="text-sm font-medium text-green-600">85% Match</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>UX Researcher</span>
                    <span className="text-sm font-medium text-green-600">82% Match</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Product Manager</span>
                    <span className="text-sm font-medium text-green-600">78% Match</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link href="/career-matches">
                    View All Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills Assessment</CardTitle>
              <CardDescription>Evaluate your technical and soft skills</CardDescription>
            </CardHeader>
            <CardContent className="h-72 flex items-center justify-center">
              <div className="text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Skills Assessment</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete your personality assessment first to unlock this section
                </p>
                <Button className="mt-4" disabled>
                  Start Skills Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interests">
          <Card>
            <CardHeader>
              <CardTitle>Interests Survey</CardTitle>
              <CardDescription>Discover what motivates and excites you</CardDescription>
            </CardHeader>
            <CardContent className="h-72 flex items-center justify-center">
              <div className="text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Interests Survey</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete your personality assessment first to unlock this section
                </p>
                <Button className="mt-4" disabled>
                  Start Interests Survey
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="values">
          <Card>
            <CardHeader>
              <CardTitle>Values Assessment</CardTitle>
              <CardDescription>Identify what matters most to you in your career</CardDescription>
            </CardHeader>
            <CardContent className="h-72 flex items-center justify-center">
              <div className="text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Values Assessment</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete your personality assessment first to unlock this section
                </p>
                <Button className="mt-4" disabled>
                  Start Values Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Previous Results */}
      <h2 className="text-xl font-semibold mb-4">Previous Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Completed 2 weeks ago</span>
            </div>
            <CardTitle className="text-lg mt-2">Personality Profile</CardTitle>
            <CardDescription>INTJ - "The Architect"</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Strategic, innovative, and analytical thinker with a drive for improvement.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/results/personality">
                View Full Results
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <LayoutGrid className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Completed 1 month ago</span>
            </div>
            <CardTitle className="text-lg mt-2">Technical Skills</CardTitle>
            <CardDescription>Advanced in 3 key areas</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">Strong in data analysis, programming, and problem-solving.</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/results/skills">
                View Full Results
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <LineChart className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Completed 2 months ago</span>
            </div>
            <CardTitle className="text-lg mt-2">Career Compatibility</CardTitle>
            <CardDescription>5 strong career matches</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Best matches include Data Science, Software Engineering, and Research.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/results/compatibility">
                View Full Results
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

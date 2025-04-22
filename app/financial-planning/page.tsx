"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AlertCircle,
  BarChart3,
  Calculator,
  Calendar,
  ChevronRight,
  DollarSign,
  FileText,
  GraduationCap,
  Home,
  Info,
  Lightbulb,
  PieChart,
  School,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function FinancialPlanningHub() {
  const [selectedPath, setSelectedPath] = useState("data-science")
  const [selectedLocation, setSelectedLocation] = useState("urban")
  const [selectedHousing, setSelectedHousing] = useState("shared")
  const [selectedTimeframe, setSelectedTimeframe] = useState("2-years")
  const [includeScholarships, setIncludeScholarships] = useState(true)
  const [includeLoans, setIncludeLoans] = useState(true)
  const [includeWorkStudy, setIncludeWorkStudy] = useState(true)
  const [livingExpenses, setLivingExpenses] = useState(1500)
  const [tuitionSlider, setTuitionSlider] = useState(15000)

  // Sample education paths data
  const educationPaths = [
    {
      id: "data-science",
      title: "Data Science Certificate",
      provider: "Tech University",
      duration: "2 years",
      tuition: 15000,
      materials: 1200,
      fees: 800,
      description: "Professional certificate program in data science and machine learning",
      careers: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
      avgSalary: 85000,
      requirements: ["Bachelor's degree", "Basic programming knowledge"],
      scholarships: [
        {
          name: "Tech Diversity Scholarship",
          amount: 5000,
          eligibility: "Underrepresented groups in tech",
          deadline: "2024-06-15",
        },
        {
          name: "Academic Excellence Award",
          amount: 3000,
          eligibility: "GPA 3.5 or higher",
          deadline: "2024-07-01",
        },
      ],
      loans: [
        {
          name: "Federal Direct Unsubsidized Loan",
          interestRate: "4.99%",
          maxAmount: 20500,
          repaymentTerm: "10 years",
        },
        {
          name: "Private Education Loan",
          interestRate: "5.25-9.75%",
          maxAmount: "Cost of attendance",
          repaymentTerm: "5-15 years",
        },
      ],
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development Bootcamp",
      provider: "Coding Academy",
      duration: "6 months",
      tuition: 12000,
      materials: 500,
      fees: 300,
      description: "Intensive bootcamp covering front-end and back-end web development",
      careers: ["Web Developer", "Front-End Developer", "Back-End Developer"],
      avgSalary: 75000,
      requirements: ["High school diploma", "Basic computer skills"],
      scholarships: [
        {
          name: "Career Transition Scholarship",
          amount: 2500,
          eligibility: "Career changers",
          deadline: "2024-05-30",
        },
      ],
      loans: [
        {
          name: "Bootcamp Loan",
          interestRate: "6.5-8.5%",
          maxAmount: 15000,
          repaymentTerm: "3-5 years",
        },
      ],
    },
    {
      id: "mba",
      title: "Master of Business Administration",
      provider: "Business School",
      duration: "2 years",
      tuition: 60000,
      materials: 2000,
      fees: 1500,
      description: "Graduate degree in business administration with focus on leadership and management",
      careers: ["Business Manager", "Management Consultant", "Entrepreneur"],
      avgSalary: 110000,
      requirements: ["Bachelor's degree", "GMAT/GRE scores", "Work experience"],
      scholarships: [
        {
          name: "Business Leadership Scholarship",
          amount: 15000,
          eligibility: "Demonstrated leadership experience",
          deadline: "2024-06-30",
        },
        {
          name: "Women in Business Scholarship",
          amount: 10000,
          eligibility: "Women pursuing business careers",
          deadline: "2024-07-15",
        },
      ],
      loans: [
        {
          name: "Federal Direct Unsubsidized Loan",
          interestRate: "4.99%",
          maxAmount: 20500,
          repaymentTerm: "10 years",
        },
        {
          name: "Graduate PLUS Loan",
          interestRate: "6.54%",
          maxAmount: "Cost of attendance",
          repaymentTerm: "10-25 years",
        },
      ],
    },
  ]

  // Location cost factors
  const locationCosts = {
    urban: {
      label: "Urban Area",
      housingFactor: 1.5,
      livingFactor: 1.3,
      transportationCost: 150,
    },
    suburban: {
      label: "Suburban Area",
      housingFactor: 1.2,
      livingFactor: 1.1,
      transportationCost: 200,
    },
    rural: {
      label: "Rural Area",
      housingFactor: 1.0,
      livingFactor: 1.0,
      transportationCost: 250,
    },
  }

  // Housing options
  const housingOptions = {
    dorm: {
      label: "Dormitory",
      monthlyCost: 1000,
      utilitiesIncluded: true,
    },
    shared: {
      label: "Shared Apartment",
      monthlyCost: 800,
      utilitiesIncluded: false,
    },
    solo: {
      label: "Solo Apartment",
      monthlyCost: 1500,
      utilitiesIncluded: false,
    },
  }

  // Financial aid options
  const financialAidOptions = [
    {
      type: "Federal Pell Grant",
      maxAmount: 6895,
      eligibility: "Demonstrated financial need",
      repayment: "No repayment required",
      application: "FAFSA",
    },
    {
      type: "Federal Work-Study",
      maxAmount: "Varies by school",
      eligibility: "Demonstrated financial need",
      repayment: "No repayment required",
      application: "FAFSA",
    },
    {
      type: "Federal Direct Subsidized Loan",
      maxAmount: 5500,
      eligibility: "Undergraduate students with financial need",
      repayment: "Begins 6 months after graduation",
      application: "FAFSA",
    },
    {
      type: "Federal Direct Unsubsidized Loan",
      maxAmount: 20500,
      eligibility: "All students regardless of need",
      repayment: "Interest accrues immediately",
      application: "FAFSA",
    },
    {
      type: "Private Student Loans",
      maxAmount: "Up to cost of attendance",
      eligibility: "Credit check required",
      repayment: "Varies by lender",
      application: "Through private lenders",
    },
  ]

  // Get the selected education path
  const selectedPathData = educationPaths.find((path) => path.id === selectedPath)

  // Calculate housing costs based on location and housing type
  const calculateHousingCost = () => {
    const locationFactor = locationCosts[selectedLocation].housingFactor
    const baseHousingCost = housingOptions[selectedHousing].monthlyCost
    return baseHousingCost * locationFactor
  }

  // Calculate monthly housing cost
  const monthlyHousingCost = calculateHousingCost()

  // Calculate utilities if not included
  const monthlyUtilities = housingOptions[selectedHousing].utilitiesIncluded ? 0 : 150

  // Calculate transportation cost based on location
  const monthlyTransportation = locationCosts[selectedLocation].transportationCost

  // Calculate total monthly living expenses
  const totalMonthlyLiving = monthlyHousingCost + monthlyUtilities + monthlyTransportation + livingExpenses

  // Calculate program duration in months
  const getDurationInMonths = () => {
    if (!selectedPathData) return 0
    if (selectedPathData.duration.includes("month")) {
      return Number.parseInt(selectedPathData.duration)
    } else if (selectedPathData.duration.includes("year")) {
      return Number.parseInt(selectedPathData.duration) * 12
    }
    return 0
  }

  const durationInMonths = getDurationInMonths()

  // Calculate total living expenses for the program
  const totalLivingExpenses = totalMonthlyLiving * durationInMonths

  // Calculate total education costs
  const totalTuition = tuitionSlider
  const totalMaterials = selectedPathData ? selectedPathData.materials : 0
  const totalFees = selectedPathData ? selectedPathData.fees : 0
  const totalEducationCost = totalTuition + totalMaterials + totalFees

  // Calculate total program cost
  const totalProgramCost = totalEducationCost + totalLivingExpenses

  // Calculate potential financial aid
  const potentialScholarships =
    includeScholarships && selectedPathData
      ? selectedPathData.scholarships.reduce((sum, scholarship) => sum + scholarship.amount, 0)
      : 0
  const potentialWorkStudy = includeWorkStudy ? 5000 : 0 // Estimated work-study earnings
  const totalFinancialAid = potentialScholarships + potentialWorkStudy

  // Calculate remaining cost after financial aid
  const remainingCost = totalProgramCost - totalFinancialAid

  // Calculate loan amount if loans are included
  const loanAmount = includeLoans ? remainingCost : 0

  // Calculate monthly loan payment (simplified calculation)
  const calculateMonthlyLoanPayment = () => {
    if (!includeLoans || loanAmount <= 0) return 0
    const interestRate = 0.05 // 5% annual interest rate
    const loanTermYears = 10
    const monthlyRate = interestRate / 12
    const numberOfPayments = loanTermYears * 12
    return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
  }

  const monthlyLoanPayment = calculateMonthlyLoanPayment()

  // Calculate ROI based on average salary
  const calculateROI = () => {
    if (!selectedPathData) return 0
    const totalInvestment = loanAmount > 0 ? loanAmount : remainingCost
    const annualSalaryIncrease = selectedPathData.avgSalary - 45000 // Assuming $45k baseline salary
    if (totalInvestment <= 0) return 0
    return (annualSalaryIncrease / totalInvestment) * 100
  }

  const roi = calculateROI()

  // Calculate payback period in years
  const calculatePaybackPeriod = () => {
    if (!selectedPathData) return 0
    const totalInvestment = loanAmount > 0 ? loanAmount : remainingCost
    const annualSalaryIncrease = selectedPathData.avgSalary - 45000 // Assuming $45k baseline salary
    if (annualSalaryIncrease <= 0) return 0
    return totalInvestment / annualSalaryIncrease
  }

  const paybackPeriod = calculatePaybackPeriod()

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
            <span>Financial Planning Hub</span>
          </div>
          <h1 className="text-3xl font-bold">Financial Planning Hub</h1>
          <p className="text-muted-foreground mt-1">Plan and optimize your educational investment</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" asChild>
            <Link href="/scholarships">
              <GraduationCap className="h-4 w-4 mr-2" />
              Scholarships
            </Link>
          </Button>
          <Button>
            <Calculator className="h-4 w-4 mr-2" />
            Budget Manager
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Cost Estimator */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Education Cost Estimator</CardTitle>
              <CardDescription>Customize your educational path and expenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="education-path">Educational Path</Label>
                <Select value={selectedPath} onValueChange={setSelectedPath}>
                  <SelectTrigger id="education-path">
                    <SelectValue placeholder="Choose a path" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationPaths.map((path) => (
                      <SelectItem key={path.id} value={path.id}>
                        {path.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urban">Urban Area</SelectItem>
                    <SelectItem value="suburban">Suburban Area</SelectItem>
                    <SelectItem value="rural">Rural Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="housing">Housing Option</Label>
                <Select value={selectedHousing} onValueChange={setSelectedHousing}>
                  <SelectTrigger id="housing">
                    <SelectValue placeholder="Select housing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dorm">Dormitory</SelectItem>
                    <SelectItem value="shared">Shared Apartment</SelectItem>
                    <SelectItem value="solo">Solo Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Program Timeframe</Label>
                <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6-months">6 Months</SelectItem>
                    <SelectItem value="1-year">1 Year</SelectItem>
                    <SelectItem value="2-years">2 Years</SelectItem>
                    <SelectItem value="4-years">4 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="tuition-slider">Tuition Adjustment</Label>
                  <span className="text-sm">${tuitionSlider.toLocaleString()}</span>
                </div>
                <Slider
                  id="tuition-slider"
                  min={5000}
                  max={60000}
                  step={1000}
                  value={[tuitionSlider]}
                  onValueChange={(value) => setTuitionSlider(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="living-expenses">Monthly Living Expenses</Label>
                  <span className="text-sm">${livingExpenses.toLocaleString()}</span>
                </div>
                <Slider
                  id="living-expenses"
                  min={500}
                  max={3000}
                  step={100}
                  value={[livingExpenses]}
                  onValueChange={(value) => setLivingExpenses(value[0])}
                />
                <div className="text-xs text-muted-foreground">
                  Includes food, personal expenses, entertainment, etc.
                </div>
              </div>

              <Separator className="my-2" />

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-scholarships"
                    checked={includeScholarships}
                    onCheckedChange={setIncludeScholarships}
                  />
                  <Label htmlFor="include-scholarships">Include potential scholarships</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-loans" checked={includeLoans} onCheckedChange={setIncludeLoans} />
                  <Label htmlFor="include-loans">Include student loans</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-work-study" checked={includeWorkStudy} onCheckedChange={setIncludeWorkStudy} />
                  <Label htmlFor="include-work-study">Include work-study income</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {selectedPathData && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedPathData.title}</CardTitle>
                <CardDescription>{selectedPathData.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Provider</div>
                    <div className="font-medium">{selectedPathData.provider}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{selectedPathData.duration}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Potential Careers</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPathData.careers.map((career, index) => (
                      <Badge key={index} variant="secondary">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Requirements</div>
                  <ul className="text-sm space-y-1">
                    {selectedPathData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <div className="text-lg font-bold">Avg. Salary: ${selectedPathData.avgSalary.toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Cost Breakdown and Analysis */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cost Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Cost Summary</CardTitle>
              <CardDescription>Estimated total cost for your educational path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Total Program Cost</div>
                    <div className="text-3xl font-bold">${totalProgramCost.toLocaleString()}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Education Costs</span>
                      <span className="font-medium">${totalEducationCost.toLocaleString()}</span>
                    </div>
                    <Progress value={(totalEducationCost / totalProgramCost) * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Living Expenses</span>
                      <span className="font-medium">${totalLivingExpenses.toLocaleString()}</span>
                    </div>
                    <Progress value={(totalLivingExpenses / totalProgramCost) * 100} className="h-2" />
                  </div>

                  <div className="border rounded-md p-3 bg-muted/30">
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">After Financial Aid</div>
                        <div className="text-sm">
                          <span className="font-medium">${remainingCost.toLocaleString()}</span> remaining cost after
                          potential financial aid
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">Cost Breakdown</div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <School className="h-4 w-4 text-primary" />
                        </div>
                        <span>Tuition</span>
                      </div>
                      <span className="font-medium">${totalTuition.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <span>Books & Materials</span>
                      </div>
                      <span className="font-medium">${totalMaterials.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <span>Fees</span>
                      </div>
                      <span className="font-medium">${totalFees.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <Home className="h-4 w-4 text-primary" />
                        </div>
                        <span>Housing</span>
                      </div>
                      <span className="font-medium">
                        ${monthlyHousingCost.toLocaleString()}/mo ($
                        {(monthlyHousingCost * durationInMonths).toLocaleString()} total)
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <span>Other Living Expenses</span>
                      </div>
                      <span className="font-medium">
                        ${(monthlyUtilities + monthlyTransportation + livingExpenses).toLocaleString()}/mo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Aid and Loans */}
          <Tabs defaultValue="financial-aid">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="financial-aid">Financial Aid</TabsTrigger>
              <TabsTrigger value="loans">Loan Analysis</TabsTrigger>
              <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="financial-aid">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Aid Opportunities</CardTitle>
                  <CardDescription>Potential aid to reduce your educational costs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-medium mb-3">Potential Aid Summary</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Scholarships</span>
                          <span className="font-medium">${potentialScholarships.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Work-Study</span>
                          <span className="font-medium">${potentialWorkStudy.toLocaleString()}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Total Potential Aid</span>
                          <span className="font-medium">${totalFinancialAid.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Remaining Cost</span>
                          <span className="font-medium">${remainingCost.toLocaleString()}</span>
                        </div>
                      </div>

                      <Alert className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Aid Eligibility</AlertTitle>
                        <AlertDescription>
                          Based on your profile, you may be eligible for additional aid. Complete the FAFSA to maximize
                          your opportunities.
                        </AlertDescription>
                      </Alert>
                    </div>

                    {selectedPathData && includeScholarships && selectedPathData.scholarships.length > 0 ? (
                      <div>
                        <div className="text-sm font-medium mb-3">Available Scholarships</div>
                        <div className="space-y-4">
                          {selectedPathData.scholarships.map((scholarship, index) => (
                            <div key={index} className="border rounded-md p-3">
                              <div className="font-medium">{scholarship.name}</div>
                              <div className="text-sm text-muted-foreground mb-2">{scholarship.eligibility}</div>
                              <div className="flex justify-between items-center">
                                <Badge variant="outline" className="bg-green-100 text-green-800">
                                  ${scholarship.amount.toLocaleString()}
                                </Badge>
                                <div className="text-sm">Deadline: {formatDate(scholarship.deadline)}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm font-medium mb-3">Financial Aid Options</div>
                        <div className="space-y-4">
                          {financialAidOptions.slice(0, 3).map((aid, index) => (
                            <div key={index} className="border rounded-md p-3">
                              <div className="font-medium">{aid.type}</div>
                              <div className="text-sm text-muted-foreground mb-2">Eligibility: {aid.eligibility}</div>
                              <div className="flex justify-between items-center">
                                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                                  Up to $
                                  {typeof aid.maxAmount === "string" ? aid.maxAmount : aid.maxAmount.toLocaleString()}
                                </Badge>
                                <div className="text-sm">{aid.repayment}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/scholarships">
                      Find More Scholarships
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="loans">
              <Card>
                <CardHeader>
                  <CardTitle>Student Loan Analysis</CardTitle>
                  <CardDescription>Understand your loan options and repayment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Estimated Loan Amount</div>
                        <div className="text-3xl font-bold">${loanAmount.toLocaleString()}</div>
                      </div>

                      <div className="border rounded-md p-4 bg-muted/30">
                        <div className="text-center mb-3">
                          <div className="text-sm text-muted-foreground">Estimated Monthly Payment</div>
                          <div className="text-2xl font-bold">${monthlyLoanPayment.toFixed(2)}</div>
                          <div className="text-xs text-muted-foreground">(10-year standard repayment)</div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Total Repayment</span>
                            <span className="font-medium">
                              ${(monthlyLoanPayment * 120).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Total Interest</span>
                            <span className="font-medium">
                              $
                              {(monthlyLoanPayment * 120 - loanAmount).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Repayment Options</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroup defaultValue="standard" className="flex flex-col space-y-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="standard" id="standard" />
                                <Label htmlFor="standard">Standard (10 years)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="extended" id="extended" />
                                <Label htmlFor="extended">Extended (25 years)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="income" id="income" />
                                <Label htmlFor="income">Income-Based Repayment</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-3">Available Loan Options</div>
                      <div className="space-y-4">
                        {selectedPathData && includeLoans && selectedPathData.loans.length > 0 ? (
                          selectedPathData.loans.map((loan, index) => (
                            <div key={index} className="border rounded-md p-3">
                              <div className="font-medium">{loan.name}</div>
                              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                                <div>
                                  <div className="text-muted-foreground">Interest Rate</div>
                                  <div>{loan.interestRate}</div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">Max Amount</div>
                                  <div>{loan.maxAmount}</div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">Repayment Term</div>
                                  <div>{loan.repaymentTerm}</div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8 border rounded-lg bg-muted/10">
                            <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Loans Selected</h3>
                            <p className="text-muted-foreground mb-4">
                              Enable loans in the estimator to see your options
                            </p>
                            <Button variant="outline" onClick={() => setIncludeLoans(true)}>
                              Include Loans
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important Note</AlertTitle>
                      <AlertDescription>
                        Student loans are a serious financial commitment. Consider all options before borrowing and only
                        borrow what you need.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="roi">
              <Card>
                <CardHeader>
                  <CardTitle>Return on Investment Analysis</CardTitle>
                  <CardDescription>Evaluate the financial value of your educational investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Estimated ROI</div>
                        <div className="text-3xl font-bold">{roi.toFixed(1)}%</div>
                        <div className="text-sm text-muted-foreground">Annual return on investment</div>
                      </div>

                      <div className="border rounded-md p-4 bg-muted/30">
                        <div className="text-center mb-3">
                          <div className="text-sm text-muted-foreground">Payback Period</div>
                          <div className="text-2xl font-bold">{paybackPeriod.toFixed(1)} years</div>
                          <div className="text-xs text-muted-foreground">
                            Time to recoup your educational investment
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Investment Summary</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Total Investment</span>
                            <span className="font-medium">${remainingCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Potential Salary</span>
                            <span className="font-medium">
                              ${selectedPathData ? selectedPathData.avgSalary.toLocaleString() : 0}/year
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Salary Increase</span>
                            <span className="font-medium">
                              ${selectedPathData ? (selectedPathData.avgSalary - 45000).toLocaleString() : 0}
                              /year
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-3">Long-Term Financial Impact</div>
                      <div className="space-y-4">
                        <div className="border rounded-md p-3">
                          <div className="font-medium">5-Year Outlook</div>
                          <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                            <div>
                              <div className="text-muted-foreground">Total Earnings</div>
                              <div>${selectedPathData ? (selectedPathData.avgSalary * 5).toLocaleString() : 0}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Total Loan Payments</div>
                              <div>${(monthlyLoanPayment * 60).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Net Benefit</div>
                              <div>
                                $
                                {selectedPathData
                                  ? (
                                      selectedPathData.avgSalary * 5 -
                                      monthlyLoanPayment * 60 -
                                      45000 * 5
                                    ).toLocaleString()
                                  : 0}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-md p-3">
                          <div className="font-medium">10-Year Outlook</div>
                          <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                            <div>
                              <div className="text-muted-foreground">Total Earnings</div>
                              <div>${selectedPathData ? (selectedPathData.avgSalary * 10).toLocaleString() : 0}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Total Loan Payments</div>
                              <div>${(monthlyLoanPayment * 120).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Net Benefit</div>
                              <div>
                                $
                                {selectedPathData
                                  ? (
                                      selectedPathData.avgSalary * 10 -
                                      monthlyLoanPayment * 120 -
                                      45000 * 10
                                    ).toLocaleString()
                                  : 0}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-4">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <BarChart3 className="h-4 w-4 mr-2" />
                                  Earnings Chart
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View detailed earnings projection chart</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <PieChart className="h-4 w-4 mr-2" />
                                  Cost-Benefit
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View cost-benefit analysis breakdown</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Get Personalized Financial Advice
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Work-Study Programs */}
          <Card>
            <CardHeader>
              <CardTitle>Work-Study Opportunities</CardTitle>
              <CardDescription>Earn while you learn to reduce your educational costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">On-Campus Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Average Pay</span>
                        <span className="font-medium">$15-20/hour</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hours per Week</span>
                        <span className="font-medium">10-15 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Potential Earnings</span>
                        <span className="font-medium">$6,000-12,000/year</span>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <p>
                        Work in libraries, administrative offices, recreation centers, and other campus facilities with
                        flexible schedules designed around your classes.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Research Assistantships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Average Pay</span>
                        <span className="font-medium">$18-25/hour</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hours per Week</span>
                        <span className="font-medium">8-12 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Potential Earnings</span>
                        <span className="font-medium">$5,000-10,000/year</span>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <p>
                        Assist faculty with research projects related to your field of study, gaining valuable
                        experience while earning money.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Internships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Average Pay</span>
                        <span className="font-medium">$20-30/hour</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hours per Week</span>
                        <span className="font-medium">15-20 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Potential Earnings</span>
                        <span className="font-medium">$10,000-20,000/year</span>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <p>
                        Gain industry experience through paid internships that can often lead to full-time employment
                        after graduation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Federal Work-Study Program</AlertTitle>
                  <AlertDescription>
                    If you qualify for federal work-study, you can access additional job opportunities specifically
                    reserved for work-study students. Complete the FAFSA to determine your eligibility.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/internships">
                  Explore Internship Opportunities
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Budget Planning Tools */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Budget Planning Tools</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Customize Budget
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Budget Customization</SheetTitle>
                <SheetDescription>Adjust your budget parameters</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <Label>Income Sources</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="part-time-job">Part-time Job</Label>
                      <Input
                        id="part-time-job"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="1200"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="family-support">Family Support</Label>
                      <Input
                        id="family-support"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="scholarships">Scholarships (monthly)</Label>
                      <Input
                        id="scholarships"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="300"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Expense Categories</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="food">Food</Label>
                      <Input
                        id="food"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="400"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="transportation">Transportation</Label>
                      <Input
                        id="transportation"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="150"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="entertainment">Entertainment</Label>
                      <Input
                        id="entertainment"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="200"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="personal">Personal Items</Label>
                      <Input
                        id="personal"
                        type="number"
                        placeholder="Monthly amount"
                        className="w-[120px]"
                        defaultValue="150"
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Update Budget</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Budget Planner</CardTitle>
              <CardDescription>Track your income and expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Income</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Part-time Job</span>
                      <span>$1,200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Family Support</span>
                      <span>$500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Scholarships</span>
                      <span>$300</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total Income</span>
                      <span>$2,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Expenses</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Housing</span>
                      <span>${monthlyHousingCost.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Utilities</span>
                      <span>${monthlyUtilities}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Food</span>
                      <span>$400</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Transportation</span>
                      <span>${monthlyTransportation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Entertainment</span>
                      <span>$200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Personal Items</span>
                      <span>$150</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total Expenses</span>
                      <span>${(monthlyHousingCost + monthlyUtilities + monthlyTransportation + 750).toFixed(0)}</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-3 bg-muted/30">
                  <div className="flex justify-between font-medium">
                    <span>Monthly Balance</span>
                    <span
                      className={
                        2000 - (monthlyHousingCost + monthlyUtilities + monthlyTransportation + 750) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      ${(2000 - (monthlyHousingCost + monthlyUtilities + monthlyTransportation + 750)).toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/budget-manager">
                  Open Budget Manager
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>Track your progress toward financial goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Emergency Fund</span>
                    <span>$1,500 / $3,000</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Laptop Fund</span>
                    <span>$800 / $1,200</span>
                  </div>
                  <Progress value={66.7} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Summer Internship Housing</span>
                    <span>$500 / $2,400</span>
                  </div>
                  <Progress value={20.8} className="h-2" />
                </div>

                <div className="border rounded-md p-3">
                  <div className="text-sm font-medium mb-2">Add New Savings Goal</div>
                  <div className="space-y-2">
                    <Input placeholder="Goal name" />
                    <div className="flex gap-2">
                      <Input type="number" placeholder="Target amount" />
                      <Button>Add</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Set Savings Schedule
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Tips</CardTitle>
              <CardDescription>Smart strategies to manage your finances</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Apply for FAFSA Early</div>
                      <p className="text-sm text-muted-foreground">
                        Submit your FAFSA as soon as possible after October 1st to maximize your aid opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Use Student Discounts</div>
                      <p className="text-sm text-muted-foreground">
                        Your student ID can save you money on software, transportation, entertainment, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Buy Used Textbooks</div>
                      <p className="text-sm text-muted-foreground">
                        Save up to 80% by purchasing used textbooks or renting them for the semester.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Track Every Expense</div>
                      <p className="text-sm text-muted-foreground">
                        Use budgeting apps to monitor your spending and identify areas where you can cut back.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/financial-tips">
                  View All Financial Tips
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

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

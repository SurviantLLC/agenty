"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Clock,
  DollarSign,
  Download,
  Home,
  LineChart,
  PieChart,
  Plus,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function BudgetManager() {
  const [selectedMonth, setSelectedMonth] = useState("current")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Sample budget data
  const budgetData = {
    summary: {
      totalIncome: 2000,
      totalExpenses: 1850,
      balance: 150,
      savingsRate: 7.5,
    },
    income: [
      {
        id: "inc-1",
        category: "Employment",
        description: "Part-time Job",
        amount: 1200,
        date: "2024-04-15",
        recurring: true,
      },
      {
        id: "inc-2",
        category: "Financial Aid",
        description: "Monthly Scholarship",
        amount: 500,
        date: "2024-04-05",
        recurring: true,
      },
      {
        id: "inc-3",
        category: "Gifts",
        description: "Birthday Gift",
        amount: 100,
        date: "2024-04-20",
        recurring: false,
      },
      {
        id: "inc-4",
        category: "Other",
        description: "Tutoring",
        amount: 200,
        date: "2024-04-25",
        recurring: false,
      },
    ],
    expenses: [
      {
        id: "exp-1",
        category: "Housing",
        description: "Rent",
        amount: 800,
        date: "2024-04-01",
        recurring: true,
      },
      {
        id: "exp-2",
        category: "Utilities",
        description: "Electricity & Internet",
        amount: 150,
        date: "2024-04-05",
        recurring: true,
      },
      {
        id: "exp-3",
        category: "Food",
        description: "Groceries",
        amount: 300,
        date: "2024-04-10",
        recurring: true,
      },
      {
        id: "exp-4",
        category: "Food",
        description: "Dining Out",
        amount: 100,
        date: "2024-04-15",
        recurring: false,
      },
      {
        id: "exp-5",
        category: "Transportation",
        description: "Bus Pass",
        amount: 60,
        date: "2024-04-03",
        recurring: true,
      },
      {
        id: "exp-6",
        category: "Education",
        description: "Books",
        amount: 120,
        date: "2024-04-12",
        recurring: false,
      },
      {
        id: "exp-7",
        category: "Entertainment",
        description: "Streaming Services",
        amount: 20,
        date: "2024-04-05",
        recurring: true,
      },
      {
        id: "exp-8",
        category: "Personal",
        description: "Gym Membership",
        amount: 50,
        date: "2024-04-01",
        recurring: true,
      },
      {
        id: "exp-9",
        category: "Healthcare",
        description: "Medication",
        amount: 30,
        date: "2024-04-18",
        recurring: false,
      },
      {
        id: "exp-10",
        category: "Other",
        description: "Phone Bill",
        amount: 40,
        date: "2024-04-10",
        recurring: true,
      },
      {
        id: "exp-11",
        category: "Savings",
        description: "Emergency Fund",
        amount: 100,
        date: "2024-04-30",
        recurring: true,
      },
      {
        id: "exp-12",
        category: "Education",
        description: "Course Materials",
        amount: 80,
        date: "2024-04-22",
        recurring: false,
      },
    ],
    savingsGoals: [
      {
        id: "goal-1",
        name: "Emergency Fund",
        target: 3000,
        current: 1500,
        deadline: "2024-12-31",
        monthlyContribution: 100,
      },
      {
        id: "goal-2",
        name: "Laptop Fund",
        target: 1200,
        current: 800,
        deadline: "2024-08-31",
        monthlyContribution: 150,
      },
      {
        id: "goal-3",
        name: "Summer Internship Housing",
        target: 2400,
        current: 500,
        deadline: "2025-05-31",
        monthlyContribution: 120,
      },
    ],
    categories: {
      income: ["Employment", "Financial Aid", "Gifts", "Other"],
      expenses: [
        "Housing",
        "Utilities",
        "Food",
        "Transportation",
        "Education",
        "Entertainment",
        "Personal",
        "Healthcare",
        "Savings",
        "Other",
      ],
    },
    projections: {
      sixMonths: {
        income: 12000,
        expenses: 11100,
        savings: 900,
      },
      oneYear: {
        income: 24000,
        expenses: 22200,
        savings: 1800,
      },
      graduation: {
        income: 48000,
        expenses: 44400,
        savings: 3600,
      },
    },
    educationalROI: {
      totalInvestment: 35000,
      projectedSalaryIncrease: 40000,
      paybackPeriod: 0.875,
      tenYearReturn: 365000,
    },
  }

  // Filter transactions based on category
  const filterTransactions = (transactions) => {
    if (selectedCategory === "all") return transactions
    return transactions.filter((transaction) => transaction.category === selectedCategory)
  }

  // Get filtered transactions
  const filteredIncome = filterTransactions(budgetData.income)
  const filteredExpenses = filterTransactions(budgetData.expenses)

  // Calculate category totals
  const calculateCategoryTotals = (transactions) => {
    const totals = {}
    transactions.forEach((transaction) => {
      if (!totals[transaction.category]) {
        totals[transaction.category] = 0
      }
      totals[transaction.category] += transaction.amount
    })
    return totals
  }

  const expenseTotals = calculateCategoryTotals(budgetData.expenses)
  const incomeTotals = calculateCategoryTotals(budgetData.income)

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
            <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
              <Link href="/financial-planning">Financial Planning</Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <span>Budget Manager</span>
          </div>
          <h1 className="text-3xl font-bold">Budget Manager</h1>
          <p className="text-muted-foreground mt-1">Track, analyze, and optimize your finances</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Month</SelectItem>
              <SelectItem value="previous">Previous Month</SelectItem>
              <SelectItem value="next">Next Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Budget Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${budgetData.summary.totalIncome.toLocaleString()}</div>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
              <span>5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${budgetData.summary.totalExpenses.toLocaleString()}</div>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <ArrowDown className="h-4 w-4 text-green-600 mr-1" />
              <span>3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Monthly Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold ${budgetData.summary.balance >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              ${budgetData.summary.balance.toLocaleString()}
            </div>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
              <span>12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Savings Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{budgetData.summary.savingsRate}%</div>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
              <span>2% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Income & Expenses */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="expenses">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
            </TabsList>

            <TabsContent value="expenses">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Expense Transactions</CardTitle>
                    <CardDescription>Track where your money is going</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {budgetData.categories.expenses.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Expense
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredExpenses.map((expense) => (
                        <TableRow key={expense.id}>
                          <TableCell className="font-medium">{expense.description}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{expense.category}</Badge>
                          </TableCell>
                          <TableCell>{formatDate(expense.date)}</TableCell>
                          <TableCell className="text-right">${expense.amount.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Settings className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Showing {filteredExpenses.length} transactions</div>
                  <Button variant="outline" size="sm">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="income">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Income Transactions</CardTitle>
                    <CardDescription>Track your sources of income</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {budgetData.categories.income.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Income
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredIncome.map((income) => (
                        <TableRow key={income.id}>
                          <TableCell className="font-medium">{income.description}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{income.category}</Badge>
                          </TableCell>
                          <TableCell>{formatDate(income.date)}</TableCell>
                          <TableCell className="text-right">${income.amount.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Settings className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Showing {filteredIncome.length} transactions</div>
                  <Button variant="outline" size="sm">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Expense Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>Where your money is going this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">By Category</h3>
                    <Button variant="outline" size="sm">
                      <PieChart className="h-4 w-4 mr-2" />
                      View Chart
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(expenseTotals)
                      .sort(([, a], [, b]) => b - a)
                      .map(([category, amount]) => (
                        <div key={category}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{category}</span>
                            <span>${amount.toLocaleString()}</span>
                          </div>
                          <Progress value={(amount / budgetData.summary.totalExpenses) * 100} className="h-2" />
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Top Expenses</h3>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Chart
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {budgetData.expenses
                      .sort((a, b) => b.amount - a.amount)
                      .slice(0, 5)
                      .map((expense) => (
                        <div key={expense.id} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{expense.category}</Badge>
                            <span className="text-sm">{expense.description}</span>
                          </div>
                          <span className="font-medium">${expense.amount.toLocaleString()}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Savings Goals & Projections */}
        <div className="space-y-6">
          {/* Savings Goals */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Savings Goals</CardTitle>
                <CardDescription>Track progress toward your financial goals</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Goal
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetData.savingsGoals.map((goal) => (
                  <div key={goal.id} className="border rounded-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{goal.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          Target: ${goal.target.toLocaleString()} by {formatDate(goal.deadline)}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>
                          ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                        </span>
                        <span>{Math.round((goal.current / goal.target) * 100)}%</span>
                      </div>
                      <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>${goal.monthlyContribution}/month</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {Math.ceil((goal.target - goal.current) / goal.monthlyContribution)} months remaining
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financial Projections */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Projections</CardTitle>
              <CardDescription>See where your finances are headed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">6-Month Outlook</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Projected Income</span>
                      <span className="font-medium">${budgetData.projections.sixMonths.income.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Projected Expenses</span>
                      <span className="font-medium">${budgetData.projections.sixMonths.expenses.toLocaleString()}</span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between text-sm">
                      <span>Projected Savings</span>
                      <span className="font-medium text-green-600">
                        ${budgetData.projections.sixMonths.savings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">1-Year Outlook</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Projected Income</span>
                      <span className="font-medium">${budgetData.projections.oneYear.income.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Projected Expenses</span>
                      <span className="font-medium">${budgetData.projections.oneYear.expenses.toLocaleString()}</span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between text-sm">
                      <span>Projected Savings</span>
                      <span className="font-medium text-green-600">
                        ${budgetData.projections.oneYear.savings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">By Graduation</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Projected Income</span>
                      <span className="font-medium">${budgetData.projections.graduation.income.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Projected Expenses</span>
                      <span className="font-medium">
                        ${budgetData.projections.graduation.expenses.toLocaleString()}
                      </span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between text-sm">
                      <span>Projected Savings</span>
                      <span className="font-medium text-green-600">
                        ${budgetData.projections.graduation.savings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <LineChart className="h-4 w-4 mr-2" />
                View Detailed Projections
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Educational ROI Analysis */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Educational Investment Analysis</h2>
        <Card>
          <CardHeader>
            <CardTitle>Return on Investment</CardTitle>
            <CardDescription>Analyze the financial impact of your educational investment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Total Investment</div>
                <div className="text-2xl font-bold">${budgetData.educationalROI.totalInvestment.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Tuition, fees, and opportunity costs</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Salary Increase</div>
                <div className="text-2xl font-bold text-green-600">
                  +${budgetData.educationalROI.projectedSalaryIncrease.toLocaleString()}/year
                </div>
                <div className="text-xs text-muted-foreground">Projected annual salary premium</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Payback Period</div>
                <div className="text-2xl font-bold">
                  {budgetData.educationalROI.paybackPeriod < 1
                    ? `${Math.round(budgetData.educationalROI.paybackPeriod * 12)} months`
                    : `${budgetData.educationalROI.paybackPeriod.toFixed(1)} years`}
                </div>
                <div className="text-xs text-muted-foreground">Time to recoup your investment</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">10-Year Return</div>
                <div className="text-2xl font-bold text-green-600">
                  ${budgetData.educationalROI.tenYearReturn.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Net benefit over 10 years</div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-medium">Break-Even Timeline</h3>
                <p className="text-sm text-muted-foreground">
                  You'll recoup your educational investment by{" "}
                  {new Date().getFullYear() + Math.ceil(budgetData.educationalROI.paybackPeriod)}
                </p>
              </div>
              <Button variant="outline">
                <Calculator className="h-4 w-4 mr-2" />
                Customize Calculation
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>ROI Analysis</AlertTitle>
              <AlertDescription>
                This analysis is based on current projections and market conditions. Actual results may vary based on
                career choices, economic conditions, and personal circumstances.
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

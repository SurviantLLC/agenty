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
import { Transaction } from "./types"

interface SavingsGoal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string;
  monthlyContribution: number;
}

interface BudgetData {
  summary: {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
    savingsRate: number;
  };
  income: Transaction[];
  expenses: Transaction[];
  savingsGoals: SavingsGoal[];
  categories: {
    income: string[];
    expenses: string[];
  };
  projections: {
    sixMonths: {
      income: number;
      expenses: number;
      savings: number;
    };
    oneYear: {
      income: number;
      expenses: number;
      savings: number;
    };
    graduation: {
      income: number;
      expenses: number;
      savings: number;
    };
  };
  educationalROI: {
    totalInvestment: number;
    projectedSalaryIncrease: number;
    paybackPeriod: number;
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BudgetManager() {
  const [selectedMonth, setSelectedMonth] = useState<string>("current");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterTransactions = (transactions: Transaction[]): Transaction[] => {
    if (selectedCategory === "all") return transactions;
    return transactions.filter((transaction) => transaction.category === selectedCategory);
  };

  // Sample budget data
  const budgetData: BudgetData = {
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
        type: "income",
        recurring: true,
      },
      {
        id: "inc-2",
        category: "Financial Aid",
        description: "Monthly Scholarship",
        amount: 500,
        date: "2024-04-05",
        type: "income",
        recurring: true,
      },
      {
        id: "inc-3",
        category: "Gifts",
        description: "Birthday Gift",
        amount: 100,
        date: "2024-04-20",
        type: "income",
        recurring: false,
      },
      {
        id: "inc-4",
        category: "Other",
        description: "Tutoring",
        amount: 200,
        date: "2024-04-25",
        type: "income",
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
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-2",
        category: "Utilities",
        description: "Electricity & Internet",
        amount: 150,
        date: "2024-04-05",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-3",
        category: "Food",
        description: "Groceries",
        amount: 300,
        date: "2024-04-10",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-4",
        category: "Food",
        description: "Dining Out",
        amount: 100,
        date: "2024-04-15",
        type: "expense",
        recurring: false,
      },
      {
        id: "exp-5",
        category: "Transportation",
        description: "Bus Pass",
        amount: 60,
        date: "2024-04-03",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-6",
        category: "Education",
        description: "Books",
        amount: 120,
        date: "2024-04-12",
        type: "expense",
        recurring: false,
      },
      {
        id: "exp-7",
        category: "Entertainment",
        description: "Streaming Services",
        amount: 20,
        date: "2024-04-05",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-8",
        category: "Personal",
        description: "Gym Membership",
        amount: 50,
        date: "2024-04-01",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-9",
        category: "Healthcare",
        description: "Medication",
        amount: 30,
        date: "2024-04-18",
        type: "expense",
        recurring: false,
      },
      {
        id: "exp-10",
        category: "Other",
        description: "Phone Bill",
        amount: 40,
        date: "2024-04-10",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-11",
        category: "Savings",
        description: "Emergency Fund",
        amount: 100,
        date: "2024-04-30",
        type: "expense",
        recurring: true,
      },
      {
        id: "exp-12",
        category: "Education",
        description: "Course Materials",
        amount: 80,
        date: "2024-04-22",
        type: "expense",
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
    },
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6">
        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-green-600">
                  ${budgetData.summary.totalIncome.toLocaleString()}
                </div>
                <Badge className="bg-green-100 text-green-800">+{budgetData.summary.savingsRate}%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-red-600">
                  ${budgetData.summary.totalExpenses.toLocaleString()}
                </div>
                <Badge className="bg-red-100 text-red-800">92.5%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-blue-600">
                  ${budgetData.summary.balance.toLocaleString()}
                </div>
                <Badge className="bg-blue-100 text-blue-800">Current</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-purple-600">
                  {budgetData.educationalROI.paybackPeriod.toFixed(1)}y
                </div>
                <Badge className="bg-purple-100 text-purple-800">Payback</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-7">
          {/* Transactions Section */}
          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Track your spending and income</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current Month</SelectItem>
                        <SelectItem value="previous">Previous Month</SelectItem>
                        <SelectItem value="all">All Time</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
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
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterTransactions([...budgetData.income, ...budgetData.expenses]
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .slice(0, 10)
                    ).map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{transaction.category}</Badge>
                        </TableCell>
                        <TableCell>{formatDate(transaction.date)}</TableCell>
                        <TableCell className="text-right">
                          <span className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
                            {transaction.type === "income" ? "+" : "-"}${transaction.amount}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational ROI Analysis</CardTitle>
                <CardDescription>Track your educational investment returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Total Investment</div>
                      <div className="text-2xl font-bold">
                        ${budgetData.educationalROI.totalInvestment.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-right">Projected Salary Increase</div>
                      <div className="text-2xl font-bold text-green-600">
                        +${budgetData.educationalROI.projectedSalaryIncrease.toLocaleString()}/yr
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-medium mb-2">Payback Period Progress</div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                      <span>0 years</span>
                      <span>{budgetData.educationalROI.paybackPeriod} years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Savings Goals Section */}
          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Savings Goals</CardTitle>
                    <CardDescription>Track your financial targets</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Add Goal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgetData.savingsGoals.map((goal) => (
                    <div key={goal.id} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{goal.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Due {formatDate(goal.deadline)}
                          </div>
                        </div>
                        <Badge variant="outline">
                          ${goal.monthlyContribution}/mo
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <Progress
                          value={(goal.current / goal.target) * 100}
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                          </span>
                          <span className="font-medium">
                            {Math.round((goal.current / goal.target) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projections</CardTitle>
                <CardDescription>Financial outlook based on current trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">6 Months</div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Income</div>
                        <div className="font-medium text-green-600">
                          ${budgetData.projections.sixMonths.income.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Expenses</div>
                        <div className="font-medium text-red-600">
                          ${budgetData.projections.sixMonths.expenses.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Savings</div>
                        <div className="font-medium">
                          ${budgetData.projections.sixMonths.savings.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="font-medium">1 Year</div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Income</div>
                        <div className="font-medium text-green-600">
                          ${budgetData.projections.oneYear.income.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Expenses</div>
                        <div className="font-medium text-red-600">
                          ${budgetData.projections.oneYear.expenses.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Savings</div>
                        <div className="font-medium">
                          ${budgetData.projections.oneYear.savings.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

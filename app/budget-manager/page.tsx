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
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
            <CardDescription>
              Track your income, expenses, and savings goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Income</CardTitle>
                  <CardDescription>${budgetData.summary.totalIncome}</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expenses</CardTitle>
                  <CardDescription>${budgetData.summary.totalExpenses}</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Balance</CardTitle>
                  <CardDescription>${budgetData.summary.balance}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

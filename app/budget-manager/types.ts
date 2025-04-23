export interface Transaction {
  id: string;
  date: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  description: string;
}

export interface CategoryTotals {
  [key: string]: number
}

export interface BudgetSummary {
  totalIncome: number
  totalExpenses: number
  balance: number
  savingsRate: number
}

export interface Transaction {
  id: string
  category: string
  description: string
  amount: number
  date: string
  recurring: boolean
}

export interface CategoryTotal {
  [key: string]: number;
}

export interface MonthlyData {
  income: number;
  expenses: number;
  savings: number;
}

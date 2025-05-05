"use client"

import { ArrowDownLeft, Coffee, CreditCard, Home, ShoppingBag } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "1",
    description: "Salário",
    amount: 4000,
    date: "01/06/2023",
    type: "receita",
    category: "Trabalho",
    icon: ArrowDownLeft,
  },
  {
    id: "2",
    description: "Aluguel",
    amount: 1200,
    date: "05/06/2023",
    type: "despesa",
    category: "Moradia",
    icon: Home,
  },
  {
    id: "3",
    description: "Supermercado",
    amount: 450,
    date: "10/06/2023",
    type: "despesa",
    category: "Alimentação",
    icon: ShoppingBag,
  },
  {
    id: "4",
    description: "Restaurante",
    amount: 120,
    date: "15/06/2023",
    type: "despesa",
    category: "Alimentação",
    icon: Coffee,
  },
  {
    id: "5",
    description: "Cartão de Crédito",
    amount: 850,
    date: "20/06/2023",
    type: "despesa",
    category: "Diversos",
    icon: CreditCard,
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${transaction.type === "receita" ? "bg-emerald-100" : "bg-red-100"}`}
            >
              <transaction.icon
                className={`h-5 w-5 ${transaction.type === "receita" ? "text-emerald-600" : "text-red-600"}`}
              />
            </div>
            <div>
              <div className="font-medium">{transaction.description}</div>
              <div className="text-xs text-muted-foreground">{transaction.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{transaction.category}</Badge>
            <div
              className={`text-right font-medium ${transaction.type === "receita" ? "text-emerald-600" : "text-red-600"}`}
            >
              {transaction.type === "receita" ? "+" : "-"}R$ {transaction.amount.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

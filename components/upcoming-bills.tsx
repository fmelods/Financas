"use client"

import { AlertCircle, CreditCard, Home, Wifi } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const bills = [
  {
    id: "1",
    description: "Aluguel",
    amount: 1200,
    dueDate: "05/07/2023",
    status: "pendente",
    icon: Home,
    daysLeft: 3,
  },
  {
    id: "2",
    description: "Internet",
    amount: 120,
    dueDate: "10/07/2023",
    status: "pendente",
    icon: Wifi,
    daysLeft: 8,
  },
  {
    id: "3",
    description: "Cartão de Crédito",
    amount: 850,
    dueDate: "15/07/2023",
    status: "pendente",
    icon: CreditCard,
    daysLeft: 13,
  },
]

export function UpcomingBills() {
  return (
    <div className="space-y-4">
      {bills.map((bill) => (
        <div key={bill.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <bill.icon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-medium">{bill.description}</div>
              <div className="text-xs text-muted-foreground">Vence em {bill.dueDate}</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="font-medium">R$ {bill.amount.toFixed(2)}</div>
            {bill.daysLeft <= 5 ? (
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {bill.daysLeft} dias
              </Badge>
            ) : (
              <Badge variant="outline">{bill.daysLeft} dias</Badge>
            )}
          </div>
        </div>
      ))}
      <Button variant="outline" size="sm" className="w-full">
        Ver todos os vencimentos
      </Button>
    </div>
  )
}

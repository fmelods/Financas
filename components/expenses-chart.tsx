"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Moradia", value: 1200, color: "#3b82f6" },
  { name: "Alimentação", value: 800, color: "#10b981" },
  { name: "Transporte", value: 400, color: "#6366f1" },
  { name: "Lazer", value: 300, color: "#f59e0b" },
  { name: "Saúde", value: 250, color: "#ef4444" },
  { name: "Outros", value: 155, color: "#8b5cf6" },
]

export function ExpensesChart() {
  return (
    <ChartContainer
      config={{
        expenses: {
          label: "Despesas",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="aspect-[4/3] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={
              <ChartTooltipContent nameKey="name" valueKey="value" formatValue={(value) => `R$ ${value.toFixed(2)}`} />
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

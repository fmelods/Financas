"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    receitas: 3200,
    despesas: 2800,
  },
  {
    name: "Fev",
    receitas: 3300,
    despesas: 2900,
  },
  {
    name: "Mar",
    receitas: 3700,
    despesas: 3100,
  },
  {
    name: "Abr",
    receitas: 3600,
    despesas: 3000,
  },
  {
    name: "Mai",
    receitas: 4100,
    despesas: 3200,
  },
  {
    name: "Jun",
    receitas: 4350,
    despesas: 3105,
  },
]

export function BalanceChart() {
  return (
    <ChartContainer
      config={{
        receitas: {
          label: "Receitas",
          color: "hsl(142.1, 76.2%, 36.3%)",
        },
        despesas: {
          label: "Despesas",
          color: "hsl(346.8, 77.2%, 49.8%)",
        },
      }}
      className="aspect-[4/3] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="receitas" fill="hsl(142.1, 76.2%, 36.3%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="despesas" fill="hsl(346.8, 77.2%, 49.8%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

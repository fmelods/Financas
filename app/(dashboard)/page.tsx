import Link from "next/link"
import { ArrowRight, Calendar, DollarSign, LineChart, PiggyBank, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BalanceChart } from "@/components/balance-chart"
import { ExpensesChart } from "@/components/expenses-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import { UpcomingBills } from "@/components/upcoming-bills"

export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">R$ 12.580,00</div>
            <p className="text-xs text-muted-foreground">+R$ 1.245,00 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">R$ 4.350,00</div>
            <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">R$ 3.105,00</div>
            <p className="text-xs text-muted-foreground">-3% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">R$ 1.245,00</div>
            <p className="text-xs text-muted-foreground">28% da receita mensal</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="visao-geral" className="space-y-4">
        <TabsList>
          <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="transacoes">Transações</TabsTrigger>
          <TabsTrigger value="metas">Metas</TabsTrigger>
          <TabsTrigger value="categorias">Categorias</TabsTrigger>
        </TabsList>
        <TabsContent value="visao-geral" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Balanço Mensal</CardTitle>
                <CardDescription>Comparativo de receitas e despesas dos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BalanceChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Despesas por Categoria</CardTitle>
                <CardDescription>Distribuição de gastos do mês atual</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpensesChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-1">
                  <CardTitle>Transações Recentes</CardTitle>
                  <CardDescription>Últimas movimentações financeiras</CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="/transacoes">
                    Ver todas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-1">
                  <CardTitle>Contas a Pagar</CardTitle>
                  <CardDescription>Próximos vencimentos</CardDescription>
                </div>
                <Button variant="outline" size="icon" className="ml-auto">
                  <Calendar className="h-4 w-4" />
                  <span className="sr-only">Calendário</span>
                </Button>
              </CardHeader>
              <CardContent>
                <UpcomingBills />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Metas Financeiras</CardTitle>
                <CardDescription>Progresso das suas metas atuais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Fundo de Emergência</div>
                    <div className="text-sm text-muted-foreground">R$ 6.000 / R$ 10.000</div>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Viagem de Férias</div>
                    <div className="text-sm text-muted-foreground">R$ 3.500 / R$ 5.000</div>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Novo Notebook</div>
                    <div className="text-sm text-muted-foreground">R$ 2.000 / R$ 6.000</div>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full gap-1">
                  <Plus className="h-4 w-4" />
                  Nova Meta
                </Button>
              </CardFooter>
            </Card>
            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Dicas Financeiras</CardTitle>
                <CardDescription>Recomendações para melhorar suas finanças</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-muted/50 p-3">
                  <h3 className="font-medium">Reduza gastos com alimentação</h3>
                  <p className="text-sm text-muted-foreground">
                    Seus gastos com alimentação fora de casa aumentaram 15% este mês. Considere preparar mais refeições
                    em casa.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/50 p-3">
                  <h3 className="font-medium">Oportunidade de investimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Com base no seu perfil, você poderia aumentar seus rendimentos investindo em títulos de renda fixa.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/50 p-3">
                  <h3 className="font-medium">Economize na conta de luz</h3>
                  <p className="text-sm text-muted-foreground">
                    Sua conta de luz está 20% acima da média. Verifique aparelhos que consomem mais energia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="transacoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Todas as Transações</CardTitle>
              <CardDescription>Histórico completo de receitas e despesas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Conteúdo da aba de transações será exibido aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Metas</CardTitle>
              <CardDescription>Configure e acompanhe suas metas financeiras</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Conteúdo da aba de metas será exibido aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="categorias" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Categorias de Gastos</CardTitle>
              <CardDescription>Organize suas despesas por categorias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Conteúdo da aba de categorias será exibido aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

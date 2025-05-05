import type React from "react"
import { redirect } from "next/navigation"
import { Bell, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"
import { getCurrentUser } from "@/lib/auth"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Verificar se o usuário está autenticado
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-emerald-500" />
          <span className="text-lg font-semibold">FinançasPro</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
            <span className="sr-only">Notificações</span>
          </Button>
          <UserNav user={user} />
        </nav>
      </header>
      {children}
    </div>
  )
}

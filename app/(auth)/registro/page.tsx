import Link from "next/link"
import { redirect } from "next/navigation"
import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/components/register-form"
import { getCurrentUser } from "@/lib/auth"

export default async function RegisterPage() {
  // Verificar se o usuário já está logado
  const user = await getCurrentUser()
  if (user) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-emerald-100 p-2">
              <Wallet className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Crie sua conta</CardTitle>
          <CardDescription>Comece a gerenciar suas finanças de forma simples e intuitiva</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/login">Faça login</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

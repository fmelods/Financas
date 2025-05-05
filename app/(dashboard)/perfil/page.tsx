import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentUser } from "@/lib/auth"

export default async function ProfilePage() {
  const user = await getCurrentUser()

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Perfil do Usuário</CardTitle>
            <CardDescription>Gerencie suas informações pessoais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Nome</h3>
                <p className="text-base">{user?.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p className="text-base">{user?.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Membro desde</h3>
                <p className="text-base">Junho 2023</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

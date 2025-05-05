"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

// Simulação de banco de dados de usuários
const users = [
  {
    id: "1",
    name: "João Pedro",
    email: "joao@example.com",
    password: "senha123", // Em produção, use hash de senha!
    avatar: "JP",
  },
]

// Schema de validação para registro
const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

// Schema de validação para login
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
})

// Função para registrar um novo usuário
export async function registerUser(formData: FormData) {
  // Simular um delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validar dados
  const result = registerSchema.safeParse({ name, email, password })
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // Verificar se o email já está em uso
  const existingUser = users.find((user) => user.email === email)
  if (existingUser) {
    return { success: false, errors: { email: ["Email já está em uso"] } }
  }

  // Criar novo usuário
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    password, // Em produção, use hash de senha!
    avatar: name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase(),
  }

  users.push(newUser)

  // Criar sessão
  cookies().set(
    "user_session",
    JSON.stringify({ id: newUser.id, name: newUser.name, email: newUser.email, avatar: newUser.avatar }),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/",
    },
  )

  return { success: true }
}

// Função para fazer login
export async function loginUser(formData: FormData) {
  // Simular um delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validar dados
  const result = loginSchema.safeParse({ email, password })
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // Verificar credenciais
  const user = users.find((user) => user.email === email && user.password === password)
  if (!user) {
    return { success: false, errors: { email: ["Credenciais inválidas"] } }
  }

  // Criar sessão
  cookies().set(
    "user_session",
    JSON.stringify({ id: user.id, name: user.name, email: user.email, avatar: user.avatar }),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/",
    },
  )

  return { success: true }
}

// Função para fazer logout
export async function logoutUser() {
  cookies().delete("user_session")
  redirect("/login")
}

// Função para obter o usuário atual
export async function getCurrentUser() {
  const session = cookies().get("user_session")?.value
  if (!session) return null

  try {
    return JSON.parse(session)
  } catch (error) {
    return null
  }
}

// Middleware para proteger rotas
export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }
  return user
}

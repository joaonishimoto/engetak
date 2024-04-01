import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'

// HTTP METHODS

// ---- GET
export async function GET() {

  const data = await prisma.user.findMany()

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  })
}

// ---- POST
export async function POST(request: Request) {
  const data = await request.json()

  const { email, password, role } = data

  const hashedPassword = await bcrypt.hash(password, 3)

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      role
    }
  })

  return new Response(JSON.stringify(newUser), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  })
}

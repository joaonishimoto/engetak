import { prisma } from '@/prisma'

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

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
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

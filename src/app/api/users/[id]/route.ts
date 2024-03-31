import { prisma } from '@/prisma'
import { User } from '@prisma/client'

// HTTP METHODS

// ---- POST
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {

  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })

  return new Response(JSON.stringify(user), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  })
}

// ---- PATCH
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {

  const data = await request.json()

  const { email, password } = data

  const userUpdated = await prisma.user.update({
    where: {
      id: params.id
    },
    data: {
      email,
      password
    }
  })
  
  return new Response(JSON.stringify(userUpdated), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  })
}

// ---- DELETE
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  
  const userDeleted = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })

  await prisma.user.delete({
    where: {
      id: params.id
    }
  })

  return new Response(JSON.stringify(userDeleted), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  })
}
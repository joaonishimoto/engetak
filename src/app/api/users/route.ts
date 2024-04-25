import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

// HTTP METHODS

// ---- GET
export async function GET() {
  try {
    const data = await prisma.user.findMany()
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    })
  } catch (error) {
    console.error("Error fetching users:", error)
    return new Response(JSON.stringify({ error: "Error fetching users" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    })
  }
}

// ---- POST
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, password } = data
    const hashedPassword = await bcrypt.hash(password, 3)
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })
    return new Response(JSON.stringify(newUser), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    })
  } catch (error) {
    console.error("Error creating user:", error)
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    })
  }
}

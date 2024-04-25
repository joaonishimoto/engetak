import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {

    const data = await request.json()

    const { email } = data

/*     const getAllData = await prisma.user.findUnique({
      where: {
        email
      },
      select: {
        workingOn: true
      }
    }) */

    return new Response((JSON.stringify("getAllData")), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    })
  } catch (error) {
    console.log("fetch error:", error)
    return new Response(JSON.stringify({ error: "fetch error" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    })
  }
}


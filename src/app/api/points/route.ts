import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
  
      const data = await request.json()
  
      const { email } = data
  
      const userPoints = await prisma.user.findUnique({
        where: {
          email
        },
        select: {
          points: true
        }
      })
  
        return new Response((JSON.stringify(userPoints)), {
            headers: {
              'Content-Type': 'application/json',
            },
            status: 200,
          });
    } catch (error) {
        console.log('fetch error:', error)
        return new Response(JSON.stringify({ error: 'fetch error' }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 500
        })
    }
  }
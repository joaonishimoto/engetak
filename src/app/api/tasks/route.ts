import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    try {
        const getAllData = await prisma.task.findMany()

        return new Response((JSON.stringify(getAllData)), {
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

export async function POST(request: Request) {
    try {
        const requestData = await request.json()

        const { name, points } = requestData

        const createNewData = await prisma.task.create({
            data: {
                name,
                points
            }
        })

        return new Response((JSON.stringify(createNewData)), {
            headers: {
              'Content-Type': 'application/json',
            },
            status: 201,
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
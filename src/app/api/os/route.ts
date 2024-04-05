import { prisma } from '@/lib/prisma';

// HTTP METHODS

// ---- GET
export async function GET() {
  try {
    const data = await prisma.task.findMany();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return new Response(JSON.stringify({ error: 'Error fetching tasks' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

// ---- POST
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, description, clientId } = data;
    const newTask = await prisma.task.create({
      data: {
        name,
        description,
        Client: {
          connect: { id: clientId },
        },
      },
    });
    return new Response(JSON.stringify(newTask), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    console.error('Error creating task:', error);
    return new Response(JSON.stringify({ error: 'Error creating task' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

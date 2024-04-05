import { prisma } from '@/lib/prisma';

// HTTP METHOD

// ---- POST (adicionar item em uma task)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { taskId, number, description } = data;

    // Verifica se a task existe
    const existingTask = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!existingTask) {
      return new Response(JSON.stringify({ error: 'Task not found' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }

    // Cria o novo item dentro da task
    const newItem = await prisma.item.create({
      data: {
        number,
        description,
        task: { connect: { id: taskId } }, // Conecta o item à task pelo ID
      },
    });

    return new Response(JSON.stringify(newItem), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    console.error('Error adding item to task:', error);
    return new Response(JSON.stringify({ error: 'Error adding item to task' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

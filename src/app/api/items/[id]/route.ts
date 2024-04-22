/* import { prisma } from '@/lib/prisma';

// HTTP METHOD

// ---- GET (buscar todos os itens de uma task)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {

    if (!params.id) {
      return new Response(JSON.stringify({ error: 'Task ID not provided' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 400,
      });
    }

    // Verifica se a task existe
    const existingTask = await prisma.task.findUnique({
      where: { id: params.id },
      include: { items: true }, // Inclui os items relacionados à task
    });

    if (!existingTask) {
      return new Response(JSON.stringify({ error: 'Task not found' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }

    // Retorna todos os itens da task
    return new Response(JSON.stringify(existingTask.items), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching items of task:', error);
    return new Response(JSON.stringify({ error: 'Error fetching items of task' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

// ---- POST (adicionar item em uma task)
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const { number, description } = data;

    // Verifica se a task existe
    const existingTask = await prisma.task.findUnique({
      where: { id: params.id },
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
        task: { connect: { id: params.id } }, // Conecta o item à task pelo ID
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
 */
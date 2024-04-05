import { prisma } from '@/lib/prisma';

// HTTP METHOD

// ---- GET (buscar todos os itens de uma task)
export async function GET(request: Request) {
  try {
    const url = new URL(request.url); // Cria um objeto URL a partir da URL da requisição
    const taskId = url.searchParams.get('taskId'); // Obtém o ID da task dos parâmetros da URL

    if (!taskId) {
      return new Response(JSON.stringify({ error: 'Task ID not provided' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 400,
      });
    }

    // Verifica se a task existe
    const existingTask = await prisma.task.findUnique({
      where: { id: taskId },
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

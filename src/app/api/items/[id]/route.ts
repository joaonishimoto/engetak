import { prisma } from '@/lib/prisma';

// HTTP METHOD

// ---- GET (buscar todos os itens de uma oS)
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

    // Verifica se a oS existe
    const existingTask = await prisma.oS.findUnique({
      where: { id: params.id },
      include: { items: true }, // Inclui os items relacionados à oS
    });

    if (!existingTask) {
      return new Response(JSON.stringify({ error: 'Task not found' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }

    // Retorna todos os itens da oS
    return new Response(JSON.stringify(existingTask.items), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching items of oS:', error);
    return new Response(JSON.stringify({ error: 'Error fetching items of oS' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

// ---- POST (adicionar item em uma oS)
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const { number, description } = data;

    // Verifica se a oS existe
    const existingTask = await prisma.oS.findUnique({
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

    // Cria o novo item dentro da oS
    const newItem = await prisma.item.create({
      data: {
        number,
        description,
        os: { connect: { id: params.id } }, // Conecta o item à oS pelo ID
      },
    });

    return new Response(JSON.stringify(newItem), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    console.error('Error adding item to oS:', error);
    return new Response(JSON.stringify({ error: 'Error adding item to oS' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

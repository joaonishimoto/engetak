import { prisma } from '@/lib/prisma';

// HTTP METHODS

// ---- GET (retornar todos os clientes)
export async function GET() {
  try {
    const clients = await prisma.client.findMany();
    return new Response(JSON.stringify(clients), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching clients:', error);
    return new Response(JSON.stringify({ error: 'Error fetching clients' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

// ---- POST (criar um novo cliente)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name } = data;
    const newClient = await prisma.client.create({
      data: {
        name,
      },
    });
    return new Response(JSON.stringify(newClient), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    console.error('Error creating client:', error);
    return new Response(JSON.stringify({ error: 'Error creating client' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

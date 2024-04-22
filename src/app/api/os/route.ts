import { prisma } from '@/lib/prisma';

// HTTP METHODS

// ---- GET
export async function GET() {
  try {
    const data = await prisma.oS.findMany();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching oSs:', error);
    return new Response(JSON.stringify({ error: 'Error fetching oSs' }), {
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

    const clientIdNumber = parseInt(clientId)

    const newTask = await prisma.oS.create({
      data: {
        name,
        description,
        Client: {
          connect: { id: clientIdNumber },
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
    console.error('Error creating oS:', error);
    return new Response(JSON.stringify({ error: 'Error creating oS' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

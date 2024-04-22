import { prisma } from '@/lib/prisma';

// HTTP METHODS

// ---- POST
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const { points } = data;

    console.log(data)

    await prisma.user.update({
      where: {
        id: params.id
      },
      data: {
        points: {
          increment: parseInt(points)
        }
      }
    });

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ error: 'Error fetching users' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}


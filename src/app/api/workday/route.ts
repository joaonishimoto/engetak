import { prisma } from '@/lib/prisma';

// ---- POST (criar novo WorkDay para um usuário)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { userId, day } = data;

    const newWorkDay = await prisma.workDay.create({
      data: {
        day,
        user: { connect: { id: userId } }, // Conecta o WorkDay ao usuário pelo ID
      },
    });

    return new Response(JSON.stringify(newWorkDay), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    console.error('Error creating WorkDay:', error);
    return new Response(JSON.stringify({ error: 'Error creating WorkDay' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}
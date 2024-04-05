import { prisma } from '@/lib/prisma';

// ---- GET (buscar todos os WorkDays de um usuário)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id // Obtém o ID do usuário a partir da URL da requisição

    const userWorkDays = await prisma.workDay.findMany({
      where: { userId },
      include: { work: true }, // Inclui os Works relacionados ao WorkDay
    });

    return new Response(JSON.stringify(userWorkDays), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching WorkDays by user:', error);
    return new Response(JSON.stringify({ error: 'Error fetching WorkDays by user' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}
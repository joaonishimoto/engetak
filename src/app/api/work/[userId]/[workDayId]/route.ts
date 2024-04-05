import { prisma } from "@/lib/prisma";

// ---- GET (buscar todos os trabalhos de um dia de trabalho de um usuário)
export async function GET(
  request: Request,
  { params }: { params: { userId: string, workDayId: string } }
) {
  try {

    const { userId, workDayId } = params;

    // Verifica se o usuário existe
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }

    // Verifica se o dia de trabalho pertence ao usuário
    const existingWorkDay = await prisma.workDay.findFirst({
      where: { id: workDayId, userId: userId },
      include: { work: { include: { task: true, item: true } } }, // Inclui os trabalhos com as tarefas e os itens relacionados
    });

    if (!existingWorkDay) {
      return new Response(JSON.stringify({ error: 'WorkDay not found for this user' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }

    // Retorna todos os trabalhos do dia de trabalho do usuário
    return new Response(JSON.stringify(existingWorkDay.work), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching works of workDay:', error);
    return new Response(JSON.stringify({ error: 'Error fetching works of workDay' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}
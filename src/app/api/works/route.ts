import { prisma } from '@/lib/prisma';


// ---- POST (adicionar Work em um WorkDay)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { workDayId, taskId, itemId, hours } = data;

    // Verifica se o WorkDay existe
    const existingWorkDay = await prisma.workDay.findUnique({
      where: { id: workDayId },
    });

    if (!existingWorkDay) {
      return new Response(JSON.stringify({ error: 'WorkDay not found' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }

    // Cria o novo Work dentro do WorkDay e conecta ao WorkDay correto
    const newWork = await prisma.work.create({
      data: {
        hours,
        os: { connect: { id: taskId } },
        item: { connect: { id: itemId } },
        WorkDay: { connect: { id: workDayId } }, // Conecta o Work ao WorkDay pelo ID
      },
    });

    return new Response(JSON.stringify(newWork), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    console.error('Error adding Work in WorkDay:', error);
    return new Response(JSON.stringify({ error: 'Error adding Work in WorkDay' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

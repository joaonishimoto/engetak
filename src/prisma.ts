import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

export const prisma = new PrismaClient()

export const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).refine(value => value.includes("@engetak.com"), { message: "Must be an engetak email" }),
  password: z.string().min(6, { message: 'Must be 6 or more characters long'})
})

async function getUsers() {
  const users = await prisma.user.findMany()
  console.log(users)
}



async function validateUser(email: string) {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  return !!existingUser; // Return true if user exists, false otherwise
}

async function deleteUserById(id: string) {
  const deletedUser = await prisma.user.delete({
    where: { id }
  })

  console.log('User deleted:', deletedUser)
}

async function main() {
  const email = 'gustavo@engetak.com';
  const password = '123456';

  const userIdToDelete = '5131fd5b-be0b-427d-982f-0c9cf31fb74f'

  if (await validateUser(email)) {
    console.error('User with this email already exists');
    return;
  }

  getUsers();

  await deleteUserById(userIdToDelete);
  getUsers();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).refine(value => value.includes("@engetak.com"), { message: "Must be an engetak email" }),
  password: z.string().min(6, { message: 'Must be 6 or more characters long'})
})
import { z } from 'zod'
import validator from 'validator'

const UserFullNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
})

const UserAddressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
})

export const UserOrdersSchemaValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
})

const UserSchemaValidation = z.object({
  userId: z.number().min(5),
  username: z
    .string()
    .refine(
      data => /^[a-zA-Z0-9]+[0-9]+[a-zA-Z0-9]*$/.test(data) && !/\s/.test(data),
      {
        message:
          'Invalid username format. It should not contain spaces and should include at least one numeric character.',
      },
    ),
  password: z.string().min(5).max(20),
  fullName: UserFullNameSchemaValidation,
  age: z.number(),
  email: z.string().refine(value => validator.isEmail(value), {
    message: 'Invalid email format. Please provide a valid email address.',
  }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: UserAddressSchemaValidation,
  orders: z.array(UserOrdersSchemaValidation).optional(),
})

export default UserSchemaValidation

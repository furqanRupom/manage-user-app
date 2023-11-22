import { z } from 'zod'

const UserFullNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
})

const UserAddressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
})

const UserOrdersSchemaValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
})


const UserSchemaValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: UserFullNameSchemaValidation,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: UserAddressSchemaValidation,
  orders: z.array(UserOrdersSchemaValidation).optional(),
})

export default UserSchemaValidation;
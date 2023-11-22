import { Schema, model } from 'mongoose'
import { IUser } from './user/user.interface'

const UserFullNameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const UserAddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
})

const UserOrdersSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const UserSchema = new Schema({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: UserFullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: UserAddressSchema, required: true },
  orders: { type: [UserOrdersSchema], required: false },
})

// Create a Mongoose model based on the schema
export const UserModel = model<IUser>('User', UserSchema)



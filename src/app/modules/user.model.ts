import { Schema, model } from 'mongoose'
import { IUser, IUserAddress, IUserFullName, IUserOrders } from './user/user.interface';
import bcrypt from "bcryptjs"
import config from '../config';

const UserFullNameSchema = new Schema<IUserFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const UserAddressSchema = new Schema<IUserAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
})

const UserOrdersSchema = new Schema<IUserOrders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const UserSchema = new Schema<IUser>(
  {
    userId: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: [true, 'password is required'] },
    fullName: { type: UserFullNameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: UserAddressSchema, required: true },
    orders: { type: [UserOrdersSchema], default: undefined },
  },
  {
    toJSON: {
      transform: function (doc, user) {
        delete user.password
        return user
      },
    },
  },
)





/*  make hashedPassword before saving new user document  */


UserSchema.pre('save',async function(next){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  user.password = await bcrypt.hash(user.password,Number(config.bcrypt_salt_rounds))
  next();

})







// Create a Mongoose model based on the schema

export const UserModel = model<IUser>('User', UserSchema)






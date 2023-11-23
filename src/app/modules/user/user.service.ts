import { UserModel } from '../user.model'
import { IUser, IUserOrders } from './user.interface'

const createUserIntoDB = async (userData: IUser) => {
  const user = await UserModel.create(userData)
  const result = user.save()
  return result
}

const getUsersFromDB = async () => {
  const result = await UserModel.find()
  return result
}

const getSpecificUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId })
  return result
}

const deleteSpecificUserFromDB = async (userId: string) => {
  const result = await UserModel.deleteOne({ userId })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSpecificUserFromDB = async (userId: string, data: any) => {
  const result = await UserModel.findOneAndUpdate({ userId }, { $set: data })
  return result
}


const createUserOrdersIntoDB = async (userId: string, data: IUserOrders) => {
  const getUser = await UserModel.findOne({ userId })
  if (!getUser?.orders) getUser?.set('orders', [])
  if (getUser) getUser?.orders?.push(data)
  const result = getUser?.save()
  return result
}



export const userServices = {
  createUserIntoDB,
  getUsersFromDB,
  getSpecificUserFromDB,
  deleteSpecificUserFromDB,
  updateSpecificUserFromDB,
  createUserOrdersIntoDB,
}

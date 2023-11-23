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
  const user = await UserModel.findOne({ userId })
  if (!user?.orders) user?.set('orders', [])
  if (user) user?.orders?.push(data)
  const result = user?.save()
  return result
}

const getSpecificUserOrdersFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId }, { orders: 1, _id: 0 })
  return result
}

// TODO : we will fixed it later ID Problem

const getTotalOrdersValuesFromDB = async (userId: string) => {
  const result = await UserModel.findOne(
    { userId: parseInt(userId) },
    { _id: 0, totalValues: { $sum: '$orders.price' } },
  )

  return result
}

export const userServices = {
  createUserIntoDB,
  getUsersFromDB,
  getSpecificUserFromDB,
  deleteSpecificUserFromDB,
  updateSpecificUserFromDB,
  createUserOrdersIntoDB,
  getSpecificUserOrdersFromDB,
  getTotalOrdersValuesFromDB,
}

import { UserModel } from '../user.model'
import { IUser, IUserOrders } from './user.interface'

const createUserIntoDB = async (userData: IUser) => {
  const isUserExit = await UserModel.isUserExits(userData.userId)
  if (isUserExit) {
    return { success: false, status: 500, message: 'users already exit' }
  }
  const user = await UserModel.create(userData)
  const result = user.save()
  return result
}

const getUsersFromDB = async () => {
  const result = await UserModel.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
    _id: 0,
  })
  return result
}

const getSpecificUserFromDB = async (userId: string) => {
  const isUserExit = await UserModel.isUserExits(Number(userId))
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const result = await UserModel.findOne({ userId })

  return result
}

const deleteSpecificUserFromDB = async (userId: string) => {
  const isUserExit = await UserModel.isUserExits(Number(userId))
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const result = await UserModel.deleteOne({ userId })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSpecificUserFromDB = async (userId: string, data: any) => {
  const isUserExit = await UserModel.isUserExits(Number(userId))
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const result = await UserModel.findOneAndUpdate({ userId }, { $set: data })
  return result
}

const createUserOrdersIntoDB = async (userId: string, data: IUserOrders) => {
  const isUserExit = await UserModel.isUserExits(Number(userId))
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const user = await UserModel.findOne({ userId })
  if (!user?.orders) user?.set('orders', [])
  if (user) user?.orders?.push(data)
  const result = await user?.save()
  return result
}

const getSpecificUserOrdersFromDB = async (userId: string) => {
  const isUserExit = await UserModel.isUserExits(Number(userId))
  if (!isUserExit) {
     throw {message:'user not found', status:404}
  }
  const result = await UserModel.findOne({ userId }, { orders: 1, _id: 0 })
  return result
}

const getTotalOrdersValuesFromDB = async (userId: string) => {
  const isUserExit = await UserModel.isUserExits(Number(userId))
  if (!isUserExit) {
    return { success: false, status: 404, message: 'cannot find the user' }
  }
  const result = await UserModel.findOne(
    { userId },
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

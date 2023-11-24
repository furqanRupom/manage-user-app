import { UserModel } from '../user.model'
import { IUser, IUserOrders } from './user.interface'

/* create user  */

const createUserIntoDB = async (userData: IUser) => {
  const isUserExit = await UserModel.isUserExits(userData.userId)
  if (isUserExit) {
    throw { message: 'users already exit', status: 500 }
  }
  const user = await UserModel.create(userData)
  const result = user.save()
  return result
}

/* get all users  */

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

/* create user  */

const getSpecificUserFromDB = async (userId: number) => {
  const isUserExit = await UserModel.isUserExits(userId)
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const result = await UserModel.findOne({ userId })
  return result
}

/* delete user  */

const deleteSpecificUserFromDB = async (userId: number) => {
  const isUserExit = await UserModel.isUserExits(userId)
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  await UserModel.deleteOne({ userId })
  return null
}

/* update user  */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSpecificUserFromDB = async (userId: number, data: any) => {
  const isUserExit = await UserModel.isUserExits(userId)
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const result = await UserModel.findOneAndUpdate({ userId }, { $set: data })
  return result
}

/* create orders  */

const createUserOrdersIntoDB = async (userId: number, data: IUserOrders) => {
  const isUserExit = await UserModel.isUserExits(userId)
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const user = await UserModel.findOne({ userId })
  if (!user?.orders) user?.set('orders', [])
  if (user) user?.orders?.push(data)
  await user?.save()
  return null
}

/* get specific user orders data  */

const getSpecificUserOrdersFromDB = async (userId: number) => {
  const isUserExit = await UserModel.isUserExits(userId)
  if (!isUserExit) {
    throw { message: 'user not found', status: 404 }
  }
  const result = await UserModel.findOne({ userId }).select({
    orders: 1,
    _id: 0,
  })
  return result
}

/* Calculate the total prices of orders */

const getTotalOrdersValuesFromDB = async (userId: number) => {
  const isUserExit = await UserModel.isUserExits(userId)
  if (!isUserExit) {
    return { success: false, status: 404, message: 'cannot find the user' }
  }
  const result = await UserModel.findOne(
    { userId },
    { _id: 0, totalPrice: { $sum: '$orders.price' } },
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

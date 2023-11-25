/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.service'
import UserSchemaValidation from './user.validation'


/*  create user controller    */

const createUser = async (req: Request, res: Response) => {
  const userData = req.body
  try {
    const parseUserData = UserSchemaValidation.parse(userData)
    const result = await userServices.createUserIntoDB(parseUserData)
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(error.status || 500).json({
      success: false,
      message:
        error.message || error.issues
          ? `${error.issues[0].path[0]} : ${error.issues[0].message} `
          : 'Something went wrong',
      error: {
        code: error.status || 500,
        description:
          error.message || error.issues ?
            `${error.issues[0].path[0]} : ${error.issues[0].message} `
            : 'Unfortunately, user creation failed',
      },
    })
  }
}

/*  retrieve all the users controller   */

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsersFromDB()
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message || 'We encountered an issue while processing your request.',
      error: {
        code:error.status || 500,
        description: error.message ||
          'Apologies, but we were unable to locate any matching user records.',
      },
    })
  }
}

/*  retrieve  specific user controller   */

const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.getSpecificUserFromDB(Number(userId))


    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(error.status || 500).json({
      success: false,
      message:
        error.message || 'An error occurred while processing your request.',
      error: {
        code: error.status || 500,
        description:
          error.message ||
          'We regret to inform you that we could not find any user matching the provided criteria.',
      },
    })
  }
}

/*  delete  specific user controller   */

const deleteSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.deleteSpecificUserFromDB(Number(userId))

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: result,
    })
  } catch (error:any) {
    res.status(error.status || 500).json({
      success: false,
      message:
        error.message || 'An error occurred while processing your request.',
      error: {
        code: error.status || 500,
        description:
          error.message ||
          'We apologize, but we are currently unable to delete the specified user. Please try again later.',
      },
    })
  }
}

/*  update  specific user controller   */

const updateSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const data = req.body
     const parseUserData = UserSchemaValidation.partial().parse(data)

    const result = await userServices.updateSpecificUserFromDB(
      Number(userId),
      parseUserData,
    )
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    })
  } catch (error:any) {
    res.status(error.status || 500).json({

      success: false,
      message:
        error.message || error.issues
          ? `${error.issues[0].path[0]} : ${error.issues[0].message} `
          : 'An error occurred while processing your request.',
      error: {
        code: error.status || 500,
        description:
          error.message || error.issues
            ? `${error.issues[0].path[0]} : ${error.issues[0].message} `
            : 'We apologize, but we are currently unable to update the user. Please try again later.',
      },
    })

  }
}

/*  create orders data for specific user controller   */

const createSpecificUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const data = req.body

    const result = await userServices.createUserOrdersIntoDB(
      Number(userId),
      data,
    )
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error:any) {
    res.status(error.status || 500).json({
      success: false,
      message:
        error.message || 'An error occurred while processing your request.',
      error: {
        code:error.status || 500,
        description:
          error.message ||
          'We regret to inform you that we are currently unable to retrieve orders for the specified user.',
      },
    })
  }
}


/* Get all orders data of specific user   */

const getSpecificUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.getSpecificUserOrdersFromDB(
      Number(userId),
    )


    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: {
        code: error.status || 500,
        description: error.message || 'Unfortunately,cannot get orders data',
      },
    })
  }
}


/* Get total prices of all orders of specific user  */


const getTotalOrdersValues = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.getTotalOrdersValuesFromDB(Number(userId))
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: {
        code: error.status || 500,
        description: error.message || 'Unfortunately,cannot get orders data',
        error: error.message,
      },
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSpecificUser,
  deleteSpecificUser,
  updateSpecificUser,
  createSpecificUserOrders,
  getSpecificUserOrders,
  getTotalOrdersValues,
}

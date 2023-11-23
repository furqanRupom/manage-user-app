/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.service'
import UserSchemaValidation from './user.validation'
import { UserModel } from '../user.model'

/*  create user controller    */

const createUser = async (req: Request, res: Response) => {
  const userData = req.body
  try {
    const parseUserData = UserSchemaValidation.parse(userData)
    const result = await userServices.createUserIntoDB(parseUserData)

    if (!result) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: {
          code: 500,
          description: 'Unfortunately, user creation failed',
        },
      })
    }
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: 'Unfortunately, user creation failed',
      },
    })
  }
}

/*  retrieve all the users controller   */

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsersFromDB()

    if (!result) {
      res.status(500).json({
        success: false,
        message: 'We encountered an issue while processing your request.',
        error: {
          code: 500,
          description:
            'Apologies, but we were unable to locate any matching user records.',
        },
      })
    }

    res.status(200).json({
      success: true,
      message: 'Get all the users successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'We encountered an issue while processing your request.',
      error: {
        code: 500,
        description:
          'Apologies, but we were unable to locate any matching user records.',
      },
    })
  }
}

/*  retrieve  specific user controller   */

const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.getSpecificUserFromDB(userId)

    if (!result) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request.',
        error: {
          code: 500,
          description:
            'We regret to inform you that we could not find any user matching the provided criteria.',
        },
      })
    }

    res.status(200).json({
      success: true,
      message: 'Get specific user successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request.',
      error: {
        code: 500,
        description:
          'We regret to inform you that we could not find any user matching the provided criteria.',
      },
    })
  }
}

/*  delete  specific user controller   */

const deleteSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.deleteSpecificUserFromDB(userId)

    res.status(200).json({
      success: true,
      message: 'Delete specific user successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request.',
      error: {
        code: 500,
        description:
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
    const result = await userServices.updateSpecificUserFromDB(userId, data)
    res.status(200).json({
      success: true,
      message: 'Update specific user successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request.',
      error: {
        code: 500,
        description:
          'We apologize, but we are currently unable to update the user. Please try again later.',
      },
    })
  }
}

/*  create orders data for specific user controller   */

const createSpecificUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const data = req.body
    const isUserExit = await UserModel.isUserExits(Number(userId))
    if (!isUserExit) {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'user not found',
        },
      })
    }
    const result = await userServices.createUserOrdersIntoDB(userId, data)
    res.status(200).json({
      success: true,
      message: 'create specific user orders successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request.',
      error: {
        code: 500,
        description:
          'We regret to inform you that we are currently unable to retrieve orders for the specified user.',
      },
    })
  }
}

const getSpecificUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.getSpecificUserOrdersFromDB(userId)


    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error.status)
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

const getTotalOrdersValues = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userServices.getTotalOrdersValuesFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: 'Unfortunately,cannot get orders data',
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

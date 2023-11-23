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
    res.status(200).json({
      success: true,
      message: 'Get all the users successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: 'Unfortunately, cannot find any user',
      },
    })
  }
}


/*  retrieve  specific user controller   */


const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;
    console.log(userId)
    const result = await userServices.getSpecificUserFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'Get specific user successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: 'Unfortunately, cannot find any user',
      },
    })
  }
}


/*  delete  specific user controller   */

const deleteSpecificUser = async (req:Request,res:Response) => {
 try {
  const {userId} = req.params;
  const result = await userServices.deleteSpecificUserFromDB(userId)
  res.status(200).json({
    success: true,
    message: 'Delete specific user successfully',
    data: result,
  })


 } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: 'Unfortunately, cannot delete this following user',
      },
    })
 }
}

/*  update  specific user controller   */

const updateSpecificUser = async (req:Request,res:Response) => {
 try {
   const { userId } = req.params
   const data = req.body
   const result = await userServices.updateSpecificUserFromDB(userId,data)
   res.status(200).json({
     success: true,
     message: 'Update specific user successfully',
     data: result,
   })
 } catch (error) {
   res.status(500).json({
     success: false,
     message: 'Something went wrong',
     error: {
       code: 500,
       description: 'Unfortunately,cannot update this following user',
     },
   })
 }
}




export const userController = {
  createUser,
  getAllUsers,
  getSpecificUser,
  deleteSpecificUser,
  updateSpecificUser
}

import { UserModel } from "../user.model";
import { IUser} from "./user.interface";


const createUserIntoDB = async (userData:IUser) => {
  const user = await UserModel.create(userData);
  const result = user.save();
  return result;

}

const getUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
}


const getSpecificUserFromDB = async (userId:string) => {
 const result = await UserModel.findOne({userId});
 return result;
}


const deleteSpecificUserFromDB = async (userId:string) => {
  const result = await UserModel.deleteOne({userId});
  return result;
}


export const userServices = {
    createUserIntoDB,
    getUsersFromDB,
    getSpecificUserFromDB,
    deleteSpecificUserFromDB
}
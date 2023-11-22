import { UserModel } from "../user.model";
import { IUser} from "./user.interface";


const createUserIntoDB = async (userData:IUser) => {
  const user = await UserModel.create(userData);
  const result = user.save();
  return result;

}






export const userServices = {
    createUserIntoDB
}
/*         Define all the necessary user interface        */

import { Model } from "mongoose";


export interface IUserFullName {
    firstName:string;
    lastName:string;
}


export interface IUserAddress {
    street:string;
    city:string;
    country:string;
}


export interface IUserOrders {
    productName:string;
    price:number;
    quantity:number;
}



export interface IUser {
    userId:number;
    username:string;
    password:string;
    fullName:IUserFullName;
    age:number;
    email:string;
    isActive:boolean;
    hobbies:string[];
    address:IUserAddress;
    orders?:IUserOrders[];
}

export type IUserModel = Model<IUser>
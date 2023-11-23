import express from "express";
import { userController } from "./user.controller";

const router = express.Router();


/*  create user  route */

router.post('/api/users',userController.createUser);

/* retrieve all users  route */

router.get('/api/users',userController.getAllUsers);

/* retrieve specific user  route */

router.get('/api/users/:userId',userController.getSpecificUser);

/* delete specific user  route */

router.delete('/api/users/:userId',userController.deleteSpecificUser);



export const userRoutes = router;
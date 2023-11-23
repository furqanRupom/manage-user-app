import express from "express";
import { userController } from "./user.controller";

const router = express.Router();


/*  create user  */

router.post('/api/users',userController.createUser);
router.get('/api/users',userController.getAllUsers);





export const userRoutes = router;
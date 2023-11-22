import express from "express";
import { userController } from "./user.controller";

const router = express.Router();


/*  create user  */

router.post('/api/users',userController.createUser);





export const userRoutes = router;
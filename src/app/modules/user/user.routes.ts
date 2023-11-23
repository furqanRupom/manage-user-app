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


/* update specific user  route */

router.put('/api/users/:userId',userController.updateSpecificUser);


/* create specific user orders  route */

router.put('/api/users/:userId/orders',userController.createSpecificUserOrders)


/* retrieve specific user orders  route */

router.get('/api/users/:userId/orders', userController.getSpecificUserOrders)


/* retrieve specific user orders  route */

router.get('/api/users/:userId/orders/total-price',userController.getTotalOrdersValues)



export const userRoutes = router;
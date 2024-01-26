import  express  from "express";
import { StatusCodes } from "http-status-codes";
import {expressYupMiddleware } from 'express-yup-middleware'

import userController from './controllers/user.controller';
import { addUser, updateUser } from "./user.schemas";


const router = express.Router();


// CREATE
router.post(
    '/add', 
    expressYupMiddleware({schemaValidator: updateUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    userController.addUser
);

// UPDATE 
router.put('/update/:id', 
    expressYupMiddleware({schemaValidator: addUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    userController.updateUser
);

// GET ALL USERS
router.get('/all', userController.getAllUsers );

// GET USER
router.get('/:id', userController.getUser );

// DELETE USER
router.delete('/:id', userController.deleteUser )




export default router;

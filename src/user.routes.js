import  express  from "express";
import { StatusCodes } from "http-status-codes";
import {expressYupMiddleware } from 'express-yup-middleware'

import userController from './controllers/user.controller';
import { addUser, updateUser, getUser, deleteUser } from "./user.schemas";


const router = express.Router();

// http://localhost:3000/v1/user

// CREATE
router.post(
    '/add', 
    expressYupMiddleware({schemaValidator: addUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    userController.addUser
);

// UPDATE 
router.put('/update/:id', 
    expressYupMiddleware({schemaValidator: updateUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    userController.updateUser
);

// GET ALL USERS
router.get(
    '/all',
    // expressYupMiddleware({schemaValidator: getUser, expectedStatusCode: StatusCodes.BAD_REQUEST}), 
    userController.getAllUsers 
);

// GET USER
router.get(
    '/:id',
    expressYupMiddleware({schemaValidator: getUser, expectedStatusCode: StatusCodes.BAD_REQUEST}), 
    userController.getUser 
);

// DELETE USER
router.delete(
    '/:id',
    expressYupMiddleware({schemaValidator: deleteUser, expectedStatusCode: StatusCodes.BAD_REQUEST}), 
    userController.deleteUser 
);




export default router;

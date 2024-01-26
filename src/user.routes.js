import  express  from "express";
import { StatusCodes } from "http-status-codes";
import {expressYupMiddleware } from 'express-yup-middleware'

import userService from './services/user.service';
import { addUser } from "./user.schemas";


const router = express.Router();


const STATUS = {
    success: 'OK',
    failure: 'NO'
}



router.post(
    '/add', 
    expressYupMiddleware({schemaValidator: addUser, expectedStatusCode: StatusCodes.BAD_REQUEST}), 
    (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser 
    });
});

router.get('/all', (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'NO USERS FOUND'
    });
});

router.get('/ping', (req , res ) => {
    res.status(StatusCodes.CREATED)
    res.send( 'OK' );
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const user = userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user

        });
    };

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'NO USER FOUND'
    });
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = userService.getUser(id);

    if (user){
        userService.removeUser(id);
        return res.status(StatusCodes.OK).send(  {
            status: STATUS.success,
            message: `User ${id} deleted successfully` 
        });
    }else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} not found` 
        })
    }
})





router.put('/update/:id', (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id)
   
    const updatedUser = userService.updateUser(id, user)
  
    if (updatedUser) {
        return res.status(StatusCodes.OK).send(  {
            status: STATUS.success,
            user: updatedUser 
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send(  {
            status: STATUS.failure,
            message: `User ${id} not found` 
        });
    }
});

export default router;

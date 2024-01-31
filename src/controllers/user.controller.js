import pino from 'pino';

import userService from "../services/user.service";
import { StatusCodes } from "http-status-codes";

const logger = pino();

const STATUS = {
    success: 'OK',
    failure: 'NO'
}


/**
 * creates a user
 * @param {*} req 
 * @param {*} res 
 */
const addUser =  (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user)
    logger.info('creating a user');
    res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser 
    });
}

/**
 * updates a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateUser = (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id)
   
    const updatedUser = userService.updateUser(id, user)
  
    if (updatedUser) {
        logger.info('updating a user');
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
}


/**
 * gets a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUser = (req, res) => {
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
}

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        logger.info("getting all users")
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'NO USERS FOUND'
    });
}

/**
 * deletes a user
 * @param {} req 
 * @param {*} res 
 * @returns 
 */
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)
    const user = userService.getUser(id);

    if (user){
        userService.removeUser(id);
        logger.info(`deleting user ${id}`);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} deleted successfully` 
        });
        
    }else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} not found` 
        })
    }
}

export default {
    updateUser,
    addUser,
    getUser,
    getAllUsers,
    deleteUser
}
import userService from "../services/user.service";
import { StatusCodes } from "http-status-codes";

const updateUser = (req, res) => {
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
}

const addUser =  (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser 
    });
}

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
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'NO USERS FOUND'
    });
}

const deleteUser = (req, res) => {
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
}

export default {
    updateUser,
    addUser,
    getUser,
    getAllUsers,
    deleteUser
}
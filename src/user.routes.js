import  express  from "express";
import { StatusCodes } from "http-status-codes";

import userService from './services/user.service';
// import { updateUser, addUser} from './services/user.service';

const router = express.Router();


const STATUS = {
    success: 'OK',
    failure: 'NO'
}

router.get('/ping', (req , res ) => {
    res.status(StatusCodes.CREATED)
    res.send( 'OK' );
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

router.get('/get/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const user = userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send(user);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'NO USER FOUND'
    });
})


router.post('/add', (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    res.status(StatusCodes.CREATED).send(  {
        status: STATUS.success,
        message: addedUser 
    });
});

router.put('/update/:id', (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id)
    

    const updatedUser = userService.updateUser(id, user)
    // console.log(updatedUser);


    if (updatedUser) {
        return res.status(StatusCodes.OK).send(  {
            status: STATUS.success,
            message: updatedUser 
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send(  {
            status: STATUS.failure,
            message: `User ${id} not found` 
        });
    }
});

export default router;

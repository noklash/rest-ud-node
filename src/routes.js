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

    // const id = parseInt(req.params.id, radix)
    

    const updatedUser = userService.updateUser(user.id, user)
    // console.log(updatedUser);


    if (updatedUser) {
        return res.status(StatusCodes.OK).send(  {
            status: STATUS.success,
            message: updatedUser 
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send(  {
            status: STATUS.failure,
            message: `User ${user.id} not found` 
        });
    }
});

export default router;

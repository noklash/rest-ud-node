import userDao from '../models/persistence/user.dao'

const addUser = (details) => {
    return userDao.insert(details);
}

const getUser = (userId) => {
    return userDao.get(userId);
}

const getAllUsers = () => {
    return userDao.getAll();
}

const removeUser = (userId) => {
    userDao.remove(userId);
}

const updateUser = (userId, details) => {
    console.log(`user id is ${userDao.update(userId, details)}`)
    return userDao.update(userId, details);
}

export default {
    getUser, 
    getAllUsers,
    updateUser,
    removeUser,
    addUser
}
import userDao from '../models/persistence/user.dao'

const addUser = (details) => {
    return userDao.insert(details);
}

const getUser = (userId) => {
    userDao.get(userId);
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
    updateUser,
    removeUser,
    addUser
}
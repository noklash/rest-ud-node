import userDao from '../models/persistence/user.dao'
/**
 * adds a new user
 * 
 * @param {object} details 
 * @returns {object}
 */
const addUser = (details) => {
    return userDao.insert(details);
}

/**
 * gets user by id
 *  
 * @param {integer} userId 
 * @returns {object}
 */
const getUser = (userId) => {
    return userDao.get(userId);
}

/**
 * gets all users 
 * 
 * @returns {[]}
 */
const getAllUsers = () => {
    return userDao.getAll();
}

/**
 * removes user by id
 * 
 * @param {integer} userId 
 * @returns 
 */
const removeUser = (userId) => {
    return userDao.remove(userId);
}

/**
 * updates a  user
 * 
 * @param {integer} userId 
 * @param {object} details 
 * @returns {boolean}
 */
const updateUser = (userId, details) => {
    return userDao.update(userId, details);
}

export default {
    getUser, 
    getAllUsers,
    updateUser,
    removeUser,
    addUser
}
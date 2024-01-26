import users from '../data/users.data';

/**
 * gets a user
 * 
 * @param {*} userId 
 * @returns 
 */
const get = (userId) => {
    const findUser = users.find((user) => user.id === userId)
    return findUser;
}

/**
 * gets all users
 * 
 * @returns 
 */
const getAll = () => {
    return users;
}

/**
 * updates a user
 * 
 * @param {*} userId 
 * @param {*} newDetails 
 * @returns 
 */
const update = (userId, newDetails) => {
    const userToUpdate = users.find((user) => user.id === userId);

    if (userToUpdate) {
        // Update the user details
        Object.assign(userToUpdate, newDetails);
        return userToUpdate; // Return the updated user
    }

    return null; // Return null if user is not found
};

/**
 * inserts a new user
 * 
 * @param {*} details 
 * @returns 
 */
const insert = (details) => {
    const newUser = { id: users.length + 1, ...details }
    users.push(newUser);

    return newUser;
}

/**
 * removes a user
 * 
 * @param {} userId 
 * @returns 
 */
const remove = (userId) => {
    const deleteUser = (user, index) => {
        if(user.id === userId){
            // Remove the array ellement of the found user
            users.splice(index);
            return true;
        }
        return false;
    }
    return users.find(deleteUser);
    
}

export default {
    get,
    getAll,
    update,
    insert,
    remove
}
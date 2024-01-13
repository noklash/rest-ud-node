import users from '../data/users.data';

const get = (userId) => {
    const findUser = users.find((user) => {
        if (user.id === userId) {
            return user;
        }
        return null
    });

    return findUser;
}

const getAll = () => {
    return users;
}

// const update = (newDetails) => {
//     let existingUser = null;
//     let userIndex;

//     users.map((user, index) => {
//         if (user.id === newDetails.id){
//             existingUser = user;
//             userIndex = index;
//         }
//     })
    
//    if(!existingUser) {
//     return null;
//    }
//     const updatedUser = {
//         ...existingUser,
//         newDetails
//     }

//    users.splice(userIndex, 1, updatedUser );

//    return updatedUser
// }

const update = (userId, newDetails) => {
    const userToUpdate = users.find((user) => user.id === userId);

    if (userToUpdate) {
        // Update the user details
        Object.assign(userToUpdate, newDetails);
        return userToUpdate; // Return the updated user
    }

    return null; // Return null if user is not found
};


const insert = (details) => {
    const newUser = { id: users.length + 1, ...details }
    users.push(newUser);

    return newUser;
}

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
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

const update = (userId, newDetails) => {
    // users.map(user, index) => {
    //     if (user.id === newDetails.id){
            
    //     }
    // }
    users.find((user) => {
        if (user.id === userId) {
           
            user = newDetails
            // console.log(`user id is ${user}`)
            return user;
        }
        return null
    });
   
    


}

const insert = (details) => {
    const newUser = { ...details, id: users.length + 1}
    users.push(newUser);

    return newUser;
}

const remove = (userId) => {
    const deleteUser = (user, index) => {
        if(user.id === userId){
            // Remove the array ellement of the found user
            users.splice(index, deleteCount);
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
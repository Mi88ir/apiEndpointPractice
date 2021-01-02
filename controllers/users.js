import {
    v4 as uuidv4
} from 'uuid';
//uuidv4(); ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}; 

export const generateUser = (req, res) => {
    let user = req.body; // getting the user data input
    //uuidv4(); unique uid generator
    users.push({
        ...user,
        id: uuidv4()
    }); //get all user data and data id to it
    res.send(`User with the name ${user.firstName} was added to the database!`);
}

export const getUserWithID = (req, res) => {
    let {
        id
    } = req.params; //destructuring and getting only id value
    console.log(id);
    const findUser = users.find(e => e.id === id);
    console.log(findUser) //gets user data based on the ID
    res.send(findUser);
};

export const deleteUser = (req, res) => {
    const {
        id
    } = req.params;
    //filter removes the value for which the return status is false
    users = users.filter(e => e.id !== id); //compares the user-id and the parameter id

    res.send(users);
};

export const updateUser = (req, res) => {
    const {
        id
    } = req.params; //get id of the user
    const {
        firstName,
        lastName,
        age
    } = req.body; //holds the information about the request coming in
    const updatedUser = users.find(e => e.id === id); //find the user with the input id

    //here we are checking if the field is undefined or has any value. if true, then update.
    if (firstName) {
        updatedUser.firstName = firstName;
    }
    if (lastName) {
        updatedUser.lastName = lastName;
    }
    if (age) {
        updatedUser.age = age;
    }
    res.send(`User with the id ${id} has been updated!`)
};
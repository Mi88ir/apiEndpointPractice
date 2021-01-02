//We created this file to take requests pertaining to /users
import express from "express";
import {
    v4 as uuidv4
} from 'uuid';
//uuidv4(); ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

let users = [];

//all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    let user = req.body; // getting the user data input
    //uuidv4(); unique uid generator
    users.push({
        ...user,
        id: uuidv4()
    }); //get all user data and data id to it
    res.send(`User with the name ${user.firstName} was added to the database!`);
});

//id value is stored in the req.params
router.get('/:id', (req, res) => {
    let {
        id
    } = req.params; //destructuring and getting only id value
    console.log(id);
    const findUser = users.find(e => e.id === id);
    console.log(findUser) //gets user data based on the ID
    res.send(findUser);
});

router.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;
    //filter removes the value for which the return status is false
    users = users.filter(e => e.id !== id); //compares the user-id and the parameter id

    res.send(users);
})

//when we want to partially change something, patch is used.
//put is used to completely overwrite something

router.patch('/:id', (req, res) => {
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
})

export default router;
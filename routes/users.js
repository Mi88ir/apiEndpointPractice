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
    users.push( {
        ...user,
        id: uuidv4()
    }); //get all user data and data id to it
    res.send(`User with the name ${user.firstName} was added to the database!`);
});

//id value is stored in the req.params
router.get('/:id',(req,res)=>{
    let {id} = req.params; //destructuring and getting only id value
    const findUser = users.find(e=>{
        e.id === id;
    })
    console.log(findUser)
    res.send(findUser);
})

export default router;
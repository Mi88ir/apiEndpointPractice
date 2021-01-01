//We created this file to take requests pertaining to /users
import express from "express";

const router = express.Router();

const users = [
    {
        firstName:"John",
        lastName:"Doe",
        age:25
    },
    {
        firstName:"Rahul",
        lastName:"Singh",
        age:25
    }
]

//all routes in here are starting with /users
router.get("/",(req,res)=>{
    console.log(users);
    res.send(users);
});

router.post('/',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} was added to the database!`);
});


export default router;
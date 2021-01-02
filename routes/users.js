//We created this file to take requests pertaining to /users
import express from "express";
import {getUsers, generateUser, getUserWithID, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', generateUser);

//id value is stored in the req.params
router.get('/:id', getUserWithID);

router.delete('/:id', deleteUser);

//when we want to partially change something, patch is used.
//put is used to completely overwrite something
router.patch('/:id', updateUser);


export default router;
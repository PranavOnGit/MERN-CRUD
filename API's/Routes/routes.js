import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controllers/user_controller.js';

const app = express();
const route = express.Router();

//GET
route.get('/', getUsers);

//ADD
route.post('/add', addUser)

//EDIT
route.get('/:id', getUserById)
route.put('/:id', editUser)

//DELETE
route.delete('/:id', deleteUser)


export default route;
// api endpoints to be created
// 1. /users - GET
// 2. /users - POST
// 3. /users/:id - GET 
// 4. /users/:id - DELETE
// 5. /users/:id - UPDATE/PUT/PATCH

//packages used
//1. express
//2. body-parser
//3. uuid - for unique user id

import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js'; //import router

const app = express(); //use express package
const PORT = 5000;

app.use(bodyParser.json()); // indicates that we are going to use JSON data in our project

app.use('/users',usersRoutes); //for every route to /users, we implement usersRoutes from the line 10


//app.(get/post/put/delete)('/urlpath',callback);
app.get('/',(req,res)=>{
    console.log("TEST!");
    res.send("Hello from homepage.");
})

app.listen(PORT, () =>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});

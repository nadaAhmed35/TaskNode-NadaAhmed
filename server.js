import express from 'express';
import { engine } from 'express-handlebars';
// import { students } from './database/usersAraay.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/students' , {})



const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
 
app.use('/student' , studentRoutes);
app.use('/user' , userRoutes);
// const students = [
//     {
//         id: 1,
//         name: "Nada",
//         city: "Alex"
//     },
//     {
//         id: 2,
//         name: "Ahmed",
//         city: "Alex"
//     },
//     {
//         id: 3,
//         name: "Omnia",
//         city: "cairo"
//     },
//     {
//         id: 4,
//         name: "Mohamed",
//         city: "Tanta"
//     }
// ];

// app.get("/students" , (req , res) => {
//     res.render("students" , {students} );
// });

// app.get("/users" , (req , res) => {
//     res.render("users" );
// });

app.listen(5000);
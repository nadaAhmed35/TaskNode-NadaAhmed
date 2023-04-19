import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './temp');

const students = [
    {
        id: 1,
        name: "Nada",
        city: "Alex"
    },
    {
        id: 2,
        name: "Ahmed",
        city: "Alex"
    },
    {
        id: 3,
        name: "Omnia",
        city: "cairo"
    },
    {
        id: 4,
        name: "Mohamed",
        city: "Tanta"
    }
];

const studentsFuncion = (request, response) => {
    
    response.render("students" , {layout : false , students });

    // response.send("<h1> Nada </h1>");
    // let output = "<ul>";
    // for (let i = 0; i < students.length; i++) {
    //     const student = students[i];
    //     output += "<li><a href = '/students/ " + student.id + "' >" + student.name + "</a></li>";
    // }
    // output += "</ul>";

    // response.send(output);
};

app.get("/students" , studentsFuncion);



app.get('/students/:id' , (req , res ) => {
    const id = req.params.id;
    const student = students.find((item) => {
        return item.id == id;
    })

    res.render("student" , {layout : false , student });
    

    // console.log(student);

    // res.send('<h3>' + student.id + '</h3>' + '<br>' + student.name + '<br>' + student.city);
});





// app.get("/users" , (req , res) => {
//     res.send("Users")
// })

app.listen(5000);

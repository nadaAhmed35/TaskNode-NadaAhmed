import { Router } from "express";
import {students } from "../database/usersAraay.js";

import studentModel from "../database/studentModel.js";

const router = new Router();

router.get("/" , (req, res) => {
    res.render("students" , {students} );
});

router.get("/create", (req, res) => {
    studentModel.create({
        name: "Nada",
        city : "Alex",
    });
    res.send("Done");

});

router.get("/update" , (req , res) => {});

router.get("/delete" , (req , res) => {});

router.get("/:id" , (req , res) => {});
export default router;
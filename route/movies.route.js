import express from "express";
import {
    movesindex,
    moviescreate,
    moviespost,
    moviesdelete
}from "../controllers/movies,controllers.js"
const router=express.router();



router.get("/",movieindex);


router.post("/",moviescreate);


router.put("/:id",moviespost);

router.delete("/:id",moviesdelete);

export default router;
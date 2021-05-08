const express = require("express");
const User = require("../models/FakeUsuario");
const router = express.Router();

router.post('/newU',(req,res)=>{
    const user=new User();
    res.json(user);
});
module.exports= router;



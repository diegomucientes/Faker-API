const express = require("express");
const Empresa = require("../models/FakeEmpresa");
const router = express.Router();

router.post('/newC',(req,res)=>{
    const user=new Empresa();
    res.json(user);
});
module.exports= router;

const express = require("express");
const User = require("../models/FakeUsuario");
const Empresa = require("../models/FakeEmpresa");
const router = express.Router();

router.post('/',(req,res)=>{
    const user=new User();
    const empresa=new Empresa();
    res.json({user:user, empresa:empresa});
});
module.exports= router;

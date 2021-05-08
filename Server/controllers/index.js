const express= require('express');


const router = express.Router();// Defino el enrutador para las rutas hacias los modelos

router.use('/users',require('../routes/users'));
router.use('/company',require('../routes/company'));
router.use('/companies',require('../routes/companies'));

module.exports=router;


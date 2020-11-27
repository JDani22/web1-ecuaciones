const { Router } = require("express");
const{ hola}=require('../controllers/ecuacion.controller')
const router=Router();


router.get('/',hola);
router.post('/ecuaciones',hola);
router.get('/info');






module.exports = router
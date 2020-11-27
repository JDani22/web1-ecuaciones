const { json } = require("express");
const path =require('path');
var http = require('http');
fs =require('fs');

const ecuCtrl={};


ecuCtrl.hola =(req,res) =>{
  
    console.log(req.body)
    
      let a = req.body.primero
      let c = req.body.segundo
      let b = req.body.tercero
       let a1 = parseInt(a);
       let b1 = parseInt(b);
       let c1 = parseInt(c);

       var solucion1 =(-b1+(Math.sqrt((Math.pow(b1,2)-(4*a1*c1)))))/(2*a1);
       var solucion2 =(-b1-(Math.sqrt((Math.pow(b1,2)-(4*a1*c1)))))/(2*a1);

        console.log(a1);
        console.log(b1);
        console.log(c1);
        console.log(solucion1);
        console.log(solucion2);
         var s1= solucion1.toString();
         var s2= solucion2.toString();
          var toal = `valor1:${s1}      valor2:${s2}`

      
     
         res.send(toal)

         console.log(toal)
         console.log(s1)
         console.log(s2)
};








module.exports = ecuCtrl;
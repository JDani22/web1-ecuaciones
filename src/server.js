const express = require('express');
const path = require('path');



//inicializadores
const app = express();


//configuraciones
app.set('view engine','.ejs');
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname + '/public/'));






//midelwares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
/*app.use((req,res,next)=>{
    console.log(`${req.url} -${req.method}`);
    next();
})*/



//rutas
//app.use(require('./'));
app.use(require('./routes/ecuaciones.routes'));
//app.use(require('/'));




app.listen(app.get('port'),()=>{
    console.log('el servidors esta en el puerto ', app.get('port'))
})
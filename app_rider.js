import express  from "express";
import cors from "cors";
import  miruta  from "./routes/rutas.routes.js";
import bd from "./bases/mibase.js";

import {stockdatos} from "./controllers/control.js"






const app = express();
app.use(cors());
app.set('port', 8000)
app.use(express.json());




app.use('/aprendices',miruta);


app.get('/', (req, res)=>{
   res.send('<h1>hola node</h1>')

})

 app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
 })



 try{

   await bd.authenticate();
   console.log('conexion exitosa');
 }catch(err){
    console.error(err);
 }
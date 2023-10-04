import datos from "../models/model.js";

export const stockdatos = async (req,res)=>{
    try{
        const apdices = await datos.findAll();
        res.json(apdices);
        console.log(apdices)
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}



//-------------------------------------------------------------------



export const getApdz = async (req,res)=>{
    try{
        const Apdz = await datos.findAll({
            where: {id: req.params.id}
        });
        res.Json(Apdz[0]);
        
    }catch{
        res.json({mesaage: error.mesaage})
    }
}



export const createApdz = async (req,res)=>{
    try{
        await datos.create(req.body)
        
        res.json({
            "mesaage": "¡Registro creado correctamente!"
        })
        
    }catch{
        res.Json({mesaage: error.mesaage})
    }
}


export const UpdateApdz= async (req, res)=>{
    try{
        await datos.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "mesaage": "¡Registro creado correctamente!"

        })
    }catch(error){
        res.json({mesaage: error.mesaage})

    }
}

export const DeleteApdz= async (req, res)=>{
    try{
        await datos.destroy(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "mesaage": "¡Registro creado correctamente!"

        })
    }catch(error){
        res.json({mesaage: error.mesaage})

    }
}









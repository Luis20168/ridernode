import datos from "../models/model.js";

export const stockdatos = async (req, res) => {
    try {
        const apdices = await datos.findAll();
        res.json({ apdices });
        console.log(apdices);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getApdz = async (req, res) => {
    try {
        const Apdz = await datos.findAll({
            where: { id: req.params.id }
        });

        res.json(Apdz[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createApdz = async (req, res) => {
    try {
        await datos.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const UpdateApdz = async (req, res) => {
    try {
        await datos.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro actualizado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const DeleteApdz = async (req, res) => {
    try {
        await datos.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro eliminado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

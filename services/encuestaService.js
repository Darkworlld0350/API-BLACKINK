const encuestaModel = require('../models/encuestaModel');

async function registrarEncuesta(user_id, titulo, descripcion, fecha_creacion) {
    try {
        await encuestaModel.registrarEncuesta(user_id, titulo, descripcion, fecha_creacion);
    } catch (error) {
        console.error('Error al registrar encuesta en el servicio:', error);
        throw error;
    }
}

async function encontrarTodas(id) {
    try {
        return await encuestaModel.obtenerTodas(id);
    } catch (error) {
        console.error('Error al obtener encuestas por usuario en el servicio:', error);
        throw error;
    }
}

async function buscarPorId(id) {
    try {
        return await encuestaModel.verificarUsuarioPorId(id);
    } catch (error) {
        console.error('Error al verificar usuario en el servicio:', error);
        throw error;
    }
}

module.exports = {
    registrarEncuesta,
    encontrarTodas,
    buscarPorId
};

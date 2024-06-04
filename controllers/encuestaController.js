const encuestaService = require('../services/encuestaService');
const autenticador = require('../midlewares/authMidleware');

async function crearEncuesta(req, res) {
    const { user_id, titulo, descripcion, fecha_creacion } = req.body;

    console.log("newSurvey = ", req.body);

    try {
        const usuarioExistente = await buscarUsuarioPorId(user_id);
        console.log('usuarioExistente = ', usuarioExistente);
        if (usuarioExistente) {
            console.log("el usuario existe");
            await encuestaService.registrarEncuesta(user_id, titulo, descripcion, fecha_creacion);
            res.status(201).send('Encuesta registrada correctamente');
        } else {
            res.status(404).send('El usuario no existe');
        }
    } catch (error) {
        console.error('Error al registrar encuesta en la API:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function obtenerEncuestas(req, res) {
    const userId = req.query.userId;
    console.log('userId = ', userId);

    try {
        const encuestas = await encuestaService.encontrarTodas(userId);
        console.log('encuestas = ', encuestas);
        res.status(200).json(encuestas);
    } catch (error) {
        console.error('Error al obtener encuestas:', error);
        res.status(500).send('Error al obtener las encuestas del usuario');
    }
}

async function buscarUsuarioPorId(usuario_id) {
    try {
        console.log("usuario_id = ", usuario_id);
        const usuarioExistente = await encuestaService.buscarPorId(usuario_id);
        return usuarioExistente;
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        return error;
    }
}

module.exports = {
    crearEncuesta,
    obtenerEncuestas,
};

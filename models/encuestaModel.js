const { obtenerConexion } = require('../config/conexion');

async function registrarEncuesta(user_id, titulo, descripcion, fecha_creacion) {
    try {
        // Establecer conexión a la base de datos
        const conexion = await obtenerConexion();

        // Ejecutar la consulta SQL para insertar la encuesta
        await conexion.query('INSERT INTO encuestas (titulo, descripcion, fecha_creacion, usuario_id) VALUES (?, ?, ?, ?)', [titulo, descripcion, fecha_creacion, user_id]);

        // Registrar la encuesta correctamente
        console.log('Encuesta insertada correctamente');
    } catch (error) {
        // Manejar cualquier error que ocurra durante el registro
        console.error('Error al insertar encuesta:', error);
        throw error;
    }
}

async function verificarUsuarioPorId(id) {
    try {
        const conexion = await obtenerConexion();

        console.log('id del modelo = ', id);
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        console.log('resultados de verificarUsuario = ', results);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID', error);
        throw error;
    }
}

async function obtenerTodas(id){
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM encuestas WHERE usuario_id = ?', [id]);
        console.log('results = ', results);
        return results; // Devuelve todos los resultados
    } catch (error) {
        console.error('Error al obtener encuestas por usuario:', error);
        throw error;
    }
}

// Función para obtener un usuario por su ID
async function obtenerPorId(id) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    }
}

module.exports = {
    registrarEncuesta,
    verificarUsuarioPorId,
    obtenerPorId,
    obtenerTodas
};

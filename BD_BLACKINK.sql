-- Creacion de base de datos
CREATE DATABASE IF NOT EXISTS API_BLACKINK;

USE API_BLACKINK;
-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla de encuestas
CREATE TABLE IF NOT EXISTS encuestas (
	id INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
	descripcion TEXT,    
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	usuario_id INT,
	FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de preguntas	
CREATE TABLE IF NOT EXISTS preguntas (
	id INT AUTO_INCREMENT PRIMARY KEY,
	encuesta_id INT,
	tipo VARCHAR(50) NOT NULL,
	texto VARCHAR(255) NOT NULL,
	FOREIGN KEY (encuesta_id) REFERENCES encuestas(id) ON DELETE CASCADE
);



CREATE TABLE respuestas (
	id INT AUTO_INCREMENT PRIMARY KEY,
	encuesta_id INT,
	pregunta_id INT,
	usuario_id INT,
	respuesta_texto TEXT,
	fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (encuesta_id) REFERENCES encuestas(id) ON DELETE CASCADE,
	FOREIGN KEY (pregunta_id) REFERENCES preguntas(id) ON DELETE CASCADE,
	FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);



SELECT * FROM preguntas;
SELECT * FROM encuestas;

SELECT * FROM usuarios;

DROP DATABASE API_BLACKINK;


-- Crear la base de datos
CREATE DATABASE central_reservas;

-- Usar la base de datos
USE central_reservas;

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Crear la tabla de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    recurso_id INT NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (recurso_id) REFERENCES recursos(id)
);

-- Crear la tabla de recursos
CREATE TABLE recursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    ocupacion INT NOT NULL,
    precio DECIMAL(8, 2) NOT NULL,
    descripcion TEXT
);

-- Insertar datos de ejemplo en la tabla de recursos
INSERT INTO recursos (nombre, tipo, ocupacion, precio, descripcion)
VALUES
    ('Apartamentos Rurales Las Vegas', 'apartamento', 36, 10.00, 'Situados entre las conocidas montañas del Mostayal, el Monsacro y el Aramo, en el Municipio de Morcín (Cardeo) se divisa desde los apartamentos turísticos el mítico y conocido Angliru.'),
    ('Casas de Aldea Peñanes', 'Casa Rural', 20, 20.00, 'Un lugar ideal para desconectar de la rutina diaria en un entorno rural con preciosas vistas panorámicas y para conocer la provincia por su privilegiada situación en el centro de Asturias y buena comunicación con los principales lugares turísticos de la región.');

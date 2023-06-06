-- Crear la base de datos
-- CREATE DATABASE central_reservas;

-- Usar la base de datos
USE central_reservas;

-- Crear una tabla para los recursos
CREATE TABLE recursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(8, 2) NOT NULL
);

-- Insertar datos de ejemplo en la tabla recursos
INSERT INTO recursos (nombre, precio) VALUES
  ('Recurso 1', 10.50),
  ('Recurso 2', 15.75),
  ('Recurso 3', 20.00);

-- Crear una tabla para los usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  contrasena VARCHAR(100) NOT NULL
);

-- Insertar datos de ejemplo en la tabla usuarios
INSERT INTO usuarios (nombre, email, contrasena) VALUES
  ('Usuario 1', 'usuario1@example.com', 'password1'),
  ('Usuario 2', 'usuario2@example.com', 'password2'),
  ('Usuario 3', 'usuario3@example.com', 'password3');

-- Crear una tabla para las reservas
CREATE TABLE reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  recurso_id INT NOT NULL,
  fecha_entrada DATE NOT NULL,
  hora_entrada TIME NOT NULL,
  fecha_salida DATE NOT NULL,
  hora_salida TIME NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (recurso_id) REFERENCES recursos(id)
);

-- Insertar datos de ejemplo en la tabla reservas
INSERT INTO reservas (usuario_id, recurso_id, fecha_entrada, hora_entrada, fecha_salida, hora_salida) VALUES
  (1, 1, '2023-05-30', '10:00:00', '2023-05-30', '12:00:00'),
  (2, 2, '2023-05-31', '14:00:00', '2023-06-01', '10:00:00'),
  (3, 3, '2023-06-02', '09:00:00', '2023-06-02', '18:00:00');

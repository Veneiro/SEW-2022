SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `DataBase_Videojuegos_SEW` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `DataBase_Videojuegos_SEW`;


DROP TABLE IF EXISTS `escaparate`;
CREATE TABLE IF NOT EXISTS `escaparate` (
  `cliente_dni` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `videojuego_referencia` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `dia_comprado` datetime NOT NULL,
  UNIQUE KEY `cliente_dni` (`cliente_dni`,`videojuego_referencia`),
  KEY `videojuego_referencia` (`videojuego_referencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


INSERT INTO `escaparate` (`cliente_dni`, `videojuego_referencia`, `dia_comprado`) VALUES
('53522342P', '000X', '2021-12-19 00:48:00'),
('53522342P', '001X', '2021-12-18 23:53:46');


DROP TABLE IF EXISTS `generos`;
CREATE TABLE IF NOT EXISTS `generos` (
  `id` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(32) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


INSERT INTO `generos` (`id`, `tipo`) VALUES
('AR', 'Arcade'),
('PL', 'Plataformas'),
('SH', 'Shooter'),
('HS', 'Heroe Shooter'),
('MA', 'Mundo Abierto'),
('AC', 'Acción'),
('DE', 'Deportes'),
('TE', 'Terror');


DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `dni` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(32) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(13) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


INSERT INTO `clientes` (`dni`, `nombre`, `apellidos`, `email`, `telefono`) VALUES
('53522342P', 'Mateo', 'Rico Iglesias', 'UO277172@uniovi.es', '636557454');


DROP TABLE IF EXISTS `videojuegos`;
CREATE TABLE IF NOT EXISTS `videojuegos` (
  `referencia` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(32) COLLATE utf8_spanish_ci NOT NULL,
  `genero_id` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `director` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `distribuidora` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `portada` varchar(64) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ha_ganado_goty` int(11) NOT NULL,
  PRIMARY KEY (`referencia`),
  KEY `genero_id` (`genero_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


INSERT INTO `videojuegos` (`referencia`, `titulo`, `genero_id`, `director`, `distribuidora`, `portada`, `ha_ganado_goty`) VALUES
('000X', 'Overwatch', 'HS', 'Aaron Keller', 'Blizzard', 'media/overwatch.jpg', 1),
('001X', 'Metal Slug', 'AR', 'SNK', 'SNK', 'media/metal_slug.jpg', 0),
('002X', 'Grand Theft Auto V', 'MA', 'Steve Martin', 'Rockstar Games', 'media/gtav.jpg', 1),
('003X', 'Horizon Zero Dawn', 'MA', 'Mathijs de Jonge', 'Guerrilla Games', 'media/horizon.jpg', 0),
('004X', 'Alien Isolation', 'TE', 'Alistair Hope', 'Sega 20th Century Fox', 'media/alien.jpg', 0),
('005X', 'Call of Duty: Black Ops 3', 'SH', 'Jason Blundel', 'Activision', 'media/bo3.jpg', 0),
('006X', 'BioShock', 'AC', 'Ken Levine', '2K Games', 'media/bioshock.jpg', 1),
('007X', 'FIFA 23', 'DE', 'EA', 'EA', 'media/fifa.jpg', 0),
('008X', 'Sea Of Thieves', 'AC', 'Gregg Mayles', 'Xbox Game Studios', 'media/piratas.jpg', 0),
('009X', 'Red Dead Redemption', 'MA', 'Kevin Hoare / Rod Edge', 'Rockstar Games', 'media/rdr.jpg', 1),
('010X', 'The Legend of Zelda: Breath of the Wild', 'AC', 'Hidemaro Fujibayashi', 'Nintendo', 'media/botw.jpg', 1),
('011X', 'Mario Bros Wii', 'PL', 'Shigeyuki Asuke', 'Nintendo', 'media/mario_bros.jpg', 0);

ALTER TABLE `escaparate`
  ADD CONSTRAINT `escaparate_ibfk_1` FOREIGN KEY (`cliente_dni`) REFERENCES `clientes` (`dni`),
  ADD CONSTRAINT `escaparate_ibfk_2` FOREIGN KEY (`videojuego_referencia`) REFERENCES `videojuegos` (`referencia`);

ALTER TABLE `videojuegos`
  ADD CONSTRAINT `videojuegos_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`);
COMMIT;
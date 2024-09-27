-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2024 a las 00:43:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mascotas1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adopcions`
--

CREATE TABLE `adopcions` (
  `id` int(11) NOT NULL,
  `perro_id` int(11) DEFAULT NULL,
  `adoptante_id` int(11) DEFAULT NULL,
  `fecha_adopcion` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `adopcions`
--

INSERT INTO `adopcions` (`id`, `perro_id`, `adoptante_id`, `fecha_adopcion`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2024-09-25 22:03:28', '2024-09-25 22:06:01', '2024-09-25 22:06:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adoptantes`
--

CREATE TABLE `adoptantes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `adoptantes`
--

INSERT INTO `adoptantes` (`id`, `nombre`, `correo`, `direccion`, `createdAt`, `updatedAt`) VALUES
(1, 'ñañiel', 'ñañiel@gmail.com', 'popayan', '2024-09-25 22:03:28', '2024-09-25 22:03:28'),
(2, NULL, NULL, NULL, '2024-09-25 22:05:45', '2024-09-25 22:05:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perros`
--

CREATE TABLE `perros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `raza` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `tamaño` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perros`
--

INSERT INTO `perros` (`id`, `nombre`, `raza`, `edad`, `tamaño`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'sasha', 'cha', 11, 'mediano', 'Mal', '2024-09-25 22:00:08', '2024-09-25 22:00:08'),
(2, 'ñañiel', NULL, NULL, NULL, NULL, '2024-09-25 22:02:53', '2024-09-25 22:02:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240925215300-create-perro.js'),
('20240925215315-create-adoptante.js'),
('20240925215321-create-adopcion.js');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adopcions`
--
ALTER TABLE `adopcions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `perro_id` (`perro_id`),
  ADD KEY `adoptante_id` (`adoptante_id`);

--
-- Indices de la tabla `adoptantes`
--
ALTER TABLE `adoptantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perros`
--
ALTER TABLE `perros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adopcions`
--
ALTER TABLE `adopcions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `adoptantes`
--
ALTER TABLE `adoptantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `perros`
--
ALTER TABLE `perros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adopcions`
--
ALTER TABLE `adopcions`
  ADD CONSTRAINT `adopcions_ibfk_1` FOREIGN KEY (`perro_id`) REFERENCES `perros` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `adopcions_ibfk_2` FOREIGN KEY (`adoptante_id`) REFERENCES `adoptantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 22, 2024 at 04:57 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `futurestride`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `discount` decimal(5,2) DEFAULT '0.00',
  `color` enum('black','red','orange','purple','blue') NOT NULL,
  `gender` enum('men','women') NOT NULL DEFAULT 'men'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `discount`, `color`, `gender`) VALUES
(1, 'Black Velocity Pro', '300.00', 'air-max.png', '10.00', 'black', 'men'),
(2, 'Red Ignite Racer', '500.00', 'adidas.png', '15.00', 'red', 'men'),
(3, 'Orange Blaze Runner', '700.00', 'nike.png', '20.00', 'orange', 'men'),
(4, 'Purple Surge Sprint', '900.00', 'asics.png', '25.00', 'purple', 'men'),
(5, 'Black Shadow Stealth', '1100.00', 'blue-anthracite.png', '5.00', 'black', 'men'),
(6, 'Red Flame Burst', '1300.00', 'flamingo-red.png', '10.00', 'red', 'men'),
(7, 'Orange Sunstorm', '1500.00', 'nike.png', '12.00', 'orange', 'men'),
(8, 'Purple Thunderbolt', '1700.00', 'asics.png', '18.00', 'purple', 'men'),
(9, 'Black Midnight Racer', '1900.00', 'blue-anthracite.png', '20.00', 'black', 'men'),
(10, 'Red Ember Streak', '2100.00', 'adidas.png', '15.00', 'red', 'men'),
(11, 'Orange Phoenix', '2300.00', 'nike.png', '22.00', 'orange', 'women'),
(12, 'Purple Galaxy Sprint', '2500.00', 'asics.png', '25.00', 'purple', 'women'),
(13, 'Black Panther', '2700.00', 'air-max.png', '10.00', 'black', 'women'),
(14, 'Red Lightning Bolt', '2900.00', 'adidas.png', '20.00', 'red', 'women'),
(15, 'Orange Inferno', '250.00', 'nike.png', '18.00', 'orange', 'women'),
(16, 'Purple Nebula', '600.00', 'asics.png', '12.00', 'purple', 'women'),
(17, 'Black Night Rider', '800.00', 'air-max.png', '15.00', 'black', 'women'),
(18, 'Red Firestorm', '1000.00', 'flamingo-red.png', '10.00', 'red', 'women'),
(19, 'Orange Comet', '1200.00', 'nike.png', '5.00', 'orange', 'women'),
(20, 'Purple Eclipse', '1400.00', 'asics.png', '22.00', 'purple', 'women'),
(21, 'Black Eclipse Racer', '1600.00', 'air-max.png', '25.00', 'black', 'men'),
(22, 'Red Tornado', '1800.00', 'flamingo-red.png', '15.00', 'red', 'men'),
(23, 'Orange Cyclone', '2000.00', 'nike.png', '20.00', 'orange', 'men'),
(24, 'Purple Storm Runner', '2200.00', 'asics.png', '18.00', 'purple', 'men'),
(25, 'Black Ghost', '2400.00', 'air-max.png', '10.00', 'black', 'men'),
(26, 'Red Volcano', '2600.00', 'adidas.png', '12.00', 'red', 'men'),
(27, 'Orange Sunset', '2800.00', 'nike.png', '15.00', 'orange', 'men'),
(28, 'Purple Twilight', '3000.00', 'asics.png', '10.00', 'purple', 'men'),
(29, 'Black Phantom', '2900.00', 'air-max.png', '5.00', 'black', 'men'),
(30, 'Red Inferno', '2700.00', 'adidas.png', '10.00', 'red', 'men'),
(31, 'Orange Ember', '2500.00', 'nike.png', '12.00', 'orange', 'women'),
(32, 'Purple Vortex', '2300.00', 'asics.png', '15.00', 'purple', 'women'),
(33, 'Blue Velocity Surge', '2100.00', 'azure-green-shoe.png', '20.00', 'blue', 'women'),
(34, 'Blue Thunder Flash', '1900.00', 'jordan1.png', '25.00', 'blue', 'men'),
(35, 'Blue Streak Racer', '1700.00', 'new-balance.png', '30.00', 'blue', 'men');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'mickodomingo16@gmail.com', '$2y$10$gFBZvElKgK.Y2/p/ZowFnumU3.5SKcUZo8z4mrs4hd6ulB0tx4Al.', '2024-07-22 03:47:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

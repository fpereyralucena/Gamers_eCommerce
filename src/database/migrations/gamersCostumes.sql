DROP DATABASE IF EXISTS gamersCostumes;
CREATE DATABASE gamersCostumes;
USE gamersCostumes;

CREATE TABLE gamersCostumes.`users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstName` VARCHAR(255) NOT NULL,
   `lastName` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) not null,
   `userEspecify_id` INT NOT NULL,
   `image` VARCHAR(255) ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `userRol` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(55) NOT NULL,
   `price` DECIMAL NOT NULL,
   `discount` DECIMAL,
   `image` VARCHAR(500),
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_43591936-7bb9-4fcb-a96a-88896fb56366` FOREIGN KEY (`userEspecify_id`) REFERENCES `roles`(`id`)  ;
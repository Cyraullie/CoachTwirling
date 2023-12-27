-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema twirling
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema twirling
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `twirling` DEFAULT CHARACTER SET utf8 ;
USE `twirling` ;

-- -----------------------------------------------------
-- Table `twirling`.`group_elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`group_elements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `link` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `twirling`.`levels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`levels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `group_elements_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_levels_group_elements_idx` (`group_elements_id` ASC) VISIBLE,
  CONSTRAINT `fk_levels_group_elements`
    FOREIGN KEY (`group_elements_id`)
    REFERENCES `twirling`.`group_elements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION) 
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `twirling`.`elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`elements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `levels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_elements_levels1_idx` (`levels_id` ASC) VISIBLE,
  CONSTRAINT `fk_elements_levels1`
    FOREIGN KEY (`levels_id`)
    REFERENCES `twirling`.`levels` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `twirling`.`group_athletes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`group_athletes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)) 
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `twirling`.`athletes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`athletes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `group_athletes_id1` INT NULL,
  `group_athletes_id2` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_athletes_group_athletes1_idx` (`group_athletes_id1` ASC) VISIBLE,
  INDEX `fk_athletes_group_athletes2_idx` (`group_athletes_id2` ASC) VISIBLE,
  CONSTRAINT `fk_athletes_group_athletes1`
    FOREIGN KEY (`group_athletes_id1`)
    REFERENCES `twirling`.`group_athletes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_athletes_group_athletes2`
    FOREIGN KEY (`group_athletes_id2`)
    REFERENCES `twirling`.`group_athletes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `twirling`.`state_elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`state_elements` (
  `athletes_id` INT NOT NULL,
  `elements_id` INT NOT NULL,
  `state` ENUM(' ', 'C', 'R', 'V') NOT NULL DEFAULT ' ',
  PRIMARY KEY (`athletes_id`, `elements_id`),
  INDEX `fk_athletes_has_elements_elements1_idx` (`elements_id` ASC) VISIBLE,
  INDEX `fk_athletes_has_elements_athletes1_idx` (`athletes_id` ASC) VISIBLE,
  CONSTRAINT `fk_athletes_has_elements_athletes1`
    FOREIGN KEY (`athletes_id`)
    REFERENCES `twirling`.`athletes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_athletes_has_elements_elements1`
    FOREIGN KEY (`elements_id`)
    REFERENCES `twirling`.`elements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `twirling`.`musics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`musics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `extension` VARCHAR(255) NOT NULL,
  `filename` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)) 
ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
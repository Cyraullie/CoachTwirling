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
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`levels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`levels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `group_element_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_levels_group_elements_idx` (`group_element_id` ASC) VISIBLE,
  CONSTRAINT `fk_levels_group_elements`
    FOREIGN KEY (`group_element_id`)
    REFERENCES `twirling`.`group_elements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`elements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `level_id` INT NOT NULL,
  `link` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_elements_levels1_idx` (`level_id` ASC) VISIBLE,
  CONSTRAINT `fk_elements_levels1`
    FOREIGN KEY (`level_id`)
    REFERENCES `twirling`.`levels` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`group_athletes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`group_athletes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`athletes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`athletes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `group_athlete_id1` INT NULL,
  `group_athlete_id2` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_athletes_group_athletes1_idx` (`group_athlete_id1` ASC) VISIBLE,
  INDEX `fk_athletes_group_athletes2_idx` (`group_athlete_id2` ASC) VISIBLE,
  CONSTRAINT `fk_athletes_group_athletes1`
    FOREIGN KEY (`group_athlete_id1`)
    REFERENCES `twirling`.`group_athletes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_athletes_group_athletes2`
    FOREIGN KEY (`group_athlete_id2`)
    REFERENCES `twirling`.`group_athletes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`variations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`variations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `element_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_variations_elements1_idx` (`element_id` ASC) VISIBLE,
  CONSTRAINT `fk_variations_elements1`
    FOREIGN KEY (`element_id`)
    REFERENCES `twirling`.`elements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`state_elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`state_elements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `athlete_id` INT NOT NULL,
  `variation_id` INT NOT NULL,
  `state` ENUM(' ', 'C', 'R', 'V') NOT NULL DEFAULT ' ',
  INDEX `fk_athletes_has_elements_athletes1_idx` (`athlete_id` ASC) VISIBLE,
  INDEX `fk_state_elements_variations1_idx` (`variation_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_athletes_has_elements_athletes1`
    FOREIGN KEY (`athlete_id`)
    REFERENCES `twirling`.`athletes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_state_elements_variations1`
    FOREIGN KEY (`variation_id`)
    REFERENCES `twirling`.`variations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `twirling`.`musics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twirling`.`musics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `extension` VARCHAR(255) NOT NULL,
  `filename` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

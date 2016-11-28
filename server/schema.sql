CREATE DATABASE `passlock`;
-- ---

USE passlock;

DROP TABLE IF EXISTS `Users`;
        
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Passwords'
-- 
-- ---

DROP TABLE IF EXISTS `Passwords`;
        
CREATE TABLE `Passwords` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `userid` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Passwords` ADD FOREIGN KEY (userid) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Passwords` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`username`,`password`) VALUES
-- ('','','');
-- INSERT INTO `Passwords` (`id`,`name`,`password`,`id_Users`) VALUES
-- ('','','','');
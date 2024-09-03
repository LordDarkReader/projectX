CREATE TABLE `project_x`.`user` (
                                     `id` INT NOT NULL,
                                     `login` VARCHAR(45) NULL,
                                     `password` VARCHAR(45) NULL,
                                     PRIMARY KEY (`id`),
                                     UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE);
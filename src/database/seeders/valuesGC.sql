-- users --
INSERT INTO gamercostumes.users (id, firstName, lastName, password, email, userEspecify_id) VALUES
(1, "Admin", "Admin", "QWERTY", "admin@gamerscostumes.com"), (2, "Lucas", "Herbon", "PATO123", "lucas@gmail.com")

-- roles --
INSERT INTO cristyledb.roles (id, userRol) VALUES
(1, "Admin"), (2, "customer");

-- products --
INSERT INTO cristyleDB.products (id, name, price, discount, image) VALUES 
(1, "Remera Mario Hongos", 10000, 10, "marioHongos.png"),
(1, "Remera Sonic", 10000, 10, "sonicShirt.jpg"),
(1, "Remera Street Fighter II", 10000, 10, "street2.jpg"),
(1, "Remera Street Fighter characters ", 10000, 10, "characterStreet.jpeg"),
(1, "Mortal Kombat", 10000, 10, "mortalKombat.jpg"),
(1, "Mortal Kombat 2", 10000, 10, ""),
(1, "Remera Trifuerza Zelda", 5000, 25, "zelda.jpg"),
(1, "Remera M de Mario", 5000, 25, "remeraMdeMario.webp"),
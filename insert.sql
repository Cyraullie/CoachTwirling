

INSERT INTO group_athletes (name) VALUES ("Lundi");
INSERT INTO group_athletes (name) VALUES ("Jeudi");
INSERT INTO group_athletes (name) VALUES ("Vendredi 1");
INSERT INTO group_athletes (name) VALUES ("Vendredi 2");
INSERT INTO group_athletes (name) VALUES ("Samedi");

INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Mailyn", 1);
INSERT INTO athletes (firstname) VALUES ("Sophie");
INSERT INTO athletes (firstname) VALUES ("Mila");
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Méline", 1);

INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Zoé", 1);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Léana", 1);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Sara", 1);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Délia", 1);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Elise", 1);

INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Lila", 1, 2);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Mélissa", 1, 2);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Lilly", 1, 2);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Laurine", 1, 2);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Eléanore", 1, 2);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Annie", 1);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Mila", 1);

INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Aurélie B", 3, 4);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Mélinda", 2, 3);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Gabriella", 3, 4);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Laura M", 3, 4);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Thays", 2, 3);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Clémence", 2, 3);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Kaléa", 3, 4);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Ylenia", 3, 4);
INSERT INTO athletes (firstname, group_athlete_id1, group_athlete_id2) VALUES ("Léonie", 3, 4);

INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Lana", 5);
INSERT INTO athletes (firstname) VALUES ("Lucie");

INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Laura C", 5);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Giulia", 5);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Julie", 5);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Mélia", 5);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Adriana", 5);
INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Iris", 5);

INSERT INTO athletes (firstname, group_athlete_id1) VALUES ("Aurélie G", 5);

INSERT INTO group_elements (name) VALUES ("Vertical Roll");
INSERT INTO group_elements (name) VALUES ("Horizontal Roll");

INSERT INTO levels (name, group_element_id) VALUES ("Foundation", 1);
INSERT INTO levels (name, group_element_id) VALUES ("Groupe A", 1);
INSERT INTO levels (name, group_element_id) VALUES ("Groupe B", 1);
INSERT INTO levels (name, group_element_id) VALUES ("Groupe C", 1);
INSERT INTO levels (name, group_element_id) VALUES ("Groupe D", 1);
INSERT INTO levels (name, group_element_id) VALUES ("Groupe E", 1);
INSERT INTO levels (name, group_element_id) VALUES ("Foundation", 2);

INSERT INTO elements (name, link, level_id) VALUES ("Hand Roll", "https://vimeo.com/555994762/7ff98ea832?autoplay=1", 1);
INSERT INTO elements (name, link, level_id) VALUES ("Paddle", "https://vimeo.com/555994836/a9390ccc6d?autoplay=1", 1);

INSERT INTO variations (name, element_id) VALUES ("Hand Roll R - Forward", 1);
INSERT INTO variations (name, element_id) VALUES ("Hand Roll L - Forward", 1);

INSERT INTO variations (name, element_id) VALUES ("Paddle Forward", 2);
INSERT INTO variations (name, element_id) VALUES ("Paddle Reverse", 2);

INSERT INTO state_elements (athlete_id, variation_id, state) VALUES (6, 1, "R");
INSERT INTO state_elements (athlete_id, variation_id, state) VALUES (6, 2, " ");



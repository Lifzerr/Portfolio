/* Création des tables */

/* Résumés des projets */
CREATE TABLE Items(
    id NUMERIC(2) PRIMARY KEY,
    title VARCHAR2(50),
    yearBadge NUMERIC(2),
    summary VARCHAR2(500),
    coverURL  VARCHAR2(100)  
);

/* Langages utilisés */
CREATE TABLE Langages(
    id NUMERIC(2) PRIMARY KEY,
    wording VARCHAR2(50),
    mastering NUMERIC(3) CHECK (mastering < 100)
);

/* Eléments de chaque projet */
CREATE TABLE Elements(
    id NUMERIC(3) PRIMARY KEY,
    title VARCHAR2(50),
    objective VARCHAR2(100),
    imageURL VARCHAR2(100),
    imageDesc VARCHAR2(250)
);

/* Lien Items-Langages */
CREATE TABLE Appear(
    idItem NUMERIC(2),
    idLang NUMERIC(2),
    CONSTRAINT fk_idLang FOREIGN KEY (idLang) REFERENCES Langages(id),
    CONSTRAINT fk_idItem FOREIGN KEY (idItem) REFERENCES Items(id),
    PRIMARY KEY (idItem, idLang)
);

/* Lien Items-Elements */
CREATE TABLE Specifies(
    idItem NUMERIC(2),
    idElement NUMERIC(3),
    CONSTRAINT fk_idElement FOREIGN KEY (idElement) REFERENCES Elements(id),
    CONSTRAINT fk_idItem FOREIGN KEY (idItem) REFERENCES Items(id),
    PRIMARY KEY (idItem, idElement)
);


/* Peuplement de la BD */
/* Items & Langages */
INSERT INTO Items (id, title, yearBadge, summary, coverURL)
VALUES (1, 'Lecteur de diaporamas', 2024, "Ce projet consistait à réaliser le développement d'un lecteur de diaporamas, par groupes de 3, selon un sujet fourni par nos enseignants. Ce projet incluait de la gestion d\'UI et de bases de données.", "assets/item-1.png"),
       (2, 'Exploitation de graphes', 24, 'Dans ce projet universitaire, nous devions en binômes trier des données de graphes puis les exploiter et enfin, les représenter sur une carte.', "assets/item-2.png"),
       (3, "Installation d'un réseau", 24, "Lors de ce projet universitaire, nous devions mettre en place le réseau d'une entreprise selon des contraintes données par le sujet.", "assets/item-3.png");

INSERT INTO Langages (id, wording, mastering) 
VALUES (1, 'C++', 85), 
       (2, 'Qt', 80),
       (3, 'Python', 90),
       (4, 'Bash', 75);

INSERT INTO Appear (idItem, idLang) 
VALUES (1, 1),
       (1, 2),
       (2, 3), 
       (3, 4); 


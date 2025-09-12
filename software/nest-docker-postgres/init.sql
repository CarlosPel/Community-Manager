-- ============================================
-- Community Manager Init SQL Script (Idempotente)
-- ============================================

-- Announcements
DROP TABLE IF EXISTS Announcements CASCADE;
CREATE TABLE Announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Incidents
DROP TABLE IF EXISTS Incidents CASCADE;
CREATE TABLE Incidents (
    id SERIAL PRIMARY KEY,
    criticality VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (id) REFERENCES Announcements(id)
);

-- Premises
DROP TABLE IF EXISTS Premises CASCADE;
CREATE TABLE Premises (
    id INT PRIMARY KEY,
    tenant_id INT NOT NULL,
);

-- Owners (Person subtype)
DROP TABLE IF EXISTS Owners CASCADE;
CREATE TABLE Owners (
    id INT PRIMARY KEY,
    premises_id INT NOT NULL,
    FOREIGN KEY (premises_id) REFERENCES Premises(id)
);

-- Apartments
DROP TABLE IF EXISTS Apartments CASCADE;
CREATE TABLE Apartments (
    id INT PRIMARY KEY,
    floor INT,
    door VARCHAR(10),
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES Owners(id)
);

-- Neighbors (subtipo de Person)
DROP TABLE IF EXISTS Neighbors CASCADE;
CREATE TABLE Neighbors (
    id INT PRIMARY KEY,
    apartment_id INT NOT NULL,
    FOREIGN KEY (apartment_id) REFERENCES Apartments(id)
);

-- ----------
-- Inserts --
-------------

-- Announcements
INSERT INTO Announcements (id, title, content) VALUES
(1, 'Maintenance Notice', 'Scheduled maintenance on 2024-07-01 from 10:00 to 12:00.'),
(2, 'Community Event', 'Join us for a community BBQ on 2024-07-15 at the central park.');
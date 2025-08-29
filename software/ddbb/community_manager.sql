-- ============================================
-- Community Manager Tables SQL Script
-- ============================================

-- Incident
CREATE TABLE Incident (
    id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL
);

-- Announcement
CREATE TABLE Announcement (
    id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL
);

-- Person
CREATE TABLE Person (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    email VARCHAR(100)
);

-- Premises
CREATE TABLE Premises (
    id INT PRIMARY KEY,
    tenant_id INT NOT NULL,
    FOREIGN KEY (tenant_id) REFERENCES Person(id)
);

-- -- Tenant (Person subtype)
-- CREATE TABLE Tenant (
--     id INT PRIMARY KEY,
--     FOREIGN KEY (id) REFERENCES Person(id)
-- );

-- Owner (Person subtype)
CREATE TABLE Owner (
    id INT PRIMARY KEY,
    premises_id INT NOT NULL,
    FOREIGN KEY (id) REFERENCES Person(id),
    FOREIGN KEY (premises_id) REFERENCES Premises(id)
);

-- Apartment
CREATE TABLE Apartment (
    id INT PRIMARY KEY,
    floor INT,
    door VARCHAR(10),
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES Owner(id)
);

-- Neighbor (subtipo de Person)
CREATE TABLE Neighbor (
    id INT PRIMARY KEY,
    apartment_id INT NOT NULL,
    FOREIGN KEY (id) REFERENCES Person(id),
    FOREIGN KEY (apartment_id) REFERENCES Apartment(id)
);

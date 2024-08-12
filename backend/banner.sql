-- Create Database if it doesn't exist
CREATE DATABASE IF NOT EXISTS bannerDB;

-- Use the created database
USE bannerDB;

-- Drop the table if it exists (optional, for development purposes)
DROP TABLE IF EXISTS Banner;

-- Create the Banner table
CREATE TABLE Banner (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  timer INT NOT NULL,
  link VARCHAR(255),
  isVisible BOOLEAN NOT NULL
);

-- Insert initial data into the Banner table
INSERT INTO Banner (description, timer, link, isVisible)
VALUES
  ('Welcome to our website!', 60, 'https://example.com', true);

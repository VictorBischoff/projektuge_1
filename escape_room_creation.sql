CREATE DATABASE EscapeRoomDB;
USE EscapeRoomDB;

CREATE TABLE EscapeRooms (
    RoomID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Theme VARCHAR(255) NOT NULL,
    DifficultyLevel INT NOT NULL,
    Duration INT NOT NULL -- in minutes
);

CREATE TABLE Puzzles (
    PuzzleID INT AUTO_INCREMENT PRIMARY KEY,
    RoomID INT,
    PuzzleName VARCHAR(255) NOT NULL,
    Description TEXT,
    PuzzleType VARCHAR(50),
    DifficultyRating INT,
    FOREIGN KEY (RoomID) REFERENCES EscapeRooms(RoomID) ON DELETE CASCADE
);

CREATE TABLE Teams (
    TeamID INT AUTO_INCREMENT PRIMARY KEY,
    TeamName VARCHAR(255) NOT NULL,
    StartTime DATETIME,
    EndTime DATETIME,
    CompletionStatus VARCHAR(50) -- e.g., Solved, Timed Out
);

CREATE TABLE Players (
    PlayerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Nickname VARCHAR(255),
    Email VARCHAR(255) UNIQUE
);

CREATE TABLE TeamProgress (
    ProgressID INT AUTO_INCREMENT PRIMARY KEY,
    TeamID INT,
    PuzzleID INT,
    StartTime DATETIME,
    EndTime DATETIME,
    SolvedStatus VARCHAR(50), -- e.g., Solved, Failed
    FOREIGN KEY (TeamID) REFERENCES Teams(TeamID) ON DELETE CASCADE,
    FOREIGN KEY (PuzzleID) REFERENCES Puzzles(PuzzleID) ON DELETE CASCADE
);

CREATE TABLE Hints (
    HintID INT AUTO_INCREMENT PRIMARY KEY,
    PuzzleID INT,
    HintText TEXT,
    UsageCount INT DEFAULT 0,
    FOREIGN KEY (PuzzleID) REFERENCES Puzzles(PuzzleID) ON DELETE CASCADE
);

CREATE TABLE PlayerActions (
    ActionID INT AUTO_INCREMENT PRIMARY KEY,
    PlayerID INT,
    PuzzleID INT,
    ActionType VARCHAR(50), -- e.g., Attempt, HintRequest
    ActionTimestamp DATETIME,
    FOREIGN KEY (PlayerID) REFERENCES Players(PlayerID) ON DELETE CASCADE,
    FOREIGN KEY (PuzzleID) REFERENCES Puzzles(PuzzleID) ON DELETE CASCADE
);


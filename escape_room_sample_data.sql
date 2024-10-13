INSERT INTO EscapeRooms (Title, Theme, DifficultyLevel, Duration)
VALUES 
('Haunted Mansion', 'Horror', 4, 60),
('Alien Invasion', 'Sci-fi', 5, 90);

INSERT INTO Puzzles (RoomID, PuzzleName, Description, PuzzleType, DifficultyRating)
VALUES 
(1, 'Find the Key', 'Locate the hidden key in the room', 'Search', 3),
(1, 'Solve the Riddle', 'Answer the ancient riddle', 'Riddle', 4),
(2, 'Alien Codes', 'Decode the alien language', 'Logic', 5);

INSERT INTO Teams (TeamName, StartTime, EndTime, CompletionStatus)
VALUES 
('Team Alpha', '2024-10-01 14:00:00', '2024-10-01 15:00:00', 'Solved'),
('Team Beta', '2024-10-01 14:30:00', '2024-10-01 16:00:00', 'Timed Out');

INSERT INTO Players (Name, Nickname, Email)
VALUES 
('Alice Johnson', 'AJ', 'alice@example.com'),
('Bob Smith', 'Bobby', 'bob@example.com');

INSERT INTO TeamPlayers (TeamID, PlayerID)
VALUES 
(1, 1), -- Alice in Team Alpha
(1, 2), -- Bob in Team Alpha
(2, 1); -- Alice in Team Beta

INSERT INTO TeamProgress (TeamID, PuzzleID, StartTime, EndTime, SolvedStatus)
VALUES 
(1, 1, '2024-10-01 14:05:00', '2024-10-01 14:10:00', 'Solved'),
(1, 2, '2024-10-01 14:15:00', '2024-10-01 14:30:00', 'Solved'),
(2, 1, '2024-10-01 14:35:00', '2024-10-01 14:45:00', 'Failed');

INSERT INTO Hints (PuzzleID, HintText, UsageCount)
VALUES 
(1, 'Look under the table', 5),
(2, 'Think outside the box', 2);

INSERT INTO PlayerActions (PlayerID, PuzzleID, ActionType, ActionTimestamp)
VALUES 
(1, 1, 'Attempt', '2024-10-01 14:06:00'),
(2, 1, 'HintRequest', '2024-10-01 14:07:00');


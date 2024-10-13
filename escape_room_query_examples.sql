SELECT ER.Title, 
       COUNT(T.TeamID) AS TotalTeams, 
       SUM(CASE WHEN T.CompletionStatus = 'Solved' THEN 1 ELSE 0 END) AS SolvedTeams, 
       ROUND(SUM(CASE WHEN T.CompletionStatus = 'Solved' THEN 1 ELSE 0 END) / COUNT(T.TeamID) * 100, 2) AS CompletionRate
FROM EscapeRooms ER
JOIN Puzzles P ON ER.RoomID = P.RoomID
JOIN TeamProgress TP ON P.PuzzleID = TP.PuzzleID
JOIN Teams T ON TP.TeamID = T.TeamID
GROUP BY ER.Title;

SELECT P.PuzzleName, 
       AVG(TIMESTAMPDIFF(MINUTE, TP.StartTime, TP.EndTime)) AS AvgTimeTaken
FROM Puzzles P
JOIN TeamProgress TP ON P.PuzzleID = TP.PuzzleID
GROUP BY P.PuzzleName
ORDER BY AvgTimeTaken DESC
LIMIT 1;

SELECT PL.Name, 
       COUNT(PA.ActionID) AS TotalActions
FROM Players PL
JOIN PlayerActions PA ON PL.PlayerID = PA.PlayerID
GROUP BY PL.Name
ORDER BY TotalActions DESC
LIMIT 5;
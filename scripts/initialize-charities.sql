INSERT INTO Charities(charityName, createdAt, updatedAt)
	SELECT	'WWF', NOW(), NOW()
UNION	SELECT	'Barncancerfonden', NOW(), NOW();

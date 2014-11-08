CREATE TABLE Customer
(
	customerId		INT		NOT NULL AUTO_INCREMENT
,	customerNumber		VARCHAR(30)	NOT NULL
,	person			BIT		NOT NULL
,	socialSecurityNumber	VARCHAR(16)
,	firstName		NVARCHAR(100)
,	lastName		NVARCHAR(100)
,	organizationNumber	VARCHAR(16)
,	companyName		NVARCHAR(100)
,	address			NVARCHAR(100)	NOT NULL
,	addressDescription	NVARCHAR(100)	NOT NULL
,	city			NVARCHAR(100)	NOT NULL
,	zipcode			VARCHAR(10)	NOT NULL
,	email			NVARCHAR(100)	NOT NULL
,	password		NVARCHAR(100)
,	phoneNumber		NVARCHAR(100)	NOT NULL

,	CONSTRAINT PK_Customer			PRIMARY KEY (customerId)
,	CONSTRAINT S1_Customer			UNIQUE KEY (customerNumber)
,	CONSTRAINT S2_Customer			UNIQUE KEY (email)
)

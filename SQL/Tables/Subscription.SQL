CREATE TABLE Subscription
(
	subscriptionId		INT		NOT NULL AUTO_INCREMENT
,	subscriptionNumber	VARCHAR(30)	NOT NULL
,	customerId		INT		NOT NULL
,	quantity		INT		NOT NULL
,	startDate		DATE		NOT NULL
,	orderInterval		INT		NOT NULL

,	CONSTRAINT pk_Subscription		PRIMARY KEY (subscriptionId)
,	CONSTRAINT s1_Subscription		UNIQUE KEY (subscriptionNumber)
,	CONSTRAINT fk_Subscription_Customer	FOREIGN KEY (customerId) REFERENCES Customer (customerId) ON DELETE RESTRICT
)

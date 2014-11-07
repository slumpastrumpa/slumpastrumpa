CREATE TABLE OrderX
(
	orderId		INT		NOT NULL AUTO_INCREMENT
,	orderNumber	VARCHAR(30)	NOT NULL
,	customerId	INT		NOT NULL
,	quantity	INT		NOT NULL

,	CONSTRAINT PK_OrderX		PRIMARY KEY (orderId)
,	CONSTRAINT S1_OrderX		UNIQUE KEY (orderNumber)
,	CONSTRAINT FK_Order_Customer	FOREIGN KEY (customerId) REFERENCES Customer (customerId) ON DELETE RESTRICT
)

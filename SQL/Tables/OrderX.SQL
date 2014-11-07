CREATE TABLE OrderX
(
	orderId		INT		NOT NULL AUTO_INCREMENT
,	orderNumber	VARCHAR(30)	NOT NULL
,	customerId	INT		NOT NULL
,	quantity	INT		NOT NULL

,	CONSTRAINT pk_OrderX		PRIMARY KEY (orderId)
,	CONSTRAINT s1_OrderX		UNIQUE KEY (orderNumber)
,	CONSTRAINT fk_Order_Customer	FOREIGN KEY (customerId) REFERENCES Customer (customerId) ON DELETE RESTRICT
)

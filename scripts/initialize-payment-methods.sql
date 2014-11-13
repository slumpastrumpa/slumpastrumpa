-- Insert the service providers
INSERT INTO PaymentServiceProviders(paymentServiceProviderId, name)
	SELECT	1, 'klarna'
UNION	SELECT	2, 'dibs';

-- Default configurations
INSERT INTO PaymentServiceProviderParameters
(
	paymentServiceProviderId
,	parameterKey
,	parameterValue
)

-- Klarna
SELECT	1
,	'serviceURL'
,	'https://payments.testdrive.klarna.com:443'
UNION
SELECT	1
,	'eStoreID'
,	'123'
UNION
SELECT	1
,	'sharedSecret'
,	'ABC'

-- DIBS
UNION
SELECT	2
,	'authorizationURL'
,	'???'
UNION
SELECT	2
,	'captureURL'
,	'???'
UNION
SELECT	2
,	'refundURL'
,	'???'
UNION
SELECT	2
,	'merchant'
,	'???'
UNION
SELECT	2
,	'md5key1'
,	'???'
UNION
SELECT	2
,	'md5key2'
,	'???';

-- Payment methods
INSERT INTO PaymentMethods
(
	name
,	paymentCode
,	paymentServiceProviderId
)

-- Klarna invoice
SELECT	'Klarna faktura'
,	''
,	1

-- DIBS kortbetalningar
UNION
SELECT	'MasterCard'
,	'MC'
,	2
UNION
SELECT	'VISA'
,	'VISA'
,	2

-- DIBS bankbetalningar
UNION
SELECT	'Swedbank'
,	'SWD_A'
,	2
UNION
SELECT	'Handelsbanken'
,	'??'
,	2
UNION
SELECT	'Nordea'
,	'NDB'
,	2
UNION
SELECT	'SEB'
,	'SEB'
,	2;

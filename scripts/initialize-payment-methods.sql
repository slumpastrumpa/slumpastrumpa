-- Insert the service providers
INSERT INTO PaymentServiceProviders(paymentServiceProviderId, name, createdAt, updatedAt)
	SELECT	1, 'klarna', NOW(), NOW()
UNION	SELECT	2, 'dibs', NOW(), NOW();

-- Default configurations
INSERT INTO PaymentServiceProviderParameters
(
	paymentServiceProviderId
,	parameterKey
,	parameterValue
,	createdAt, updatedAt
)

-- Klarna
SELECT	1
,	'serviceURL'
,	'https://payments.testdrive.klarna.com:443'
,	NOW(), NOW()
UNION
SELECT	1
,	'eStoreID'
,	'123'
,       NOW(), NOW()
UNION
SELECT	1
,	'sharedSecret'
,	'ABC'
,       NOW(), NOW()

-- DIBS
UNION
SELECT	2
,	'authorizationURL'
,	'???'
,       NOW(), NOW()
UNION
SELECT	2
,	'captureURL'
,	'???'
,       NOW(), NOW()
UNION
SELECT	2
,	'merchant'
,	'???'
,       NOW(), NOW()
UNION
SELECT	2
,	'md5key1'
,	'???'
,       NOW(), NOW()
UNION
SELECT	2
,	'md5key2'
,	'???'
,       NOW(), NOW();

-- Payment methods
INSERT INTO PaymentMethods
(
	name
,	paymentCode
,	paymentServiceProviderId
,	createdAt, updatedAt
)

-- Klarna invoice
SELECT	'Klarna faktura'
,	''
,	1
,       NOW(), NOW()

-- DIBS kortbetalningar
UNION
SELECT	'MasterCard'
,	'MC'
,	2
,       NOW(), NOW()
UNION
SELECT	'VISA'
,	'VISA'
,	2
,       NOW(), NOW()

-- DIBS bankbetalningar
UNION
SELECT	'Swedbank'
,	'SWD_A'
,	2
,       NOW(), NOW()
UNION
SELECT	'Handelsbanken'
,	'??'
,	2
,       NOW(), NOW()
UNION
SELECT	'Nordea'
,	'NDB'
,	2
,       NOW(), NOW()
UNION
SELECT	'SEB'
,	'SEB'
,	2
,       NOW(), NOW();

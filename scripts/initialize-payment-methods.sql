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
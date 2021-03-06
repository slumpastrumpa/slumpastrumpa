module.exports =
[
	// Core
	{ name: "App",								path: "." }
,	{ name: "Router", 							path: "./app" }

	// Services
,	{ name: "PaymentServiceProviderService",	path: "./app/modules/payment-service-provider" }

	// Controllers
,	{ name: "ForgotPasswordController",			path: "./app/modules/forgot-password",		auto: true }
,	{ name: "IndexController",					path: "./app/modules/index",				auto: true }
,	{ name: "LoginController",					path: "./app/modules/login",				auto: true }
,	{ name: "MyPagesController",				path: "./app/modules/my-pages",				auto: true }
,	{ name: "PlaceOrderController",				path: "./app/modules/place-order",			auto: true }
,	{ name: "SubscribeController",				path: "./app/modules/subscribe",			auto: true }
,	{ name: "AddressLookupController",			path: "./app/modules/address-lookup",		auto: true }
]

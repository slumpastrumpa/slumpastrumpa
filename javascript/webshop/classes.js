module.exports =
[
	// Core
	{ name: "App",							path: "." }
,	{ name: "Router", 						path: "./app" }

	// Controllers
,	{ name: "ForgotPasswordController",		path: "./app/modules/forgot-password",		auto: true }
,	{ name: "IndexController",				path: "./app/modules/index",				auto: true }
,	{ name: "LoginController",				path: "./app/modules/login",				auto: true }
,	{ name: "MyPagesController",			path: "./app/modules/my-pages",				auto: true }
,	{ name: "PlaceOrderController",			path: "./app/modules/place-order",			auto: true }
,	{ name: "SubscribeController",			path: "./app/modules/subscribe",			auto: true }
]

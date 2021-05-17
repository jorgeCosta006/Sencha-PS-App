Ext.application({
	extend: 'Sencha-PS-App.Application',
	name: 'Sencha-PS-App',

	controllers: [
		'Sencha-PS-App.controller.SessionController'
	],

	stores: [
		'SessionPresenters',
		'Presenters'
	],

	models: [
		'Session',
		'SessionPresenter',
		'Presenter'
	],

	views: [
		'main.MainView',
		// 'Sessions',
		'SessionForm',
		'Presenters',
		// 'Details'
	]
});

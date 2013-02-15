require.config({
  baseUrl: "./js/",
  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-1.4.2',
    backbone: 'lib/backbone-0.9.2',
    'backbone.localStorage': 'lib/backbone.localStorage'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});

require([
    'jquery',
    'backbone',
    'Routers',
	'./model/GroupCollection',	
	'./controller/GroupController'
  ], function ( $, Backbone, Routers,  GroupCollection,  GroupController ) {

	var JSONObj, GController, Router, loadJSON;

	Router = new Routers();
	GroupController.init();
	Backbone.history.start();
		
});

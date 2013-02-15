define([
  'backbone',
  'jquery',
  'controller/GroupController'
],
function( Backbone, $, GroupController ) {

	var Router = Backbone.Router.extend({
		
		routes : {
			"" : "init",			
			"cat/:id" : "getCategory",
			"cat/:id/item/:id" : "getItem"
		},

		loadJSON: function(fileName, callback) {
		
			$.ajax({	
				url : fileName,
				dataType : "Json",
				success : function(JSONObj){
					callback(JSONObj);
				},
				error : function(e){
					alert("error = "+e.statusText);
					///callback("error");
				}
			});

		},

		"init" : function(){
			console.log("route:init");

			this.loadJSON("json-default.json", function(obj){			
				GroupController.initCat(obj);
			});	
		},

		"getItem": function(id){

			console.log("route:item = "+id);
			var fileName = "json-item-"+id+".json";
			
			this.loadJSON(fileName, function(itemObj){
				GroupController.initItemView(itemObj);
			});
		},

		"getCategory": function(id){

			console.log("route:cat = "+id);
			var fileName = "json-cat-"+id+".json";

			this.loadJSON(fileName, function(JSONObj){
				GroupController.initCat(JSONObj);
			});
		}

	});

  
  	return Router;
  
});


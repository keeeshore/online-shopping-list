define([
	'backbone'
],
function(Backbone) {

	var GroupModel = Backbone.Model.extend({
	
		defaults : {
			"name" : "default",
			"type" : "def",
			"price" : "1000",
			"rating" : ""
		},
		
		initialize : function(objModel){			
			this.set(objModel);
			//console.log("GroupModel init...");
		}
	
	});	
	
	return GroupModel;
	
});



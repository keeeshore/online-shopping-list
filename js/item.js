define([
	'backbone',
	'../view/GroupView',
	'../model/GroupModel',
	'../model/GroupCollection'
],
function( Backbone, GroupView, GroupModel, GroupCollection ) {

	var GroupModel1 = Backbone.Model.extend({
	
		defaults : {
			"name" : "default Name",
			"type" : "def type",
			"price" : "1000"
		},
		
		initialize : function(objModel){			
			this.set(objModel);
			//console.log("GroupModel init...");
		}
	
	});	
	
	return GroupModel1;
	
});
define([
	'backbone'
],
function(Backbone) {

	var ItemModel = Backbone.Model.extend({
	
		defaults : {
			"name" : "default Name",
			"type" : "def type",
			"price" : "1000",
			"rating" : "",
			"desc" : "default desc for an item comes here",
			"reviews" : [{"name" : "no one" , "comment" : "no comments yet..."}]
		},
		
		initialize : function(objModel){
			this.set(objModel);
			//console.log("GroupModel init...");
		}
	
	});	
	
	return ItemModel;
	
});



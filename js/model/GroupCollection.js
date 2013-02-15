define([
	'backbone'
],
function( Backbone){

	var GroupCollection = Backbone.Collection.extend({		
		
		model : "",

		catID : "",

		setCatID : function(id){
			this.catID = id;
		},

		getCatID : function(){
			return this.catID;
		},	

		addItem : function(model){
			this.model = model;
			this.add(this.model);
		},

		comparator: function(model){
            return model.get("price");
            //TODO. .get the sorting by rating as well.
        }

	});
	
	return GroupCollection;
	
});

	
define([
	'jquery',
	'backbone',
	'../controller/GroupController'
],
function($, Backbone, GroupController){	

	var CategoryView = Backbone.View.extend({
	
		tagName : "ul",
		
		contID : "",
		
		className : "catCont",

		id : "gData",

		currEle : null,

		defRating : 0,
		
		initialize : function(elemId){
			this.contID = elemId;
			$("#categoryCont").append(this.el);
		},

		setCatHeading: function(catName){
			$("h1.catHeading").text(catName);
		},

		hide: function(){
			$(this.el).hide();
		},

		show: function(){
			$(this.el).show();
		}		
		
	
	});
	
	return CategoryView;
	
	
});



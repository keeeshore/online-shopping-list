define([
	'jquery',
	'backbone'
],
function($, Backbone){	

	var GroupView = Backbone.View.extend({
	
		tagName : "li",
		
		contID : "",
		
		className : "item",

		currEle : null,

		defRating : 0,
		
		events : {
			"click .sortElement select" : "sortItems",
			"mouseover div.rating ul li" : "initRating",
			"mouseout div.rating ul li" : "resetRating",
			"mouseup div.rating ul li" : "storeRating"
		},
		
		initialize : function(contID){

			this.contID = contID;

			var hrElem = '<h2 class="name"></h2>';
			var idElem = '<div class="uniqueId"><label>Id : </label></div>';
			var ratingElem = '<div class="ratingHolder"><label>Rating :</label> <div class="rating"><ul class=""><li class="one"></li><li class="two"></li><li class="three"></li><li class="four"></li><li class="five"></li></ul></div></div>';
			var priceElem = '<div class="price"><label>Price (INR) : </label></div>';
			var detailsElem = '<div class="details"><a href="#">details</a></div>';
			this.currEle = this.$el.html(hrElem+idElem+ratingElem+priceElem+detailsElem);

		},
		
		sortItems : function(){
			debugger;
		},

		showDetails : function(e){
			//e.preventDefault();
		},

		initRating : function(obj){
			this.defRating = obj.currentTarget.parentNode.className;
			var currStar = obj.currentTarget.className;	
			obj.currentTarget.parentNode.className = currStar;
			//$(currRatingDiv).addClass(currStar);
			//console.log(currStar);
		},

		resetRating : function(obj){
			//var currStar = obj.currentTarget.className;	
			obj.currentTarget.parentNode.className = this.defRating;
		},

		storeRating : function(obj){
			this.currentRating = obj.currentTarget.parentNode.className;
			alert(this.currentRating);
			//TODO
		},

		render: function(){
			$("#"+this.contID).append(this.currEle);
			//return this.currEle;
		}
	
	});
	
	return GroupView;
	
	
});



define([
	'jquery',
	'backbone'
],
function($, Backbone){	

	var ItemView = Backbone.View.extend({
	
		tagName : "div",
		
		contID : "",
				
		className : "itemCont",

		currEle : null,
		
		events : {
			
		},
		
		initialize : function(elemID){
			
			var itemWrapper, itemImg, itemPrice , itemRating, itemName, itemDesc;
			
			this.contID = elemID;
			
			itemImg = '<img src="/images/pdt1.jpg"></img>';
			itemName = '<h1 class="name"></h1>';
			itemRating = '<div class="rating"><ul class="star"><li></li><li></li><li></li><li></li><li></li></ul></div>';
			itemPrice = '<div class="price"></div>';
			itemDesc = '<div class="desc"></div>';
			backBtn = '<a href="#" class="back">Back to Category</a>'
			
			this.currEle = this.$el.html(itemImg+itemName+itemRating+itemPrice+itemDesc+backBtn);
			
		},
		
		setRating : function(e){
			//e.preventDefault();
		},

		render: function(){
			$("#"+this.contID).append(this.currEle);
			//return this.currEle;
		}
	
	});
	
	return ItemView;
	
	
});



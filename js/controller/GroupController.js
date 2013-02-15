define([
	'jquery',
	'backbone',
	'../view/CategoryView',
	'../view/GroupView',
	'../view/ItemView',
	'../model/GroupModel',
	'../model/ItemModel',
	'../model/GroupCollection',
	'../Routers'
],
function( $, Backbone, CategoryView, GroupView, ItemView, GroupModel, ItemModel, GroupCollection, Router ) {

	var GroupController = {	
		
		model : null,

		collection : null,
		
		categoryModel : null,

		categoryView : null,
		
		itemView : null,
		
		itemModel : null,

		sortType : null,

		rating : ["one", "two", "three", "four", "five"],

		init : function(JSONObj) {
		
			var that;

			that = this;

			$(".sortElement select").change(function(el){
				that.sortType = this.options[this.selectedIndex].value;
				that.sortCategory(that.sortType);
			});
		
		},

		initCat : function(JSONObj){

			var i, items , itemsTotal;		
			

			if(this.categoryView){
				this.categoryView.remove();
			}

			if(this.itemView){
				this.itemView.remove();
			}				

			items = JSONObj.items;
			itemsTotal = JSONObj.items.length;

			this.collection = new GroupCollection();
			this.collection.setCatID(JSONObj.id);

			this.categoryView = new CategoryView();
			this.categoryView.setCatHeading(JSONObj.itemType);

			for( i = 0; i < itemsTotal; i = i +1){

				this.model = new GroupModel( items[i] );
				this.collection.addItem(this.model);
				this.renderCategoryItem();

			}

		},

		toggleView : function(viewState, state){
			
			if(viewState !== null){
				if(state === "show"){
					$("#"+viewState.contID).show();
				}
				else{
					$("#"+viewState.contID).hide();
				}
			}			

		},

		renderCategoryItem : function() {	

			var that, currModel , currAnchor, currCATID;

			currModel = this.model.attributes;
			currCATID = this.collection.getCatID();
			that = this;
			
			this.groupView = new GroupView("gData", currModel);

			_.extend(this.groupView, Backbone.Events);	
			this.groupView.on("storeRating", function(){
				alert("asnother event");
			});
			
			$(this.groupView.$el[0]).find(".name").append(this.model.attributes.name);
			$(this.groupView.$el[0]).find(".uniqueId").append("<span>"+this.model.attributes.type+"</span>");
			$(this.groupView.$el[0]).find(".price").append("<span>"+this.model.attributes.price+"</span>");
			$(this.groupView.$el[0]).find(".rating ul").addClass(this.rating[parseInt(this.model.attributes.rating, 10)]);
			
			console.log(this.rating[parseInt(this.model.attributes.rating, 10)]);
			currAnchor = $(this.groupView.$el[0]).find(".details a");

			$(currAnchor).attr("href" , "#/cat/"+currCATID+"/item/"+this.model.attributes.uniqueId);
			
			this.groupView.render();

		},

		postRating: function(starRating){			
			alert("in post");
		},
		
		initItemView : function(itemObj){
		
			if(this.itemModel === null){ 
				this.itemModel = new ItemModel(itemObj);
				this.model = this.itemModel;
			}
			else{
				this.model = this.itemModel.set(itemObj);
			}
			
			if(this.itemView === null){		
				this.itemView = new ItemView("itemDetailsCont");
						
			}
			
			//this.toggleView(this.itemView, "show");
			//this.toggleView(this.categoryView, "hide");
			debugger;
			if(this.categoryView !== null){
				this.categoryView.hide();
			}

			debugger;

			if(this.collection === null){

			}
			
			
			$(this.itemView.$el[0]).find(".name").text(this.model.attributes.name);
			$(this.itemView.$el[0]).find(".price").text(this.model.attributes.price);
			$(this.itemView.$el[0]).find(".rating").text(this.model.attributes.id);
			$(this.itemView.$el[0]).find(".desc").text(this.model.attributes.desc);
			$(this.itemView.$el[0]).find(".back").attr("href", "#/cat/"+this.collection.getCatID());
			
			this.itemView.render();			
		},

		showItemDetail : function(modelObj){
			alert(modelObj.uniqueId);
		},

		storeRating: function(){
			alert("asdad");
		},

		sortCategory : function(sortType){
			
		},

		initRating : function(modelObj){
			alert(modelObj.name);
		}

	}	
	
	return GroupController;
	
});

	
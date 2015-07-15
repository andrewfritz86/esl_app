console.log("word views linked!");

function WordView(model){
  this.$el = $("<p class='experiment'>");
  this.model = model;
  this.id = model.id;
}


WordView.prototype = {

  template: _.template($("#the-list").html()),

  render: function(){
    var template = this.template({word: this.model});
    this.$el = template;
    return this;
  },

  init: function(){
    this.render();
    wordDiv = $("<div>"+this.$el+"</div>");
    wordDiv.hide().appendTo(".words").fadeIn(500);
    return this;
  },


}

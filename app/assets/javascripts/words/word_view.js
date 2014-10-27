console.log("word views linked!")

function WordView(model){
  this.$el = $("<p>");
  this.model = model;
  this.id = model.id;
}


WordView.prototype = {

  template: _.template($("#the-list").html()),
  //error again here. looks like the template isn't loaded yet

  render: function(){

    var template = this.template({word: this.model});
    this.$el = template;
    return this
  },

  init: function(){
    this.render();
    $(".words").append(this.$el);
    return this;
  }

}

console.log("citation views linked!")

function CitationView(model){
  this.$el = $("<p>");
  this.model = model;
  this.id = model.id;
}


CitationView.prototype = {

  template: _.template($("#citation-template").html()),

  render: function(){
    var temp = this.template({citation: this.model});
    this.$el = $(temp);
    return this;
  },

  init: function(){
    var view = this;
    view.render();
    $(".story").append(view.$el);
    return this;
  }
}

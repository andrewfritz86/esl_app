console.log("citation views linked!")

function CitationView(model){
  this.$el = $("<p>");
  this.model = model;
  this.id = model.id;
}


CitationView.prototype = {

  template: _.template($("#citation-template").html()),

  render: function(){
    var template = this.template({citation: this.model});
    this.$el = $(template);
    return this;
  },

  init: function(){
    var view = this;
    view.render();
    $(".story").append(view.$el);
    return this;
  }

  // init: function(){
  //   // debugger;
  //   this.$el.html(this.model.body)
  //   this.$el.appendTo($(".story"))
  // }
}

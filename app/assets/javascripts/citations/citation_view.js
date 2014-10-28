console.log("citation views linked!")

function CitationView(model){
  this.$el = $("<p>");
  this.model = model;
  this.id = model.id;
}


CitationView.prototype = {

  template: _.template($("#citation-template").html()),

  // render: function(){
  //   return this;
  // },

  init: function(){
    var currentbody = this.model.body;
    $.ajax({
      url: "/highlight",
      data: {text_body: {currentbody: currentbody}},
      dataType: "json",
      context: this,
    }).done(function(data){
      console.log(data)
      orThis = data.body;
    var template = this.template({citation: this.model});
    this.$el = $(template);
    var view = this;
    this.$el = orThis
    $(".story").append(view.$el);
    });
    return this;
  }

}

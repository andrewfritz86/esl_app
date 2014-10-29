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
    //this.$el is a bunch of tml right now
    // $(".story").append(view.$el);
    //create a new element
    newDiv = $("<div>"+this.$el+"</div>");
    newDiv.hide().appendTo(".story").fadeIn(500);
    //set that element's html to $el
    //hide it

    // this.$el.hide().appendTo($(".story")).fadeIn(300);
    });
    return this;
  }

}


function Citation(data){
  this.id = data.id;
  this.body = data.body;
}

Citation.prototype.create = function(){
  var title = $("#title").val();

  $.ajax({
    url: "/citations",
    type: "Post",
    dataType: "json",
    context: this,
    data:{citation: {
            body: this.body,
            title: $("#title").val(),
    }
  }
  }).done(function(data){
    this.id = data.id;
  });
  $("#change-title").text(title);
  $("#title").remove();
  $(".add-title").text(title);
}


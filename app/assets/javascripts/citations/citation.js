console.log("citations linked!")


function Citation(data){
  this.id = data.id;
  this.body = data.body;
}

Citation.prototype.create = function(){
  // debugger
  var title = $("#title").val();

  $.ajax({
    url: "/citations",
    type: "Post",
    dataType: "json",
    context: this,
    data:{citation: {
            body: this.body,
            title: $("#title").val(),
            //will have to put other params in here later
    }
  }
  }).done(function(data){
    this.id = data.id;
    //change headline
    //drop title bar
  });
$(".title-bar").text(title);
$("#title").remove();
}


//update coming later

//destroy coming later

console.log("citations linked!")


function Citation(data){
  this.id = data.id;
  this.body = data.body;
}

Citation.prototype.create = function(){
  $.ajax({
    url: "/citations",
    type: "Post",
    dataType: "json",
    context: this,
    data:{citation: {
            body: this.body
            //will have to put other params in here later
    }
  }
  }).done(function(data){
    this.id = data.id;
  });
}


//update coming later

//destroy coming later

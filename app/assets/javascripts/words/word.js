

function Word(data){
  this.id = data.id;
  this.word = data.word;
  this.definition = data.definition;
}


Word.prototype.count = function(){
    $.ajax({
      url: "/word_count",
      dataType: "json",
    }).done(function(data){
      wordCount = data;
    $(".word-count").text(data);
       })
  },

Word.prototype.create = function(){

  $.ajax({
    url: "/words",
    type: "Post",
    dataType: "json",
    context: this,
    data: {
      word: {definition: this.definition,
            word: this.word,
          }
    }
  }).done(function(data){
    this.id = data.id
  });
}


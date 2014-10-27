console.log("word.js linked!")


//word object constructor
function Word(data){
  this.id = data.id;
  this.word = data.word;//check params for this
  this.definition = data.definition;//can use || statements here if needed
}


//prototype methods for CRUD

Word.prototype.create = function(){

  $.ajax({
    url: "/words",
    type: "Post",
    dataType: "json",
    context: this,
    data: {
      word: {definition: this.definition,
            word: this.word,
            //probably wtill have example line soon
          }
    }
  }).done(function(data){
    this.id = data.id
  })
}

//add rest of crud later, let's just try this

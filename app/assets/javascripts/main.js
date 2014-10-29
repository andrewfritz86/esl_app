console.log('main.js linked');



var eslApp = {};
eslApp.citationNum = 0;
eslApp.citationViews = {};

//citation functions


eslApp.createCitation = function(data){
  var citation = new Citation(data);
  var citationView = new CitationView(citation)
  // debugger
  citationView = citationView.init();
  //eslApp.pushView(citationView)
  return citation;
}

eslApp.loadCitations = function(){
  $.ajax({
    url: "/citations", //in the controller, we will get the user id form aprams, run citations on that user, and serve up that users citations for a given story?
    format: "json",
  }).done(function(data){
    for(var i=0; i < data.length; i++){
      eslApp.createCitation(data[i]);
    }
  })
}

//word functions
eslApp.countWords = function(){
  $.ajax({
    url: "/word_count",
    dataType: "json",
  }).done(function(data){
    wordCount = data;
  $(".word-count").text(data);;
  var count = parseInt($(".word-count").text());







  if(count <= 5){
    console.log('less than 5')
    }else if(count > 5 && count < 10){
      console.log('between 5 and 10')
    }else{
      console.log("more than 10")
    }
















  //logic for parseint, etc should be here
     })
}

eslApp.createWord = function(data){
  var word = new Word(data);
  var wordView = new WordView(word).init();//create word view from model, init it
  return word; //return the model for later chaining
}

eslApp.loadWords = function(data){
  //this will probably make a call to the citations controller again, have a variable called words waiting,
  //or does this go to the words controller? When we create a word and store it, best to store it now with the story ID as a param, can call story.words on a story(have that story ID waiting in sessions?)
  //how can we assign the current story id to each new word object?
  $.ajax({
    url: "/words",
    format: "json",
  }).done(function(data){
    for(i = 0, len = data.length; i < len; i++){
      eslApp.createWord(data[i]);
    }
  });
}


$(function(){

  //faders
  $("#test p").addClass("load")
  $("h2").addClass("load")
  //load DOM elements we might be hitting frequently
  eslApp.$button = $("#add_snippet");
  eslApp.$form = $(".story-form");
  eslApp.$newWord = $(".new-word")
  eslApp.$button.on("click", function(e){
    e.preventDefault();
    var citationBody = $("#main").val();
    $("#main").val("");
    eslApp.createCitation({body: citationBody}).create(); //later we will ahve to pass word, user id,etc
  })

  console.log('setting a listener on new word')
  eslApp.$newWord.on("click", function(e){
    eslApp.countWords();//grabs words for counter
    console.log("grabbing a new word");
    $.ajax({
      url: "/random_word",
      format: "json",
    }).done(function(data){
      word = data.word;
      console.log("off to the api for a definition");
      $.ajax({
        url: "/definition",
        format: "json",
        data: {word:{newWord: word}},
      }).done(function(data){
        definition = data.definition
        //now we have a word and definition, will have
        //to eventually create model and view for those
        eslApp.createWord({word: word, definition: definition}).create();        //something here is making it make additoinaly api calls
      })
    });
 })
  eslApp.loadCitations();
  eslApp.loadWords();
  eslApp.countWords();

  //


});











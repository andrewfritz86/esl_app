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

eslApp.createWord = function(data){
  var word = new Word(data);//create the model here, we will pass it a hash like ({word: RESPONSE.word, definition: RESPONSE.definition})
  debugger
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
  console.log("dom loaded succesfully");
   eslApp.$button = $("#add_snippet");
   eslApp.$form = $(".story-form");
   eslApp.$newWord = $(".new-word")

  eslApp.$button.on("click", function(e){
    e.preventDefault();
    var citationBody = $("#main").val();
    $("#main").val("");
    eslApp.createCitation({body: citationBody}).create(); //later we will ahve to pass word, user id,etc
    // .create();
  })

  eslApp.$newWord.on("click", function(e){
    console.log("grabbing a new word");
  key = "64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e"
  $.ajax({
    url: "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=" + key,
    format: "json",
  }).done(function(data){
    // debugger
     word = data.word;
    $.ajax({
      url: "http://api.wordnik.com:80/v4/word.json/"+ word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key="+ key,
      format: "json",
    }).done(function(data){
      definition = data[0].text
      //now we have a word and definition, will have
      //to eventually create model and view for those
      eslApp.createWord({word: word, definition: definition}).create();
    })
  })

  })
eslApp.loadCitations();
eslApp.loadWords();

});











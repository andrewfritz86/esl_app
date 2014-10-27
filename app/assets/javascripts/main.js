console.log('main.js linked');



var eslApp = {};
eslApp.citationNum = 0;
eslApp.citationViews = {};

//


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
      // debugger
      wordLi = $("<li>");
      wordLi.html(word);
      definitionLi = $("<li>");
      definitionLi.html(definition);
      wordLi.appendTo($(".words"));
      definitionLi.appendTo($(".words"));

    })
  })

  })
//eslApp.loadCitations();

});










// $(document).ready(function(){
//   // debugger
//   console.log('2. page (DOM) loaded: now running onload...');
  // var button = $("#add_snippet")
  // var dur = $(".story-form")
//   button.on('click',function(e){
//     e.preventDefault();
//     $input = $("#main").val()
//     console.log("didn't post!")
//     $.ajax({
//       url: "/citations",
//       type: "POST",
//       dataType: "JSON",
//       data: {snippet: {body: $input}}
//     }).done(function(data){
//       $newP = $("<p>");
//       $newP.text(data.body)
//       $newP.appendTo($(".story"))
//       $("#main").val("")

//     })
//   })

// });

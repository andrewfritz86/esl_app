console.log('main.js linked');



var eslApp = {};
eslApp.citationNum = 0;
eslApp.citationViews = {};

//citation functions


eslApp.createCitation = function(data){
  var citation = new Citation(data);
  var citationView = new CitationView(citation);
  citationView = citationView.init();
  eslApp.countWords();
  return citation;
}

eslApp.wordScore = function(data){
  $.ajax({
    url:'/wordscore',
    format: "json",
  }).done(function(data){
  })
}


eslApp.loadCitations = function(){
  $.ajax({
    url: "/citations",
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
    $(".ohgod").remove();
  $("<h4 class='ohgod'>"+data+"</h4>").hide().appendTo(".count-chocula").fadeIn(800);
  var count = parseInt($(".word-count").text());
     })
}

eslApp.createWord = function(data){
  var word = new Word(data);
  var wordView = new WordView(word).init();//create word view from model, init it
  return word; //return the model for later chaining
}

eslApp.loadWords = function(data){
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
  $("#test p").addClass("load")
  $("h2").addClass("load")
  eslApp.$button = $("#add_snippet");
  eslApp.$form = $(".story-form");
  eslApp.$newWord = $(".new-word-button")
  eslApp.$button.on("click", function(e){
    e.preventDefault();
    var citationBody = $("#main").val();
    $("#main").val("");
    eslApp.createCitation({body: citationBody}).create();
  })
  eslApp.$newWord.on("click", function(e){
    $.ajax({
      url: "/random_word",
      format: "json",
    }).done(function(data){
      word = data.word;
      $.ajax({
        url: "/definition",
        format: "json",
        data: {word:{newWord: word}},
      }).done(function(data){
        definition = data.definition
        eslApp.createWord({word: word, definition: definition}).create();
      })
    });
 })
  eslApp.loadCitations();
  eslApp.loadWords();
  eslApp.countWords();

});











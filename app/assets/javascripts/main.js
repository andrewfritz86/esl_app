console.log('main.js linked');
if($ !== undefined) { console.log('  jQuery library loaded!');     }



var eslApp = {};
eslApp.citationNum = 0;
eslApp.citationViews = {};

//


eslApp.createCitation = function(data){
  var citation = new Citation(data);
  var citationView = new CitationView(citation)
  debugger
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
   eslApp.$dur = $(".story-form");

  eslApp.$button.on("click", function(e){
    e.preventDefault();
    var citationBody = $("#main").val();
    $("#main").val("");
    eslApp.createCitation({body: citationBody}) //later we will ahve to pass word, user id,etc
    .create();
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

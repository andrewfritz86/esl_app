console.log('main.js linked');
if($ !== undefined) { console.log('  jQuery library loaded!');     }



$(function(){
  console.log('2. page (DOM) loaded: now running onload...');
  var button = $("#add_snippet")
  var dur = $(".story-form")
  // debugger
  button.on('submit',function(e){
    e.preventDefault();
    $input = $("#input").val()
    // debugger
    console.log("didn't post!")
    $.ajax({
      url: "/snippets", //or maybe we DO nest snippets/then it's just stories/id/snippet
      type: "POST",
      dataType: "JSON",
      data: {snippet: {body: $input}}
    }).done(function(data){

      //here is where we will start appending the snippet to the dom
    })
  })

});


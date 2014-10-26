console.log('main.js linked');
if($ !== undefined) { console.log('  jQuery library loaded!');     }



$(document).ready(function(){
  // debugger
  console.log('2. page (DOM) loaded: now running onload...');
  var button = $("#add_snippet")
  var dur = $(".story-form")
  button.on('click',function(e){
    e.preventDefault();
    $input = $("#main").val()
    console.log("didn't post!")
    $.ajax({
      url: "/citations",
      type: "POST",
      dataType: "JSON",
      data: {snippet: {body: $input}}
    }).done(function(data){
      $newP = $("<p>");
      $newP.text(data.body)
      $newP.appendTo($(".story"))
      $("#main").val("")

    })
  })

});

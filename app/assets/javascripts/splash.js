console.log("splash linked!")

$(document).ready(function(){

  console.log("splash ready");

    paraOne = $("<p class='splash-fade'> Welcome to <span class='highlight'>StoryBuilder</span> </p>");
    paraOne.hide().appendTo(".welcome-box").fadeIn(3000,function(){

    paraTwo = $("<p class='splash-fade'> An app for for students learning <span class='highlight'>English</span> as a second language</p>");
    paraTwo.hide().appendTo(".welcome-box").fadeIn(3000,function(){

    paraThree = $("<p class='splash-fade'> Click anywhere to <span class='highlight'>enter</span>!</p>")
    paraThree.hide().appendTo(".welcome-box").fadeIn(3000);
    });
    });

    $(".welcome-box").on("click", function(){
      window.location = "/"
    })


});



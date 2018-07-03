$(document).ready(function(){
  $("#home").click(function(){
    $("#contactContent").animate({height: "0vh"});
    $("#werkContent").animate({height: "0vh"});
    $("#overContent").animate({height: "0vh"}).promise().done(function(){    
      $("#werkContent").css("display", "none");
      $("#overContent").css("display", "none");
      $("#contactContent").css("display", "none");
    });
  });

  $("#werk").click(function(){
    $("#overContent").animate({height: "0vh"});
    $("#contactContent").animate({height: "0vh"}).promise().done(function(){
      $("#werkContent").css("display", "block");
      $("#overContent").css("display", "none");
      $("#contactContent").css("display", "none");

      $("#werkContent").animate({height: "70vh"});
    });
  });

  $("#over").click(function(){
    $("#contactContent").animate({height: "0vh"});
    $("#werkContent").animate({height: "0vh"}).promise().done(function(){
      $("#werkContent").css("display", "none");
      $("#overContent").css("display", "block");
      $("#contactContent").css("display", "none");

      $("#overContent").animate({height: "70vh"});
    });
  });

  $("#contact").click(function(){
    $("#werkContent").animate({height: "0vh"});
    $("#overContent").animate({height: "0vh"}).promise().done(function(){
      $("#werkContent").css("display", "none");
      $("#overContent").css("display", "none");
      $("#contactContent").css("display", "block");

      $("#contactContent").animate({height: "70vh"});
    });
  });
});


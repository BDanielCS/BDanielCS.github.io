// Fade in functionality on page load
// load in each item with its successor loading after
$(document).ready(function() {

   let fadeInHeader = function() { $("div.jumbotron").fadeIn(1000); };
   let fadeInArticle = function() { $("article").fadeIn(2000); };
   let fadeInFooter = function() { $("footer").fadeIn(2500); };

   hideFadeIns();
   $("body").show(0);
   setTimeout(fadeInHeader, 100);
   setTimeout(fadeInArticle, 200);
   setTimeout(fadeInFooter, 300);

});

function hideFadeIns() {
   $("div.jumbotron").hide(0);
   $("article").hide(0);
   $("footer").hide(0);
}

function switchHome() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "../index.html";
      }
   });

   let page = $("body");
   page.css({"background-color" : "#111746",
            "display":" "});
   timeline.to(page, .5, { autoAlpha: 0 });
}

function switchSoftware() {

}
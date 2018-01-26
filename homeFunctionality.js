// Fade in functionality on page load
// load in each item with its successor loading after
$(document).ready(function() {

   let fadeInHeader = function() { $("div.jumbotron").fadeIn(1000); };
   let fadeInArticle = function() { $("article").fadeIn(2000); };
   let fadeInFooter = function() { $("footer").fadeIn(2500); };

   hideFadeIns();
   setTimeout(fadeInHeader, 100);
   setTimeout(fadeInArticle, 200);
   setTimeout(fadeInFooter, 300);

});

function hideFadeIns() {
   $("div.jumbotron").hide(0);
   $("article").hide(0);
   $("footer").hide(0);
}
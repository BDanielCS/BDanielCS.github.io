// Fade in functionality on page load
// load in each item with its successor loading after


let fadeInHeader = function() { $("div.jumbotron").fadeIn(1000); };
let fadeInArticle = function() { $("article").fadeIn(2000); };
let fadeInFooter = function() { $("footer").fadeIn(2500); };

function hideFadeIns() {
   $("div.jumbotron").hide();
   $("article").hide();
   $("footer").hide();
}

hideFadeIns();
setTimeout(fadeInHeader, 100);
setTimeout(fadeInArticle, 200);
setTimeout(fadeInFooter, 300);
// Fade in functionality on page load
// load in each item with its successor loading after
$(document).ready(function() {
   globalFadeIn();
});

//load the jumbotron, main body text, and bottom
// section in
function globalFadeIn(){
	let fadeInHeader = function() { $("div.jumbotron").fadeIn(1000); };
   let fadeInArticle = function() { $("article").fadeIn(2000); };
   let fadeInFooter = function() { $("footer").fadeIn(2500); };

   hideFadeIns();
   $("body").show(0);
   setTimeout(fadeInHeader, 100);
   setTimeout(fadeInArticle, 200);
   setTimeout(fadeInFooter, 300);
}

function hideFadeIns() {
   $("div.jumbotron").hide(0);
   $("article").hide(0);
   $("footer").hide(0);
}

function switchHome() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "../index.html";
         $.getScript('index.js', function() {
            homeScreenFadeIn();
         });
      }
   });

   let page = $("body");
   page.css({"background-color" : "#111746",
            "display":" "});
   timeline.to(page, .5, { autoAlpha: 0 });
}

function switchSoftware() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "./software.html";
         $.getScript('software.js', function() {
            globalFadeIn();
         });
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}

function crimeSwitch(){
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "https://bdanielcs.github.io/analyses/Project_4";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}

function mlSwitch(){
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "https://bdanielcs.github.io/analyses/Project_3";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}

function cdcSwitch() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "https://bdanielcs.github.io/analyses/Final_Project";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}

function housingSwitch() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "https://bdanielcs.github.io/analyses/Housing_Analysis";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}


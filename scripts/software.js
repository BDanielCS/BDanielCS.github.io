history.navigationMode = 'compatible';

$(document).ready(function() {
   pageFadeIn();
});

// fade in all items of the page
// inidivually and stylistically
function pageFadeIn() {
   let nav = $("nav");
   let header = $(".jumbotron");
   let pwa = $("#first");
   let site = $("#second");
   let aiProject = $("#third");
   let foot = $("footer");
   let trans = new TimelineLite();

   trans.to(nav, .5, { autoAlpha: 1 })
      .to(header, 1.2, { autoAlpha: 1 })
      .to(pwa, 1.2, { autoAlpha: 1 }, "-=.8")
      .to(site, 1.2, { autoAlpha: 1 }, "-=1")
      .to(aiProject, 1.2, { autoAlpha: 1 }, "-=.8")
      .to(foot, 1, { autoAlpha: 1 });
}

//transition back to home page
function switchHome() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "../index.html";
      }
   });

   let page = $("body");
   let buttons = $("button");
   page.css({
      "background-color": "#111746",
      "display": " "
   });
   buttons.css({ "opacity": "0" });
   timeline.to(page, .5, { autoAlpha: 0 });
}

//transition to analysis page
function switchAnalysis() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "./analysis.html";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}

function PWA() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "https://github.com/BDanielCS/PersonalizedWeatherAssistant";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}

function AI() {

}

function mySite() {
   let timeline = new TimelineLite({
      onComplete: function() {
         document.location.href = "https://github.com/BDanielCS/BDanielCS.github.io";
      }
   });

   let page = $("body");
   timeline.to(page, .5, { autoAlpha: 0 });
}
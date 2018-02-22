/*
 * Load in animation of items
 */
$(document).ready(function() {

   //start particle animation
   configParticles();

   //grab items we will be animating on entry
   let dataButton = $('#analysis');
   let softwareButton = $('#softwareDev');
   let titleContainer = $(".frostedTitleBox");
   let title = $('header');
   let explainationText = $('p');
   let particleEffect = $("#particles-js");

   //animate to center of screen
   let screenHeight = $(window).height();
   let screenWidth = $(window).width();
   let tl = new TimelineLite();

   // button animation load in
   tl.to(dataButton, 1.5, {x:screenWidth * -.1, y: screenHeight * .4, autoAlpha: 1, ease: Circ.easeIn})
      .to(softwareButton, 1.5, {x:screenWidth * .1, y: screenHeight * .4, autoAlpha: 1, ease: Circ.easeIn }, "-=.5")
      .to(titleContainer, 1, {autoAlpha: 1})
      .to(title, 1.5, { autoAlpha: 1 }, "-=.5")
      .to(explainationText, 1, {autoAlpha: 1}, "-=1.3")
      .to(particleEffect, 3, {autoAlpha: 1}, "-=4");

});

function configParticles() {
   // ParticlesJS Config.
   particlesJS("particles-js", {
      "particles": {
         "number": {
            "value": 20,
            "density": {
               "enable": true,
               "value_area": 300
            }
         },
         "color": {
            "value": "#dad003"
         },
         "shape": {
            "type": "circle",
            "stroke": {
               "width": 0,
               "color": "#000000"
            },
            "polygon": {
               "nb_sides": 5
            },
         },
         "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
            }
         },
         "size": {
            "value": 4,
            "random": true,
            "anim": {
               "enable": false,
               "speed": 20,
               "size_min": 0.1,
               "sync": false
            }
         },
         "line_linked": {
            "enable": true,
            "distance": 250,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
         },
         "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
            }
         }
      },
      "interactivity": {
         "detect_on": "canvas",
         "events": {
            "onhover": {
               "enable": false,
               "mode": "grab"
            },
            "onclick": {
               "enable": false,
               "mode": "push"
            },
            "resize": true
         },
         "modes": {
            "grab": {
               "distance": 140,
               "line_linked": {
                  "opacity": 1
               }
            },
            "bubble": {
               "distance": 400,
               "size": 40,
               "duration": 2,
               "opacity": 8,
               "speed": 4
            },
            "repulse": {
               "distance": 200,
               "duration": 0.4
            },
            "push": {
               "particles_nb": 4
            },
            "remove": {
               "particles_nb": 2
            }
         }
      },
      "retina_detect": true
   });
}

//switch to analysis page after fade out
function switchExploratory(){
   let timeline = new TimelineLite({onComplete:function () {
      document.location.href = "htmlPages/analysis.html";
   }});

   let page = $("body");
   timeline.to(page, .5, {autoAlpha: 0});
}

//swich to software dev page
function switchSoftware(){
let timeline = new TimelineLite({onComplete:function () {
      document.location.href = "htmlPages/software.html";
   }});

   let page = $("body");
   timeline.to(page, .5, {autoAlpha: 0});
}
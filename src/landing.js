/* ----------Landing page javaScript and jQuery----------- */

// Jquery
/*
$(function() {
  // Slide main logo image
  slideImage('#candy--gun');
  // fade section landing
  fadePage();
  // set timeout for window location
  setTimeout(() => {
    windowLocation('#section__landing');
  }, 3200);

  // Function slide animation of image
  function slideImage(element) {
    $(element).animate(
      {
        right: '-24rem'
      },
      500,
      function() {
        $(element).animate(
          {
            right: '-26rem'
          },
          200
        );
      }
    );
  }

  // Current page fadeout
  function fadePage() {
    var fadeTarget = document.querySelector('#section__landing');
    var fadeEffect = setInterval(function() {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
      }
    }, 800);
  }

  // Function for page location
  function windowLocation(element) {
    window.location = "./landing.html";
  }
});

*/

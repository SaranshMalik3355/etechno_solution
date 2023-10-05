// Selecting html elements
// alert("hello there");

const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

// change header backgroud
function scrollHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", scrollHeader);

//TYPE WRITING
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// products

let filterItems = document.querySelectorAll(".products_filters li");

function activeproducts() {
  filterItems.forEach((el) => {
    el.classList.remove("filter-active");
    this.classList.add("filter-active");
  });
}

filterItems.forEach((el) => {
  el.addEventListener("click", activeproducts);
});

//MIXIT UP

// let mixerproducts = mixitup(".products_wrap-container", {
//   selectors: {
//     target: ".products_item",
//   },
//   animation: {
//     duration: 300,
//   },
// });

// //counter

(function ($) {
  "use strict";
  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */
    $this.html(++current);
    if (current > $this.data("count")) {
      $this.html($this.data("count"));
    } else {
      setTimeout(function () {
        count($this);
      }, 50);
    }
  }
  $(".stat-count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
})(jQuery);

// //progress bar js

// $(document).ready(function ($) {
//   function animateElements() {
//     $(".progressbar").each(function () {
//       var elementPos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       var percent = $(this).find(".circle").attr("data-percent");
//       var animate = $(this).data("animate");
//       if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
//         $(this).data("animate", true);
//         $(this)
//           .find(".circle")
//           .circleProgress({
//             // startAngle: -Math.PI / 2,
//             value: percent / 100,
//             size: 400,
//             thickness: 15,
//             fill: {
//               color: "#f47a14",
//             },
//           })
//           .on(
//             "circle-animation-progress",
//             function (event, progress, stepValue) {
//               $(this)
//                 .find("strong")
//                 .text((stepValue * 100).toFixed(0) + "%");
//             }
//           )
//           .stop();
//       }
//     });
//   }

//   animateElements();
//   $(window).scroll(animateElements);
// });

// //accordion
// const accordionHeaders = document.querySelectorAll(".accordion-header");
// accordionHeaders.forEach((header) => {
//   header.addEventListener("click", function () {
//     const content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// });

// swiper
// var swiper = new Swiper(".swiper", {
//   loop: true,
//   freeMode: true,

//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// /*scroll to top*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#arrow ion-icon").fadeIn();
    } else {
      $("#arrow ion-icon").fadeOut();
    }
  });
  $("#arrow ion-icon").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

// // scroll to top button
// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// migration accordian
const migaccordionButtons = document.querySelectorAll(".mig-accordion-button");
migaccordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const migaccordion = button.parentElement;
    migaccordion.classList.toggle("open");
    const icon = button.querySelector(".mig-accordion-icon");
    if (migaccordion.classList.contains("open")) {
      icon.innerHTML = "&#9650;"; // Change to "▲" when open
    } else {
      icon.innerHTML = "&#9660;"; // Change to "▼" when closed
    }
    const migcontent = migaccordion.querySelector(".mig-accordion-content");
    if (migaccordion.classList.contains("open")) {
      migcontent.style.display = "block";
    } else {
      migcontent.style.display = "none";
    }
  });
});

//online table js
// $(function(){
//   $('#keywords').tablesorter();
// });

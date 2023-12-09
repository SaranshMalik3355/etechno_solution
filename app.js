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

// type
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

// products;

// let filterItems = document.querySelectorAll(".products_filters li");

// function activeproducts() {
//   filterItems.forEach((el) => {
//     el.classList.remove("filter-active");
//     this.classList.add("filter-active");
//   });
// }

// filterItems.forEach((el) => {
//   el.addEventListener("click", activeproducts);
// });

// //MIXIT UP

// let mixerproducts = mixitup(".products_wrap-container", {
//   selectors: {
//     target: ".products_item",
//   },
//   animation: {
//     duration: 300,
//   },
// });

// scroll to top

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $("#arrow ion-icon").fadeIn();
//     } else {
//       $("#arrow ion-icon").fadeOut();
//     }
//   });
//   $("#arrow ion-icon").on("click", function () {
//     $("html,body").animate(
//       {
//         scrollTop: 0,
//       },
//       600
//     );
//     return false;
//   });
// });
// migration accordian
// const migaccordionButtons = document.querySelectorAll(".mig-accordion-button");
// migaccordionButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const migaccordion = button.parentElement;
//     migaccordion.classList.toggle("open");
//     const icon = button.querySelector(".mig-accordion-icon");
//     if (migaccordion.classList.contains("open")) {
//       icon.innerHTML = "&#9650;"; // Change to "▲" when open
//     } else {
//       icon.innerHTML = "&#9660;"; // Change to "▼" when closed
//     }
//     const migcontent = migaccordion.querySelector(".mig-accordion-content");
//     if (migaccordion.classList.contains("open")) {
//       migcontent.style.display = "block";
//     } else {
//       migcontent.style.display = "none";
//     }
//   });
// });
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
configObj = {
  buttonD:
    "M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z",
  buttonT:
    "translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)",
  shadowSize: "none",
  roundnessSize: "40px",
  buttonDToBottom: "32px",
  buttonDToRight: "32px",
  selectedBackgroundColor: "var(--main-color)",
  selectedIconColor: "#ffffff",
  buttonWidth: "60px",
  buttonHeight: "60px",
  svgWidth: "52px",
  svgHeight: "52px",
};
function createButton(obj, pageSimulator) {
  const body = document.querySelector("body");
  backToTopButton = document.createElement("span");
  backToTopButton.classList.add("softr-back-to-top-button");
  backToTopButton.id = "softr-back-to-top-button";
  pageSimulator
    ? pageSimulator.appendChild(backToTopButton)
    : body.appendChild(backToTopButton);
  backToTopButton.style.width = obj.buttonWidth;
  backToTopButton.style.height = obj.buttonHeight;
  backToTopButton.style.marginRight = obj.buttonDToRight;
  backToTopButton.style.marginBottom = obj.buttonDToBottom;
  backToTopButton.style.borderRadius = obj.roundnessSize;
  backToTopButton.style.boxShadow = obj.shadowSize;
  backToTopButton.style.color = obj.selectedBackgroundColor;
  backToTopButton.style.backgroundColor = obj.selectedBackgroundColor;
  pageSimulator
    ? (backToTopButton.style.position = "absolute")
    : (backToTopButton.style.position = "fixed");
  backToTopButton.style.outline = "none";
  backToTopButton.style.bottom = "0px";
  backToTopButton.style.right = "0px";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.textAlign = "center";
  backToTopButton.style.border = "solid 2px currentColor";
  backToTopButton.innerHTML =
    '<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>';
  backToTopButtonSvg = document.querySelector(".back-to-top-button-svg");
  backToTopButtonSvg.style.verticalAlign = "middle";
  backToTopButtonSvg.style.margin = "auto";
  backToTopButtonSvg.style.justifyContent = "center";
  backToTopButtonSvg.style.width = obj.svgWidth;
  backToTopButtonSvg.style.height = obj.svgHeight;
  backToTopButton.appendChild(backToTopButtonSvg);
  backToTopButtonImg = document.querySelector(".back-to-top-button-img");
  backToTopButtonImg.style.fill = obj.selectedIconColor;
  backToTopButtonSvg.appendChild(backToTopButtonImg);
  backToTopButtonImg.setAttribute("d", obj.buttonD);
  backToTopButtonImg.setAttribute("transform", obj.buttonT);
  if (!pageSimulator) {
    backToTopButton.style.display = "none";
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
    backToTopButton.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }
}
document.addEventListener("DOMContentLoaded", function () {
  createButton(configObj, null);
});

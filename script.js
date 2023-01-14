// to set sticky the navbar only when the user scroll down
let beforeScrollY = 0;
function stickyNavbar() {
  let nav = document.getElementsByTagName("nav")[0];
  let actualSrollY = window.scrollY;

  if (actualSrollY > beforeScrollY) {
    //down scroll
    beforeScrollY = actualSrollY;
    if (window.scrollY > 350) {
      // change 300 for about me height
      nav.classList.remove("scrolled-up");
      nav.classList.add("scrolled-down");
    }
  } else {
    //up scroll
    nav.classList.add("fixed-top");
    nav.classList.remove("scrolled-down");
    nav.classList.add("scrolled-up");
    beforeScrollY = actualSrollY;
  }
}



//fix nav bar items when window.innerWidth<992
window.onresize = modifyNavItems;

function modifyNavItems() {
  if (window.innerWidth < 992) {
    document.getElementById("login-section").classList.remove("d-flex");
    document
      .getElementById("login-section")
      .classList.remove("align-items-center");
    document.getElementById("navbarTogglerDemo02").classList.remove("d-flex");
    document
      .getElementById("navbarTogglerDemo02")
      .classList.remove("justify-content-between");
    document.getElementById("SunMoon").classList.add("ms-3");
  } else {
    document.getElementById("login-section").classList.add("d-flex");
    document
      .getElementById("login-section")
      .classList.add("align-items-center");
    document.getElementById("navbarTogglerDemo02").classList.add("d-flex");
    document
      .getElementById("navbarTogglerDemo02")
      .classList.add("justify-content-between");
  }
}

window.addEventListener("scroll", function (event) {
  let nav = document.getElementsByTagName("nav")[0];
  if (window.innerWidth > 992) {
    //d-flex align-items-center
    stickyNavbar();
  } else {
    nav.classList.add("fixed-top");
    nav.classList.remove("scrolled-down");
    nav.classList.remove("scrolled-up");
  }
});

// function to hide svg in listgroup when user clicks a button of the listgroup and set active the button

function hideSvg() {
  let htmlButtonsCollection = document.getElementById("list-tab").children;
  let buttonsArray = Array.prototype.slice.call(htmlButtonsCollection);

  buttonsArray.forEach(function (element) {
    if (!element.classList.contains("active")) {
      element.children[0].style.display = "none";
      element.style.color = "#fff";
    } else {
      element.children[0].style.display = "block";
      element.style.color = "#64ffda";
    }
  });
}

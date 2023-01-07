// to set sticky the navbar only when the user scroll down
let beforeScrollY = 0;
function stickyNavbar() {
  let nav = document.getElementsByTagName("nav")[0];
  let actualSrollY = window.scrollY;
  if (actualSrollY > beforeScrollY) {
    //down scroll
    beforeScrollY = actualSrollY;
    nav.classList.add("fixed-top");
    if (window.scrollY > 300) { // change 300 for about me height 
      nav.classList.remove("scrolled-up");
      nav.classList.add("scrolled-down");
    }
  } else {
    //up scroll
    nav.classList.remove("scrolled-down");
    nav.classList.add("scrolled-up");
    beforeScrollY = actualSrollY;
  }
}
window.addEventListener("scroll", function (event) {
  stickyNavbar();
});

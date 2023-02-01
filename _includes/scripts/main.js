// Initialize on-scroll animation

AOS.init({ duration: 1000 });


// Keep track of cookies by using local storage for now until jekyll implementation

const cookieContainer = document.querySelector(".banner");
const cookieButton = document.querySelector(".action__btn");
setTimeout(() => {
  const isCookie = localStorage.getItem("cookieBannerDisplayed");
  if (isCookie === "true") {
    cookieContainer.style.display = "none";
  }
}, 0);


cookieButton.addEventListener("click", () => {
  cookieContainer.style.display = "none";
  localStorage.setItem("cookieBannerDisplayed", "true");
});


// If scrolling down, hide navbar, if scrolling up, show navbar;

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-161.78px";
  }
  prevScrollpos = currentScrollPos;
};

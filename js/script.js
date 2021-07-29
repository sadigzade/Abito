const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth
  document.body.dbScrollY = window.scrollY
  document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        hight: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `
}

const enableScroll = () => {
  document.body.style.cssText = ''
  window.scroll({
    top: document.body.dbScrollY
  })
};
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});;
const burger = document.querySelector('.button-menu__wrapper');
const navbarPanel = document.querySelector('.navbar-panel');

burger.addEventListener("click", () => {
  burger.classList.toggle('open');
  navbarPanel.classList.toggle('open');

  if (burger.matches('.open') && navbarPanel.matches('.open')) {
    disableScroll();
  } else {
    enableScroll();
  }
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});;

const likeIcons = document.querySelectorAll('.like-icon');

for (let like of likeIcons) {
  like.addEventListener("click", () => {
    like.classList.toggle("active");
  })
}
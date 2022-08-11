/*============ LIGHT THEME ============*/
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.name = "moon-sharp";
  } else {
    icon.name = "sunny-sharp";
  }
};

/*============ MENU NAVBAR MOBILE ============*/
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
menu.addEventListener("click", toggleMenu);

/*============ HOME H1 TYPEWRITER ============*/

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 300 * i)
  );
  setInterval(() => typeWriter(el), infinity);
}

typeWriter(typewriter);

/*============ HOME H1 TYPEWRITER ============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

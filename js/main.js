const nav = document.querySelector("#nav");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    if (!nav.classList.contains("scrolled-down")) {
      nav.classList.add("scrolled-down");
    }
  } else {
    if (nav.classList.contains("scrolled-down")) {
      nav.classList.remove("scrolled-down");
    }
  }
};
document.addEventListener("scroll", onScroll);
const button = document.querySelector("#button");
const hamburger = document.querySelector("#hamburger");
const cross = document.querySelector("#cross");
const link = document.querySelector(".link");

button.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  link.classList.toggle("hidden");
});

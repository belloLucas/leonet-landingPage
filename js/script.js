const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollingOnClick);
});

function getScrollTop(elementTarget) {
  const id = elementTarget.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollingOnClick(e) {
  e.preventDefault();
  const sectionTo = getScrollTop(e.target) - 70;
  scrollToPos(sectionTo);
}

function scrollToPos(sectionTo) {
  window.scroll({
    top: sectionTo,
    behavior: "smooth",
  });
}

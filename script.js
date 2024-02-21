const downArrow = document.getElementsByClassName("down-arrow__icon");

downArrow.addEventListener("click", function() {
  window.scrollBy({
    bottom: window.innerHeight,
    behavior: "smooth"
  });
});
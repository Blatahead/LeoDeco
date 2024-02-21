const downArrow = document.getElementById("#down-arrow");

downArrow.addEventListener("click", function() {
  window.scrollBy({
    top: 0,
    behavior: "smooth"
  });
});
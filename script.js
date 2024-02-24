var heightDivHistoryTitle = document.getElementById("history-title").offsetHeight;

var newHeightDivHistoryText = 100-heightDivHistoryTitle+'vh';

document.getElementById("history-text").style.height = newHeightDivHistoryText;

const downArrow = document.getElementById("down-arrow");

downArrow.addEventListener("click", function () {
	window.scrollBy({
		top: window.innerHeight,
		behavior: "smooth"
	});
});

const navHistory = document.getElementById("to-history");

navHistory.addEventListener("click", function () {
	window.scrollBy({
		top: window.innerHeight,
		behavior: "smooth"
	});
});
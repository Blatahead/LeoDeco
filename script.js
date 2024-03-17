var heightDivHistoryTitle = document.getElementById("history-title").offsetHeight;

var newHeightDivHistoryText = 100-heightDivHistoryTitle+'vh';

document.getElementById("history-text").style.height = newHeightDivHistoryText;


const downArrowProducts = document.getElementById("down-arrow-to-products");

downArrowProducts.addEventListener("click", function () {
	window.scrollBy({
		top: window.innerHeight,
		behavior: "smooth"
	});
});
const downArrowTeam = document.getElementById("down-arrow-to-team");

downArrowTeam.addEventListener("click", function () {
	window.scrollBy({
		top: window.innerHeight,
		behavior: "smooth"
	});
});
const downArrowHistory = document.getElementById("down-arrow-to-history");

downArrowHistory.addEventListener("click", function () {
	window.scrollBy({
		top: window.innerHeight,
		behavior: "smooth"
	});
});




// Gérer l'apparition de la team
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if(entry.isIntersecting){
			entry.target.classList.add('show');
		}else{
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var burgerState = false
function BurgerTranslate(){
	if(burgerState==false){
		document.getElementById("navbar-nav").style.right="0%"
		burgerState=true
	}else{
		document.getElementById("navbar-nav").style.right="-100%"
		burgerState=false
	}
}

function CloseNavBar(){
	document.getElementById("navbar-nav").style.right="-100%"
	burgerState=false
}

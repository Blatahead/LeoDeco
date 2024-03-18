var heightDivHistoryTitle = document.getElementById("history-title").offsetHeight;

var newHeightDivHistoryText = 100-heightDivHistoryTitle+'vh';

document.getElementById("history-text").style.height = newHeightDivHistoryText;


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


// popup pour la vue 3D
document.addEventListener('DOMContentLoaded', function() {
    var imgProducts = document.querySelectorAll('.img_product');
    imgProducts.forEach(function(imgProduct) {
        imgProduct.addEventListener('click', function() {
            document.getElementById('popup').style.display = 'block';
        });
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.addEventListener("click", meni) 
function meni(){
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", popup);

function popup(){
	let ime = document.getElementById("ime");
	let broj = document.getElementById("broj");
	let email = document.getElementById("email");
	let poruka = document.getElementById("poruka");
	alert("Ime i Prezime: "+ime.value +" Broj telefona: "+broj.value +" Email: "+email.value +" Poruka: "+poruka.value);
	ime.value="";
	broj.value="";
	email.value="";
	poruka.value="";
	btn.innerHTML="Uspešno poslato!"
	document.querySelector(".btn").style.backgroundColor = "#29fd53";
	document.querySelector(".btn").style.color = "black";
}


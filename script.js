
document.addEventListener('DOMContentLoaded', function() {
	const slide_left = document.getElementById("slide_left");
	const slide_right = document.getElementById("slide_right");
	const all_slide = document.getElementsByClassName("slide");
	let active = document.querySelector(".active");
	const dots = document.getElementById("dots");
	let chceked_dot = document.getElementsByClassName("one_dot");
	
		// dla kazdego slajdu utworz nowy input i wyswietl go w divie "dots"
		for (i=0; i < all_slide.length; i++ ) {	
		let one_dot = document.createElement("input");	
		one_dot.setAttribute("type", "radio");	
		one_dot.setAttribute("name", "one_dot");	
		one_dot.classList.add("one_dot");						
		let appended_dot = all_slide[i].appendChild(one_dot);
		document.getElementById("dots").append(appended_dot);
		} 
	
	chceked_dot[0].checked = true;
	
	slide_right.addEventListener("click", scroll_right );
	slide_left.addEventListener("click", scroll_left );
	dots.addEventListener("click", dots_slider );
	
	// Przewijanie slajdow w lewo	
	function scroll_left() { 
		if (all_slide[0].classList.contains("active")) {
			all_slide[chceked_dot.length-1].classList.add("active");
			active.classList.remove("active");											
			active = document.querySelector(".active");
			for (i=0; i < chceked_dot.length; i++ ) {
				if (chceked_dot[0].checked) {
					chceked_dot[chceked_dot.length-1].checked = true;
			return;
		}}
		}
		active.previousElementSibling.classList.add("active");
		active.classList.remove("active");
		active = document.querySelector(".active");	
		
		for (i=0; i < chceked_dot.length; i++ ) {
		if (chceked_dot[i].checked) {
			chceked_dot[i].previousElementSibling.checked = true;
			return;
	}}
	}
	// Przewijanie slajdow w prawo
	function scroll_right() {
			if (all_slide[all_slide.length-1].classList.contains("active")) {
			all_slide[0].classList.add("active");
			active.classList.remove("active");											
			active = document.querySelector(".active");	
			
			for (i=0; i < chceked_dot.length; i++ ) {	
				if (chceked_dot[chceked_dot.length-1].checked) {
					chceked_dot[0].checked = true;
			return;
		}
		}}
		active.nextElementSibling.classList.add("active");
		active.classList.remove("active");
		active = document.querySelector(".active");	
	
		for (i=0; i < chceked_dot.length; i++ ) {
		if (chceked_dot[i].checked) {
			chceked_dot[i].nextElementSibling.checked = true;
			return;	
	}}
	};
	
	// sprawdz kazdy input radio i jesli jest zaznaczony, to usun klase active z tego slajdu, ktory ja aktualnie posiada i ustaw klase active dla slajdu odpowiadajacemu kliknietemu inputowi
	function dots_slider() {	
		chceked_dot = document.getElementsByClassName("one_dot");
		for (i=0; i < chceked_dot.length; i++ ) {	
			if (chceked_dot[i].checked) {	
				document.querySelector(".active").classList.remove("active");
				all_slide[i].classList.add("active");
				active = document.querySelector(".active");
		}} 
	}
	
	// Automatyczne przewijanie slajdow
	let time = setInterval(scroll_right, 2000);											
	// zatrzymanie automatycznego przewijania
	document.getElementById("slider").addEventListener("mouseenter", function() {
		clearInterval(time);
		console.log("zatrzymane");
	})
	// wznowienie automatycznego przewijania
	document.getElementById("slider").addEventListener("mouseleave", function() { 
		console.log("yey");
		time = setInterval(scroll_right, 2000); 
	})
});



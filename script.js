
document.addEventListener('DOMContentLoaded', function() {
	//const slider = document.getElementById("slider");
	const slide_left = document.getElementById("slide_left");
	const slide_right = document.getElementById("slide_right");
	const all_slide = document.getElementsByClassName("slide");
	let active = document.querySelector(".active");
	const dots = document.getElementById("dots");
	let chceked_dot = document.getElementsByClassName("one_dot");
	
	//console.log(all_slide.length);
	//console.log(all_slide[all_slide.length-1]);
	/*
	slider.addEventListener("mouseover", function(){
		//slide_left.style.transition = "width 2s";
		//slide_left.style.display = "block";
		setTimeout(function(){
      slide_left.style.display = "block";
	  slide_left.style.transition = "width 2s";
    },100);
	})
	
	slider.addEventListener("mouseout", function(){
		slide_left.style.display = "none";
	}) */
	
	
		for (i=0; i < all_slide.length; i++ ) {										// dla kazdego slajdu
		let one_dot = document.createElement("input");								// utworz nowy input
		one_dot.setAttribute("type", "radio");										// nadaj mu type radio
		one_dot.setAttribute("name", "one_dot");									// Jak dodasz wszystkim inputom radio taka sama nazwe, to bedzie mozna zaznaczyc tylko jeden z nich na raz
		one_dot.classList.add("one_dot");						
		let appended_dot = all_slide[i].appendChild(one_dot);						// dodaj input do kazdego slajdu
		//console.log(appended_dot);
		document.getElementById("dots").append(appended_dot);						// wyswietl wszystkie inputy w divie "dots"
		} 
	
	chceked_dot[0].checked = true;
	//slide_left.style.display = "none";
	
	slide_right.addEventListener("click", function() {								// Kiedy klikne na przycisk next
		
		if (all_slide[all_slide.length-1].classList.contains("active")) {			// i ustawiony jest ostatni slajd, to
			//slide_right.style.display = "none";									// i ustaw przycisk next na niewidoczny
			//return;
			all_slide[0].classList.add("active");									// przeskocz do pierwszego slajdu
			active.classList.remove("active");											
			active = document.querySelector(".active");	
			
			for (i=0; i < chceked_dot.length; i++ ) {								// kropka przeskakuje z ostatniej pozycji na pierwsza
				if (chceked_dot[chceked_dot.length-1].checked) {
					chceked_dot[0].checked = true;
			return;
		}
		}}
		//slide_left.style.display = "block";											// to ustaw przycisk next na widoczny
		active.nextElementSibling.classList.add("active");							// to nadaj nastepnemu elementowi (zdjeciu) klase active
		active.classList.remove("active");											// i usun klase active temu elementowi, ktory ja aktualnie posiada
		active = document.querySelector(".active");									// zapamietaj, ze aktywny jest element z klasa active, by sie do niego odniesc przy kolejnym klinknieciu
	
		for (i=0; i < chceked_dot.length; i++ ) {									// za kazdym razem kiedy klikne na przycisk next wykona sie petla
		if (chceked_dot[i].checked) {												// ktora sprawdzi ktory input jest zaznaczony 
			chceked_dot[i].nextElementSibling.checked = true;						// i zaznaczy kolajny (zaznaczony moze byc jeden na raz, wiec poprzedni sie odznaczy)
			return;	
	}}
	});
	
	slide_left.addEventListener("click", function() {
		
		if (all_slide[0].classList.contains("active")) {							// jesli pierwszy slajd zawiera klase active
			//slide_left.style.display = "none";
			//return;
			all_slide[chceked_dot.length-1].classList.add("active");				// przeskocz do ostatniego slajdu
			active.classList.remove("active");											
			active = document.querySelector(".active");
			for (i=0; i < chceked_dot.length; i++ ) {								// kropka przeskakuje z pierwszej pozycji na ostatnia
				if (chceked_dot[0].checked) {
					chceked_dot[chceked_dot.length-1].checked = true;
			return;
		}}
		}
		//slide_right.style.display = "block";
		active.previousElementSibling.classList.add("active");						// pozostale przypadki
		active.classList.remove("active");
		active = document.querySelector(".active");	
		
		for (i=0; i < chceked_dot.length; i++ ) {
		if (chceked_dot[i].checked) {
			chceked_dot[i].previousElementSibling.checked = true;
			return;
	}}
	})
	
	dots.addEventListener("click", function() {									// kiedy klikniesz na div "dots"
		chceked_dot = document.getElementsByClassName("one_dot");
		for (i=0; i < chceked_dot.length; i++ ) {									// dla każdego inputu radio
			//if (chceked_dot[0].checked) { 
			//slide_left.style.display = "none";		
			//}
			if (chceked_dot[i].checked) {											// po warunkiem, ze jest zaznaczony
				document.querySelector(".active").classList.remove("active");		// usuń klase active temu elementowi (zdjeciu), ktory ja aktualnie posiada
				all_slide[i].classList.add("active");								// i ustaw klase active kliknietemu elementowi (zdjeciu)
				active = document.querySelector(".active");							// Zapamietuje, ktory lement jest aktywny - zeby mogly z niego korzystac przyciski boczne (poprzedni i nastepny)
				slide_right.style.display = "block";
				slide_left.style.display = "block";
				//chceked_dot[i].checked = false;
			//if (chceked_dot[chceked_dot.length-1].checked) { 
			//slide_right.style.display = "none";		
			//}
		}} 
	})	
	
	//const time = setInterval(myFunc(), 2000);
	
	function scroll_right() {															// funkcja przewijania w prawo (ten sam kod co wyzej - podpiety do prawego przycisku)
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
	
	let time = setInterval(scroll_right, 2000);											// slider sam przewija slajdy co 2 sekundy
	
	document.getElementById("slider").addEventListener("mouseenter", function() {		// zatrzymanie automatycznego przewijania
		clearInterval(time);
		console.log("zatrzymane");
	})
	
	document.getElementById("slider").addEventListener("mouseleave", function() { 		// wznowienie automatycznego przewijania
		console.log("yey");
		time = setInterval(scroll_right, 2000); 
	})
	


	
});



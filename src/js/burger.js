'use strict';

(function(){
	function hide () {
		document.body.classList.toggle('open');
		burger.classList.toggle('open');
	}

	var burger = document.getElementById('burger-button');
	burger.addEventListener('click', function (e) {
	    e.preventDefault();
	    hide();
	});

	var burgerMenu = document.getElementsByClassName('burger__menu')[0];
	var links = burgerMenu.getElementsByTagName('a');

	for(var i=0; i<links.length; i++) {
		links[i].onclick = function(e){
			e.preventDefault();
			hide();
			window.location = e.target.href;
		}
	}
})()
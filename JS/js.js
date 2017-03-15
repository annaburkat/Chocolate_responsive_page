document.addEventListener('DOMContentLoaded', function() {
	
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav');
    var cross = document.querySelector('.cross');
	
    hamburger.addEventListener('click', function(event) {
        menu.classList.remove('hidden');
        hamburger.classList.add('hidden');
        cross.classList.remove('hidden');
    });
	
    cross.addEventListener('click', function(event) {
        menu.classList.add('hidden');
        cross.classList.add('hidden');
        hamburger.classList.remove('hidden');
    });
	
    window.onload = function() {
        if (window.matchMedia("(max-width:640px)").matches) menu.classList.add('hidden');
    };
	
    window.addEventListener('resize', function() {
        if (window.matchMedia("(max-width:640px)").matches) menu.classList.add('hidden');
        else if (window.matchMedia("(min-width:640px)").matches) menu.classList.remove('hidden');
    });
});
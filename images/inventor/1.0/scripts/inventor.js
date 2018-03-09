/* inventor */

/* Intro */

function intro() {
	if(!document[hidden]) {
		setTimeout(function() {
			html.classList.add('intro-started');
		}, 100);
		document.removeEventListener(visibilityChange, intro);
	}
}

intro();

document.addEventListener(visibilityChange, intro);

/* Fade ins */

updateFadeIns();

/* Parallaxes */

updateParallaxes();

window.addEventListener('scroll', function() {	
	/* Fade in */
	updateFadeIns();
		
	/* Parallax */
	updateParallaxes();
});

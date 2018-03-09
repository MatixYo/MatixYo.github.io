/* Spots */

/* Fade ins */

updateFadeIns();

window.addEventListener('scroll', function() {	
	/* Fade in */
	updateFadeIns();
});

/* Block scrolling */

function noscroll() {
	var hash = window.location.hash.substr(1), bodyClassList = document.body.classList;
	
	if(hash == 'specializations' || hash == 'reacting')
		bodyClassList.add('noscroll');
	else
		bodyClassList.remove('noscroll');
}

noscroll();
window.addEventListener('hashchange', noscroll);

/* Replay */

var accidentContainer = document.getElementById('accident-container');
	
document.getElementById('accident-container').addEventListener('click', function() {
	accidentContainer.style.opacity = 0;
	setTimeout(function() {
		accidentContainer.classList.remove('animated');
		accidentContainer.style.opacity = 1;
		setTimeout(function() {
			accidentContainer.classList.add('animated');
		}, 1000);
	}, 1000);
});

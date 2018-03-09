/* Home */

NodeList.prototype.forEach = Array.prototype.forEach;

 /* Perspective */
 document.querySelectorAll('.perspective').forEach(function(element) {
	element.addEventListener('mousemove', function(event) {
	var amplitude = 30,
        xRotation = (.5 - event.offsetY / event.target.clientHeight) * amplitude,
        yRotation = (event.offsetX / event.target.clientWidth - .5) * amplitude;

	element.style.transition = 'none';
	element.style.transform = 'perspective(1000px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
	});
	element.addEventListener('mouseleave', function() {
		element.style.transition = 'transform .5s';
		element.style.transform = '';
	});
 });

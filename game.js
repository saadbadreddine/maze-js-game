mouse_clicked = false;
var offset = [ 0, 0 ];
var mouse_position;

function checkCollision(elm1, elm2) {
	var elm1Rect = elm1.getBoundingClientRect();
	var elm2Rect = elm2.getBoundingClientRect();

	return (
		elm1Rect.right >= elm2Rect.left &&
		elm1Rect.left <= elm2Rect.right &&
		(elm1Rect.bottom >= elm2Rect.top && elm1Rect.top <= elm2Rect.bottom)
	);
}

window.onload = function() {
	var div_boundaries = document.getElementsByClassName('boundary');

	var start = document.getElementById('start');
	var end = document.getElementById('end');

	start.addEventListener(
		'mousedown',
		function(e) {
			mouse_clicked = true;
			offset = [ start.offsetLeft - e.clientX, start.offsetTop - e.clientY ];
		},
		true
	);

	start.addEventListener(
		'mouseup',
		function() {
			mouse_clicked = false;
		},
		true
	);

	start.addEventListener(
		'mousemove',
		function(event) {
			event.preventDefault();
			if (mouse_clicked) {
				mouse_position = {
					x: event.clientX,
					y: event.clientY
				};
				start.style.left = mouse_position.x + offset[0] + 'px';
				start.style.top = mouse_position.y + offset[1] + 'px';

				for (var i = 0; i < div_boundaries.length - 1; i++) {
					div_boundaries[i].classList.remove('youlose');
				}

				collision =
					checkCollision(start, div_boundaries[0]) ||
					checkCollision(start, div_boundaries[1]) ||
					checkCollision(start, div_boundaries[2]) ||
					checkCollision(start, div_boundaries[3]) ||
					checkCollision(start, div_boundaries[4]);

				if (collision == true || start.style.left < '0') {
					console.log('You LOST!!!!!!!!!');
					mouse_clicked = false;
					for (var i = 0; i < div_boundaries.length - 1; i++) {
						div_boundaries[i].classList.add('youlose');
					}
				} else if (checkCollision(start, end) == true) {
					console.log('You Won!!!!');
				}

				console.log(collision);

				console.log(checkCollision(start, end));
			}
		},
		true
	);
};

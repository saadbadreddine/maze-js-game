mouse_clicked = false;
var mouse_position;

window.onload = function() {
	var div_boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');

	start.addEventListener(
		'click',
		function() {
			mouse_clicked = true;
			for (var i = 0; i < div_boundaries.length - 1; i++) {
				div_boundaries[i].classList.remove('youlose');
			}
		},
		true
	);

	document.addEventListener(
		'mousemove',
		function(event) {
			event.preventDefault();
			if (mouse_clicked) {
				mouse_position = {
					x: event.clientX,
					y: event.clientY
				};

				for (var i = 0; i < div_boundaries.length - 1; i++) {
					end.addEventListener('mouseover', function() {
						console.log('You Won!!');
					});
				}

				for (var i = 0; i < div_boundaries.length - 1; i++) {
					div_boundaries[i].addEventListener(
						'mouseover',
						function() {
							for (var i = 0; i < div_boundaries.length - 1; i++) {
								div_boundaries[i].classList.add('youlose');
							}
							console.log('You Lose!!');
						},
						true
					);
				}
			}
		},
		true
	);
};

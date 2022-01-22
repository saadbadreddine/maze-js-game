mouse_clicked = false;
var mouse_position;
score = 0;

window.onload = function() {
	var div_boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');

	start.addEventListener(
		'click',
		function(e) {
			mouse_clicked = true;
			for (var i = 0; i < div_boundaries.length - 1; i++) {
				if ((score = -10)) {
					div_boundaries[i].classList.remove('youlose');
				}
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

				console.log(mouse_position);
				for (var i = 0; i < div_boundaries.length - 1; i++) {
					div_boundaries[i].addEventListener(
						'mouseover',
						function(e) {
							for (var i = 0; i < div_boundaries.length - 1; i++) {
								div_boundaries[i].classList.add('youlose');
							}
							score = -10;
						},
						true
					);
				}
			}
		},
		true
	);
};

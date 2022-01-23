(window.onload = function() {
	game_state = 2;
	var boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');

	function startGame() {
		if (game_state == 0) {
			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].classList.remove('youlose');
			}
			game_state = 1;
		} else {
			game_state = 1;
		}
	}

	function lostGame() {
		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].classList.add('youlose');
		}
		console.log('You Lose!!');
		game_state = 0;
		console.log(game_state);
		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', lostGame);
		}
		end.removeEventListener('mouseover', wonGame);
	}

	function wonGame() {
		console.log('You Won!!');
		game_state = 0;
		console.log(game_state);
		end.removeEventListener('mouseover', wonGame);
		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', lostGame);
		}
	}

	start.addEventListener('click', startGame);

	if (game_state == 1) {
		end.addEventListener('mouseover', wonGame);

		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].addEventListener('mouseover', lostGame);
		}
	}
}),
	true;

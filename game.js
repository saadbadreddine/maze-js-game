(window.onload = function() {
	var game_state = 2;
	var score = 0;
	var boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');

	function startGame() {
		if (game_state == 0) {
			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].classList.remove('youlose');
			}
			game_state = 1;
			console.log('Game Started');
			end.addEventListener('mouseover', wonGame);

			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].addEventListener('mouseover', lostGame);
			}
		} else {
			game_state = 1;
			console.log('Game Started');
			console.log(game_state);
			end.addEventListener('mouseover', wonGame);

			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].addEventListener('mouseover', lostGame);
			}
		}
	}

	function wonGame() {
		console.log('You Won!!');
		game_state = 0;
		score += 5;
		console.log(game_state);
		end.removeEventListener('mouseover', wonGame);
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', lostGame);
		}
	}

	function lostGame() {
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].classList.add('youlose');
		}
		console.log('You Lose!!');
		game_state = 0;
		score -= 10;
		console.log(game_state);
		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', lostGame);
		}
		end.removeEventListener('mouseover', wonGame);
	}

	start.addEventListener('click', startGame);
}),
	true;

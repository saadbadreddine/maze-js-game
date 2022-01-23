(window.onload = function() {
	var game_state = 2;
	var score = 0;
	var boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');
	var status = document.getElementById('status');
	boundaries[5].style.textAlign = 'center';

	function startGame() {
		if (game_state == 0) {
			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].classList.remove('youlose');
			}
			game_state = 1;
			console.log('Game Started');
			status.innerText = 'Game Running ...';
			end.addEventListener('mouseover', wonGame);

			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].addEventListener('mouseover', lostGame);
			}
		} else if (game_state == 1 || game_state == 2) {
			if (game_state == 2) {
				game_state = 1;
			}
			console.log('Game Started');
			status.innerText = 'Game Running ...';
			console.log(game_state);
			end.addEventListener('mouseover', wonGame);

			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].addEventListener('mouseover', lostGame);
			}
		}
	}

	function endGame() {
		score = 0;
		boundaries[5].innerText = score;
		status.innerText = 'Begin by moving your mouse over the "S"';
		if (game_state == 0) {
			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].classList.remove('youlose');
			}
		}
		game_state = 2;
	}

	function wonGame() {
		console.log('You Won!!');
		game_state = 1;
		score += 5;
		boundaries[5].innerText = score;
		console.log(game_state);
		status.innerText = 'You won';
		end.removeEventListener('mouseover', wonGame);
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', lostGame);
		}
	}

	function lostGame() {
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].classList.add('youlose');
		}
		console.log('You Lost!!');
		game_state = 0;
		score -= 10;
		boundaries[5].innerText = score;
		console.log(game_state);
		status.innerText = 'You lost';
		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', lostGame);
		}
		end.removeEventListener('mouseover', wonGame);
	}

	start.addEventListener('click', startGame);
	end.addEventListener('click', endGame);
}),
	true;

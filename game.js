(window.onload = function() {
	var game_state = 2;
	var score = 0;
	var boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');
	var status = document.getElementById('status');
	boundaries[5].style.textAlign = 'center';
	var game = document.getElementById('game');

	function startGame() {
		if (game_state == 0) {
			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].classList.remove('youlose');
			}
			game_state = 1;
		}
		if (game_state == 1 || game_state == 2) {
			if (game_state == 2) {
				game_state = 1;
			}
			console.log('Game Started');
			status.innerText = 'Game Running ...';
			console.log(game_state);
			end.addEventListener('mouseover', winGame);

			for (var i = 0; i < boundaries.length - 1; i++) {
				boundaries[i].addEventListener('mouseover', loseGame);
			}
			game.addEventListener('mouseleave', detectCheating);
		}
	}
	function detectCheating() {
		console.log('Cheating Detected ...');
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].classList.add('youlose');
		}
		game_state = 0;
		status.innerText = "You're Cheating";
		end.removeEventListener('mouseover', winGame);
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', loseGame);
		}
		game.removeEventListener('mouseleave', detectCheating);
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

	function winGame() {
		console.log('You Won!!');
		game_state = 1;
		score += 5;
		boundaries[5].innerText = score;
		console.log(game_state);
		status.innerText = 'You Won';
		end.removeEventListener('mouseover', winGame);
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', loseGame);
		}
		game.removeEventListener('mouseleave', detectCheating);
	}

	function loseGame() {
		for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].classList.add('youlose');
		}
		console.log('You Lost!!');
		game_state = 0;
		score -= 10;
		boundaries[5].innerText = score;
		console.log(game_state);
		status.innerText = 'You Lost';
		for (i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].removeEventListener('mouseover', loseGame);
		}
		end.removeEventListener('mouseover', winGame);
		game.removeEventListener('mouseleave', detectCheating);
	}

	start.addEventListener('click', startGame);
	end.addEventListener('click', endGame);
}),
	true;

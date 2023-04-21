let ball = document.getElementById('ball');
let player = document.getElementById('player');
let player_2 = document.getElementById('player_2');
let scores = document.getElementById("scores_p1");
let scores_2 = document.getElementById("scores_p2");
let audio = document.getElementById("audio");
let x;
let y;
let x_speed = 8;
let y_speed = 2.9;
let Width = window.innerWidth;
let Height = window.innerHeight;
let a;
let pl=0;
//   addEventListener("keydown", key);
  setInterval(function() {
	  forward();
	}, 6)
  
  
	document.addEventListener('keydown', function(e){
		clearInterval(a);
		  if (e.code == "KeyW") {
		   a =setInterval(function() {
			  player.style.top = (parseInt(getComputedStyle(player).top) -5) + 'px';
			}, 5)
		  }
		  if (e.code == "KeyS") {
			a =setInterval(function() {
			   player.style.top = (parseInt(getComputedStyle(player).top) + 5) + 'px';
			 }, 5)
		   }
	  });


	 
;

	  document.addEventListener('keyup', function(e){
		   clearInterval(a);
	   });

  

function forward() {
	let Y = ball.style.top = (parseInt(getComputedStyle(ball).top));
	let X = ball.style.left = (parseInt(getComputedStyle(ball).left));
	let Y_player = player.style.top = (parseInt(getComputedStyle(player).top));
	let Y_player_2 = player_2.style.top = (parseInt(getComputedStyle(player_2).top));

	if (X < 51 && (Y + 50 > Y_player && Y < Y_player + 150)) {
		y_speed *= 1;
		x_speed *= -1;
		audio.play();
		
	}

	if (X + 76 > Width - 45 && (Y + 50 > Y_player_2 && Y < Y_player_2 + 150)) {
		y_speed *= 1;
		x_speed *= -1;
		audio.play();
	}

	if (X > Width - 50) {
		
		
		scores.innerHTML++;
		ball.style.left = 1000 + 'px';
		ball.style.top = 400 + 'px';
		player.style.left = 10 + 'px';
		player.style.top = 600 + 'px';
		player_2.style.left = 1820 + 'px';
		player_2.style.top = 400 + 'px';
		x_speed +1;
		x_speed *= -1;
		document.body.removeChild(ball);
		
		y_speed+0.5;
		y_speed *= -1;

		setTimeout(() => {
			document.createElement("ball");
			document.body.appendChild(ball);
			
		}, 1500)
		
	}

	if (X + 1500 > Width && (Y+500> Y_player_2 && Y < Y_player_2 + 100)) {
		player_2.style.top = (parseInt(getComputedStyle(player_2).top) - 3) + 'px';
	} else if (X + 1500 > Width && (Y+500> Y_player_2 && Y > Y_player_2 + 100)) {
		player_2.style.top = (parseInt(getComputedStyle(player_2).top) +3) + 'px';
	}


	if (X < 0) {
		
		
		scores_2.innerHTML++;
		ball.style.left = 1000 + 'px';
		ball.style.top = 400 + 'px';
		player.style.left = 10 + 'px';
		player.style.top = 600 + 'px';
		player_2.style.left = 1820 + 'px';
		player_2.style.top = 400 + 'px';
		x_speed +1;
		x_speed *= -1;
		document.body.removeChild(ball);
		
		y_speed+0.5;
		y_speed *= -1;

		setTimeout(() => {
			document.createElement("ball");
			document.body.appendChild(ball);
			
		}, 1500)
		
	}


	if (Y+50 > Height || Y<0) {

		y_speed *= -1;
		audio.play();
	}

	if (Y_player < -5) {
		player.style.top = (parseInt(getComputedStyle(player).top) + 75.5) + 'px';
	}

	if (Y_player_2 < 0) {
		player_2.style.top = (parseInt(getComputedStyle(player_2).top) + 75.5) + 'px';
	}

	if (Y_player + 145 > Height) {
		player.style.top = (parseInt(getComputedStyle(player).top) - 73.5) + 'px';
	}

	x = +x_speed;
	y = +y_speed;
	ball.style.left = (parseInt(getComputedStyle(ball).left) + x) + 'px';
	ball.style.top = (parseInt(getComputedStyle(ball).top) + y) + 'px';

// if(scores.innerText>2|| scores_2.innerText>2){
	
// }

}
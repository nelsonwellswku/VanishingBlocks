<!DOCTYPE html>
<html>
	<head>
		 <meta charset="utf-8">
		 <link rel="stylesheet" type="text/css" href="site.css" />
		 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		 <script type="text/javascript" src="board.js"></script>
		 <script>
			$('document').ready(function() {
			
				var padding = function(number){
					return number < 10 ? "0" + number : number;
				};

				/* set the game operation state */
				var game_is_playable = true;

				/* set initial game time */
				var seconds_left = 60;
				
				/* start drawing */
				var draw_interval = setInterval(function() { board.draw() }, "100");
			
				/* start the countdown */
				var game_interval = setInterval(function() {
					
					--seconds_left;
					if(seconds_left == 0) {
						clearInterval(game_interval);
						clearInterval(draw_interval);
						seconds_left = 60;
						game_is_playable = false;
					}
					
					$("#time_left span").text("0:" + padding(seconds_left));
					
				}, 1000);
			
				/* initalize the new button */
				$('#new_game').click(function() { 
					draw_interval = setInterval(function() { board.draw() }, "100");
					seconds_left = 60;
					game_is_playable = true;
				});
				
				/* initialize the game board */
				var board = new Board();
				
				$("#game_surface").click(function(e) {
					/* get coordinates within the canvas element
					   from: http://stackoverflow.com/questions/3234977 */
					var posX = $(this).position().left, posY = $(this).position().top;
					var x = e.pageX - posX, y = e.pageY - posY;
					
					/* handle the clicked cell */
					board.handle_clicked_cell(x, y);
				});
				
				
			});
		 </script>
		 <style type="text/css">
			canvas { border: 1px solid black; }
		 </style>
	</head>
	<body>
		<canvas id="game_surface" width="500" height="500"></canvas>
		<br/>
		<button id="new_game">New Game</button>
		<span id="time_left">Time left: <span>1:00</span></span>
	</body>
</html>
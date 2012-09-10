<!DOCTYPE html>
<html>
	<head>
		 <meta charset="utf-8">
		 <link rel="stylesheet" type="text/css" href="site.css" />
		 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		 <script type="text/javascript" src="gamestate.js"></script>
		 <script type="text/javascript" src="board.js"></script>
		 <script type="text/javascript" src="vbutils.js"></script>
		 <script>
			$('document').ready(function() {
				
				var gs = new Gamestate();
				var board = new Board();
				
			
				/* initalize the new game button */
				$('#new_game').click(function() { 
				
					board = new Board();
					$("#time_left span").text("1:00");
					
					gs.start(
						function() {
							board.draw()
						},
						100,
						{
							game_func: function () { $("#time_left span").text("0:" + vbutils.pad(gs.get_time_left())); }
						}
					);
				});
				
				$("#game_surface").click(function(e) {
					/* get coordinates within the canvas element
					   from: http://stackoverflow.com/questions/3234977 */
					var posX = $(this).position().left, posY = $(this).position().top;
					var x = e.pageX - posX, y = e.pageY - posY;
					
					/* handle the clicked cell */
					board.handle_clicked_cell(x, y);
				});
				
				/* Draw a board to begin with */
				board.draw();
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
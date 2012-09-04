<!DOCTYPE html>
<html>
	<head>
		 <meta charset="utf-8">
		 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		 <script type="text/javascript" src="board.js"></script>
		 <script>
			$('document').ready(function() {				
				/* initalize the pause button */
				$('#pause').click(function() { clearInterval() });
				
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
				
				setInterval(function() { board.draw() }, "100");
			});
		 </script>
		 <style type="text/css">
			canvas { border: 1px solid black; }
		 </style>
	</head>
	<body>
		<canvas id="game_surface" width="500" height="500"></canvas>
		<br/>
		<button id="pause">Pause the Game</button>
	</body>
</html>
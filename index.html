<!DOCTYPE html>
<html>
	<head>
		 <meta charset="utf-8">
		 <link rel="stylesheet" type="text/css" href="site.css" />
		 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		 <script type="text/javascript" src="gamestate.js"></script>
		 <script type="text/javascript" src="scorer.js"></script>
		 <script type="text/javascript" src="cellfactory.js"></script>
		 <script type="text/javascript" src="board.js"></script>
		 <script type="text/javascript" src="vbutils.js"></script>
		 <script type="text/javascript" src="jquery.rightClick.js"></script>
		 <script>
			$('document').ready(function() {
				
				var scorer = new Scorer(function (s) {
					return (10 * s) + ( s > 1 ? s * 3 : 0 );
				});
				var gs = new Gamestate(scorer);
				var board = new Board();
				
			
				/* initalize the new game button */
				$('#new_game').click(function() { 
				
					board = new Board();
					$("#time_left span").text("1:00");
					
					gs.start(
						function() {
							$("#score span").text(gs.get_scorer().get());
							board.draw();							
						},
						100,
						{
							game_func: function () { 							
								$("#time_left span").text("0:" + vbutils.pad(gs.get_time_left())); 								
							}
						}
					);
				});
				
				$("#game_surface").click(function(e) {
					/* get coordinates within the canvas element
					   from: http://stackoverflow.com/questions/3234977 */
					var posX = $(this).position().left, posY = $(this).position().top;
					var x = e.pageX - posX, y = e.pageY - posY;
					
					var score_obj = board.handle_clicked_cell(x, y);									
					
					/* handle the clicked cell */					
					var total_from_move = gs.get_scorer().increase(score_obj['total']);					
					if(score_obj['bombs'] > 0) {						
						gs.get_scorer().decrease(total_from_move * 2);
					}
					
				});
				
				$("#game_surface").rightClick(function(e) {
					/* get coordinates within the canvas element
					   from: http://stackoverflow.com/questions/3234977 */
					var posX = $(this).position().left, posY = $(this).position().top;
					var x = e.pageX - posX, y = e.pageY - posY;
										
					var is_bomb = board.disarm_bomb(x, y);
					
					/*
						TODO: Technical debt.  This is not how this should work 
						but it is past midnight and it does close the ticket...
					*/ 
					if(is_bomb) {
						gs.get_scorer().decrease(-2);
					}
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
		<h1>Vanishing Blocks</h1>
		<button id="new_game">New Game</button>
		<br><br>
		<canvas id="game_surface" width="500" height="500"></canvas>
		<br/>
		<span id="time_left">Time left: <span>1:00</span></span>
		<br>
		<span id="score">Score: <span>0</span></span>
	</body>
</html>
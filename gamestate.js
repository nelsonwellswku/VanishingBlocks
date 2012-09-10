var gamestate = function() {
	var is_playable = false;
	var draw_interval;
	var game_interval;
	
	this.restart = function(game_func, game_int, draw_func, draw_int) {
		game_interval = setInterval(game_func, game_int);
		draw_interval = setInterval(draw_func, draw_int);
		is_playable = true;
	};
	
	this.stop = function() {
		clearInterval(game_interval);
		clearInterval(draw_interval);
		is_playable = false;
	};
};
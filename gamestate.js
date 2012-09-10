var Gamestate = function() {
	var is_playable;
	var draw_interval;
	var game_interval;
	var time_left;
	
	var stop = function() {
		clearInterval(game_interval);
		clearInterval(draw_interval);
		is_playable = false;
	};
	
	this.start = function(draw_func, draw_int, options) {
		
		stop();
		is_playable = true;
		time_left = 60;
		
		game_interval = setInterval(function() {
			--time_left;
			
			if(time_left == 0) {
				stop();
			}
			
			options.game_func();
		
		}, 1000);
		
		draw_interval = setInterval(draw_func, draw_int);		
	};
	
	this.get_time_left = function() { return time_left; };
	
};
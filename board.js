var Board = function(ctx = $('#game_surface')[0].getContext('2d')) {
	
	/* initalize a randomly patterned board */
	var board = function(self) {
		var arr = [];
		for (var i = 0; i < 10; i++) {
		  arr.push(self.generate_random_row());
		}
		
		return arr;
	}(this);
				
	/* initialize the color map */
	var color_map = {
		0: "white",
		1: "blue",
		2: "red",
		3: "green",
		4: "yellow",
		5: "orange",
		6: "purple"
	};
	
	var cascade_delete = function(x_cell, y_cell) {
	
		/* if it is already white, don't even bother with the rest of the checks */
		if(board[y_cell][x_cell] == 0) { return; }
	
		/* cache and kill the clicked one */
		var cached_color = board[y_cell][x_cell];
		board[y_cell][x_cell] = 0;
		
		/* top neighbor */
		if(board[y_cell - 1] && board[y_cell - 1][x_cell] == cached_color) {
		    cascade_delete(x_cell, y_cell - 1);
		}
		
		/* right neighbor */
		if(board[y_cell] && board[y_cell][x_cell + 1] && board[y_cell][x_cell + 1] == cached_color) {
			cascade_delete(x_cell + 1, y_cell);
		}
		
		/* bottom neighbor */
		if(board[y_cell + 1] && board[y_cell + 1][x_cell] == cached_color) {		
			cascade_delete(x_cell, y_cell + 1);
		}
		
		/* left neighbor */
		if(board[y_cell][x_cell - 1] && board[y_cell][x_cell - 1] == cached_color) {
			cascade_delete(x_cell - 1, y_cell);
		}
		
	};
	
	this.draw = function() {
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board[i].length; j++) {
				ctx.fillStyle = color_map[ board[i][j] ];
				ctx.fillRect(j * 50, i * 50, 50, 50);
				ctx.strokeRect(j * 50, i * 50, 50, 50);
			}
		}
	};
	
	this.handle_clicked_cell = function(xcoor, ycoor) {
		var x_cell = Math.floor(xcoor/50);
		var y_cell = Math.floor(ycoor/50);
		cascade_delete(x_cell, y_cell);
	}; 	
};

Board.prototype.generate_random_row = function(length = 10) {
	var arr = [];
	for(var i = 0; i < length; i++) {
		arr.push(Math.floor(Math.random() * 6) + 1);
	}
		
	return arr;
};
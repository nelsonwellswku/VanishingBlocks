var Board = function() {
		
	/* initalize a randomly patterned board */
	var board = function(self) {
		var arr = [];
		
		for (var i = 0; i < 10; i++) {
		  arr.push(self.generate_random_row(10));
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
	
	this.handle_clicked_cell = function(xcoor, ycoor) {
		var x_cell = Math.floor(xcoor/50);
		var y_cell = Math.floor(ycoor/50);
		
		/* delete existing cells */
		cascade_delete(x_cell, y_cell);
		
		/* "slide down" old cells */
		slide_cells_down(10);
		
		/* fill in the remaining empty cells */
		fill_in_cells();
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

	var slide_cells_down = function(count) {
		if(count == -1) { return };
		
		for (var i = board.length - 1; i > 0; i--) {
			for (var j = 0; j < board[i].length; j++) {
				if(board[i][j] == 0) {
					board[i][j] = board[i-1][j];
					board[i-1][j] = 0;
				}
			}
		}
		
		count--;
		
		slide_cells_down(count);		
		
	};
	
	var fill_in_cells = function () {
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board[i].length; j++) {
				if(board[i][j] == 0) {					
					board[i][j] = (Math.floor(Math.random() * 6) + 1);					
				}
			}
		}
	};
	
	this.draw = function() {
	    var ctx = $('#game_surface')[0].getContext('2d');
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
	
};

Board.prototype.generate_random_row = function(length) {

	var arr = [];
	
	for(var i = 0; i < length; i++) {
		arr.push(Math.floor(Math.random() * 6) + 1);
	}
		
	return arr;
};
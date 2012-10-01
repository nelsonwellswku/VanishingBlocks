var Board = function() {
	
	var cf = new CellFactory();
	
	var generate_random_row = function(length) {
		var arr = [];
	
		for(var i = 0; i < length; i++) {
			arr.push(cf.create());
		}
			
		return arr;
	}
	
	/* initalize a randomly patterned board */
	var board = function() {
		var arr = [];
		
		for (var i = 0; i < 10; i++) {
		  arr.push(generate_random_row(10));
		}
		
		return arr;
	}();
	
	this.handle_clicked_cell = function(xcoor, ycoor) {
		var x_cell = Math.floor(xcoor/50);
		var y_cell = Math.floor(ycoor/50);
		
		/* delete existing cells */
		var deleted_number_of_cells = cascade_delete(x_cell, y_cell, board[y_cell][x_cell].is_bomb);
		
		/* "slide down" old cells */
		slide_cells_down(10);
		
		/* fill in the remaining empty cells */
		fill_in_cells();
		
		return deleted_number_of_cells;
	};
	
	var cascade_delete = function(x_cell, y_cell, cascade_had_bomb) {
	
		/* if it is already white, don't even bother with the rest of the checks */
		if(board[y_cell][x_cell].name == "EMPTY") { return 0; }
	
		var total = 1;
		var bombs = board[y_cell][x_cell].is_bomb ? 1 : 0;
		var tmp;
	
		/* cache and kill the clicked one */
		var cached_cell = board[y_cell][x_cell].name;
		board[y_cell][x_cell] = cf.create_EMPTY();
		
		/* top neighbor */
		if(board[y_cell - 1] && board[y_cell - 1][x_cell].name == cached_cell) {		    
			tmp = cascade_delete(x_cell, y_cell - 1, board[y_cell-1][x_cell].is_bomb);
			total += tmp['total'];
			bombs += tmp['bombs'];			
		}
		
		/* right neighbor */
		if(board[y_cell] && board[y_cell][x_cell + 1] && board[y_cell][x_cell + 1].name == cached_cell) {
				tmp = cascade_delete(x_cell + 1, y_cell, board[y_cell][x_cell + 1].is_bomb);
				total += tmp['total'];
				bombs += tmp['bombs'];			
		}
		
		/* bottom neighbor */
		if(board[y_cell + 1] && board[y_cell + 1][x_cell].name == cached_cell) {
				tmp = cascade_delete(x_cell, y_cell + 1, board[y_cell + 1][x_cell].is_bomb);
				total += tmp['total'];
				bombs += tmp['bombs'];			
		}
		
		/* left neighbor */
		if(board[y_cell][x_cell - 1] && board[y_cell][x_cell - 1].name == cached_cell) {
				tmp = cascade_delete(x_cell - 1, y_cell, board[y_cell][x_cell - 1].is_bomb);
				total += tmp['total'];			
				bombs += tmp['bombs'];
		}
		
		return {"total" : total, "bombs" : bombs};
		
	};

	var slide_cells_down = function(count) {
		if(count == -1) { return };
		
		for (var i = board.length - 1; i > 0; i--) {
			for (var j = 0; j < board[i].length; j++) {
				if(board[i][j].name == "EMPTY") {
					board[i][j] = board[i-1][j];
					board[i-1][j] = cf.create_EMPTY();
				}
			}
		}
		
		count--;
		
		slide_cells_down(count);		
		
	};
	
	var fill_in_cells = function () {
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board[i].length; j++) {
				if(board[i][j].name == "EMPTY") {					
					board[i][j] = cf.create();					
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
				
				ctx.fillStyle = board[i][j].css_color;
				ctx.fillRect(j * 50, i * 50, 50, 50);
				ctx.strokeRect(j * 50, i * 50, 50, 50);
				
				if(board[i][j].is_bomb) {
					ctx.font="30px Arial";
					ctx.strokeText("B", j * 50 + 15, i * 50 + 35);
				}
			}
		}
	};
	
};

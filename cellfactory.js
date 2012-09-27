var CellFactory = function() {
    
    /* Private Properties */
    var cells = [
        { name: "EMPTY", order: 0, css_color: "white", is_bomb: false },
        { name: "BLUE", order: 1, css_color: "blue", is_bomb: false },
        { name: "RED", order: 2, css_color: "red", is_bomb: false },
        { name: "GREEN", order: 3, css_color: "green", is_bomb: false },
        { name: "YELLOW", order: 4, css_color: "yellow", is_bomb: false },
        { name: "ORANGE", order: 5, css_color: "orange", is_bomb: false },
        { name: "PURPLE", order: 6, css_color: "purple", is_bomb: false }
    ];
       
    /* Privileged Methods */
    this.create = function(){
	
        var cell = cells[Math.floor(Math.random() * 6) + 1];
        return {
			name : cell.name,
			order : cell.order,
			css_color : cell.css_color,
			is_bomb : Math.floor(Math.random() * 100 + 1) > 75 ? true : false
		}
		
    };
	
	this.create_EMPTY = function() {
		return cells[0];
	};
};
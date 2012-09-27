var CellFactory = function() {
    
    /* Private Properties */
    var cells = {
        EMPTY : { order: 0, css_color: "white", is_bomb: false },
        BLUE : { order: 1, css_color: "blue", is_bomb: false },
        RED : { order: 2, css_color: "red", is_bomb: false },
        GREEN : { order: 3, css_color: "green", is_bomb: false },
        YELLOW : { order: 4, css_color: "yellow", is_bomb: false },
        ORANGE : { order: 5, css_color: "purple", is_bomb: false },
        PURPLE : { order: 6, css_color: "orange", is_bomb: false }
    };
    
    var cells_arr = function() {
        var tmp_arr = [];
        var cell;
        for(var prop in cells) {          
                cell = cells[prop];
                cell.name = prop.toString();
                tmp_arr[cells[prop].order] = cell;
           
        }
        
        return tmp_arr;
    }();
    
    /* Privileged Methods */
    this.create = function(){
        var cell = cells_arr[Math.floor(Math.random() * 6) + 1];
        var cell_name = cell.name;
        if(Math.floor(Math.random() * 100 + 1) > 75) {
            cell.is_bomb = true;
        }
        delete cell.name;
        var obj = {};
        obj[cell_name] = cell;
        return obj;
    };
};
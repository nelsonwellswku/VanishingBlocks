var Scorer = function(s_func) {
	var score_func = s_func
	var score = 0;
	
	this.increase = function(s) {		
		if(score_func) {
			score += score_func(s);
		} 
		else {
			score += s;
		}
	};
	
	this.get = function() {
		return score;
	};
	
	this.reset = function () { score = 0; };
};
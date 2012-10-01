var Scorer = function(s_func) {
	var score_func = s_func
	var score = 0;
	
	this.increase = function(s) {		
		if(score_func) {
			var m = score_func(s)
			score += m;
		} 
		else {
			score += s;
		}
		
		if(m) return m;
	};
	
	this.decrease = function(s) {
		score -= s;
	};
	
	this.get = function() {
		return score;
	};
	
	this.reset = function () { score = 0; };
};
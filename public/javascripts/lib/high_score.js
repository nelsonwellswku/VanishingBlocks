/* a simple high score lib
 * for now, make the assumption that a high score list is 10 entires */
var high_score = function() {
  
};

high_score.prototype.get = function(options) {
  return JSON.parse(localStorage.getItem("scores"));
};

/* given a new high score, insert it into the array in numerical order */
high_score.prototype.insert = function(hs) {
  var scores;
  var success = false;

  // make sure it is a valid high score
  if(hs && hs.name && hs.score && hs.score.toString().match(/^\d+$/)) {

    // if there already exists some scores, use them, otherwise init an empty array
    scores = this.get() || [];
     
    // loop through the array and find the correct spot for the new score 
    for(var index = 0; index < 10; index++) {
      if(scores[index] == null) {
        success = (scores[index] = hs);
      } 
      else if(hs.score > scores[index].score) {
        success = scores.splice(index, 0, hs); 
      }

      if(success) { break; }
    }
     
    this._save(scores);
    return success;
  }
  else {
    throw "Invalid argument: " + hs.toString();
  }
};

high_score.prototype.toHtml = function(type) {
  if(type == "list") {
    return this._toHtmlList(); 
  } 
  else {
    return this._toHtmlTable();
  }
};


/* seriously guys and gals, don't use these directly */
high_score.prototype._save = function(score_arr) {
  if(score_arr.length > 10) {
    score_arr.length = 10;
  }
  localStorage.setItem("scores", JSON.stringify(score_arr));
};

high_score.prototype._toHtmlTable = function() {
  var scores = this.get();
  var str = "<table><tr><th>Name</th><th>Score</th></tr>"
  for(var index in scores) {
    str += "<tr><td>" + scores[index].name + "</td><td>" + scores[index].score + "</td></tr>";
  } 
  return str += "</table>";
};

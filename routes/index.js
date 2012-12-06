/* Home page */
exports.index = function(req, res){
  res.render('index');
};

/* High score page */
exports.high_score = function(req, res) {
  res.render('high_score');
};

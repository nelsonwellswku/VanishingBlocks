$(document).ready(function() {

  var exec = function() {
    var hs = new high_score();
    $("#high_score_container").append(hs.toHtml()); 
  }();  

});

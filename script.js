
$(document).ready(function() {

function changeColor(){
var bg = ["#00ffab","#eaff7b","#d84242","#913f92","#b09563","#6c01de"];
var rand = bg[Math.floor(Math.random() * bg.length)];
$("body, #tweet-btn, #getQuote").css('background', rand);
}

$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json) {
console.log(json);
$("#quote").html(json.quoteText + "<footer>" + json.quoteAuthor + "</footer>");

$("#tweet-btn").attr("href", "https://twitter.com/intent/tweet?text=" +json.quoteText+ "Author:"+json.quoteAuthor);
  $.ajaxSetup({ cache: false });
});


$("#getQuote").on("click", function(){

$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json) {
  $("#quote").html(json.quoteText + "<footer>" + json.quoteAuthor + "</footer>");

  changeColor();
  $("#tweet-btn").attr("href", "https://twitter.com/intent/tweet?text=" +json.quoteText+ "Author:"+json.quoteAuthor);
$.ajaxSetup({ cache: false });
});


  });

});

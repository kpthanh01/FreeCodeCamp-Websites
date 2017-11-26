$(document).ready(function(){
	getQuote();
	function getQuote(){
		/* 
		var quotes = ["quote1", "quote2", "quote3"];
		var authors = ["author1", "author2", "author3"];

		var randomize = Math.floor(Math.random()*quotes.length);

		var randQuote = quotes[randomize];
		var randAuthor = authors[randomize];

		$("#quote").text(randQuote);
		$("#author").text(randAuthor);
		*/
		var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, function(data){
			$("#quote").html('"' + data.quoteText + '"');
			$("#author").html("-" + data.quoteAuthor);
		});

	}
	$("button").on("click",function(){
		getQuote();
	});
});
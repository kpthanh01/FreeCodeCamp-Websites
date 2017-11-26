$(document).ready(function(){
	function getQuote(){
		var quotes = ["quote1", "quote2", "quote3"];
		var authors = ["author1", "author2", "author3"];

		var randomize = Math.floor(Math.random()*quotes.length);

		var randQuote = quotes[randomize];
		var randAuthor = authors[randomize];

		$("#quote").text(randQuote);
		$("#author").text(randAuthor);
	}
	$("button").on("click",function(){
		getQuote();
	});
});
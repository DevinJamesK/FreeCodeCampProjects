function randomQuote() {
    $.ajax({
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
        },

        success: function(quote) {
            $("#quote").html(quote.quoteText);
            $("#author").html(quote.quoteAuthor);
        }
    });
}

randomQuote();

$("button").onclick(function() {
    randomQuote();
});
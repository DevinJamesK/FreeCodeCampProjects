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
            if (quote.quoteAuthor != "") {
                $("#author").html("-" + quote.quoteAuthor);
            } else {
                $("#author").html("-" + Unknown);
            }
            $("#quote").html(quote.quoteText);

        }
    });
}

$(document).ready(function () {
    randomQuote();
    $("button").click(function() {
        randomQuote();
    });
});

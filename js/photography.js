jQuery(document).ready(function ($) {
    var URL = "http://api.instagram.com/oembed?url=http://instagram.com/p/BlBo2PBHHfV";
    $.ajax({
        url: URL,
        dataType: "jsonp", // this is important to circumvent cross-domain issues
        cache: false,
        success: function (response) {
            var html =
                '<div class="container">'+
                '<a href="' + response.thumbnail_url + '" >'+
                '<img src="' + response.thumbnail_url + '" alt="thumbnail" /></a>'+
                '<p>Author : ' + response.author_name + '<br />'+
                'Author\'s ID: ' + response.author_id + '<br />'+
                'Title : ' + response.title + '</p></div>';
            $("#instagram").html(html);
        },
        error: function () {
            $("#instagram").html("<p>There was an error in the ajax call</p>");
        }
    });
}); // ready

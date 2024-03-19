$(function () {
    var relatedArticlesMarker = $('h1#see-also, h2#see-also, h3#see-also');
    var isEmpty = true;
    if (relatedArticlesMarker.length) {
        var relatedArticlesList = relatedArticlesMarker.nextAll('ul').first();
        if (relatedArticlesList.length) {
            $('#related-articles').append(relatedArticlesList.html());

            relatedArticlesMarker.remove();
            relatedArticlesList.remove();
            isEmpty = false;
        }
    } 

    $('.related-articles').toggleClass('empty', isEmpty);
});

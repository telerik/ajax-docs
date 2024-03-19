//= require toc-base

// floating nav
$(function() {
    function setScrollPosition() {
        var body = $(document.body);
        var scrollTop = body.scrollTop() || $('html').scrollTop();
        body
            .toggleClass("scroll", scrollTop > 0)
            .toggleClass("scroll-page", scrollTop > 630)
            .toggleClass("scroll-small-page", $(window).height() - scrollTop < $('.TK-Bar').height());
    }

    $(window).scroll(setScrollPosition);
    setScrollPosition();
});

// article-toc
$(function() {
    // populate article TOC
    var articleToc = $('.article-toc');
    var toc = $("#toc");
    toc.empty();

    var headings = $("#content article > h2, #content article.api-reference > h3");
    var empty = headings.length < 2;

    articleToc.toggleClass("empty", empty);

    if (empty) {
        return;
    }

    toc.parent().show();

    headings.each(function() {
        if (!this.firstElementChild) {
            return;
        }

        $("<li><a></a></li>")
            .appendTo(toc)
            .find("a")
            .text(this.firstElementChild.textContent.trim())
            .attr("href", "#" + this.id )
            .addClass("anchor-" + this.tagName.toLowerCase());
    });

    $("body").scrollspy({ target: ".article-toc", offset: SCROLLSPY_OFFSET });

    window.animateScrollTo = function(e){
        e.preventDefault();
        animateScrolling(this.hash);
    };
    
    // Detect hash on page load and readjust scroll offset
    var initialHash = window.location.hash;
    if (!!initialHash) {
        setTimeout(function(){
          animateScrolling(initialHash);
        }, 200);
    }
    
    // animated scroll
    // Exclude the app inside the div.theme-preview since it's not in an <iframe/>,
    // leading to unwanted scrollTop when clicking on links inside the app.
    $("body a[href^='#']:not(.theme-preview a, .components-tabstrip a, .trigger a)").on('click', window.animateScrollTo);
});

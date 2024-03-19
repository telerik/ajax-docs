//= require toc-base

$(function () {
    
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
    
    $("#markdown-toc")
        .on("click", "a", function () {
            $(".section > ul").hide();
        })
        .each(function () {
            var ul = $("<ul>");
            $("article.api-reference h2").each(function () {
                var h2 = $(this);

                if (!/fields|configuration|properties|events|class methods|constructor parameters|methods/i.test(h2.text())) {
                    return;
                }

                $("<li>")
                    .addClass("section")
                    .append(h2.children().clone())
                    .appendTo(ul)
                    .mouseenter(function () {
                        var children = $(this).children("ul");

                        if (!children.length) {
                            children = $("<ul>");

                            h2.nextUntil("h2").filter("h3").each(function () {
                                $("<li>").append($(this).children().clone()).appendTo(children);
                            });

                            if (children.children().length) {
                                children.appendTo(this);
                            }

                            $(children).find("a[href^='#']").on('click', window.animateScrollTo);
                        }

                        children.show();
                    })
                    .mouseleave(function () {
                        $(this).children("ul").hide();
                    });
            });

            ul.appendTo(this);
        });
});

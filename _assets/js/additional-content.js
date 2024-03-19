$(function () {
    var additionalContentElement = $('.additional-content-column');
    if (additionalContentElement.outerHeight(true) > windowHeight) {
        additionalContentElement.addClass("affix-top");
    } else {
        additionalContentElement.affix({
            offset: {
                top: function () {
                    return (this.top = 0);
                },
                bottom: function () {
                    return (this.bottom = $('div#footer').outerHeight(true) + FOOTER_DISTANCE);
                }
            }
        });
    }
});

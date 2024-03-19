$(document).ready(function () {
    var banner = $("#announcement-banner");
    var fallbackContent = $("#announcement-fallback").html();
    var content = $("#announcement-content");
    var url = content.data("url");

    $(document).ready(fetchAnnouncement);

    function fetchAnnouncement () {
        $.get(url).done(onSuccess).fail(onFail);
    }

    function onSuccess (data) {
        tryRenderAnnouncement(data);
    }

    function onFail () {
        if (fallbackContent) {
            tryRenderAnnouncement(fallbackContent);
        }
    }

    function tryRenderAnnouncement (html) {
        content.append(html);
        banner.show();
        
        fixTopPositions();
        $(window).on("scroll resize", fixTopPositions);
    }

    function fixTopPositions () {
        var body = $(document.body);
        var scrollTop = body.scrollTop() || $('html').scrollTop();
        var availWidth = document.body.offsetWidth;
        var height = (banner.outerHeight() || 0) - scrollTop;
        
        var TNav = $("nav.TK-Nav");
        var navBar = $("#navbar");
        var content = $("#content");
        var sideNav = $(".additional-content-column");
        var apiBreadcrumb = $(".api-breadcrumbs-container, #markdown-toc");

        if (height >= 0) {
            TNav.css("top", height + (availWidth <= 766 ? 4 : 0));
            navBar.css("top", (availWidth <= 766 ? 4 : TNav[0].offsetHeight) + height);
            content.css("padding-top", availWidth <= 766 ? 0 : navBar[0].offsetHeight + height);
            apiBreadcrumb.css("top", navBar[0].offsetHeight + TNav[0].offsetHeight + height);
            sideNav.css("top", 180 + height);
        } else {
            TNav.css("top", 0);
            navBar.css("top", availWidth <= 766 ? 0 : TNav[0].offsetHeight);
            content.css("padding-top", availWidth <= 766 ? 0 : navBar[0].offsetHeight);
            apiBreadcrumb.css("top", availWidth <= 766 ? 0 : navBar[0].offsetHeight + TNav[0].offsetHeight);
        }

        setSideNavPosition();
    }
});



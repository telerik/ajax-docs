function expandNavigation(url) {
    return function() {
        var segments = url.split("/");
        var page = segments[segments.length - 1];
        var treeview = this;

        var dataSource = this.dataSource;
        var node;

        for (var idx = 0; idx < segments.length; idx++) {
            node = dataSource.get(segments[idx]);

            if (!node) {
                treeview.unbind("dataBound", arguments.callee);
                return;
            }

            node.set("expanded", true);
            dataSource = node.children;
        }

        node.set("selected", true);

        var navigationElement = $("#page-nav");
        navigationElement.scrollTop(0);
        var selectedNodeTopOffset = this.findByUid(node.uid).offset().top;
        var scrollOffset = localStorage.getItem('ScrollOffset');
        if (scrollOffset != null) {
            navigationElement.scrollTop(selectedNodeTopOffset - parseInt(scrollOffset));
        }
        else {
            navigationElement.scrollTop(selectedNodeTopOffset - navigationElement.height() / 2);
        }

        treeview.unbind("dataBound", arguments.callee);
    }
}

function navigationTemplate(root) {
    return function(data) {
        var item = data.item;
        var text = item.text;

        if (item.hasChildren) {
            return text;
        }

        var url = item.path;

        if (location.pathname.indexOf(".html") < 0) {
            url = url.replace(".html", "");
        }

        while (item = item.parentNode()) {
            url = item.path + "/" + url;
        }

        return '<a href="' + root + url + '">' + text + "</a>";
    }
}

function preventParentSelection(e) {
    if (this.dataItem(e.node).hasChildren) {
        e.preventDefault();
        this.toggle(e.node);
    }

    var offset = $(e.node).offset().top;
    localStorage.setItem('ScrollOffset', offset);
}

function onExpand(e) {
    var item = this.dataItem(e.node);

    if (!item.hasChildren) {
        var elementTop = $(e.node).offset().top;
        var treeScrollTop = $("#page-nav").scrollTop();
        var treeTop = $("#page-nav").offset().top;

        $("#page-nav").animate({
            scrollTop: ((treeScrollTop + elementTop) - treeTop) / 2
        });
    }
}

$(function() {

   $("#inheritance-hierarchy")
        .next("ul")
        .attr("id", "inheritance-tree")
        .children("li")
        .each(function (index, node) {
           var treeNode = $(node).attr("data-expanded", "true");
           var text = treeNode.text();
           var lastIndexOf;
           var control = text.split(':')[0].trim();
           if (/^Telerik/.test(text)) {
               lastIndexOf = control.lastIndexOf(".");
               treeNode
                   .append("<a href='/devtools/aspnet-ajax/api/server/" + control.substring(0, lastIndexOf) + "/"
                   + control.substring(++lastIndexOf) + "'/>");
           }

           if (index !== 0) {
               treeNode
                   .appendTo($("#inheritance-tree").find("li:eq(" + (--index) + ")"))
                   .end()
                   .wrap("<ul>");
           }
       })
        .end()
        .kendoTreeView();
        var treeView = $("#inheritance-tree").data('kendoTreeView');
        
        treeView.items().each(function (index, node) {
            var item = $(this);
            var text = item.find('a').text();
            var componentParts = text.split(':');
            var control = componentParts[0].trim();
            var interfaces = componentParts[1];
            interfaces = (interfaces) ? (": " + interfaces.trim()) : "";
            item.find('a').text(control);
            item.append(interfaces);
        });
    $("div.tabbedCode").each(function() {
        var container = $(this);
        var langs = container.find("pre");
        var tabs = $.map(langs, function(item) {
            return $("<li>").text($(item).attr("lang"));
        });

        tabs[0].addClass("k-state-active");

        var tabstrip = $("<div>")
                        .append($("<ul>").append(tabs))
                        .append(langs);

        container.replaceWith(tabstrip);

        langs.wrap("<div>");

        tabstrip.kendoTabStrip({ animation: false });
    });

    var codeSampleMapper = {
        'C#': 'cs',
        'VB.NET': 'vb',
        'VB': 'vb',
        'JavaScript': 'js',
        'ASPNET': 'html',
        'XML': 'xml',
        'TypeScript': 'commonjs',
    }

    $("pre").each(function(index) {
        var langExtension = codeSampleMapper[$(this).attr('lang')];
        $(this).addClass('lang-' + langExtension).addClass("prettyprint");
    });

    prettyPrint();

    $("#markdown-toc")
        .on("click", "a", function() {
            $(".section > ul").hide();
        })
        .each(function() {
            var ul = $("<ul>");

            $("#page-article h2").each(function() {
                var h2 = $(this);

                if (!/fields|configuration|properties|events|methods|constructors/i.test(h2.text())) {
                    return;
                }

                $("<li>")
                    .addClass("section")
                    .append(h2.children().clone())
                    .appendTo(ul)
                    .mouseenter(function() {
                        var children = $(this).children("ul");

                        if (!children.length) {
                            children = $("<ul>");

                            h2.nextUntil("h2").filter("h3").each(function() {
                                $("<li>").append($(this).children().clone()).appendTo(children);
                            });

                            if (children.children().length) {
                                children.appendTo(this);
                            }
                        }

                        children.show();
                    })
                    .mouseleave(function() {
                        $(this).children("ul").hide();
                    });
            });

            ul.appendTo(this);
        });
});

$(function() {
    $(".toggle-nav").click(function() {
        $("#page-search").removeClass("search-visibility");
        $("#page-inner-content").removeClass("move-inner-content");
        $("#page-nav").toggleClass("nav-visibility");
    });
});

$(function() {
    $(".show-search").click(function() {
        $("#page-nav").removeClass("nav-visibility");
        $("#page-search").toggleClass("search-visibility");
        $("#page-inner-content").toggleClass("move-inner-content");
    });
});

$(function() {
    $('#toYear').text((new Date).getFullYear());
});

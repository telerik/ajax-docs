//= require codemirror/codemirror.min.js
//= require tabstrip-base

var blazorReplApi = (function($) {

    var blazorReplApi = {
        configuration: {
            url: "https://blazorrepl.telerik.com/iframe/",
            currentKendoVersion: kendoCdnVersion
        },

        addButtons: function(element) {
            var $element = $(element);
            var skipRepl = $element.parent().prev().hasClass("skip-repl") || $element.prev().hasClass("skip-repl");

            if (!$element.parent().prev().is(".action-buttons") && !skipRepl) {
                $('<div class="action-buttons">' +
                    '<button class="btn btn-edit track--edit-repl" title="Edit example">Edit</button>' +
                    '<button class="btn btn-run track--preview-repl" title="Run example">Preview</button>' +
                    // '<button class="btn btn-repl track--open-in-repl" title="Open example in Blazor REPL">Open In Blazor Repl</button>' +
                    '</div>').insertBefore(element);
            }
        },

        createIframe: function(element, src, shouldCompile) {
            reset();
            shouldCompile = shouldCompile === true;

            var tabstrip = $(element).parent().next(".k-tabstrip");
            var isTabbed = tabstrip.length > 0;

            var iframe = $('<iframe class="snippet-runner"/>').attr("src", src);

            if (isTabbed) {
                iframe.show().insertAfter(tabstrip);
                var kendoTabStrip = tabstrip.getKendoTabStrip();

                var iframeLoadedHandler = function iframeLoadedHandler(ev) {
                    if (ev.source === iframe[0].contentWindow && ev.data.loaded === true) {
                        var ts = kendoTabStrip;
                        var files = [];

                        ts.contentElements.each(function(ind, item) {
                            var pre = $(item).find("pre[data-lang]")
                            var path = pre.attr("data-lang");
                            var snippet = pre.text();
                            files.push({ path: ind == 0 ? "__Main.razor" : path, content: snippet });
                        });

                        iframe[0].contentWindow.postMessage({
                            files: files,
                            compile: shouldCompile
                        }, '*');

                        window.removeEventListener("message", iframeLoadedHandler);
                    }
                }

                window.addEventListener("message", iframeLoadedHandler, false);

                iframe.on("load", function() {
                    iframe.height(iframe.contents().height());
                });

                tabstrip.hide();
            } else {

                var pre = $(element).parent().nextAll("pre:first");
                var snippet = null;

                if (isCodeMirrorCurrent(pre)) {
                    snippet = codemirror.getValue();
                    hideCodeMirror();
                    iframe.show().insertAfter(codemirror.display.wrapper);
                } else {
                    snippet = pre.text();
                    destroyCodeMirror();
                    iframe.show().insertAfter(pre);
                }

                var iframeLoadedHandler = function iframeLoadedHandler(ev) {
                    if (ev.source === iframe[0].contentWindow && ev.data.loaded === true) {

                        iframe[0].contentWindow.postMessage({
                            files: [
                                { path: "__Main.razor", content: snippet }
                            ],
                            compile: shouldCompile
                        }, '*');

                        window.removeEventListener("message", iframeLoadedHandler);
                    }
                }

                window.addEventListener("message", iframeLoadedHandler, false);

                iframe.on("load", function() {
                    iframe.height(iframe.contents().height());
                });

                pre.hide();
            }

            setSideNavPosition();
        },
        editSnippet: function(element) {
            var pre = $(element).parent().nextAll("pre:first, .k-tabstrip:first");

            var iframe = pre.next("iframe");
            if (iframe.length == 0) {
                this.createIframe(element, blazorReplApi.configuration.url + 'editor');
            } else {
                iframe[0].contentWindow.postMessage({ view: "editor" }, '*');
            }

            $(element).addClass("active-button");
            $(element).next().removeClass("active-button");
        },
        runSnippet: function(element) {
            var pre = $(element).parent().nextAll("pre:first, .k-tabstrip:first");

            var iframe = pre.next("iframe");
            if (iframe.length == 0) {
                this.createIframe(element, blazorReplApi.configuration.url + 'result', true);
            } else {
                iframe[0].contentWindow.postMessage({ view: "result", compile: true }, '*');
            }

            $(element).addClass("active-button");
            $(element).prev().removeClass("active-button");
        },

        openSnippet: function(element) {
            var tabstrip = $(element).parent().next(".k-tabstrip");
            var isTabbed = tabstrip.length > 0;
            var files = [];
            
            if (isTabbed) {
                var ts = tabstrip.getKendoTabStrip();

                ts.contentElements.each(function(ind, item) {
                    var pre = $(item).find("pre[data-lang]")
                    var path = pre.attr("data-lang");
                    var snippet = pre.text();
                    files.push({ path: ind == 0 ? "__Main.razor" : path, content: snippet });
                });
            } else {
                var snippet = null;
                var pre = $(element).parent().nextAll("pre:first");
                if (isCodeMirrorCurrent(pre)) {
                    snippet = codemirror.getValue();
                } else {
                    snippet = pre.text();
                }
                files.push({ path: "__Main.razor", content: snippet });
            }

            window.addEventListener("message", iframeLoadedHandler, false);
            var wnd = window.open("https://blazorrepl.telerik.com/repl")
           
            var iframeLoadedHandler = function iframeLoadedHandler(ev) {
                if (ev.source === wnd && ev.data.loaded === true) {
                    wnd.postMessage({
                        files: files,
                        compile: false
                    }, '*');

                    window.removeEventListener("message", iframeLoadedHandler);
                }
            }
        }
    };

    var codemirror = null;

    function destroyCodeMirror() {
        if (codemirror) {
            $(codemirror.display.wrapper).remove();
            codemirror = null;
        }
    }

    function hideCodeMirror() {
        if (codemirror) {
            $(codemirror.display.wrapper).hide();
        }
    }

    function showCodeMirror() {
        if (codemirror) {
            $(codemirror.display.wrapper).show();
        }
    }

    function createCodeMirror(pre) {
        codemirror = CodeMirror(function(element) {
            $(element).insertAfter(pre);
        }, {
            value: pre.text(),
            scrollbarStyle: "null",
            lineNumbers: true,
            mode: "htmlmixed"
        });
    }

    function isCodeMirrorCurrent(pre) {
        return codemirror && codemirror.display.wrapper.previousSibling === pre[0];
    }

    function reset() {
        $("pre.prettyprint").show();
        $("article .k-tabstrip").show();
        $(".snippet-runner").remove();
        $(".btn-edit").removeClass("active-button");
        $(".btn-run").removeClass("active-button");
    }

    return blazorReplApi;
})(jQuery);

$(function() {
    $("body article").find("pre[data-lang]").each(function() {
        if (this.parentNode.className.indexOf("k-content") < 0) {
            blazorReplApi.addButtons(this);
        }
    });

    $(document).ready(function() {
        $("body article .k-tabstrip-wrapper .k-tabstrip").each(function() {
            blazorReplApi.addButtons(this);
        });
    })

    // Add Dojo to all API javascript reference code-snippets
    // $("body article.api-reference.javascript").find(".prettyprint").not("[data-lang=pseudo]").each(function() {
    //     blazorReplApi.addButtons(this);
    // });


    $("body").on("click", ".btn-edit", function(e) {
        e.preventDefault();
        blazorReplApi.editSnippet(this);
    });

    $("body").on("click", ".btn-run", function(e) {
        e.preventDefault();

        blazorReplApi.runSnippet(this);
    });

    $("body").on("click", ".btn-repl", function(e) {
        e.preventDefault();

        blazorReplApi.openSnippet(this);
    });
});
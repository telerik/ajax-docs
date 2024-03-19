//= require codemirror/codemirror.min.js
//= require tabstrip-base

var dojoApi = (function($) {
    var dojoApi = {
        configuration: {
            url: "https://dojo.telerik.com/",
            currentKendoVersion: kendoCdnVersion,
            currentThemesVersion: themesCdnVersion
        },
        post: function (snippet) {
            if (!snippet.match(/<html>/i)) {
                snippet = dojoApi.wrapInHtml(snippet);
            }
            snippet = dojoApi.fixLineEndings(snippet);
            var form = $('<form method="post" style="display: none;" target="_blank" action="' + dojoApi.configuration.url + '" />').appendTo(document.body);
            $("<input name='snippet'>").val(window.btoa(encodeURIComponent(snippet))).appendTo(form);

            form.submit();
        },
        fixLineEndings: function (code) {
            return code.replace(/\n/g, "&#10;");
        },
        showHintButton: function (element, text) {
            element = $(element);

            $("<button type='button'>")
            .text(text)
            .addClass("btn btn-action dojo-submit-button")
            .insertBefore(element);
        },
        wrapInHtml: function(snippet) {
            var angular = '    <script src="https://kendo.cdn.telerik.com/kendo-version/js/angular.min.js"></script>\n';
            var jszip = '    <script src="https://kendo.cdn.telerik.com/kendo-version/js/jszip.min.js"></script>\n';

            if (!(/ng-app/i).test(snippet)) {
                angular = '';
            }

            if (!(/ooxml|excel|spreadsheet/i).test(snippet)) {
                jszip  = '';
            }

            var result = ('<!DOCTYPE html>\n'+
                '<html>\n'+
                '<head>\n'+
                '    <meta charset="utf-8"/>\n'+
                '    <title>Kendo UI Snippet</title>\n\n'+
                '    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/themes/themes-version/default/default-ocean-blue.css"/>\n\n'+
                '    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>\n'+
                angular + jszip +
                '    <script src="https://kendo.cdn.telerik.com/kendo-version/js/kendo.all.min.js"></script>\n'+
                '</head>\n'+
                '<body>\n  \n'+
                snippet+ '\n' +
                '</body>\n'+
            '</html>').replace(/kendo-version/g, kendoCdnVersion).replace(/themes-version/g, themesCdnVersion);
        return result;
        },

        addButtons: function(element) {
            if (!$(element).parent().prev().is(".action-buttons")) {
                $('<div class="action-buttons">'+
                 '<button class="btn btn-edit" title="Edit example">Edit</button>'+
                 '<button class="btn btn-run" title="Run example">Preview</button>'+
                 '<a href="https://dojo.telerik.com" class="btn btn-dojo" title="Open example in Kendo UI Dojo"><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><path id="Vector" d="M1 1H4V2H6L4 0H0V11H3V10H1V1Z" fill="#F5F6F7"/><path id="Vector_2" d="M8 3H4V14H12V7L8 3ZM5 13V4H8V7H11V13H5Z" fill="#F5F6F7"/></g></svg><span>Open In Dojo</span></a>'+
                 '</div>').insertBefore(element);
            }
        },
        editSnippet: function(element) {
            reset();

            var pre = $(element).parent().nextAll("pre:first");

            if (isCodeMirrorCurrent(pre)) {
                showCodeMirror();
            } else {
                destroyCodeMirror();
                createCodeMirror(pre);
            }

            pre.hide();

            $(element).addClass("active-button");
            $(element).next().removeClass("active-button");

            setSideNavPosition();
        },
        runSnippet: function(element) {
            reset();

            var pre = $(element).parent().nextAll("pre:first");

            var iframe = $('<iframe class="snippet-runner">').attr("src", 'javascript:""');


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

            iframe.on("load", function() {
                iframe.height(iframe.contents().height());
            });

            pre.hide();

            snippet = snippet.replace(/<script>(.*?)<\/script>/, "<script>try { $1 } catch(e) { document.write(e.toString()); }</script>");

            var html = template({ version: kendoCdnVersion, themesVersion: themesCdnVersion, snippet: snippet, html: /<html>/i.test(snippet) });

            var contents = iframe.contents();

            contents[0].open();
            contents[0].write(html);
            contents[0].close();

            $(element).addClass("active-button");
            $(element).prev().removeClass("active-button");

            setSideNavPosition();
        },

        openSnippet: function(element) {
            var snippet = null;

            var pre = $(element).parent().nextAll("pre:first");

            if (isCodeMirrorCurrent(pre)) {
                snippet = codemirror.getValue();
            } else {
                snippet = pre.text();
            }

            dojoApi.post(snippet);
        }
    };

    var template = kendo.template(
        '# if (!html) { #<!doctype html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8"/>' +
            '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>' +
            '<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"/>' +
            '<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>' +
            '<style>' +
            'body {' +
                'font-family: Helvetica, Arial, sans-serif;' +
            'font-size: 14px' +
            '}' +
            '</style>' +
            '<link rel="stylesheet" href="https://kendo.cdn.telerik.com/themes/${themesVersion}/default/default-ocean-blue.css">' +
            '<script src="https://kendo.cdn.telerik.com/${version}/js/jszip.min.js"></script>' +
            '# if ((/ng-app/i).test(snippet)) { # <script src="https://kendo.cdn.telerik.com/${version}/js/angular.min.js"></script> # } #' +
            '<script src="https://kendo.cdn.telerik.com/${version}/js/kendo.all.min.js"></script>' +
            '<script src="https://kendo.cdn.telerik.com/${version}/js/kendo.timezones.min.js"></script>' +
            '# } #<script>' +
            'if (typeof kendo !== "undefined") kendo.mobile.Application.prototype.options.browserHistory = false;' +
            'window.onerror = function(message, url, line) {' +
                'document.write("<span style=\\"color:red;font-family:monospace\\">" + message + " at line " + line + "</span>");' +
            '};' +
            'window.onunload = function() {' +
                'kendo.destroy(document.body);' +
            '};' +
            '</script>' +
            '# if (!html) { #</head>' +
            '<body>' +
            '# } # #= snippet #' +
            '# if (!html) { #</body>' +
            '</html> # } #'
    );

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
        $(".snippet-runner").remove();
        $(".btn-edit").removeClass("active-button");
        $(".btn-run").removeClass("active-button");
    }

    return dojoApi;
})(jQuery);

$(function(){
    $("body").find(".prettyprint[data-lang=dojo]").each(function() {
        if (this.parentNode.className.indexOf("k-content") < 0) {
            dojoApi.addButtons(this);
        }
    });

    // Add Dojo to all API javascript reference code-snippets
    $("body article.api-reference.javascript").find(".prettyprint").not("[data-lang=pseudo]").each(function() {
        dojoApi.addButtons(this);
    });


    $("body").on("click", ".btn-edit", function(e) {
        e.preventDefault();

        dojoApi.editSnippet(this);
    });

    $("body").on("click", ".btn-run", function(e) {
        e.preventDefault();

        dojoApi.runSnippet(this);
    });

    $("body").on("click", ".btn-dojo", function(e) {
        e.preventDefault();

        dojoApi.openSnippet(this);
    });
});

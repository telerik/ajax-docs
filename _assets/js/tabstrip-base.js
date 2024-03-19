var clipboard;
const selectedLanguageKey = "Selected_TabStrip_Language_Key";
// Necessary for the offline docs.
const localStorageMock = {
    getItem: function () {
        return null;
    },
    setItem: function () {
    }
};

function usesClipboardJs() {
    return window.ClipboardJS && !/\[native code\]/.test(window.ClipboardJS.toString());
};

function setTooltip(btn, message) {
    $(btn).attr('data-original-title', message)
        .tooltip('show');
};

function hideTooltip(btn) {
    $(btn).tooltip('hide');
};

function addCopyButton(element, index) {
    var isCopyButtonOutsideCode = element.parentNode.className.indexOf("k-content") >= 0;
    $(isCopyButtonOutsideCode ? $(element).parent() : element)
        .prepend('<span class="copy-code-btn" title="Copy Code."><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g><polygon points="3,2 6,2 6,3 8,3 6,1 2,1 2,12 5,12 5,11 3,11"/><path d="M10,4H6v11h8V8L10,4z M7,14V5h3v3h3v6H7z"/></g></svg></span>');

    if (usesClipboardJs()) {
        var copyButtonSelector = '.copy-code-btn';
        var id = copyButtonSelector.slice(1) + "-" + index;
        var copyButton = isCopyButtonOutsideCode ? $(element).prev(copyButtonSelector) : $(element).children(copyButtonSelector);
        $(copyButton).attr('id', id)
        clipboard = new ClipboardJS("#" + id, {
            text: function () {
                return $(element).text();
            }
        });

        clipboard.on('success', function (e) {
            setTooltip(e.trigger, 'Copied!');
            setTimeout(function () {
                hideTooltip(e.trigger);
            }, 1000);
        });

        $(copyButton).hover(function (e) {
            setTooltip(e.target, 'Copy code')
        }, function (e) {
            hideTooltip(e.target);
        });
        $(copyButton).tooltip({
            container: 'body',
            trigger: 'manual',
            placement: 'top',
            title: 'Copy code'
        });
    }
}

function handleDataLangCodeSnippets() {
    $("pre[data-lang]").each(function () {

        if (this.parentNode.className.indexOf("k-content") >= 0) {
            return;
        }

        var langs = $(this).nextUntil(":not(pre)", "pre").add(this);

        var tabs = $.map(langs, function (item) {
            var title = $(item).attr("data-lang").replace("tab-", "");
            return $("<li>").text(title);
        });

        if (tabs.length < 2) {
            return;
        }

        tabs[0].addClass("k-state-active");

        var tabstrip = $("<div>")
            .insertBefore(this)
            .append($("<ul>").append(tabs))
            .append(langs);

        langs.wrap("<div>");

        tabstrip.kendoTabStrip({ animation: false });

        $(document).on("click", ".current-topic > div a", false);
    });
}

$(function () {
    $("pre").addClass("prettyprint");

    function getStorage() {
        return localStorage !== undefined ? localStorage : localStorageMock;
    }

    function saveLanguage(language) {
        getStorage().setItem(selectedLanguageKey, language);
    }

    /* START TabStrip logic */

    var selectedLanguage = getStorage().getItem(selectedLanguageKey);

    var onTabActivated = function (e) {
        var language = e.item.innerText;
        if (selectedLanguage !== language) {
            saveLanguage(language);
        }
    };

    $("div.tabbedCode").each(function () {
        var container = $(this);
        var langs = container.find("pre");
        if (langs.length === 0) {
            // console.log("Cannot find any languages")
            return;
        }

        var tabs = $.map(langs, function (item) {
            return $("<li>").text($(item).attr("lang"));
        });

        var hasActive = false;
        if (!selectedLanguage) {
            saveLanguage(tabs[0].innerText);
        } else {
            $(tabs).each(function (index) {
                if ($(this).text() === selectedLanguage) {
                    $(this).addClass('k-state-active');
                    hasActive = true;
                }
            });
        }

        if (!hasActive) {
            tabs[0].addClass("k-state-active");
        }

        var tabstrip = $("<div>")
            .append($("<ul>").append(tabs))
            .append(langs);

        container.replaceWith(tabstrip);
        langs.wrap("<div>");
        tabstrip.kendoTabStrip(
            {
                animation: false,
                activate: onTabActivated
            });
    });

    var codeSampleMapper = {
        'C#': 'cs',
        'F#': 'fs',
        'VB.NET': 'vb',
        'VB': 'vb',
        'JavaScript': 'js',
        'ASPNET': 'html',
        'XML': 'xml',
        'TypeScript': 'commonjs',
        'C++': 'cpp',
        'C': 'c',
        'Objective-C': 'm',
        'Java': 'java'
    };

    if (hasDataLang) {
        handleDataLangCodeSnippets();
    } else {
        $("pre").each(function (index) {
            var langExtension = codeSampleMapper[$(this).attr('lang')];
            $(this).addClass('lang-' + langExtension).addClass("prettyprint");
        });
    }

    $("pre").each(function (index) {
        addCopyButton(this, index);
    });


    prettyPrint();

    /* END TabStrip logic */
});

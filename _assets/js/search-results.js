//= require kendo/kendo.pager.min
//= require kendo/kendo.listview.min

function attachToEvents() {
    if (window.isAttachToEventsFired){
        return;
    }
    $('form input[name="q"]').keydown(function (e) {
        if (e.keyCode == 13) { // Enter
            var $this = $(this);
            searchInternal($this);
            $("#results").data('kendoListView').dataSource.read();
            return false;
        }
    });

    $("div#results").on("click", "a", function (e) {
        trackSearchResult($(this).attr("href"));
    });
    window.isAttachToEventsFired = true;
}

function search(input) {
    searchTerms = input.val();
    trackSearchQuery(searchTerms);
}

function trackSearchQuery(query) {
    trackItem(getSearchCategory(), prd, query);
}

function searchInternal(input) {
    closePopup();
    search(input);
}

function closePopup() {
    var popup = $("#refine-search-popup").data("kendoPopup");
    if(popup){
        popup.close();
    }
}

function getSearchCategory() {
    return "docs-search-terms";
}

function trackSearchResult(link) {
    trackItem("docs-search-results", searchTerms, link);
}

function toKV(n) {
    n = n.split("=");
    this[n[0]] = n[1];
    return this;
}

function getSearchQuery() {
    var params = location.search.replace(/(^\?)/, '').split("&").map(toKV.bind({}))[0];
    searchTerms = decodeURIComponent(params.q ? params.q.replace(/\+/g,' ') : '');

    return $('input[name="q"]').val() || searchTerms;
}

function getDataSource() {
    var params = location.search.replace(/(^\?)/, '').split("&").map(toKV.bind({}))[0];
    searchTerms = decodeURIComponent(params.q ? params.q.replace(/\+/g,' ') : '');
    $("[name=q]").val(searchTerms);

    return new kendo.data.DataSource({
        transport: {
            parameterMap: function (data) {
                return {
                    start: 1 + data.skip,
                    num: data.pageSize,
                    cx: gcsInstance,
                    key: gcsKey,
                    q: getSearchQuery() + searchViewModel.getFilterExpression(),
                };
            },
            read: {
                url: GCSE_API_URL
            }
        },
        change: function () {
            var resultsPresent = this.data().length > 0;
            $("#search-container").toggle(resultsPresent);
            $("#no-results").toggle(!resultsPresent);

            setSideNavPosition();
        },
        serverPaging: true,
        pageSize: 10,
        schema: {
            type: "json",
            data: function (data) {
                if (parseInt(data.searchInformation.totalResults) === 0) {
                    return [];
                }

                return data.items.map(function (item) {
                    return {
                        title: item.htmlTitle,
                        url: item.link,
                        excerpt: item.htmlSnippet
                    };
                });
            },
            total: function (data) {
                return data.searchInformation.totalResults;
            }
        }
    });
}

$(function () {
    var searchDataSource = getDataSource();

    $("#results").kendoListView({
        dataSource: searchDataSource,
        template: $("#results-template").html(),
        dataBound: function () {
            window.scrollTo(0, 0);
            setSideNavPosition();
        }
    });

    $(".site-pager").kendoPager({
        dataSource: searchDataSource,
        buttonCount: 5,
        responsive: false,
        messages: {
            previous: "Previous",
            next: "Next",
            display: "",
            empty: ""
        }
    });

    $(".results-message").kendoPager({
        dataSource: searchDataSource,
        numeric: false,
        previousNext: false,
        responsive: false,
        messages: {
            display: "{0}-{1} of {2} results",
            empty: "Sorry, there were no results found. Maybe try a broader search."
        }
    });

    setSideNavPosition();
    attachToEvents();
});

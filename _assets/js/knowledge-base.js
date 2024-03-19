//= require kendo
//= require kendo/kendo.treeview.min
var PAGE_FILTER = " more:pagemap:metatags-restype:";
var GCSE_ELEMENT_NAME = "google-search";
var GCSE_API_URL = "https://www.googleapis.com/customsearch/v1";
var searchTerms = "";
var searchItemsStorageKey = "searchItemsStorageKey";
var siteHasKbPortal, isKbPage, isKbPortalRoot, hasApiReference;

var searchViewModel = kendo.observable({
    isInitialized: false,
    kb: false,
    documentation: false,
    api: false,
    label: "",
    filterValues: [],
    getFilter: function () {
        var filterExpression = '';
        for (var i = 0; i < this.filterValues.length; i++) {
            if (filterExpression !== '') {
                filterExpression += ',';
            }

            filterExpression += this.filterValues[i];
        }

        return filterExpression;
    },
    getFilterExpression: function () {
        var filter = this.getFilter();
        return filter !== '' ? PAGE_FILTER + filter : '';
    },
    updateLabel: function () {
        var label = "";
        this.filterValues = [];

        if ((this.kb && this.documentation && this.api) || (!this.kb && !this.documentation && !this.api)) {
            label = "Search all";
        } else {
            if (this.documentation) {
                label += "DOCS";
                this.filterValues.push('documentation');
            }

            if (this.kb) {
                label += (label ? " / " : "") + "KB";
                this.filterValues.push('kb');
            }

            if (this.api && hasApiReference) {
                label += (label ? " / " : "") + "API";
                this.filterValues.push('api');
            }

            label = "Search in " + label;
        }

        this.set("label", label);
    },
    getLocalStorageKey: function () {
        return searchItemsStorageKey + gcsInstance;
    },
    update: function () {
        this.updateLabel();
        localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(this.filterValues));
        updateSearchLayout();

    },
    init: function () {
        var propertyNames = JSON.parse(localStorage.getItem(this.getLocalStorageKey()));
        if (!propertyNames || isKbPortalRoot) {
            propertyNames = [];

            if (isKbPage || isKbPortalRoot) {
                propertyNames.push('kb');
            } else {
                propertyNames.push('documentation');
                if (hasApiReference) {
                    propertyNames.push('api');
                }

                if (siteHasKbPortal) {
                    propertyNames.push('kb');
                }
            }

            if (!isKbPortalRoot) {
                localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(propertyNames));
            }
        }

        for (var i = 0; i < propertyNames.length; i++) {
            searchViewModel.set(propertyNames[i], true);
        }

        searchViewModel.updateLabel();
    }
});

function init() {
    if(window.isSearchPopupInitialized != true){
        
        var popup = $("#refine-search-popup").kendoPopup({
            anchor: $("#refine-search-container"),
            origin: "bottom right",
            position: "top right",
        }).data("kendoPopup");
        
        $("#refine-search-button").on("click", function () {
            popup.toggle();
        });
        window.isSearchPopupInitialized = true;
    }

    searchViewModel.init();

    kendo.bind($(".search-input-container"), searchViewModel);
    kendo.bind($("#refine-search-popup"), searchViewModel);

    searchViewModel.bind("change", function (e) {
        if (["api", "documentation", "kb"].indexOf(e.field)>-1){
            searchViewModel.update();
        }
    });

    attachToEvents();
    updateSearchLayout();
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
    popup.close();
}

function updateSearchLayout() {
    $('#local-search').css('padding-right', $('#refine-search-button').outerWidth());
}

$(function () {
    init();

    var ds = getDataSource();

    $("#results").kendoListView({
        dataSource: ds,
        template: $("#results-template").html(),
        dataBound: function () {
            window.scrollTo(0, 0);
            setSideNavPosition();
        }
    });

    $(".site-pager").kendoPager({
        dataSource: ds,
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
        dataSource: ds,
        numeric: false,
        previousNext: false,
        responsive: false,
        messages: {
            display: "{0}-{1} of {2} results",
            empty: "Sorry, there were no results found. Maybe try a broader search."
        }
    });

    setSideNavPosition();
    searchViewModel.isInitialized = true;
});

var DEFAULT_KB_QUERY = "knowledge base";

function trackSearchResult(link) {
    trackItem("docs-kb-search-results", searchTerms, link);
}

function getSearchQuery() {
    return $('input[name="q"]').val() || DEFAULT_KB_QUERY;
}

function attachToEvents() {
    if(window.isAttachToEventsFired){
        return;
    }
    $('input[name="q"].kb-search').keydown(function (e) {
        if (e.keyCode == 13) { // Enter
            var $this = $(this);
            searchInternal($this);
            $("#results").data('kendoListView').dataSource.read();
            return true;
        }
    });

    $("div#results").on("click", "a", function (e) {
        trackSearchResult($(this).attr("href"));
    });
    window.isAttachToEventsFired = true;
}

function getSearchCategory() {
    return "docs-kb-search-terms";
}

function getDataSource() {
    return new kendo.data.DataSource({
        transport: {
            parameterMap: function (data) {
                return {
                    start: 1 + data.skip,
                    num: data.pageSize,
                    cx: gcsInstance,
                    sort: searchViewModel.isInitialized ? '' : 'date',
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

                return data.items.filter(function (item) {
                    return !item.link.match(/(.*)knowledge-base(.html){0,}$/);
                }).map(function (item) {
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

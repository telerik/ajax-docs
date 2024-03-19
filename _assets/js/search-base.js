var PAGE_FILTER = " more:pagemap:metatags-restype:";
var GCSE_ELEMENT_NAME = "google-search";
var GCSE_API_URL = "https://www.googleapis.com/customsearch/v1";
var searchTerms = "";
var searchItemsStorageKey = "searchItemsStorageKey";
var searchDataSource, isKbPortalRoot;


window.searchViewModel = window.searchViewModel || kendo.observable({
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
        if (searchViewModel.isInitialized){
            return;
        }
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
        searchViewModel.isInitialized = true;
    }
});

function init() {
    if(window.isSearchBaseInitialized){
        return;
    }
    searchViewModel.init();
    
    kendo.bind($(".search-input-container"), searchViewModel);
    searchViewModel.bind("change", function (e) {
        if (["api", "documentation", "kb"].indexOf(e.field)>-1){
            searchViewModel.update();
        }
    });
    
    window.isSearchBaseInitialized = true
}

function updateSearchLayout() {
    $('#local-search').css('padding-right', $('#refine-search-button').outerWidth());
}

$(function () {
    init();
});

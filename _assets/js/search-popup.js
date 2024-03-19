//= require kendo/kendo.popup.min

var searchPopupScriptUrl = assetsFolderPath + '/search-popup.js'
if (loadedScripts && loadedScripts.indexOf(searchPopupScriptUrl) <0) {
    loadedScripts.push(searchPopupScriptUrl);
}
function initPopup(open) {
    if(window.isSearchPopupInitialized){
        if (open){
            $("#refine-search-popup").getKendoPopup().open();
        }
        return;
    }

    window.isSearchPopupInitialized = true;

    var popup = $("#refine-search-popup").kendoPopup({
        anchor: $("#refine-search-container"),
        origin: "bottom right",
        position: "top right",
    }).data("kendoPopup");

    $("#refine-search-button").on("click", function () {
        popup.toggle();
    });
    kendo.bind($("#refine-search-popup"), searchViewModel);

    updateSearchLayout();

    if (open) {
        popup.open();
    }
}

function search(input) {
    searchTerms = input.val();
    trackSearchQuery(searchTerms);
}

function trackSearchQuery(query) {
    trackItem(getSearchCategory(), prd, query);
}

function getSearchCategory() { }

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

function getDataSource() { }

$(function () {
    initPopup(window.showSearchPopup);
});

var loadKendoTabstrip = function (url) {
    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', 'true');
    document.body.appendChild(script);
};

$(function () {
    if($("div.tabbedCode").length || (!(dojoEnabled||blazorReplEnabled) && $("pre > code").length)) {
        loadKendoTabstrip(assetsFolderPath + '/tabstrip.js');
    }
});

(function () {
    window.$ = $ || window.$telerik.$;
    window.jQuery = window.jQuery || window.$;

    var isToastrConfigured = false;
    var timeoutRetry = 0;
    if (!window.toastr) {
        $telerik.$(document.head).append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" /><script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>')
    }

    ShowControls();

    function ShowControls() {
        if (!window.toastr) {
            if (timeoutRetry < 10) {
                timeoutRetry++;
                setTimeout(ShowControls, 500);
            } else {
                alert("Please load the Toastr.js library before using the script");
            }

            return false;
        }

        if (!isToastrConfigured) {
            toastr.options.closeButton = true;
            toastr.options.timeOut = 0;
            toastr.options.extendedTimeOut = 0;
            toastr.options.tapToDismiss = false;
            isToastrConfigured = true;
        }

        var table = $telerik.$("<p>Controls and their RenderModes</p>" + getRenderModeControlsTableString());
        toastr.info(table).css("width", "auto").css("max-height", "800px").css("overflow", "auto");
    }

    window.ShowControlsRenderMode = ShowControls;

    function getRenderModeControlsTableString() {
        var lite = [];
        var classic = [];
        var mobile = [];
        var auto = [];

        $telerik.radControls.forEach(function (ctrl) {
            if (ctrl.get_renderMode() === Telerik.Web.UI.RenderMode.Lite) {
                lite.push(ctrl)
            } else if (ctrl.get_renderMode() === Telerik.Web.UI.RenderMode.Classic) {
                classic.push(ctrl)
            } else if (ctrl.get_renderMode() === Telerik.Web.UI.RenderMode.Mobile) {
                mobile.push(ctrl)
            } else if (ctrl.get_renderMode() === Telerik.Web.UI.RenderMode.Auto) {
                auto.push(ctrl)
            }
        });

        var openTable = '<table border="1" style="overflow: auto"><thead><tr><th>Id</th><th>RenderMode</th><th>Control type</th></tr></thead><tbody>'
        var closeTable = '</tbody></table>'

        function getRowStringFromControl(ctrl, renderMode) {
            var tr = '<tr>';
            var controltype = ctrl.get_element().className.split(" ")[0];

            tr = "<tr><td>" + ctrl.get_id()
                + "</td><td>" + renderMode + "</td><td>"
                + controltype + "</td></tr>";
            return tr;
        }

        for (var i = 0; i < classic.length; i++) {
            openTable = openTable + getRowStringFromControl(classic[i], "Classic");
        }

        for (var i = 0; i < lite.length; i++) {
            openTable = openTable + getRowStringFromControl(lite[i], "Lightweight");
        }

        for (var i = 0; i < mobile.length; i++) {
            openTable = openTable + getRowStringFromControl(mobile[i], "Mobile");
        }

        return openTable + closeTable;
    }
})(window);
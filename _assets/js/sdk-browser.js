/* START Developer Focused Examples Kendo Grid implementation */

function strEndsWith(str, suffix) {
    return str.match(suffix + "$") == suffix;
}

function strStartsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

function prepareCode(url, codeString) {
    var fileExtenstion = getFileExtension(url);
    var langName = "";

    if (fileExtenstion == "xml") {
        langName = "XML";
        if (strEndsWith(url, 'xaml')) {
            langName = "XAML";
        }
    }
    else if (fileExtenstion == "cs") {
        langName = "C#";
    }
    document.getElementById('heading').innerHTML = '<strong>' + langName + '</strong>';
    codeString = escapeXamlCode(codeString);

    var prettyCode = prettyPrintOne(codeString, fileExtenstion);
    return prettyCode;
}

function escapeXamlCode(xamlCode) {
    var converted = xamlCode.replace(/</g, "&lt;");
    var converted2 = converted.replace(/>/g, "&gt;");
    return converted2;
}

function getFileExtension(fileName) {
    var ext = fileName.split('.').pop();
    if (ext == "xaml" || ext == "config" || ext == "csproj") {
        ext = "xml"
    }
    return ext;
}

function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)      // If Internet Explorer, return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    else                 // If another browser, return 0
        return 0;
}

function getCodeInJsonP(theUrl) {
    $.ajax({
        url: theUrl,
        dataType: 'jsonp',
        success: function (results) {

            if (results.data.message && strStartsWith(results.data.message, "API rate")) {
                document.getElementById('codeBlock').innerHTML = "GitHub API Rate limit hit. Please use other browsers like Chrome or Firefox."
            }

            // Create Base64 Object
            var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

            var content = results.data.content;
            content = Base64.decode(content);

            document.getElementById('codeBlock').innerHTML = prepareCode(theUrl, content);
        }
    });
}
function convertApiLinkToCDNLink(url, fileName) {
    var contentsIndex = url.indexOf('contents');
    var rootDir = url.substring(contentsIndex + 9);

    return sdkCdnRepoPath + rootDir + fileName;
}

function getCodeInPlainText(theURL, fileName) {
    var cdnUrl = convertApiLinkToCDNLink(theURL, fileName);
    $.ajax({
        url: cdnUrl,
        dataType: 'text',
        success: function (response) {
            document.getElementById('codeBlock').innerHTML = prepareCode(cdnUrl, response);
        }
    });
}

function setDescription(readmeDiv, description) {
    var htmlStart = "<html><head></head><body><b><u>Description:</u></b><p>"
    var htmnEnd = "</p></body></html>";
    readmeDiv.html(htmlStart + description + htmnEnd);
}

function getReadMeFileName(readmePath) {
    return readmePath.split('\\').pop();
}

function getFileName(fullName) {
    var splitPath = fullName.split('\\');
    if (splitPath) {
        return splitPath[splitPath.length - 1];
    }
    return fullName;
}

function detailInit(e) {
    var detailRow = e.detailRow;

    detailRow.find(".detailsDIV").kendoGrid({

        dataSource: e.data.ExampleInfo.ExampleFileNames,

        columns: [{
            title: "Files",
            template: function (dataItem) {
                return getFileName(dataItem)
            }
        }],

        selectable: "row",

        change: function () {
            var index = this.select().index();
            var dataItem = this.dataSource.view()[index];

            if (msieversion() > 0) {
                getCodeInJsonP(e.data.GitHubPath + dataItem);
            }
            else {
                getCodeInPlainText(e.data.GitHubPath, dataItem);
            }
        },
    });
    setDescription(e.detailRow.find(".readmeDiv"), e.data.Description);

    var innerGrid = $(".detailsDIV").data("kendoGrid");
    if (innerGrid) {
        innerGrid.select($('.detailsDIV tbody>tr:first'));
    }
}

function getGitHubFolderUrl(exampleInfo) {
    var masterIndex = exampleInfo.GitHubPath.indexOf('contents');
    var rootDir = exampleInfo.GitHubPath.substring(masterIndex + 9);
    var dirName = exampleInfo.ExampleInfo.DirectoryName;

    var result = "<a href='" + sdkRepoPath + rootDir + "/' target='_blank'>" + dirName + "</a>";
    return result;
}

function createKendoGrid(containerId, dataSourceUrl) {
    var kendoDiv = $(containerId);
    if (kendoDiv.length == 0) { return; }

    kendoDiv.kendoGrid({
        toolbar: kendo.template($("#toolBarTemplate").html()),
        height: 600,
        columns: [{
            field: "Name",
            width: 300,
            template: function (dataItem) {
                return getGitHubFolderUrl(dataItem)
            },
        }, {
            field: "Description"
        }],
        dataSource: {
            transport: {
                read: {
                    url: dataSourceUrl,
                    dataType: "json"
                }
            }
        },
        detailTemplate: kendo.template($("#template").html()),
        detailInit: detailInit,
        selectable: "row",
        change: function (e) {
            var row = this.select();
            if (row != null) {
                if (row.next(".k-detail-row").is(":visible")) {
                    e.sender.collapseRow(row);
                } else {
                    e.sender.expandRow(row);
                }
            }
        },
    });

    var grid = kendoDiv.data("kendoGrid");
    if (grid) {
        var styleSelector = containerId + " tbody>tr:first";
        grid.one("dataBound", function (e) {
            e.sender.expandRow($(styleSelector));
        });
    }
}

function onUserInput() {
    var input = document.getElementById("searchBox").value;
    var grid = $("#kendoDiv").data("kendoGrid");
    grid.dataSource.filter({
        value: input,
        field: "KeyWords",
        operator: function (field, value) {
            if (value == '') {
                return true;
            }
            if (field) {
                var status = true;
                var splittedSearchKeys = value.toLowerCase().split(/[ ,]+/);
                for (var i = 0, length = splittedSearchKeys.length; i < length; i++) {
                    if (field.toLowerCase().indexOf(splittedSearchKeys[i]) < 0) {
                        status = false;
                        break;
                    }
                }
                return status;
            }
            return false;
        }
    });
}

function onUserInputSL() {
    var input = document.getElementById("searchBox").value;
    var grid = $("#kendoDivSL").data("kendoGrid");
    grid.dataSource.filter({
        value: input,
        field: "KeyWords",
        operator: function (field, value) {
            if (value == '') {
                return true;
            }
            if (field) {
                var status = true;
                var splittedSearchKeys = value.toLowerCase().split(/[ ,]+/);
                for (var i = 0, length = splittedSearchKeys.length; i < length; i++) {
                    if (field.toLowerCase().indexOf(splittedSearchKeys[i]) < 0) {
                        status = false;
                        break;
                    }
                }
                return status;
            }
            return false;
        }
    });
}

$(document).ready(function () {
    createKendoGrid("#kendoDiv", mainSdkExamples);
    createKendoGrid("#kendoDivSL", "sdk_sl.json");
});

/* END Developer Focused Examples Kendo Grid implementation */

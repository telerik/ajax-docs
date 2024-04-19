---
title: Show loading panel when exporting
description:  Learn to show loading panel when exporting
type: how-to
page_title: Show loading panel when exporting. | RadGrid
slug: grid-show-loading-panel-when-exporting
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## DESCRIPTION

When exporting the Grid to Excel/Word/PDF/CSV and assembling the exported file takes a long time, you may want to display a loading panel on top of it. Usually, **RadAjaxLoadingPanel** can be used to show a loading panel on top of AJAX-ified content. However, when exporting, the Grid needs to perform a full page postback and no AJAX can be used.

This sample demonstrates an alternative approach for showing RadAjaxLoadingPanel on top of RadGrid when exporting. The client-side **OnCommand** event of the Grid can be used to identify when the Grid will be exporting. 

The JavaScript event handler can be used to programmatically show the loading panel, however, identifying the point when the loading panel needs to be hidden is not so trivial. When RadGrid posts the page for exporting, the server responds with the exported file. The current page is not reloaded and no javascript event fires to indicate the beginning of the download.

## SOLUTION

To work around this limitation, we can use an approach described by Jesse Taber in [his blog post in geekswithblogs.net](https://geekswithblogs.net/gwbarchive/detecting-the-file-download-dialog-in-the-browser/). 

He suggests using a token submitted as a form field that the server-side code puts back in a browser cookie. As cookies are sent back in the response regardless of responded content, the existence of a cookie with the same token can be used as a flag to indicate the download is starting and the loading panel needs to be hidden. 

In the browser, once the page is submitted, a javascript function can poll for this cookie at regular intervals. Once the cookie is retrieved, the loading panel is hidden. To implement this scenario, we have used a RadGrid with export buttons shown:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Width="800px"
    OnNeedDataSource="RadGrid1_NeedDataSource" AllowPaging="true"
    OnItemCommand="RadGrid1_ItemCommand">
    <MasterTableView CommandItemDisplay="Top">
        <CommandItemSettings ShowExportToExcelButton="true"
                    ShowExportToCsvButton="true"
                    ShowExportToPdfButton="true"
                    ShowExportToWordButton="true" />
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnCommand="gridCommand" />
    </ClientSettings>
</telerik:RadGrid>
````

The **OnCommand** event handler is used to create a token and a form field and start polling for the browser cookie. If the cookie is found and its value matches the token, we hide the loading panel and do some clean up. If not, we continue polling:

````JavaScript
function gridCommand(sender, args) {
    if (args.get_commandName().startsWith("Export")) {
        //show loading panel on top of RadGrid when an Export command is triggered
        var loadingPanel = $find("<%= RadAjaxLoadingPanel1.ClientID %>");
        loadingPanel.show(sender.get_id());

        //initiate cookie polling
        appendDownloadToken();
    }
}

function appendDownloadToken() {
    window._downloadToken = new Date().getTime() + "";
    //add a form field containing the download token before submit
    $telerik.$("<input type='hidden' id='_downloadToken' name='_downloadToken' value='" + window._downloadToken + "' />").appendTo(document.forms[0]);

    pollDownloadCookie();
}

function pollDownloadCookie() {
    //compare cookie value and initial value
    if (cookie.get("_downloadToken") === window._downloadToken) {
        //erase download token cookie
        cookie.erase("_downloadToken");
        //remove the token value
        delete window._downloadToken;
        //remove the form field
        $telerik.$("#_downloadToken").remove();
        //hide the loading panel
        $find("<%= RadAjaxLoadingPanel1.ClientID %>").hide("<%= RadGrid1.ClientID %>");
    }
    else {
        setTimeout(pollDownloadCookie, 100);
    }
}
````

In the above JavaScript, cookie is a small helper object for dealing with browser cookies in JavaScript:

````JavaScript
cookie = {
    get: function(name) {
        var part = document.cookie.split(name + "=")[1];
        return part ? decodeURIComponent(part.split(";")[0]) : null;
    },
    set: function(name, value, days, path, secure) {
        document.cookie = [
            name + "=" + encodeURIComponent(value),
            days ? "expires=" + new Date(new Date().getTime() + (days*24*60*60*1000)).toUTCString() : "",
            secure ? "secure" : "",
            path ? "path=" + path : "path=/"
        ].join("; ");
    },
    erase: function(name) {
        cookie.set(name, "", -1);
    },
    all: function() {
        var ret = {};
        var arr = document.cookie.split(";");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                var pair = arr[i].split("=");
                ret[pair[0]] = decodeURIComponent(pair[1]);
            }
        }
        return ret;
    }
}
````

Finally, on the server side, we use RadGrid's ItemCommand event to handle the export command. In the event handler, we check for the existence of a download token in the Request parameters. If a token is found, we add its value to the response as a cookie:

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName.StartsWith("Export"))
    {
        if (!String.IsNullOrEmpty(Request["_downloadToken"]))
        {
            Response.Cookies.Add(new HttpCookie("_downloadToken", Request["_downloadToken"]));
            System.Threading.Thread.Sleep(5000);
        }
    }
}
````

And this is it. Now every time RadGrid starts an export, the loading panel will show on top, blocking the UI, and disappear when the download starts. The sample page is attached along with accompanying source code. You can place them in a sample Web Site project to run locally.

**DOWNLOAD** the sample: [GridShowLoadingPanelOnExport.zip](files/grid-show-loading-panel-when-exporting.zip) 
  
   
    
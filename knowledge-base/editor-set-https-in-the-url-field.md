---
title: Configure Hyperlink Manager URL field of RadEditor to starts with HTTPS
description: The URL textbox of the RadEditor hyperlink manager begins with http due to legacy reasons, but you can easily update it to https. Learn how in this article.
type: how-to
page_title: Configure Hyperlink Manager URL field of RadEditor to starts with HTTPS
slug: editor-set-https-in-the-url-field
position: 
tags: 
ticketid: 1524108
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2020.2.617</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Due to legacy reasons, the URL textbox begins with http://, but you can easily update it to https:// by following the instructions below.

## Solution
To update the default value of the URL field of the Hyperlink manager from http:// to https://, you need to create a js file (e.g. dialog.js) with the following content:

````JavaScript
setTimeout(function () {
    var urlField = document.getElementById("LinkURL");
    if (urlField.value.indexOf("https") || urlField.value.indexOf("http") > 0) {
        urlField.value = "https://";
    }
}, 100);
````

and to load it through the DialogsScriptFile property

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" DialogsScriptFile="~/dialog.js" ></telerik:RadEditor>
````
 
## Solution 2

Use the OnClientCommandExecuted to access the HyperlinkManager dialog's contents and modify the LinkURL field value according to what's commining from the selection in the content area, e.g. if there is a selected URL it will stay untouched, if it is an empty selection the http:// protocol will be updated to https://, e.g.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuted="OnClientCommandExecuted"></telerik:RadEditor>
<script> 
    function OnClientCommandExecuted(sender, args) {
        var dialogWindow,
            isIframe,
            commandName = args.get_commandName();

        dialogWindow = sender.get_dialogOpener()._dialogContainers[commandName];

        if (dialogWindow) {
            isIframe = dialogWindow.get_contentFrame();

            if (isIframe) {
                dialogWindow.add_pageLoad(setUrlProtocol);
            }
            else
                setUrlProtocol(dialogWindow);
        }
    }

    function setUrlProtocol(sender) {
        sender.set_reloadOnShow(true);
        var urlField = sender.get_contentFrame().contentDocument.getElementById("LinkURL");
        
        if (urlField.value.indexOf("http://") >= 0 && urlField.value.substring(0).length == 7)  {
            urlField.value = "https://";
        }
        sender.remove_pageLoad(setUrlProtocol);
    }
</script>
````
 

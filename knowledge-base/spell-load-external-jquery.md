---
title: How to load external jQuery in RadSpell
description: The article explains how to load an external jQuery in RadSpell and its dialog.
type: how-to
page_title: Including external jQuery in RadSpell
slug: spell-load-external-jQuery
position: 
tags: 
ticketid: 1445149
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadSpell for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Check out below, how to load an external version of jQuery in RadSpell.

## Solution
Here are the steps to import a different from the default version of jQuery:

* Disable the embedded jQuery by adding the following entry in the web.config file

````web.config
<add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="false" />
````


* Apply the Telerik.Web.UI.RadDialogOpener.prototype.open override to be able to import the jQuery from the main page into the iframe based dialog of RadSpell:

````ASP.NET
<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="jquery-1.12.2.min.js"></script>
</head>

<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="ScriptManager" runat="server">
            <Scripts>
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
            </Scripts>
        </telerik:RadScriptManager>

        <asp:TextBox runat="server" ID="TextBox1" Text="behaviour" />
        <telerik:RadSpell ID="spell1" runat="server" ControlToCheck="TextBox1" />
        <script>
            Telerik.Web.UI.RadDialogOpener.prototype.originalOpen = Telerik.Web.UI.RadDialogOpener.prototype.open;
            Telerik.Web.UI.RadDialogOpener.prototype.open = function (dialogName, clientParameters, callbackFunction) {
                if (!this._handlerChecked) {
                    this._checkDialogHandler(this.get_handlerUrl());
                }

                var container = this._getDialogContainer(dialogName);
                if (container && container.add_beforeShow) {
                    container.add_beforeShow(function (radWnd) {
                        var contentWindow = radWnd.GetContentFrame().contentWindow;
                        contentWindow.jQuery = contentWindow.jQuery || window.jQuery;
                    });
                }

                this.originalOpen(dialogName, clientParameters, callbackFunction);
            }
        </script>
    </form>
</body>
</html>

````



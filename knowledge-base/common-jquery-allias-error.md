---
title: Uncaught TypeError $telerik.$ is not a function
description: Learn how to fix the $telerik.$ is not a function error when using the Telerik UI for ASP.NET AJAX controls on the page
type: troubleshooting
page_title: $telerik.$ is not a function error
slug: common-jquery-allias-error
position: 
tags: 
ticketid: 1609298
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadEditor for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
Learn how to fix the `$telerik.$` is not a function error when using the Telerik UI for ASP.NET AJAX controls on the page

## Solution
To use the `$telerik.$` jQuery alias in your script code, you have to have one of the controls listed in the [Telerik UI Controls Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#telerik-ui-controls-using-jquery) article on the page or import the built-in in the suite jQuery using these inner RadScriptManager tags:

````ASPX
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            <Scripts>
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
            </Scripts>
        </telerik:RadScriptManager>
````

You can find more information in the [Using the jQuery Brought by Telerik]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#using-the-jquery-brought-by-telerik) article.
 


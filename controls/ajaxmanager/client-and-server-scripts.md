---
title: Using Server and Client Scrips Together 
page_title: Using Server and Client Scrips Together with the AjaxManager
description: "Learn how to use the RadCodeBlock and RadScriptBlock in Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/radcodeblock-and-radscriptblock
previous_url: ajax/radcodeblock-and-radscriptblock, controls/ajaxmanager/radcodeblock-and-radscriptblock
tags: telerik, aspnet, ajax, ajaxmanager, using, client, server, scripts, together, radcodeblock, radscriptblock
published: True
position: 6
---

# Using Server and Client Scrips Together 

To allow server and client scripts to work together during the AJAX updates enabled by AjaxManager, use the `RadCodeBlock` and `RadScriptBlock`.

When server code blocks are placed within the markup, use the `RadCodeBlock`. When you have the JavaScript that evaluates after an AJAX request, use the `RadScriptBlock`.

## Using the RadCodeBlock

The way the server script within `<%= %>` tags (code blocks) are implemented in ASP.NET may interfere with the AjaxManager render interception mechanism. 

To prevent this interference, use the `RadCodeBlock` whenever you have server code blocks placed within your markup, for example, when some JavaScript functions access the server controls. The `RadCodeBlock` isolates the code block and prevents server errors similar to `System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).` You can place as many `RadCodeBlock` elements on the page as needed.

For more information, refer to Rick Strahl's [Understanding how <% %>expressions render and why Controls.Add() doesn't work](http://www.west-wind.com/WebLog/posts/6148.aspx) article.

The following example demonstrates the `RadCodeBlock` in the markup isolates the code block and prevents the `System.Web.HttpException` server error.

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function AjaxReq(args) {
	        $find("<%= RadAjaxPanel1.ClientID %>").ajaxRequestWithTarget("<%= Button1.UniqueID %>", '');
	    }
	</script>
</telerik:RadCodeBlock>
````


## Using the RadScriptBlock

Where you have JavaScript that evaluates after an AJAX request, use the `RadScriptBlock`, for example, when the content of the AjaxPanel is updated asynchronously. 

You can also use a `RadScriptBlock` like a `RadCodeBlock` to handle server code blocks (`<% ... %>`). You can place as many `RadScriptBlock` tags on the page as needed. 

The `RadScriptBlock` wraps JavaScript where the JavaScript is located in an updating area. The example below shows a `RadScriptBlock` within an AjaxPanel.

````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<asp:Panel ID="Panel1" runat="server">
	<asp:Button ID="Button1" runat="server" />
	<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
		<script type="text/javascript">
		    alert(1);            
		</script>
	</telerik:RadScriptBlock>
	</asp:Panel>
</telerik:RadAjaxPanel>
````

The following example demonstrates how a `RadScriptBlock` isolates the server tags in the `src` and `href` values.

````ASP.NET
<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
	<link rel="stylesheet" href="<%=Page.ResolveUrl("~/Styles/global.css")%>" type="text/css" />
	<link rel="stylesheet" href="<%=Page.ResolveUrl("~/Styles/styles2.css")%>" type="text/css" />
</telerik:RadScriptBlock>
 
<telerik:RadScriptBlock ID="RadScriptBlock2" runat="server">
	<script src="<%=Page.ResolveUrl("~/Scripts/jquery-3.5.1.min.js")%>" type="text/javascript"></script>
	<script src="<%=Page.ResolveUrl("~/Scripts/dialog.js")%>" type="text/javascript"></script>
</telerik:RadScriptBlock>

<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
	<a id="lnk1" class="xyz" href="abc.aspx?ReturnPath=<%= returnPath %>">Test</a>
</telerik:RadScriptBlock>
````



## See Also

* [The Controls collection cannot be modified because the control contains code blocks (Error)](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/general-troubleshooting#error-message-the-controls-collection-cannot-be-modified-because-the-control-contains-code-blocks)
* [The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>)](https://www.telerik.com/forums/232173-the-controls-collection-cannot-be-modified-because-the-control-contains-code-blocks-i-e-lt-gt)
* [The RadCodeBlock and RadScriptBlock (Forum Thread)](https://www.telerik.com/forums/radcodeblock-and-radscriptblock)
* [Telerik RadCodeBlock vs RadScriptBlock](https://www.inalign.com/sitefinity/telerik-radcodeblock-vs-radscriptblock)
* [Applying Client-Side Logic to Initially Hidden Controls](https://www.telerik.com/support/kb/aspnet-ajax/details/apply-client-side-logic-to-initially-hidden-controls)



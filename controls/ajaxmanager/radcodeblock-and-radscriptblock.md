---
title: RadCodeBlock and RadScriptBlock
page_title: RadCodeBlock and RadScriptBlock | RadAjax for ASP.NET AJAX Documentation
description: RadCodeBlock and RadScriptBlock
slug: ajaxmanager/radcodeblock-and-radscriptblock
previous_url: ajax/radcodeblock-and-radscriptblock
tags: radcodeblock,and,radscriptblock
published: True
position: 9
---

# RadCodeBlock and RadScriptBlock

RadCodeBlock and RadScriptBlock are used to allow server and client script to work well together with AJAX updates. RadCodeBlock should be used when you have server code blocks placed within the markup. RadScriptBlock is used where you have JavaScript that evaluates after an AJAX request.

This article describes how **RadCodeBlock** and **RadScriptBlock** work and provides simple examples. You can use **RadCodeBlock** and **RadScriptBlock** to allow server and client script to work well together with AJAX updates.

## RadCodeBlock

You should use **RadCodeBlock** when you have server code blocks placed within your markup (most often some JavaScript functions accessing server controls). **RadCodeBlock** (see **Example 1** ) isolates the code block and prevents the server error:

*System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).*

For more background on this issue see Rick Strahl's article, [Understanding how <% %>expressions render and why Controls.Add() doesn't work](http://www.west-wind.com/WebLog/posts/6148.aspx).

The way code blocks (server script within "<%= %>"tags) are implemented in ASP.NET may interfere with the **RadAjaxManager** render interception mechanism.

**Example 1** : Using a **RadCodeBlock** in your markup will isolate your code block and prevents the System.Web.HttpException server error.

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function AjaxReq(args) {
	        $find("<%= RadAjaxPanel1.ClientID %>").ajaxRequestWithTarget("<%= Button1.UniqueID %>", '');
	    }
	</script>
</telerik:RadCodeBlock>
````

You can place as many RadCodeBlock elements on the page as needed. 

## RadScriptBlock

You should use a **RadScriptBlock** (see **Example 2** ) where you have JavaScript that evaluates after an AJAX request, for example, when the content of **RadAjaxPanel** is updated asynchronously. You can also use a **RadScriptBlock** like a **RadCodeBlock** to handle server code blocks (<% ... %>).

RadScriptBlock wraps JavaScript where the JavaScript is located in an updating area. The example below shows a RadScriptBlock within a RadAjaxPanel.

**Example 2** : Using a **RadScriptBlock** to isolate JavaScript code

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

**Example 3** : Using a **RadScriptBlock** to isolate the server tags in the src/href values

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

You can put as many RadScriptBlock tags on the page as needed as shown in the example above. 


## See Also

* [Error message, "The Controls collection cannot be modified because the control contains code blocks"](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/general-troubleshooting#error-message-the-controls-collection-cannot-be-modified-because-the-control-contains-code-blocks)

* [The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>)](https://www.telerik.com/forums/232173-the-controls-collection-cannot-be-modified-because-the-control-contains-code-blocks-i-e-lt-gt)

* [RadCodeBlock and RadScriptBlock](https://www.telerik.com/forums/radcodeblock-and-radscriptblock)

* [Telerik RadCodeBlock vs RadScriptBlock](https://www.inalign.com/sitefinity/telerik-radcodeblock-vs-radscriptblock)

* [Apply Client-side Logic to Initially Hidden Controls](https://www.telerik.com/support/kb/aspnet-ajax/details/apply-client-side-logic-to-initially-hidden-controls)


---
title: RadCodeBlock and RadScriptBlock
page_title: RadCodeBlock and RadScriptBlock | UI for ASP.NET AJAX Documentation
description: RadCodeBlock and RadScriptBlock
slug: ajax/radcodeblock-and-radscriptblock
tags: radcodeblock,and,radscriptblock
published: True
position: 9
---

# RadCodeBlock and RadScriptBlock



This article describes how __RadCodeBlock__ and __RadScriptBlock__ work and provides simple examples.You can use __RadCodeBlock__ and __RadScriptBlock__ to allow server and client script to work well together with AJAX updates.

## RadCodeBlock

You should use __RadCodeBlock__ when you have server code blocks placed within your markup (most often some JavaScript functions accessing server controls). __RadCodeBlock__ (see __Example 1__) isolates the code block and prevents the server error:

*System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).*

For more background on this issue see Rick Strahl's article, [Understanding how <% %>expressions render and why Controls.Add() doesn't work](http://www.west-wind.com/WebLog/posts/6148.aspx).

The way code blocks (server script within "<%= %>"tags) are implemented in ASP.NET may interfere with the __RadAjaxManager__ render interception mechanism.

__Example 1__: Using a __RadCodeBlock__ in your markup will isolate your code block and prevents the System.Web.HttpException server error.

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function AjaxReq(args) {
	                $find("<%= RadAjaxPanel1.ClientID %>").ajaxRequestWithTarget("<%= Button1.UniqueID %>", '');
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



## RadScriptBlock

You should use a __RadScriptBlock__ (see __Example 2__) where you have JavaScript that evaluates after an AJAX request, for example, when the content of __RadAjaxPanel__ is updated asynchronously. You can also use a __RadScriptBlock__ like a __RadCodeBlock__ to handle server code blocks (<% ... %>).

RadScriptBlock wraps JavaScript where the JavaScript is located in an updating area. The example below shows a RadScriptBlock within a RadAjaxPanel.

__Example 2__: Using a __RadScriptBlock__ to isolate JavaScript code

````ASPNET
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



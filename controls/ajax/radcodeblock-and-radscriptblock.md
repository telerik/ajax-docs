---
title: RadCodeBlock and RadScriptBlock
page_title: RadCodeBlock and RadScriptBlock | RadAjax for ASP.NET AJAX Documentation
description: RadCodeBlock and RadScriptBlock
slug: ajax/radcodeblock-and-radscriptblock
tags: radcodeblock,and,radscriptblock
published: True
position: 9
---

# RadCodeBlock and RadScriptBlock



This article describes how **RadCodeBlock** and **RadScriptBlock** work and provides simple examples.You can use **RadCodeBlock** and **RadScriptBlock** to allow server and client script to work well together with AJAX updates.

## RadCodeBlock

You should use **RadCodeBlock** when you have server code blocks placed within your markup (most often some JavaScript functions accessing server controls). **RadCodeBlock** (see **Example 1**) isolates the code block and prevents the server error:

*System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).*

For more background on this issue see Rick Strahl's article, [Understanding how <% %>expressions render and why Controls.Add() doesn't work](http://www.west-wind.com/WebLog/posts/6148.aspx).

The way code blocks (server script within "<%= %>"tags) are implemented in ASP.NET may interfere with the **RadAjaxManager** render interception mechanism.

**Example 1**: Using a **RadCodeBlock** in your markup will isolate your code block and prevents the System.Web.HttpException server error.

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

You should use a **RadScriptBlock** (see **Example 2**) where you have JavaScript that evaluates after an AJAX request, for example, when the content of **RadAjaxPanel** is updated asynchronously. You can also use a **RadScriptBlock** like a **RadCodeBlock** to handle server code blocks (<% ... %>).

RadScriptBlock wraps JavaScript where the JavaScript is located in an updating area. The example below shows a RadScriptBlock within a RadAjaxPanel.

**Example 2**: Using a **RadScriptBlock** to isolate JavaScript code

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



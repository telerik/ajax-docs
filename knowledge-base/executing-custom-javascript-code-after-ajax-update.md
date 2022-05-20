---
title: Execute Custom Javascript Code after an AJAX Update 
page_title: Execute Custom Javascript Code after AJAX Update
description: "Learn how to execute custom JavaScript code after an Ajax update in Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/executing-custom-javascript-code-after-ajax-update
previous_url: ajax/how-to/executing-custom-javascript-code-after-ajax-update, controls/ajaxmanager/how-to/executing-custom-javascript-code-after-ajax-update
tags: telerik, asp, net, ajax, manager, execute, custom, javascript, code, after, update
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I execute custom JavaScript code after an Ajax update in Telerik UI for ASP.NET AJAX? 

## Solution

Telerik UI for ASP.NET AJAX enables you to execute custom JavaScript code that comes as a response from the server thus giving you more flexibility to complete more specific or complex tasks on the client. 

To execute custom JavaScript code after an AJAX update use any of the suggested approaches in this section.

The recommended and most intuitive approach is to use the [`ResponseScripts`]({% slug ajaxmanager/server-side-programming/properties %}) property of the AjaxPanel or AjaxManager.

The following example shows how to pop an alert when a Button is clicked.


````C#
protected void Button1_Click(object sender, System.EventArgs e)
	{
	    RadAjaxManager1.ResponseScripts.Add(string.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString()));
	}
	
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	RadAjaxManager1.ResponseScripts.Add(String.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString()))
End Sub
````


The following example shows another approach&mdash;you can use the `RegisterStartupScript` static method of the `ScriptManager` class.


````C#
protected void Button1_Click(object sender, EventArgs e)
	{
	    string script = string.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString());
	    ScriptManager.RegisterStartupScript(Page, typeof(Page), "myscript", script, true);
	}  
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	Dim script As String = String.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString())
	ScriptManager.RegisterStartupScript(Page, GetType(Page), "myscript", script, True)
End Sub
````


Alternatively, you can use the [`pageLoaded`](https://msdn.microsoft.com/en-us/library/bb397523.aspx) event of the [`PageRequestManager`](https://msdn.microsoft.com/en-us/library/bb311028.aspx) class.

## See Also

* [Server-Side Properties of the AjaxManager]({%slug ajaxmanager/server-side-programming/properties%})

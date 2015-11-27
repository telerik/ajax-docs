---
title: Executing Custom Javascript Code after AJAX Update
page_title: Executing Custom Javascript Code after AJAX Update | RadAjax for ASP.NET AJAX Documentation
description: Executing Custom Javascript Code after AJAX Update
slug: ajaxmanager/how-to/executing-custom-javascript-code-after-ajax-update
previous_url: ajax/how-to/executing-custom-javascript-code-after-ajax-update
tags: executing,custom,javascript,code,after,ajax,update
published: True
position: 5
---

# Executing Custom Javascript Code after AJAX Update



## 

Telerik **RadAjax** offers the ability to execute custom JavaScript code that comes as a response from the server thus giving you more flexibility to complete more specific or complex tasks on the client. This help article shows a few ways to execute custom JavaScript code after an AJAX update.

The best and most intuitive approach is to use the [ResponseScripts](http://www.telerik.com/help/aspnet-ajax/ajax-control-properties.html) property of the **RadAjaxPanel** or **RadAjaxManager** .

**Example 1** shows how to pop an alert when a Button is clicked.



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


**Example 2** shows another approach. You can use the **RegisterStartupScript** static method of the **ScriptManager** class:



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


You can also use the [pageLoaded](http://msdn.microsoft.com/en-us/library/bb397523.aspx)event of the [PageRequestManager](http://msdn.microsoft.com/en-us/library/bb311028.aspx) class.

## See Also

 * [Properties]({%slug ajaxmanager/server-side-programming/properties%})

---
title: Executing Custom Javascript Code after AJAX Update
page_title: Executing Custom Javascript Code after AJAX Update | UI for ASP.NET AJAX Documentation
description: Executing Custom Javascript Code after AJAX Update
slug: ajax/application-scenarios/executing-custom-javascript-code-after-ajax-update
tags: executing,custom,javascript,code,after,ajax,update
published: True
position: 5
---

# Executing Custom Javascript Code after AJAX Update



## 

Telerik __RadAjax__ offers the ability to execute custom JavaScript code that comes as a response from the server thusgiving you more flexibility to complete more specific or complex tasks on the client. This help article shows a few ways to execute custom JavaScript code after an AJAX update.

The best and most intuitive approach is to use the [ResponseScripts](http://www.telerik.com/help/aspnet-ajax/ajax-control-properties.html) property of the __RadAjaxPanel__ or __RadAjaxManager__.

__Example 1__ shows how to pop an alert when a Button is clicked.

>tabbedCode

````C#
	    protected void Button1_Click(object sender, System.EventArgs e)
	    {
	        RadAjaxManager1.ResponseScripts.Add(string.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString()));
	    }
	
````
````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        RadAjaxManager1.ResponseScripts.Add(String.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString()))
	    End Sub
````
>end

__Example 2__ shows another approach. You can use the __RegisterStartupScript__ static methodof the __ScriptManager__ class:

>tabbedCode

````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        string script = string.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString());
	        ScriptManager.RegisterStartupScript(Page, typeof(Page), "myscript", script, true);
	    }  
````
````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim script As String = String.Format("alert('Hello from the server! Server time is {0}');", DateTime.Now.ToLongTimeString())
	        ScriptManager.RegisterStartupScript(Page, GetType(Page), "myscript", script, True)
	    End Sub
````
>end

You can also use the [pageLoaded](http://msdn.microsoft.com/en-us/library/bb397523.aspx)event of the [PageRequestManager](http://msdn.microsoft.com/en-us/library/bb311028.aspx) class.

# See Also

 * [Properties]({%slug ajax/server-side-programming/properties%})

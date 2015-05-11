---
title: Pass More than one Argument
page_title: Pass More than one Argument | RadAjax for ASP.NET AJAX Documentation
description: Pass More than one Argument
slug: ajax/client-side-programming/how-to/pass-more-than-one-argument
tags: pass,more,than,one,argument
published: True
position: 2
---

# Pass More than one Argument



## 

By default, the **ajaxRequest** and **ajaxRequestWithTarget** functions accept only one argument. Sometimes you might need to pass more arguments. You can do this by joining the arguments on the client:

````JavaScript
var arg3 = arg1 + "," + arg2;
ajaxManager.ajaxRequest(arg3);
````



and split them on the server in the **AjaxManager_AjaxRequest** :



````C#
private void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
	string argument = (e.Argument);
	String[] stringArray = argument.Split(",".ToCharArray());
}			
````
````VB.NET
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
	Dim argument As String = e.Argument
	Dim stringArray As [String]() = argument.Split(",".ToCharArray())
End Sub
	
	
````


## See Also

 * [Overview]({%slug ajax/client-side-programming/overview%})

 * [OnAjaxRequest]({%slug ajax/server-side-programming/events/onajaxrequest%})

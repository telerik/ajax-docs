---
title: Methods
page_title: Methods | RadAjax for ASP.NET AJAX Documentation
description: Methods
slug: ajaxmanager/server-side-programming/methods
previous_url: ajax/server-side-programming/methods
tags: methods
published: True
position: 1
---

# Methods



This help article describes the methods of RadAjaxControl and show examples how to use them.

The `RadAjaxManager` class exposes a static method that you can use to get a reference to the `RadAjaxManager` instance on the current page from the code-behind:


````C#
RadAjaxManager ram = RadAjaxManager.GetCurrent(Page);
````
````VB
Dim ram as RadAjaxManager = RadAjaxManager.GetCurrent(Page)
````

## Instance Methods


**RadAjaxManager** and **RadAjaxPanel** both descend from **RadAjaxControl**, which introduces the following methods:

* **Alert** - This method executes a JavaScript **alert()** on the client.**Alert()** takes a single string parameter for text to be displayed in the alert.



````C#
	
RadAjaxManager1.Alert("Please save your changes.");
	
````
````VB
	
RadAjaxManager1.Alert("Please save your changes.")
	
````


* **FocusControl** - This method places focus on a specified control. **FocusControl()** takes a single parameter that can be the ID of the control to focus on or an object reference to the control to focus on.



````C#
	
RadAjaxManager1.FocusControl(Button1);
	
````
````VB
	
RadAjaxManager1.FocusControl(Button1)
	
````


* **GetAjaxEventReference** - This method produces client side code that invokes the [ajaxRequest()]({%slug ajaxmanager/client-side-programming/overview%}) method.



````C#
	
RadAjaxManager1.GetAjaxEventReference(Button1.ClientID);
//... returns "$find("RadAjaxManager1").ajaxRequest("Button1");"
	
````
````VB
	
RadAjaxManager1.GetAjaxEventReference(Button1.ClientID)
'... returns "$find("RadAjaxManager1").ajaxRequest("Button1");"
	
````


* **RaisePostBackEvent** - This method triggers a server-side[AjaxRequest]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%}) event and allows you to pass a single string parameter to the event. (**Example1** ). **AjaxRequest** can also be triggered by the client-side[ajaxRequest()]({%slug ajaxmanager/client-side-programming/overview%}) function.



````C#
	     
	
protected void Button1_Click(object sender, EventArgs e)
{    
	RadAjaxManager1.RaisePostBackEvent(DateTime.Now.ToString());
}
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{    
	Label1.Text = e.Argument;
}
				
````
````VB
	
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        RadAjaxManager1.RaisePostBackEvent(DateTime.Now.ToString())
End Sub
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
	        Label1.Text = e.Argument
End Sub
	
````


* **Redirect** - This method navigates the browser to another web page. The method passes a single string parameter, which is the URL to navigate to.



````C#
	
RadAjaxManager1.Redirect("http://www.telerik.com");
	
````
````VB.NET
	
RadAjaxManager1.Redirect("http://www.telerik.com")
	
	
````


## See Also

 * [Properties]({%slug ajaxmanager/server-side-programming/properties%})

 * [AjaxUpdatedControl Properties]({%slug ajaxmanager/server-side-programming/ajaxupdatedcontrol-properties%})

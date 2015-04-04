---
title: Methods
page_title: Methods | UI for ASP.NET AJAX Documentation
description: Methods
slug: ajax/server-side-programming/methods
tags: methods
published: True
position: 1
---

# Methods



This help article describes the methods of RadAjaxControl and show examples how to use them.

## 

__RadAjaxManager__ and __RadAjaxPanel__ both descend from __RadAjaxControl__,whichintroduces the following methods:

* __Alert__ - This method executes a JavaScript __alert()__ on the client.__Alert()__ takes a single string parameter for text to be displayed in the alert.



````C#
	
	        RadAjaxManager1.Alert("Please save your changes.");
	
````
````VB.NET
	
	        RadAjaxManager1.Alert("Please save your changes.")
	
````


* __FocusControl__ - This method places focus on a specified control. __FocusControl()__ takes a singleparameter that can be the ID of the control to focus on or an object reference to the control to focus on.



````C#
	
	        RadAjaxManager1.FocusControl(Button1);
	
````
````VB.NET
	
	        RadAjaxManager1.FocusControl(Button1)
	
````


* __GetAjaxEventReference__ - This method produces client side code thatinvokes the [ajaxRequest()]({%slug ajax/client-side-programming/overview%}) method.



````C#
	
	
	        RadAjaxManager1.GetAjaxEventReference(Button1.ClientID);
	        //... returns "$find("RadAjaxManager1").ajaxRequest("Button1");"
	
````
````VB.NET
	
	        RadAjaxManager1.GetAjaxEventReference(Button1.ClientID)
	        '... returns "$find("RadAjaxManager1").ajaxRequest("Button1");"
	
````


* __RaisePostBackEvent__ - This method triggers a server-side[AjaxRequest]({%slug ajax/server-side-programming/events/onajaxrequest%}) event and allows you to pass a single string parameter to the event. (__Example1__). __AjaxRequest__ can also be triggered by the client-side[ajaxRequest()]({%slug ajax/client-side-programming/overview%}) function.



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
````VB.NET
	
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        RadAjaxManager1.RaisePostBackEvent(DateTime.Now.ToString())
	    End Sub
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
	        Label1.Text = e.Argument
	    End Sub
	
````


* __Redirect__ - This method navigates the browser to another web page. The method passes a single string parameter, whichis the URL to navigate to.



````C#
	
	        RadAjaxManager1.Redirect("http://www.telerik.com");
	
````
````VB.NET
	
	        RadAjaxManager1.Redirect("http://www.telerik.com")
	
	
````


# See Also

 * [Properties]({%slug ajax/server-side-programming/properties%})

 * [AjaxUpdatedControl Properties]({%slug ajax/server-side-programming/ajaxupdatedcontrol-properties%})

---
title: OnPopUpShowing
page_title: OnPopUpShowing | RadGrid for ASP.NET AJAX Documentation
description: OnPopUpShowing
slug: grid/client-side-programming/events/events/onpopupshowing
tags: onpopupshowing
published: True
position: 47
---

# OnPopUpShowing



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnPopUpShowing Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event fires when the pop-up edit form is being shown. The event could be handled to set the position of the pop-up edit form of RadGrid.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **popUp** - html element of the pop-up edit form|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnPopUpShowing ="PopUpShowing" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function PopUpShowing(sender, eventArgs) {
	            var popUp = eventArgs.get_popUp();
	        }
	        //OR
	        function PopUpShowing(sender, eventArgs) {
	            eventArgs.set_cancel(true);
	        }
````



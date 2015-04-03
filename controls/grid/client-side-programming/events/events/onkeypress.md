---
title: OnKeyPress
page_title: OnKeyPress | UI for ASP.NET AJAX Documentation
description: OnKeyPress
slug: grid/client-side-programming/events/events/onkeypress
tags: onkeypress
published: True
position: 44
---

# OnKeyPress



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnKeyPress Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when a key is pressed.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ |keyCode - the code of the key pressedIsShiftPressed - __true__ or __false__ , depending on whether the Shift key was held down, when the event firedIsCtrlPressed - __true__ or __false__ , depending on whether the Ctrl key was held down, when the event firedIsAltPressed - __true__ or __false__ , depending on whether the Alt key was held down, when the event fireddomEvent - the original browser event object|
| __Can be canceled__ |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnKeyPress="KeyPress" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function KeyPress(sender, eventArgs) {
	            alert("Key code: " + eventArgs.get_keyCode());
	            alert("Is Shift pressed: " + eventArgs.get_isShiftPressed());
	            alert("Is Ctrl pressed: " + eventArgs.get_isCtrlPressed());
	            alert("Is Alt pressed: " + eventArgs.get_isAltPressed());
	        }
````



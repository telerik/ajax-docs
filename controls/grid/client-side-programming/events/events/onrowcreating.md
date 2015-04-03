---
title: OnRowCreating
page_title: OnRowCreating | UI for ASP.NET AJAX Documentation
description: OnRowCreating
slug: grid/client-side-programming/events/events/onrowcreating
tags: onrowcreating
published: True
position: 50
---

# OnRowCreating



## 

Sys.EventArgs OnRowCreating Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before row available at client-side creation.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ |N/A|
| __Can be canceled__ |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnRowCreating="RowCreating" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RowCreating(sender, eventArgs) {
	            alert("Creating row");
	        }
````



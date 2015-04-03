---
title: OnGridDestroying
page_title: OnGridDestroying | UI for ASP.NET AJAX Documentation
description: OnGridDestroying
slug: grid/client-side-programming/events/events/ongriddestroying
tags: ongriddestroying
published: True
position: 34
---

# OnGridDestroying



## 

Sys.EventArgs OnGridDestroying Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when RadGrid object is destroyed, i.e. on each *window.onunload*


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ |N/A|
| __Can be canceled__ |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnGridDestroying="GridDestroying" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function GridDestroying(sender, eventArgs) {
	            alert("Destroying grid with ClientID: " + sender.get_id());
	        }
````



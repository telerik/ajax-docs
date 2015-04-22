---
title: OnGroupExpanded
page_title: OnGroupExpanded | RadGrid for ASP.NET AJAX Documentation
description: OnGroupExpanded
slug: grid/client-side-programming/events/events/ongroupexpanded
tags: ongroupexpanded
published: True
position: 38
---

# OnGroupExpanded



## 

Sys.EventArgs OnGroupExpanded Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the group has been expanded.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnGroupExpanded="GroupExpanded" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function GroupExpanded(sender, eventArgs) {
	            alert("GroupExpanded fired");
	        }
````



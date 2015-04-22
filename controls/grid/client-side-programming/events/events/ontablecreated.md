---
title: OnTableCreated
page_title: OnTableCreated | RadGrid for ASP.NET AJAX Documentation
description: OnTableCreated
slug: grid/client-side-programming/events/events/ontablecreated
tags: ontablecreated
published: True
position: 74
---

# OnTableCreated



## 

Sys.EventArgs OnTableCreated Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a detail table is created.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **tableView** - GridTableView Object|
| **Can be canceled** |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnTableCreated="TableCreated" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function TableCreated(sender, eventArgs) {
	            var tableView = eventArgs.get_tableView();
	            alert("DetailTable with ClientID: " + tableView.get_id() + " was created");
	        }
````



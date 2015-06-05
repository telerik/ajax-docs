---
title: OnMasterTableViewCreated
page_title: OnMasterTableViewCreated | RadGrid for ASP.NET AJAX Documentation
description: OnMasterTableViewCreated
slug: grid/client-side-programming/events/onmastertableviewcreated
tags: onmastertableviewcreated
published: True
position: 46
---

# OnMasterTableViewCreated



## 

Sys.EventArgs OnMasterTableViewCreated Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after the MasterTableView is created.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnMasterTableViewCreated="MasterTableViewCreated" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function MasterTableViewCreated(sender, eventArgs) {
	            alert("MasterTableView was created");
	        }
````



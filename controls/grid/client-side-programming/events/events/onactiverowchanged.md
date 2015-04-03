---
title: OnActiveRowChanged
page_title: OnActiveRowChanged | UI for ASP.NET AJAX Documentation
description: OnActiveRowChanged
slug: grid/client-side-programming/events/events/onactiverowchanged
tags: onactiverowchanged
published: True
position: 1
---

# OnActiveRowChanged



## 

Telerik.Web.UI.GridDataItemEventArgs OnActiveRowChanged Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after the active row is changed.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __DataKeyValue__ - if the ClientDataKeyNames property of RadGrid is set, this property returns the corresponging value for the item's data key. __cancel__ - gets or sets the canceled status of the event __domEvent__ - returns the DOM event that was raised for the current event __gridDataItem__ - returns the corresponding data item for the item that has raised the event __id__ - returns the ID of the row that has raised the event __itemIndexHierarchical__ - returns the hierarchical index of the grid item that has raised the event __tableView__ - returns the owner TableView of the item that has raised the event|
| __Can be canceled__ |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnActiveRowChanged="ActiveRowChanged" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function ActiveRowChanged(sender, eventArgs) {
	            alert("The active row is: " + eventArgs.get_gridDataItem());
	        }
````



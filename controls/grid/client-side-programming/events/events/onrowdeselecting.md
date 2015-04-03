---
title: OnRowDeselecting
page_title: OnRowDeselecting | UI for ASP.NET AJAX Documentation
description: OnRowDeselecting
slug: grid/client-side-programming/events/events/onrowdeselecting
tags: onrowdeselecting
published: True
position: 56
---

# OnRowDeselecting



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnRowDeselecting Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before row deselection.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __id__ - id of the RadGrid item that has raised the event __itemIndexHierarchical__ - hierarchical index of the item that has raised the event __gridDataItem__ - the corresponding data item __tableView__ - owner TableView of the item that has raised the event __dataKeyValues__ - data key value for the item that has raised the event __domEvent__ - dom event that was raised for the current event|
| __Can be canceled__ |Yes, set eventArgs.set_cancel(true) to cancel __Note__ that this event cannot be canceled when CTRL key is used to select/deselect rows.|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnRowDeselecting="RowDeselecting" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RowDeselecting(rowObject) {
	            alert("Deselecting row: " + eventArgs.get_itemIndexHierarchical());
	        }
	        //OR
	        function RowDeselecting(rowObject) {
	            eventArgs.set_cancel(true) //cancel event;
	        }
````



>note get_gridDataItem() is not directly available on the client unless OnRowCreating/OnRowCreated events are hooked up. This is done for optimization purpose. If you need the rowIndex, you can use eventArgs.get_itemIndexHierarchical()
>


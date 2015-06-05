---
title: OnActiveRowChanging
page_title: OnActiveRowChanging | RadGrid for ASP.NET AJAX Documentation
description: OnActiveRowChanging
slug: grid/client-side-programming/events/onactiverowchanging
tags: onactiverowchanging
published: True
position: 0
---

# OnActiveRowChanging



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnActiveRowChanging Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before the active row is changed.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **DataKeyValue** - if the ClientDataKeyNames property of RadGrid is set, this property returns data key value for the item that has raised the event **cancel** - gets or sets the canceled status of the event **domEvent** - returns the DOM event that was raised for the current event **gridDataItem** - returns the corresponding data item for the item that has raised the event **id** - returns the ID of the row that has raised the event **itemIndexHierarchical** - returns the hierarchical index of the grid item that has raised the event **tableView** - returns the owner TableView of the item that has raised the event|
| **Can be canceled.** |Yes, set eventArgs.set_cancel(true) to cancel.|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnActiveRowChanging="ActiveRowChanging" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ActiveRowChanging(sender, eventArgs) {
    alert("The active row will change for grid with id" + sender.get_id());
}
````



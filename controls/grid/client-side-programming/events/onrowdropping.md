---
title: OnRowDropping
page_title: OnRowDropping | RadGrid for ASP.NET AJAX Documentation
description: OnRowDropping
slug: grid/client-side-programming/events/onrowdropping
tags: onrowdropping
published: True
position: 60
---

# OnRowDropping



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnRowDropping Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event should be attached to identify the target element on which the dragged grid record is dropped. If this element does not meet your criteria for acceptable target, cancel the operation by setting *args.set_cancel(true)* where args is the second argument passed to the OnRowDropping handler. Additionally, to determine the destination element or set it explicitly use the *get_destinationHtmlElement()* and *set_destinationHtmlElement()* properties that can be accessed through the args argument in the handler.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **targetItemId** - the ClientID of the target dataItem **targetItemIndexHierarchical** - the hierarchical index of the target GridDataItem **targetGridDataItem** - the dataItem over which the user is dropping. May be null if the dataItem has not been instantiated beforehand **targetItemTableView** - the GridTableView object, to which the target GridDataItem belongs **args.get_TargetDataKeyValue(columnName)** - a method that returns a data key value for the specified column name of the target dataItem **domEvent** - dom event **draggedItems** - an array of the dragged dataItems **destinationHtmlElement** - target html element **targetRadGrid** - the RadGrid object, to which the target GridDataItem belongs **dropPosition** - indicates the position of the drop indicator if the user is dropping over a RadGrid row - "above" or "below" it|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDropping="RowDropping" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDropping(sender, eventArgs) {
    alert("Dropped target element id is: " + eventArgs.get_destinationHtmlElement().id);
}
//OR
function RowDropping(sender, eventArgs) {
    eventArgs.set_cancel(true) //cancel event
}
````



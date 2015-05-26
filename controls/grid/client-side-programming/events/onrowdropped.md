---
title: OnRowDropped
page_title: OnRowDropped | RadGrid for ASP.NET AJAX Documentation
description: OnRowDropped
slug: grid/client-side-programming/events/events/onrowdropped
tags: onrowdropped
published: True
position: 61
---

# OnRowDropped



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnRowDropped Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event can be handled if you would like to execute some extra code logic prior to the server-side OnRowDrop event rising. This event cannot be cancelled and have the same set of arguments as the [OnRowDropping]({%slug grid/client-side-programming/events/events/onrowdropping%}) client event.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **destinationHtmlElement** - target html element. Will be null if the user has dropped over a GirdDataItem **domEvent** - dom event **draggedItems** - an array of the dragged GridDataItems **dropPosition** - indicates the position of the drop indicator if the user has dropped over a RadGrid row - "above" or "below" it **targetGridDataItem** - the GridDataItem over which the user is dropping. May be null if the GridDataItem has not been instantiated beforehand **args.get_TargetDataKeyValue(columnName)** - a method that returns a data key value for the specified column name of the target GridDataItem **targetItemId** - the ClientID of the targer GridDataItem **targetItemIndexHierarchical** - the hierarchical index of the target GridDataItem **targetItemTableView** - the GridTableView object, to which the target GridDataItem belongs **targetRadGrid** - the target RadGrid object|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDropped="RowDropped" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDropped(sender, eventArgs) {
    alert("Dropped target element id is: " + eventArgs.get_destinationHtmlElement().id);
}
````



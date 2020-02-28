---
title: OnItemDropping
page_title: OnItemDropping | RadListView for ASP.NET AJAX Documentation
description: OnItemDropping
slug: listview/client-side-programming/events/onitemdropping
tags: onitemdropping
published: True
position: 5
---

# OnItemDropping


This client-side event is fired when a RadListView item is about to be dropped after dragging.


|  **Fired by**  | RadListView |
| ------ | ------ |
| **Arguments** | **dataKeyValues** - Array of the item key fields set through the `ClientDataKeyNames` property of the RadListView control, **itemIndex** - the index of the dragged item, **destinationElement** - the destination HTML element, **domEvent** - dom event|
| **Can be canceled** |Yes|

Example:

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" ClientDataKeyNames="Title, Artist">
    <ClientSettings AllowItemsDragDrop="true">
        <ClientEvents OnItemDropping="ItemDropping" />
    </ClientSettings>
</telerik:RadListView>
````



````JavaScript
function ItemDropping(sender, eventArgs) {
    var dest = eventArgs.get_destinationElement();
    if (!dest || !dest.id || dest.id.indexOf("DestinationPanel") < 0) {
        eventArgs.set_cancel(true);
    }
}
````



>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().

>note The `get_dataKeyValues()` method is supported only with server data binding. If you are using client binding, see the [Item drag and drop with client data binding](https://www.telerik.com/support/kb/aspnet-ajax/listview/details/item-drag-and-drop-with-client-data-binding) KB article.


## See Also

* [Drag and Drop Configuration]({%slug listview/items/drag-and-drop%})

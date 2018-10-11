---
title: OnItemDropped
page_title: OnItemDropped | RadListView for ASP.NET AJAX Documentation
description: OnItemDropped
slug: listview/client-side-programming/events/onitemdropped
tags: onitemdropped
published: True
position: 6
---

# OnItemDropped


This client-side event is fired when a RadListView item is dropped after dragging.


|  **Fired by**  | RadListView |
| ------ | ------ |
| **Arguments** | **dataKeyValues** - Array of the item key fields set through the `ClientDataKeyNames` property of the RadListView control, **itemIndex** - the index of the dragged item, **destinationElement** - the destination HTML element, **domEvent** - dom event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" ClientDataKeyNames="Title, Artist">
    <ClientSettings AllowItemsDragDrop="true">
        <ClientEvents OnItemDropped="ItemDropped" />
    </ClientSettings>
</telerik:RadListView>
````



````JavaScript
function ItemDropped(sender, eventArgs) {
    var dest = eventArgs.get_destinationElement();
    var itemIndex = eventArgs.get_itemIndex();
    var title = eventArgs.get_dataKeyValues().Title;
    var artist = eventArgs.get_dataKeyValues().Artist;
    alert("Item " + itemIndex + " with Title - " + title + ", Artist - " + artist + " was dropped in " + dest.id);
}
````



>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().

>tip The `get_dataKeyValues()` method is supported only with server data binding. If you are using client binding, see the [Item drag and drop with client data binding](https://www.telerik.com/support/kb/aspnet-ajax/listview/details/item-drag-and-drop-with-client-data-binding) KB article.

## See Also

* [Drag and Drop Configuration]({%slug listview/items/drag-and-drop%})

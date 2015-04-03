---
title: OnItemDragStarted
page_title: OnItemDragStarted | UI for ASP.NET AJAX Documentation
description: OnItemDragStarted
slug: listview/client-side-programming/events/onitemdragstarted
tags: onitemdragstarted
published: True
position: 3
---

# OnItemDragStarted



## 

This client-side event is fired when a RadListView item is about to be dragged.


|  __Fired by__  | RadListView |
| ------ | ------ |
| __Arguments__ | __dataKeyValues__ - Array of the item key fields set through the ClientDataKeyNames property of the RadListView control __itemIndex__ - the index of the dragged item __domEvent__ - dom event|
| __Can be canceled__ |Yes|

Example:

````ASPNET
	        <telerik:RadListView ID="RadListView2" runat="server" ClientDataKeyNames="Title, Artist">
	            <ClientSettings AllowItemsDragDrop="true">
	                <ClientEvents OnItemDragStarted="ItemDragStarted" />
	            </ClientSettings>
	        </telerik:RadListView>
````



````JavaScript
	        function ItemDragStarted(sender, eventArgs) {
	            var title = eventArgs.get_dataKeyValues().Title;
	            var artist = eventArgs.get_dataKeyValues().Artist;
	            var itemIndex = eventArgs.get_itemIndex();
	            alert("Item " + itemIndex + " is about to be dragged with Title - " + title + ", Artist - " + artist);
	        }
````



>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().
>


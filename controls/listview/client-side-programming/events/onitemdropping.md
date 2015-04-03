---
title: OnItemDropping
page_title: OnItemDropping | UI for ASP.NET AJAX Documentation
description: OnItemDropping
slug: listview/client-side-programming/events/onitemdropping
tags: onitemdropping
published: True
position: 5
---

# OnItemDropping



## 

This client-side event is fired when a RadListView item is about to be dropped after dragging.


|  __Fired by__  | RadListView |
| ------ | ------ |
| __Arguments__ | __dataKeyValues__ - Array of the item key fields set through the ClientDataKeyNames property of the RadListView control __itemIndex__ - the index of the dragged item __destinationElement__ - the destination HTML element __domEvent__ - dom event|
| __Can be canceled__ |Yes|

Example:

````ASPNET
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



>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().
>


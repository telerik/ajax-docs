---
title: OnListViewCreated
page_title: OnListViewCreated | RadListView for ASP.NET AJAX Documentation
description: OnListViewCreated
slug: listview/client-side-programming/events/onlistviewcreated
tags: onlistviewcreated
published: True
position: 1
---

# OnListViewCreated



## 

This client-side event is fired after the RadListView is created.


|  **Fired by**  | RadListView |
| ------ | ------ |
| **Arguments** |System.EventArgs|
| **Can be canceled** |No|

Example:

````ASPNET
	        <telerik:RadListView ID="RadListView1" runat="server" ClientDataKeyNames="Title, Artist">
	            <ClientSettings AllowItemsDragDrop="true">
	                <ClientEvents OnListViewCreated="ListViewCreated" />
	            </ClientSettings>
	        </telerik:RadListView>
````



````JavaScript
	        function ListViewCreated(sender, eventArgs) {
	            alert("Listview with UniqueID: " + sender.get_uniqueID() + " was created!");
	        }
````



>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().
>


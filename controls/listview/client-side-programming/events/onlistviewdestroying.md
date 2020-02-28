---
title: OnListViewDestroying
page_title: OnListViewDestroying | RadListView for ASP.NET AJAX Documentation
description: OnListViewDestroying
slug: listview/client-side-programming/events/onlistviewdestroying
tags: onlistviewdestroying
published: True
position: 2
---

# OnListViewDestroying



##  

This client-side event is fired when RadListView object is destroyed, i.e. on each *window.onunload*.


|  **Fired by**  | RadListView |
| ------ | ------ |
| **Arguments** |System.EventArgs|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" ClientDataKeyNames="Title, Artist">
    <ClientSettings AllowItemsDragDrop="true">
        <ClientEvents OnListViewDestroying="ListViewDestroying" />
    </ClientSettings>
</telerik:RadListView>
````



````JavaScript
function ListViewDestroying(sender, eventArgs) {
    alert("Destroying listview with UniqueID: " + sender.get_uniqueID());
}
````



>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().
>

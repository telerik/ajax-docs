---
title: OnListViewCreating
page_title: OnListViewCreating | RadListView for ASP.NET AJAX Documentation
description: OnListViewCreating
slug: listview/client-side-programming/events/onlistviewcreating
tags: onlistviewcreating
published: True
position: 0
---

# OnListViewCreating



##  

This client-side event is fired before the RadListView is created.


|  **Fired by**  | RadListView |
| ------ | ------ |
| **Arguments** |System.EventArgs|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" ClientDataKeyNames="Title, Artist">
    <ClientSettings AllowItemsDragDrop="true">
        <ClientEvents OnListViewCreating="ListViewCreating" />
    </ClientSettings>
</telerik:RadListView>
````



````JavaScript
function ListViewCreating(sender, eventArgs) {
    alert("Creating listview with UniqueID: " + sender.get_uniqueID());
}
````



>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().
>

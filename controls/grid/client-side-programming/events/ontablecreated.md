---
title: OnTableCreated
page_title: OnTableCreated - RadGrid
description: Check our Web Forms article about OnTableCreated.
slug: grid/client-side-programming/events/ontablecreated
tags: ontablecreated
published: True
position: 74
---

# OnTableCreated



## 

Sys.EventArgs OnTableCreated Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a detail table is created.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **tableView** - GridTableView Object|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnTableCreated="TableCreated" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function TableCreated(sender, eventArgs) {
    var tableView = eventArgs.get_tableView();
    alert("DetailTable with ClientID: " + tableView.get_id() + " was created");
}
````



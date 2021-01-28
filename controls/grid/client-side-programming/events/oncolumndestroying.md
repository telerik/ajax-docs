---
title: OnColumnDestroying
page_title: OnColumnDestroying - RadGrid
description: Check our Web Forms article about OnColumnDestroying.
slug: grid/client-side-programming/events/oncolumndestroying
tags: oncolumndestroying
published: True
position: 11
---

# OnColumnDestroying



## 

Sys.EventArgs OnColumnDestroying Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when a column object is destroyed.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnDestroying="ColumnDestroying" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnDestroying(sender, eventArgs) {
    alert("Destroing column with Index: " + eventArgs.get_column().get_uniqueName());
}
````



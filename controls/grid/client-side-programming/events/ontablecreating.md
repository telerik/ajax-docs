---
title: OnTableCreating
page_title: OnTableCreating - RadGrid
description: Check our Web Forms article about OnTableCreating.
slug: grid/client-side-programming/events/ontablecreating
tags: ontablecreating
published: True
position: 73
---

# OnTableCreating



## 

Sys.EventArgs OnTableCreating Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before detail table creation.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnTableCreating="TableCreating" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function TableCreating(sender, eventArgs) {
    alert("Creating  DetailTable");
}
````



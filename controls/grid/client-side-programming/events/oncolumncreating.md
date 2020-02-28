---
title: OnColumnCreating
page_title: OnColumnCreating | RadGrid for ASP.NET AJAX Documentation
description: OnColumnCreating
slug: grid/client-side-programming/events/oncolumncreating
tags: oncolumncreating
published: True
position: 8
---

# OnColumnCreating



## 

Sys.EventArgs OnColumnCreating Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a column is available at client-side creation.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnCreating="ColumnCreating" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnCreating(sender, eventArgs){
    alert("Creating column");
}
````



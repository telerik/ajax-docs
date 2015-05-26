---
title: OnColumnCreated
page_title: OnColumnCreated | RadGrid for ASP.NET AJAX Documentation
description: OnColumnCreated
slug: grid/client-side-programming/events/events/oncolumncreated
tags: oncolumncreated
published: True
position: 9
---

# OnColumnCreated



## 

Sys.EventArgs OnColumnCreated Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a column is created at client-side .


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **column** - returns the last created GridColumn object|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnCreated="ColumnCreated" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnCreated(sender, eventArgs) {
    var column = eventArgs.get_column();
    alert("Column with Index: " + column.get_uniqueName() + " was created");
}
````



---
title: OnGridCreated
page_title: OnGridCreated | RadGrid for ASP.NET AJAX Documentation
description: OnGridCreated
slug: grid/client-side-programming/events/events/ongridcreated
tags: ongridcreated
published: True
position: 33
---

# OnGridCreated



## 

Sys.EventArgs OnGridCreated Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after the grid is created.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGridCreated="GridCreated" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function GridCreated(sender, eventArgs) {
    alert("Grid with ClientID: " + sender.get_id() + " was created");
}
````



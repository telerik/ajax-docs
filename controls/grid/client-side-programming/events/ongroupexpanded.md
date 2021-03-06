---
title: OnGroupExpanded
page_title: OnGroupExpanded - RadGrid
description: Check our Web Forms article about OnGroupExpanded.
slug: grid/client-side-programming/events/ongroupexpanded
tags: ongroupexpanded
published: True
position: 38
---

# OnGroupExpanded



## 

Sys.EventArgs OnGroupExpanded Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the group has been expanded.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGroupExpanded="GroupExpanded" />
    </ClientSettings>
</telerik:RadGrid>
````


````JavaScript
function GroupExpanded(sender, eventArgs) {
    alert("GroupExpanded fired");
}
````



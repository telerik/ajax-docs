---
title: OnGroupCollapsed
page_title: OnGroupCollapsed | RadGrid for ASP.NET AJAX Documentation
description: OnGroupCollapsed
slug: grid/client-side-programming/events/ongroupcollapsed
tags: ongroupcollapsed
published: True
position: 36
---

# OnGroupCollapsed



## 

Sys.EventArgs OnGroupCollapsed Property

>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the group is shown.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGroupCollapsed="GroupCollapsed" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function GroupCollapsed(sender, eventArgs) {
    alert("GroupCollapsed is fired");
}
````



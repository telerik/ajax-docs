---
title: OnGroupCollapsing
page_title: OnGroupCollapsing - RadGrid
description: Check our Web Forms article about OnGroupCollapsing.
slug: grid/client-side-programming/events/ongroupcollapsing
tags: ongroupcollapsing
published: True
position: 35
---

# OnGroupCollapsing



## 

Sys.CancelEventArgs OnGroupCollapsing Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a group is collapsed.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGroupCollapsing="GroupCollapsing" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function GroupCollapsing(sender, eventArgs) {
    alert("GroupCollapsing is being fired");
}
````



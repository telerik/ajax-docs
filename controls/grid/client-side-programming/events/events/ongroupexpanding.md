---
title: OnGroupExpanding
page_title: OnGroupExpanding | RadGrid for ASP.NET AJAX Documentation
description: OnGroupExpanding
slug: grid/client-side-programming/events/events/ongroupexpanding
tags: ongroupexpanding
published: True
position: 37
---

# OnGroupExpanding



## 

Sys.CancelEventArgs OnGroupExpanding Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a row is shown.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGroupExpanding="GroupExpanding" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function GroupExpanding(sender, eventArgs) {
    alert("GroupExpanding is fired");
}
````



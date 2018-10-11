---
title: OnMasterTableViewCreating
page_title: OnMasterTableViewCreating | RadGrid for ASP.NET AJAX Documentation
description: OnMasterTableViewCreating
slug: grid/client-side-programming/events/onmastertableviewcreating
tags: onmastertableviewcreating
published: True
position: 45
---

# OnMasterTableViewCreating



## 

Sys.EventArgs OnMasterTableViewCreating Property

>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before the MasterTableView is created.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnMasterTableViewCreating="MasterTableViewCreating" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function MasterTableViewCreating(sender, eventArgs) {
    alert("Creating MasterTableView");
}
````



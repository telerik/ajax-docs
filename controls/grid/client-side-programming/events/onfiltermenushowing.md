---
title: OnFilterMenuShowing
page_title: OnFilterMenuShowing | RadGrid for ASP.NET AJAX Documentation
description: OnFilterMenuShowing
slug: grid/client-side-programming/events/onfiltermenushowing
tags: onfiltermenushowing
published: True
position: 31
---

# OnFilterMenuShowing



## 

This event is fired before the filtering menu is rendered.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **menu** - filtering menu instance **tableView** - filtering menu instance **gridColumn** - current [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%}) object **domEvent** - the original browser event|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnFilterMenuShowing ="FilterMenuShowing" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function FilterMenuShowing(sender, eventArgs) {
    if (eventArgs.get_gridColumn().get_uniqueName() == "ClientID") {
        eventArgs.get_menu().get_element().className = "MyClass";
    }
    else {
        eventArgs.get_menu().get_element().className = "";
    }
}
````



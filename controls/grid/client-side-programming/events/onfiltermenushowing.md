---
title: OnFilterMenuShowing
page_title: OnFilterMenuShowing - RadGrid
description: Check our Web Forms article about OnFilterMenuShowing.
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
<telerik:RadGrid AllowFilteringByColumn="true" RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnFilterMenuShowing ="FilterMenuShowing" />
    </ClientSettings>
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````



````JavaScript
function FilterMenuShowing(sender, eventArgs) {
    if (eventArgs.get_column().get_uniqueName() == "OrderID") {
        //change the CSS class of the menu wrapper element
        eventArgs.get_menu().get_element().className = "MyClass";
    }
    else {
        eventArgs.get_menu().get_element().className = "";
    }
}
````



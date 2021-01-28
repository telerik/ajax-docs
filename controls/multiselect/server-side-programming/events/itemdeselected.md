---
title: ItemDeselected
page_title: ItemDeselected - RadMultiSelect
description: Check our Web Forms article about ItemDeselected.
slug: multiselect/server-side-programming/events/itemdeselected
tags: itemdeselected
published: True
position: 2
---


# ItemDeselected


## 

The **ItemDeselected** event occurs when the user de-selects an item from the **RadMultiSelect** dropdown. This result can be achieved both by clickicking over an already selected item in the dropdown, or by clicking the delete button of a selected item.

>caution The **ItemDeselected** event does not fire unless the **AutoPostBack** property is set to **True** or a PostBack on the page occurs.
>

The **ItemDeselected** event handler receives two arguments:

1. The **RadMultiSelect** instance that is loading items. This argument is of type object, but can be cast to the **RadMultiSelect** type.

2. An EventArgs object. This object has an **Item** property, which provides access to the item that was just selected. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadMultiSelect** is being bound.

Use the **ItemDeselected** event handler to respond in server-side code when the user selects a new item:

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" AutoPostBack="true" OnItemDeselected="RadMultiSelect1_ItemDeselected">
    <Items>
        <telerik:MultiSelectItem Text="Steven White" Value="1"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy King" Value="2"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Davolio" Value="3"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Davolio" Value="4"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Leverling" Value="5"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>
<br />
<telerik:RadLabel ID="Label1" runat="server"></telerik:RadLabel>
````

````C#
protected void RadMultiSelect1_ItemDeselected(object sender, Telerik.Web.UI.RadMultiSelectItemEventArgs e)
{
    Label1.Text = "You deselected item with text: " + e.Item.Text;
}
````
````VB.NET
Protected Sub RadMultiSelect1_ItemDeselected(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMultiSelectItemEventArgs)
    Label1.Text = "You deselected item with text: " & e.Item.Text
End Sub
````


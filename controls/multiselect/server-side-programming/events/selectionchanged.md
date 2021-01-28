---
title: SelectionChanged
page_title: SelectionChanged - RadMultiSelect
description: Check our Web Forms article about SelectionChanged.
slug: multiselect/server-side-programming/events/selectionchanged
tags: selectionchanged
published: True
position: 3
---

# SelectionChanged

## 

The **SelectionChanged** event occurs when the selection of **RadMultiSelect** is changed by the user, after the the [ItemSelected]({%slug multiselect/server-side-programming/events/itemselected%}) and [ItemDeselected]({%slug multiselect/server-side-programming/events/itemdeselected%}) events are triggered.

>caution The **SelectionChanged** event does not fire unless the **AutoPostBack** property is set to **True** or a PostBack on the page occurs.
>

The **SelectionChanged** event handler receives one argument:

1. The **RadMultiSelect** instance that is loading items. This argument is of type object, but can be cast to the **RadMultiSelect** type.

2. An empty EventArgs object.

Use the **SelectionChanged** event handler to respond in server-side code when the user selects/deselects **RadMultiselect** item(s):

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" AutoPostBack="true" OnSelectionChanged="RadMultiSelect1_SelectionChanged">
    <Items>
        <telerik:MultiSelectItem Text="Steven White" Value="1"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy King" Value="2"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Davolio" Value="3"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Davolio" Value="4"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Leverling" Value="5"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>
````

````C#
protected void RadMultiSelect1_SelectionChanged(object sender, EventArgs e)
{
    var selectedValues = RadMultiSelect1.Value;

    foreach (string value in selectedValues)
    {
        MultiSelectItem selectedItem = RadMultiSelect1.Items.FindChildByValue(value);
        string result = string.Format("Selected item with text: <strong>{0}</strong> and value: <strong>{1}</strong><br />", selectedItem.Text, selectedItem.Value);
        Response.Write(result);
    }
}
````
````VB.NET
Protected Sub RadMultiSelect1_SelectionChanged(sender As Object, e As EventArgs)
    Dim selectedValues = RadMultiSelect1.Value

    For Each value As String In selectedValues
        Dim selectedItem As MultiSelectItem = RadMultiSelect1.Items.FindChildByValue(value)
        Dim result As String = String.Format("Selected item with text: <strong>{0}</strong> and value: <strong>{1}</strong><br />", selectedItem.Text, selectedItem.Value)
        Response.Write(result)
    Next
End Sub
````




---
title: How to Access Controls Inside Templates
page_title: How to Access Controls Inside Templates | RadDataForm for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: dataform/server-side-programming/access-controls-inside-templates
tags: access,controls,inside,templates
published: True
position: 3
---

# How to Access Controls Inside Templates

It may be necessary to access control inside the templates of a **RadDataForm** to get and set values or properties. This article shows how to access the inner controls for several different templates types.

You can find a detailed, fully runnable example that shows all scenarios in the [Accessing Controls in DataForm](https://www.telerik.com/support/code-library/accessing-controls-in-dataform) Code Library. It shows how to access controls on the server in the ItemTemplate, editable items, insert items, layout elements, and also how to do this on the client-side as well.

The examples below will use the following **RadDataForm**:

````ASP.NET
<telerik:RadDataForm ID="RadDataForm1" runat="server" OnItemCreated="RadDataForm1_ItemCreated">
    <ItemTemplate>
        <telerik:RadLabel ID="RadLabel1" runat="server" Text="Starting Text" />
        <telerik:RadButton ID="EditButton" runat="server" CommandName="Edit" Text="Edit" />
        <telerik:RadButton ID="InsertButton" runat="server" CommandName="InitInsert" Text="Insert" />
    </ItemTemplate>
    <EditItemTemplate>
        <telerik:RadTextBox ID="RadTextBox1" runat="server" Text="Starting Text" />
        <telerik:RadButton ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" />
    </EditItemTemplate>
    <InsertItemTemplate>
        <telerik:RadTextBox ID="RadTextBox2" runat="server" Text="Starting Text" />
        <telerik:RadButton ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" />
    </InsertItemTemplate>
</telerik:RadDataForm>
````

To get a reference to the embedded controls, locate the **RadDataForm** that has the item template, and use its **FindControl** method.

In the **ItemCreated** event handler, the following code locates and updates the label or textbox:

````C#
protected void RadDataForm1_ItemCreated(object sender, RadDataFormItemEventArgs e)
{
    if (e.Item.ItemType == RadDataFormItemType.DataItem)
    {
        RadDataFormDataItem item = e.Item as RadDataFormDataItem;
        RadLabel label = item.FindControl("RadLabel1") as RadLabel;
        label.Text = "Data Item";
    }
    else if (e.Item.ItemType == RadDataFormItemType.EditItem)
    {
        RadDataFormEditableItem item = e.Item as RadDataFormEditableItem;
        RadTextBox textBox = item.FindControl("RadTextBox1") as RadTextBox;
        textBox.Text = "Edit Mode";
    }
    else if (e.Item.ItemType == RadDataFormItemType.InsertItem)
    {
        RadDataFormEditableItem item = e.Item as RadDataFormEditableItem;
        RadTextBox textBox = item.FindControl("RadTextBox2") as RadTextBox;
        textBox.Text = "Insert Mode";
    }
}
````
````VB.NET
Protected Sub RadDataForm1_ItemCreated(ByVal sender As Object, ByVal e As RadDataFormItemEventArgs)
    If e.Item.ItemType = RadDataFormItemType.DataItem Then
        Dim item As RadDataFormDataItem = TryCast(e.Item, RadDataFormDataItem)
        Dim label As RadLabel = TryCast(item.FindControl("RadLabel1"), RadLabel)
        label.Text = "Data Item"
    ElseIf e.Item.ItemType = RadDataFormItemType.EditItem Then
        Dim item As RadDataFormEditableItem = TryCast(e.Item, RadDataFormEditableItem)
        Dim textBox As RadTextBox = TryCast(item.FindControl("RadTextBox1"), RadTextBox)
        textBox.Text = "Edit Mode"
    ElseIf e.Item.ItemType = RadDataFormItemType.InsertItem Then
        Dim item As RadDataFormEditableItem = TryCast(e.Item, RadDataFormEditableItem)
        Dim textBox As RadTextBox = TryCast(item.FindControl("RadTextBox2"), RadTextBox)
        textBox.Text = "Insert Mode"
    End If
End Sub
````

# See Also

 * [DataForm Object API](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/dataform-object)
 * [Accessing Controls in DataForm Code Library](https://www.telerik.com/support/code-library/accessing-controls-in-dataform)

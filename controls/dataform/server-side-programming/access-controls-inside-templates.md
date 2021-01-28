---
title: How to Access Controls Inside Templates
page_title: How to Access Controls Inside Templates - RadDataForm
description: Check our Web Forms article about Accessing Controls Inside Templates.
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
<telerik:RadDataForm ID="RadDataForm1" runat="server" OnItemCreated="RadDataForm1_ItemCreated" RenderMode="Lightweight">
    <ItemTemplate>
        <telerik:RadLabel ID="RadLabel1" runat="server" Text="Starting Text" RenderMode="Lightweight" />
        <telerik:RadButton ID="EditButton" runat="server" CommandName="Edit" Text="Edit" RenderMode="Lightweight" />
        <telerik:RadButton ID="InsertButton" runat="server" CommandName="InitInsert" Text="Insert" RenderMode="Lightweight" />
    </ItemTemplate>
    <EditItemTemplate>
        <telerik:RadTextBox ID="RadTextBox1" runat="server" Text="Starting Text" RenderMode="Lightweight" />
        <telerik:RadButton ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" RenderMode="Lightweight" />
    </EditItemTemplate>
    <InsertItemTemplate>
        <telerik:RadTextBox ID="RadTextBox2" runat="server" Text="Starting Text" RenderMode="Lightweight" />
        <telerik:RadButton ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" RenderMode="Lightweight" />
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

>note the `ItemDataBound` event does not fire for the InsertItem becaues this is a new item that is not tied to any data yet. For the other two items (regular items and edit items), you can access the `DataItem` associated with them in the `ItemDataBound` event. See the example below.

Here is how to access the `DataItem` associated with the ItemTemplate or EditItemTemplate whlie they are rendering.

````C#
protected void RadDataForm1_ItemDataBound(object sender, RadDataFormItemEventArgs e)
{
    string info = (((Telerik.Web.UI.RadDataFormDataItem)e.Item).DataItem as DataRowView)["ProductName"].ToString();
    //this example is for SqlDataSource, if you are binding to a custom object, use that object instead of DataRowView
}
````
````VB
Protected Sub RadDataForm1_ItemDataBound(ByVal sender As Object, ByVal e As RadDataFormItemEventArgs) Handles RadDataForm1.ItemDataBound
    Dim info As String = (TryCast((CType(e.Item, Telerik.Web.UI.RadDataFormDataItem)).DataItem, DataRowView))("ProductName")
    'this example is for SqlDataSource, if you are binding to a custom object, use that object instead of DataRowView
End Sub
````

> RadDataForm is a control suitable for visualizing one record at a time. If you want to display and access multiple items on a single page, you can check the [RadListView](https://demos.telerik.com/aspnet-ajax/listview/examples/overview/defaultcs.aspx) component.

# See Also

 * [DataForm Object API](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/dataform-object)
 * [Accessing Controls in DataForm Code Library](https://www.telerik.com/support/code-library/accessing-controls-in-dataform)

---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates | RadDataForm for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: dataform/functionality/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 1
---

# Accessing Controls Inside Templates
It may be necessary to access control inside the templates of a **RadDataForm** to get and set values or properties. This article shows how to access the inner controls for several different templates types.

## Item Template

To get a reference to the embedded control, locate the **RadDataForm** that has the item template, and use its **FindControl** method.

For example, consider the following **RadDataForm**:

````ASPNET
<telerik:RadDataForm ID="RadDataForm2" runat="server" OnItemCreated="RadDataForm1_ItemCreated">
    <ItemTemplate>
        <telerik:RadLabel ID="RadLabel1" runat="server" Text="Starting Text" />
        <telerik:RadButton ID="EditButton" runat="server" CommandName="Edit" Text="Edit" />
    </ItemTemplate>
    <EditItemTemplate>
        <telerik:RadTextBox ID="RadTextBox1" runat="server" Text="Starting Text"/>
    </EditItemTemplate>
</telerik:RadDataForm>
````

In the **ItemCreated** event handler, the following code locates and updates the label:

**Server-side access**
````C#
protected void RadDataForm1_ItemCreated(object sender, RadDataFormItemEventArgs e)
{
    if (e.Item is RadDataFormDataItem)
    {
        RadDataFormDataItem item = e.Item as RadDataFormDataItem;
        RadLabel label = item.FindControl("RadLabel1") as RadLabel;
        label.Text = "Success";
    }
}
	
````
````VB.NET
Protected Sub RadDataForm1_ItemCreated(ByVal sender As Object, ByVal e As RadDataFormItemEventArgs)
    If TypeOf e.Item Is RadDataFormDataItem Then
        Dim item As RadDataFormDataItem = TryCast(e.Item, RadDataFormDataItem)
        Dim label As RadLabel = TryCast(item.FindControl("RadLabel1"), RadLabel)
        label.Text = "Success"
    End If
End Sub
````

## EditItem and InsertItem Templates

To get a reference to the embedded control, locate the **RadDataForm** that has the EditItem or InsertItem template, and use its **FindControl** method.

````C#
protected void RadDataForm1_ItemCreated(object sender, RadDataFormItemEventArgs e)
{
    if (e.Item is RadDataFormEditableItem)
    {
        RadDataFormEditableItem item = e.Item as RadDataFormEditableItem;
        RadLabel label = item.FindControl("RadLabel1") as RadLabel;
        label.Text = "Success";
    }
}
````
````VB.NET
Protected Sub RadDataForm1_ItemCreated(ByVal sender As Object, ByVal e As RadDataFormItemEventArgs)
    If TypeOf e.Item Is RadDataFormEditableItem Then
        Dim item As RadDataFormEditableItem = TryCast(e.Item, RadDataFormEditableItem)
        Dim textBox As RadTextBox = TryCast(item.FindControl("RadTextBox1"), RadTextBox)
        textBox.Text = "Success"
    End If
End Sub
````

# See Also

 * [DataForm Object API](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/dataform-object)
 * [Code Library](https://www.telerik.com/support/code-library/accessing-controls-in-dataform)

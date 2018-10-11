---
title: Items
page_title: Items | RadListView for ASP.NET AJAX Documentation
description: Items
slug: listview/fuctionality/selecting/items
tags: items
published: True
position: 0
---

# Items



## Selecting items

**RadListView** exposes a server-side **API**, similar to **RadGrid**'s. The selected items are accessible through the **SelectedItems** collection that consist of **RadListViewDataItem** objects.

By default you can select only one item at a time. Multiple selection is possible if enabled via the **AllowMultiItemSelection** property.

There are several ways to select/deselect an item in **RadListView**:

* to use the **Selected** property of **RadListViewDataItem**

* to fire **Select/Deselect** command

* to add/remove item's index to the **SelectedIndexes** collection

>tip Note, that you need to provide Select/Deselect buttons in both **Item** and **AlternatingItem** templates.
>


````ASP.NET
<itemtemplate>
   <asp:LinkButton ID="SelectButton1" Text="Select" CommandName="Select" runat="server" />
   <asp:LinkButton ID="DeselectButton1" Text="Deselect" CommandName="Deselect" runat="server" />
     ...
</itemtemplate>
<alternatingitemtemplate>
    <asp:LinkButton ID="SelectButton2" Text="Select" CommandName="Select" runat="server" />
   <asp:LinkButton ID="DeselectButton2" Text="Deselect" CommandName="Deselect" runat="server" />
    ...
</alternatingitemtemplate>
````



>tip The selected items can be cleared using the **ClearSelectedItems** method.
>


Brief description of the selection-related properties/methods:


| Property/Method | Type | Description |
| ------ | ------ | ------ |
| **SelectCommandName (Select)** |Command / constant|Selects *RadListView* item|
| **DeselectCommandName (Deselect)** |Command / constant|Deselects *RadListView* item|
| **AllowMultiItemSelection** |Property ( *bool* )|Allows the user to select more that one item simultaneously|
| **SelectedIndexes** |Property ( *RadListViewIndexesCollection* )|Contains the indexes of the selected items|
| **SelectedItems** |Property ( *RadListViewDataItemCollection* )|Contains the selected items|
| **SelectedValue** |Property ( *object* )|Gets the first data key value of the selected item|
| **SelectedValues** |Property ( *DataKey* )|Gets the data key values from the selected item|
| **SelectedIndexChanged** |Event|This event fires when the user selects an item in *RadListView* |
| **ClearSelectedItems** |Method|Clears the selected items|

## SelectedItemTemplate

**SelectedItemTemplate** defines the contents that represents the selected item in **RadListView**. As with any other template, **SelectedItemTemplate** provides an unrestricted freedom for defining the appearance of the selected item.

A simplified code-snippet is shown below:

````ASP.NET
<telerik:radlistview id="RadListView1" runat="server">
    ...
    <ItemTemplate>
        <asp:Label ID="lbl1" Text='<%# Bind("UserName") %>' runat="server">        </asp:Label>
    </ItemTemplate>
    <SelectedItemTemplate>
        <asp:Label ID="lbl2" Text='<%# Bind("UserName") %>' runat="server" BackColor="Gray">        </asp:Label>
    </SelectedItemTemplate>
    ...</telerik:radlistview>
````



## Extracting values from a selected item

There are various way to access/extract values from the items in **RadListView**.

1. Extracting **DataKey** values on **ItemDataBound** / **ItemCommand** events



````C#
protected void RadListView1_ItemDataBound(object sender, RadListViewItemEventArgs e)
{
    if (e.Item is RadListViewDataItem)
    {
        RadListViewDataItem item = e.Item as RadListViewDataItem;
        if (item.Selected)
        {
            string myValue = item.GetDataKeyValue("myValue").ToString();
        }
    }
}
````
````VB
Protected Sub RadListView1_ItemDataBound(ByVal sender As Object, ByVal e As RadListViewItemEventArgs) Handles RadListView1.ItemDataBound
    If TypeOf e.Item Is RadListViewDataItem Then
        Dim item As RadListViewDataItem = TryCast(e.Item, RadListViewDataItem)
        If item.Selected Then
            Dim myValue As String = item.GetDataKeyValue("myValue").ToString()
        End If
    End If
End Sub
````




````C#
protected void RadListView1_ItemCommand(object sender, RadListViewCommandEventArgs e)
{
    if (e.CommandName == RadListView.SelectCommandName)
    {
        RadListViewDataItem item = e.ListViewItem as RadListViewDataItem;
        string myValue = item.GetDataKeyValue("myValue").ToString();
    }
}
````
````VB
Protected Sub RadListView1_ItemCommand(ByVal sender As Object, ByVal e As RadListViewCommandEventArgs) Handles RadListView1.ItemCommand
    If e.CommandName = RadListView.SelectCommandName Then
        Dim item As RadListViewDataItem = TryCast(e.ListViewItem, RadListViewDataItem)
        Dim myValue As String = item.GetDataKeyValue("myValue").ToString()
    End If
End Sub
````


2. Extracting values using the **ExtractValues** method on **ItemDataBound** / **ItemCommand**



````C#
protected void RadListView1_ItemDataBound(object sender, RadListViewItemEventArgs e)
{
    if (e.Item is RadListViewDataItem)
    {
        RadListViewDataItem item = e.Item as RadListViewDataItem;
        if (item.Selected)
        {
            Hashtable table = new Hashtable();
            (e.Item as RadListViewDataItem).ExtractValues(table);
            string myValue = table["myValue"].ToString();
        }
    }
}
````
````VB
Protected Sub RadListView1_ItemDataBound(ByVal sender As Object, ByVal e As RadListViewItemEventArgs) Handles RadListView1.ItemDataBound
    If TypeOf e.Item Is RadListViewDataItem Then
        Dim item As RadListViewDataItem = TryCast(e.Item, RadListViewDataItem)
        If item.Selected Then
            Dim table As New Hashtable()
            (TryCast(e.Item, RadListViewDataItem)).ExtractValues(table)
            Dim myValue As String = table("myValue").ToString()
        End If
    End If
End Sub
````




````C#
protected void RadListView1_ItemCommand(object sender, RadListViewCommandEventArgs e)
{
    if (e.CommandName == RadListView.SelectCommandName)
    {
        Hashtable table = new Hashtable();
        (e.ListViewItem as RadListViewDataItem).ExtractValues(table);
        string myValue = table["myValue"].ToString();
    }
}
````
````VB
Protected Sub RadListView1_ItemCommand(ByVal sender As Object, ByVal e As RadListViewCommandEventArgs) Handles RadListView1.ItemCommand
    If e.CommandName = RadListView.SelectCommandName Then
        Dim table As New Hashtable()
        (TryCast(e.ListViewItem, RadListViewDataItem)).ExtractValues(table)  
        Dim myValue As String = table("myValue").ToString()
    End If
End Sub
````


3. Extracting values using the **ExtractValuesFromItem** method on **ItemDataBound** / **ItemCommand**

Similar to the previous example but uses **ExtractValuesFromItem**. A major advantage of this method is that it can also extract the **DataKeys** values.



````C#
protected void RadListView1_ItemDataBound(object sender, RadListViewItemEventArgs e)
{
    if (e.Item is RadListViewDataItem)
    {
        RadListViewDataItem item = e.Item as RadListViewDataItem;
        if (item.Selected)
        {
            Hashtable table = new Hashtable();
            e.Item.OwnerListView.ExtractValuesFromItem(table, e.Item as RadListViewDataItem, true);
            string myValue = table["myValue"].ToString();
        }
    }
}
````
````VB
Protected Sub RadListView1_ItemDataBound(ByVal sender As Object, ByVal e As RadListViewItemEventArgs) Handles RadListView1.ItemDataBound
    If TypeOf e.Item Is RadListViewDataItem Then
        Dim item As RadListViewDataItem = TryCast(e.Item, RadListViewDataItem)
        If item.Selected Then
            Dim table As New Hashtable()
            e.Item.OwnerListView.ExtractValuesFromItem(table, TryCast(e.Item, RadListViewDataItem), True)
            Dim myValue As String = table("myValue").ToString()
        End If
    End If
End Sub
````


4. Extracting values through the **DataItem** on **ItemDataBound**



````C#
protected void RadListView1_ItemDataBound(object sender, RadListViewItemEventArgs e)
{
    if (e.Item is RadListViewDataItem)
    {
        RadListViewDataItem item = e.Item as RadListViewDataItem;
        if (item.Selected)
        {
            string myValue = DataBinder.Eval(item.DataItem, "myValue").ToString();
        }
    }
}
````
````VB
Protected Sub RadListView1_ItemDataBound(ByVal sender As Object, ByVal e As RadListViewItemEventArgs) Handles RadListView1.ItemDataBound
    If TypeOf e.Item Is RadListViewDataItem Then
        Then Dim item As RadListViewDataItem = TryCast(e.Item, RadListViewDataItem)
        If item.Selected Then
            Dim myValue As String = DataBinder.Eval(item.DataItem, "myValue").ToString()
        End If
    End If
End Sub
````


Online demo:

[RadListView - Selecting items ](http://demos.telerik.com/aspnet-ajax/listview/examples/selecting/defaultcs.aspx)

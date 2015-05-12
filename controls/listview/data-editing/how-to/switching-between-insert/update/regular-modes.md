---
title: Switching between Insert/Update/Regular Modes
page_title: Switching between Insert/Update/Regular Modes | RadListView for ASP.NET AJAX Documentation
description: Switching between Insert/Update/Regular Modes
slug: listview/data-editing/how-to/switching-between-insert/update/regular-modes
tags: switching,between,insert/update/regular,modes
published: True
position: 0
---

# Switching between Insert/Update/Regular Modes



There are many cases where one would like to manipulate the RadListView insert/update/regular modes manually. The samples in this topic illustrate how you can switch between the different modes of the RadListView control.

## Insert to Update mode and Update to Insert mode

One of the most common scenario is to display items in edit mode or the insert item at a time. With RadListView this is easy to achieve:



````C#
protected void RadListView1_ItemCommand(object sender, RadListViewCommandEventArgs e)
{
    if (e.CommandName == RadListView.EditCommandName)
    {
        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None;
    }
    if (e.CommandName == RadListView.InitInsertCommandName)
    {
        RadListView1.EditIndexes.Clear();
    }
}
````
````VB
Protected Sub RadListView1_ItemCommand(sender As Object, e As RadListViewCommandEventArgs)
    If e.CommandName = RadListView.EditCommandName Then
        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
    End If
    If e.CommandName = RadListView.InitInsertCommandName Then
        RadListView1.EditIndexes.Clear()
    End If
End Sub
````



## Open RadListView Insert form

There are three different approaches you can follow when you need to show the RadListView insert form:

1. Add button with **CommandName** set to **"InitInsert"**

````ASP.NET
<asp:Button ID="Button1" runat="server" CommandName="InitInsert" Text="Add New Record" />
````



1. Using the **InsertItemPosition** property

````ASP.NET
<asp:Button ID="btnAddNewRecord" runat="server" Text="Add New Record" OnClick="btnAddNewRecord_Click" />
````





````C#
protected void btnAddNewRecord_Click(object sender, EventArgs e)
{
    RadListView1.InsertItemPosition = RadListViewInsertItemPosition.FirstItem;
}
````
````VB
Protected Sub btnAddNewRecord_Click(sender As Object, e As EventArgs)
    RadListView1.InsertItemPosition = RadListViewInsertItemPosition.FirstItem
End Sub
````



1. Calling the **ShowInsertItem()** method

````ASP.NET
<asp:Button ID="btnAddNewRecord1" runat="server" Text="Add New Record" OnClick="btnAddNewRecord1_Click" />
````





````C#
protected void btnAddNewRecord1_Click(object sender, EventArgs e)
{
    RadListView1.ShowInsertItem();
}
````
````VB
Protected Sub btnAddNewRecord1_Click(sender As Object, e As EventArgs)
    RadListView1.ShowInsertItem()
End Sub
````



## Close RadListView Insert form

For closing the insert form you can use the below code:



````C#
protected void btnCancelInsert_Click(object sender, EventArgs e)
{
    RadListView1.ShowInsertItem(RadListViewInsertItemPosition.None);
    //OR
    RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None;
    //OR
    RadListView1.InsertItem.FireCommandEvent("Cancel", "");
}
````
````VB
Protected Sub btnCancelInsert_Click(sender As Object, e As EventArgs)
    RadListView1.ShowInsertItem(RadListViewInsertItemPosition.None)
    'OR
    RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
    'OR
    RadListView1.InsertItem.FireCommandEvent("Cancel", "")
End Sub
````



## Put items in Edit mode

To turn an item or multiple items in edit mode, you might choose between the following approaches:

1. Add the indexes of the items to the **EditIndexes** collection on Page_Load (without additional rebind)



````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadListView1.EditIndexes.Add(0);
    }
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
    If Not IsPostBack Then
        RadListView1.EditIndexes.Add(0)
    End If
End Sub
````



1. Set the **Edit** property of an item to true and Rebind()



````C#
protected void RadListView1_PreRender(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        foreach (RadListViewDataItem item in RadListView1.Items)
        {
            item.Edit = true;
        }
        RadListView1.Rebind();
    }
}
````
````VB
Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
    If Not IsPostBack Then
        For Each item As RadListViewDataItem In RadListView1.Items
            item.Edit = True
        Next
        RadListView1.Rebind()
    End If
End Sub
````



## Clear edited items

Another case is where you need to close all edited items on external button click:

````ASP.NET
<asp:Button ID="btnClearEditedItems" runat="server" Text="Clear Edited Items" OnClick="btnClearEditedItems_Click" />
````





````C#
protected void btnClearEditedItems_Click(object sender, EventArgs e)
{
    RadListView1.EditIndexes.Clear();
    RadListView1.Rebind();
}
````
````VB
Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
    RadListView1.EditIndexes.Clear()
    RadListView1.Rebind()
End Sub
````

  

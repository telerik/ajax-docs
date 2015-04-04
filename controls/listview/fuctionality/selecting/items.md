---
title: Items
page_title: Items | UI for ASP.NET AJAX Documentation
description: Items
slug: listview/fuctionality/selecting/items
tags: items
published: True
position: 0
---

# Items



## Selecting items

__RadListView__ exposes a server-side __API__, similar to __RadGrid__'s. The selected items are accessible through the __SelectedItems__ collection that consist of __RadListViewDataItem__ objects.

By default you can select only one item at a time. Multiple selection is possible if enabled via the __AllowMultiItemSelection__ property.

There are several ways to select/deselect an item in __RadListView__:

* to use the __Selected__ property of __RadListViewDataItem__

* to fire __Select/Deselect__ command

* to add/remove item's index to the __SelectedIndexes__ collection

>note Note, that you need to provide Select/Deselect buttons in both __Item__ and __AlternatingItem__ templates.
>


````ASPNET
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



>note The selected items can be cleared using the __ClearSelectedItems__ method.
>


Brief description of the selection-related properties/methods:


| Property/Method | Type | Description |
| ------ | ------ | ------ |
| __SelectCommandName (Select)__ |Command / constant|Selects *RadListView* item|
| __DeselectCommandName (Deselect)__ |Command / constant|Deselects *RadListView* item|
| __AllowMultiItemSelection__ |Property ( *bool* )|Allows the user to select more that one item simultaneously|
| __SelectedIndexes__ |Property ( *RadListViewIndexesCollection* )|Contains the indexes of the selected items|
| __SelectedItems__ |Property ( *RadListViewDataItemCollection* )|Contains the selected items|
| __SelectedValue__ |Property ( *object* )|Gets the first data key value of the selected item|
| __SelectedValues__ |Property ( *DataKey* )|Gets the data key values from the selected item|
| __SelectedIndexChanged__ |Event|This event fires when the user selects an item in *RadListView* |
| __ClearSelectedItems__ |Method|Clears the selected items|

## SelectedItemTemplate

__SelectedItemTemplate__ defines the contents that represents the selected item in __RadListView__. As with any other template, __SelectedItemTemplate__ provides an unrestricted freedom for defining the appearance of the selected item.

A simplified code-snippet is shown below:

````ASPNET
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

There are various way to access/extract values from the items in __RadListView__.

1. Extracting __DataKey__ values on __ItemDataBound__ / __ItemCommand__ events



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
````VB.NET
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
````VB.NET
	    Protected Sub RadListView1_ItemCommand(ByVal sender As Object, ByVal e As RadListViewCommandEventArgs) Handles RadListView1.ItemCommand
	        If e.CommandName = RadListView.SelectCommandName Then
	            Dim item As RadListViewDataItem = TryCast(e.ListViewItem, RadListViewDataItem)
	            Dim myValue As String = item.GetDataKeyValue("myValue").ToString()
	        End If
	    End Sub
````


2. Extracting values using the __ExtractValues__ method on __ItemDataBound__ / __ItemCommand__



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
````VB.NET
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
````VB.NET
	    Protected Sub RadListView1_ItemCommand(ByVal sender As Object, ByVal e As RadListViewCommandEventArgs) Handles RadListView1.ItemCommand
	        If e.CommandName = RadListView.SelectCommandName Then
	            Dim table As New Hashtable()
	            (TryCast(e.ListViewItem, RadListViewDataItem)).ExtractValues(table)  
	            Dim myValue As String = table("myValue").ToString()
	        End If
	    End Sub
````


3. Extracting values using the __ExtractValuesFromItem__ method on __ItemDataBound__ / __ItemCommand__

Similar to the previous example but uses __ExtractValuesFromItem__. A major advantage of this method is that it can also extract the __DataKeys__ values.



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
````VB.NET
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


4. Extracting values through the __DataItem__ on __ItemDataBound__



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
````VB.NET
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

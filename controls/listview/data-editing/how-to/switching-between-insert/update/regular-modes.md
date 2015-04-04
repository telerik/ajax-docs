---
title: Switching between Insert/Update/Regular Modes
page_title: Switching between Insert/Update/Regular Modes | UI for ASP.NET AJAX Documentation
description: Switching between Insert/Update/Regular Modes
slug: listview/data-editing/how-to/switching-between-insert/update/regular-modes
tags: switching,between,insert/update/regular,modes
published: True
position: 0
---

# Switching between Insert/Update/Regular Modes



There are many cases where one would like to manipulate the RadListView insert/update/regular modes manually. The samples in this topic illustrate how you can switch between the differnt modes of the RadListView control.

## Insert to Update mode and Update to Insert mode

One of the most common scenario is to display items in edit mode or the insert item at a time. With RadListView this is easy to achieve:

>tabbedCode

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
````VB.NET
	    Protected Sub RadListView1_ItemCommand(sender As Object, e As RadListViewCommandEventArgs)
	        If e.CommandName = RadListView.EditCommandName Then
	            RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
	        End If
	        If e.CommandName = RadListView.InitInsertCommandName Then
	            RadListView1.EditIndexes.Clear()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_4"
	    Protected Sub btnAddNewRecord_Click(sender As Object, e As EventArgs)
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.FirstItem
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_5"
	    Protected Sub btnAddNewRecord1_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem()
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_6"
	    Protected Sub btnCancelInsert_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem(RadListViewInsertItemPosition.None)
	        'OR
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
	        'OR
	        RadListView1.InsertItem.FireCommandEvent("Cancel", "")
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_7"
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadListView1.EditIndexes.Add(0)
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_8"
	    Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                item.Edit = True
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_10"
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

## Open RadListView Insert form

There are three different approaches you can follow when you need to show the RadListView insert form:

1. Add button with __CommandName__ set to __"InitInsert"__

````ASPNET
	            <asp:Button ID="Button1" runat="server" CommandName="InitInsert" Text="Add New Record" />
````



1. Using the __InsertItemPosition__ property

````ASPNET
	            <asp:Button ID="btnAddNewRecord" runat="server" Text="Add New Record" OnClick="btnAddNewRecord_Click" />
````



>tabbedCode

````C#
	    protected void btnAddNewRecord_Click(object sender, EventArgs e)
	    {
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.FirstItem;
	    }
````
````VB.NET
	    Protected Sub btnAddNewRecord_Click(sender As Object, e As EventArgs)
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.FirstItem
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_5"
	    Protected Sub btnAddNewRecord1_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem()
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_6"
	    Protected Sub btnCancelInsert_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem(RadListViewInsertItemPosition.None)
	        'OR
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
	        'OR
	        RadListView1.InsertItem.FireCommandEvent("Cancel", "")
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_7"
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadListView1.EditIndexes.Add(0)
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_8"
	    Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                item.Edit = True
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_10"
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

1. Calling the __ShowInsertItem()__ method

````ASPNET
	            <asp:Button ID="btnAddNewRecord1" runat="server" Text="Add New Record" OnClick="btnAddNewRecord1_Click" />
````



>tabbedCode

````C#
	    protected void btnAddNewRecord1_Click(object sender, EventArgs e)
	    {
	        RadListView1.ShowInsertItem();
	    }
````
````VB.NET
	    Protected Sub btnAddNewRecord1_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem()
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_6"
	    Protected Sub btnCancelInsert_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem(RadListViewInsertItemPosition.None)
	        'OR
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
	        'OR
	        RadListView1.InsertItem.FireCommandEvent("Cancel", "")
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_7"
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadListView1.EditIndexes.Add(0)
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_8"
	    Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                item.Edit = True
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_10"
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

## Close RadListView Insert form

For closing the insert form you can use the below code:

>tabbedCode

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
````VB.NET
	    Protected Sub btnCancelInsert_Click(sender As Object, e As EventArgs)
	        RadListView1.ShowInsertItem(RadListViewInsertItemPosition.None)
	        'OR
	        RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
	        'OR
	        RadListView1.InsertItem.FireCommandEvent("Cancel", "")
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_7"
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadListView1.EditIndexes.Add(0)
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_8"
	    Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                item.Edit = True
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_10"
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

## Put items in Edit mode

To turn an item or multiple items in edit mode, you might choose between the following approaches:

1. Add the indexes of the items to the __EditIndexes__ collection on Page_Load (without additional rebind)

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadListView1.EditIndexes.Add(0);
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadListView1.EditIndexes.Add(0)
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_8"
	    Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                item.Edit = True
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_10"
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

1. Set the __Edit__ property of an item to true and Rebind()

>tabbedCode

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
````VB.NET
	    Protected Sub RadListView1_PreRender(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                item.Edit = True
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
	#End Region
	
	#Region "listview-switch-insert-update-regular-modes_10"
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

## Clear edited items

Another case is where you need to close all edited items on external button click:

````ASPNET
	            <asp:Button ID="btnClearEditedItems" runat="server" Text="Clear Edited Items" OnClick="btnClearEditedItems_Click" />
````



>tabbedCode

````C#
	    protected void btnClearEditedItems_Click(object sender, EventArgs e)
	    {
	        RadListView1.EditIndexes.Clear();
	        RadListView1.Rebind();
	    }
````
````VB.NET
	    Protected Sub btnClearEditedItems_Click(sender As Object, e As EventArgs)
	        RadListView1.EditIndexes.Clear()
	        RadListView1.Rebind()
	    End Sub
	#End Region
	
	    Protected Sub RadListView1_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs)
	        Dim data As New List(Of MyItem)()
	        For i As Integer = 1 To 10
	            data.Add(New MyItem(i, "Item" + i.ToString()))
	        Next
	        TryCast(sender, RadListView).DataSource = data
	    End Sub
	    Private Class MyItem
	        Public Property ID() As Integer
	            Get
	                Return m_ID
	            End Get
	            Set(value As Integer)
	                m_ID = value
	            End Set
	        End Property
	        Private m_ID As Integer
	        Public Property Text() As String
	            Get
	                Return m_Text
	            End Get
	            Set(value As String)
	                m_Text = value
	            End Set
	        End Property
	        Private m_Text As String
	        Public Sub New(_id As Integer, _text As String)
	            ID = _id
	            Text = _text
	        End Sub
	    End Class
	End Class


>end

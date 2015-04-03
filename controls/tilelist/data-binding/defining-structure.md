---
title: Defining Structure
page_title: Defining Structure | UI for ASP.NET AJAX Documentation
description: Defining Structure
slug: tilelist/data-binding/defining-structure
tags: defining,structure
published: True
position: 1
---

# Defining Structure



## Defining Groups Order

By default, when the control iterates through the datasource, a tile is created for each row/item from the collection. This meansthat the TileGroups are also created when they are first encountered and tiles are added to an existing group only when it is encounteredfor a second time.

The __order__ and layout of the __RadTileList__ can be controlled by generating the desired __TileGroups__in the __markup or in the code-behind__.

The __Name__ property of each __TileGroup__ can be used to __match a group from the datasource__	(set through the DataGroupNameField databinding property) __with an already defined group in the page__.

Groups from the datasource that do not already exist are appended to the current ones.

In the following example a simple DataTable is used for a dummy datasource just to visualize some simple data and evaluate the results:

````ASPNET
		<telerik:RadTileList runat="server" ID="RadTileList1">
			<DataBindings>
				<CommonTileBinding DataGroupNameField="GroupNameColumn" TileType="RadTextTile" Shape="Square" />
				<TextTileBinding DataTextField="TextColumn" />
			</DataBindings>
			<Groups>
				<telerik:TileGroup Name="GroupOne"></telerik:TileGroup>
				<telerik:TileGroup Name="GroupTwo"></telerik:TileGroup>
			</Groups>
		</telerik:RadTileList>
````



>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			TileGroup group = new TileGroup();
			group.Name = "GroupThree";
			//a third group is added from the code-behind
			RadTileList1.Groups.Add(group);
			RadTileList1.DataSource = GetDummyData();
			RadTileList1.DataBind();
		}
	
		protected DataTable GetDummyData()
		{
			DataTable tbl = new DataTable();
			tbl.Columns.Add(new DataColumn("GroupNameColumn"));
			tbl.Columns.Add(new DataColumn("TextColumn"));
			//Note the order in which the group names are met
			tbl.Rows.Add(new object[] { "GroupThree", "GroupThree, Tile One" });
			tbl.Rows.Add(new object[] { "GroupThree", "GroupThree, Tile Two" });
			tbl.Rows.Add(new object[] { "otherGroupName", "otherGroupName group, Tile One" });
			tbl.Rows.Add(new object[] { "GroupOne", "GroupOne, Tile One" });
			tbl.Rows.Add(new object[] { "GroupOne", "GroupOne, Tile Two" });
			tbl.Rows.Add(new object[] { "GroupTwo", "GroupTwo, Tile One" });
			tbl.Rows.Add(new object[] { "GroupTwo", "GroupTwo, Tile Two" });
			tbl.Rows.Add(new object[] { "otherGroupName", "otherGroupName group, Tile Two" });
			tbl.Rows.Add(new object[] { "someRandomGroup", "someRandomGroup group, Tile One" });
			tbl.Rows.Add(new object[] { "someRandomGroup", "someRandomGroup group, Tile Two" });
			return tbl;
		}
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			Dim group As New TileGroup()
			group.Name = "GroupThree"
			'a third group is added from the code-behind
			RadTileList1.Groups.Add(group)
			RadTileList1.DataSource = GetDummyData()
			RadTileList1.DataBind()
		End Sub
	
		Protected Function GetDummyData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("GroupNameColumn"))
			tbl.Columns.Add(New DataColumn("TextColumn"))
			'Note the order in which the group names are met
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile One"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile Two"})
			tbl.Rows.Add(New Object() {"otherGroupName", "otherGroupName group, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile One"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile Two"})
			tbl.Rows.Add(New Object() {"otherGroupName", "otherGroupName group, Tile Two"})
			tbl.Rows.Add(New Object() {"someRandomGroup", "someRandomGroup group, Tile One"})
			tbl.Rows.Add(New Object() {"someRandomGroup", "someRandomGroup group, Tile Two"})
			Return tbl
		End Function
	#End Region
	
	
	#Region "tilelist-databinding-structure-tiles-vb-2"
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			Dim group As New TileGroup()
			group.Name = "GroupThree"
			'a third group is added from the code-behind
			RadTileList1.Groups.Add(group)
			'create a few tiles and add them to the control
			Dim tile1 As New RadTextTile()
			tile1.Text = "GroupOne, Second tile, from the code"
			RadTileList1.GetTileGroupByName("GroupOne").Tiles.Add(tile1)
			Dim tile2 As New RadTextTile()
			tile2.Text = "GroupTwo, Second tile, from the code"
			RadTileList1.GetTileGroupByName("GroupTwo").Tiles.Add(tile2)
			Dim tile3 As New RadTextTile()
			tile3.Text = "GroupThree, Second tile, from the code"
			RadTileList1.GetTileGroupByName("GroupThree").Tiles.Add(tile3)
			RadTileList1.DataSource = GetDummyData()
			RadTileList1.DataBind()
		End Sub
	
		Protected Function GetDummyData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("GroupNameColumn"))
			tbl.Columns.Add(New DataColumn("TextColumn"))
			'Note the order in which the group names are met
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile One, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile Two, from the datasource"})
			tbl.Rows.Add(New Object() {"otherGroupName", "otherGroupName group, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile One, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile Two, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile One, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile Two, from the datasource"})
			tbl.Rows.Add(New Object() {"otherGroupName", "otherGroupName group, Tile Two"})
			tbl.Rows.Add(New Object() {"someRandomGroup", "someRandomGroup group, Tile One"})
			tbl.Rows.Add(New Object() {"someRandomGroup", "someRandomGroup group, Tile Two"})
			Return tbl
		End Function
	#End Region
	
	
	#Region "tilelist-databinding-supportedDatasources-programmatic-datatable-vb-2"
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				RadTileList1.DataSource = GetDummyData()
				RadTileList1.DataBind()
			End If
		End Sub
	
		Protected Function GetDummyData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("GroupNameColumn"))
			tbl.Columns.Add(New DataColumn("TextColumn"))
			'Note the order in which the group names are met
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile One"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile One"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile Two"})
			Return tbl
		End Function
	#End Region
	
	
	#Region "tilelist-databinding-supportedDatasources-programmatic-List-vb-2"
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				Dim sampleData As New List(Of TileDataMocking)()
				sampleData.Add(New TileDataMocking("http://www.telerik.com/", "Learn more about Telerik"))
				sampleData.Add(New TileDataMocking("http://www.sitefinity.com/", "Explore Sitefinity"))
				sampleData.Add(New TileDataMocking("http://www.icenium.com/", "Discover Icenium"))
				RadTileList2.DataSource = sampleData
				RadTileList2.DataBind()
			End If
		End Sub
	
		Public Class TileDataMocking
			Public Sub New(tileUrls As String, tileTexts As String)
				_TileUrls = tileUrls
				_TileTexts = tileTexts
			End Sub
			Private _TileUrls As String
			Public Property TileUrls() As String
				Get
					Return _TileUrls
				End Get
				Set(value As String)
					_TileUrls = value
				End Set
			End Property
			Private _TileTexts As String
			Public Property TileTexts() As String
				Get
					Return _TileTexts
				End Get
				Set(value As String)
					_TileTexts = value
				End Set
			End Property
		End Class
	#End Region
	
	End Class


>end

If the groups from the markup and/or code-behind are removed the order of the tiles changes because it starts matching the order in which they are met in the datasource.

## Defining Tiles Order

It is possible that some tiles must always be present in the control and do not or cannot be created from the datasource. This is why the	__AppendDataBoundItems__ property of the __RadTileList__ allows the developer to __keep itemsfrom the markup/code-behind when databinding the control__.

When __AppendDataBoundItems__ is set to __true__ tiles created from the datasource will be__added__ to tiles already present in the control.

The default value of AppendDataBoundItems is false.

Let's take the above code as base and add a few tiles. Toggling the AppendDataBoundItems property can show the different options:

````ASPNET
		<telerik:RadTileList runat="server" ID="RadTileList1" AppendDataBoundItems="true">
			<DataBindings>
				<CommonTileBinding DataGroupNameField="GroupNameColumn" TileType="RadTextTile" Shape="Square" />
				<TextTileBinding DataTextField="TextColumn" />
			</DataBindings>
			<Groups>
				<telerik:TileGroup Name="GroupOne">
					<telerik:RadTextTile Text="GroupOne, First tile, from the markup" runat="server"></telerik:RadTextTile>
				</telerik:TileGroup>
				<telerik:TileGroup Name="GroupTwo">
					<telerik:RadTextTile Text="GroupTwo, FirstTile from the markup" runat="server"></telerik:RadTextTile>
				</telerik:TileGroup>
			</Groups>
		</telerik:RadTileList>
````



>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			TileGroup group = new TileGroup();
			group.Name = "GroupThree";
			//a third group is added from the code-behind
			RadTileList1.Groups.Add(group);
			//create a few tiles and add them to the control
			RadTextTile tile1 = new RadTextTile();
			tile1.Text = "GroupOne, Second tile, from the code";
			RadTileList1.GetTileGroupByName("GroupOne").Tiles.Add(tile1);
			RadTextTile tile2 = new RadTextTile();
			tile2.Text = "GroupTwo, Second tile, from the code";
			RadTileList1.GetTileGroupByName("GroupTwo").Tiles.Add(tile2);
			RadTextTile tile3 = new RadTextTile();
			tile3.Text = "GroupThree, Second tile, from the code";
			RadTileList1.GetTileGroupByName("GroupThree").Tiles.Add(tile3);
			RadTileList1.DataSource = GetDummyData();
			RadTileList1.DataBind();
		}
	
		protected DataTable GetDummyData()
		{
			DataTable tbl = new DataTable();
			tbl.Columns.Add(new DataColumn("GroupNameColumn"));
			tbl.Columns.Add(new DataColumn("TextColumn"));
			tbl.Rows.Add(new object[] { "GroupThree", "GroupThree, Tile One, from the datasource" });
			tbl.Rows.Add(new object[] { "GroupThree", "GroupThree, Tile Two, from the datasource" });
			tbl.Rows.Add(new object[] { "otherGroupName", "otherGroupName group, Tile One" });
			tbl.Rows.Add(new object[] { "GroupOne", "GroupOne, Tile One, from the datasource" });
			tbl.Rows.Add(new object[] { "GroupOne", "GroupOne, Tile Two, from the datasource" });
			tbl.Rows.Add(new object[] { "GroupTwo", "GroupTwo, Tile One, from the datasource" });
			tbl.Rows.Add(new object[] { "GroupTwo", "GroupTwo, Tile Two, from the datasource" });
			tbl.Rows.Add(new object[] { "otherGroupName", "otherGroupName group, Tile Two" });
			tbl.Rows.Add(new object[] { "someRandomGroup", "someRandomGroup group, Tile One" });
			tbl.Rows.Add(new object[] { "someRandomGroup", "someRandomGroup group, Tile Two" });
			return tbl;
		}
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			Dim group As New TileGroup()
			group.Name = "GroupThree"
			'a third group is added from the code-behind
			RadTileList1.Groups.Add(group)
			'create a few tiles and add them to the control
			Dim tile1 As New RadTextTile()
			tile1.Text = "GroupOne, Second tile, from the code"
			RadTileList1.GetTileGroupByName("GroupOne").Tiles.Add(tile1)
			Dim tile2 As New RadTextTile()
			tile2.Text = "GroupTwo, Second tile, from the code"
			RadTileList1.GetTileGroupByName("GroupTwo").Tiles.Add(tile2)
			Dim tile3 As New RadTextTile()
			tile3.Text = "GroupThree, Second tile, from the code"
			RadTileList1.GetTileGroupByName("GroupThree").Tiles.Add(tile3)
			RadTileList1.DataSource = GetDummyData()
			RadTileList1.DataBind()
		End Sub
	
		Protected Function GetDummyData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("GroupNameColumn"))
			tbl.Columns.Add(New DataColumn("TextColumn"))
			'Note the order in which the group names are met
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile One, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile Two, from the datasource"})
			tbl.Rows.Add(New Object() {"otherGroupName", "otherGroupName group, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile One, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile Two, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile One, from the datasource"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile Two, from the datasource"})
			tbl.Rows.Add(New Object() {"otherGroupName", "otherGroupName group, Tile Two"})
			tbl.Rows.Add(New Object() {"someRandomGroup", "someRandomGroup group, Tile One"})
			tbl.Rows.Add(New Object() {"someRandomGroup", "someRandomGroup group, Tile Two"})
			Return tbl
		End Function
	#End Region
	
	
	#Region "tilelist-databinding-supportedDatasources-programmatic-datatable-vb-2"
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				RadTileList1.DataSource = GetDummyData()
				RadTileList1.DataBind()
			End If
		End Sub
	
		Protected Function GetDummyData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("GroupNameColumn"))
			tbl.Columns.Add(New DataColumn("TextColumn"))
			'Note the order in which the group names are met
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile One"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile One"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile Two"})
			Return tbl
		End Function
	#End Region
	
	
	#Region "tilelist-databinding-supportedDatasources-programmatic-List-vb-2"
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				Dim sampleData As New List(Of TileDataMocking)()
				sampleData.Add(New TileDataMocking("http://www.telerik.com/", "Learn more about Telerik"))
				sampleData.Add(New TileDataMocking("http://www.sitefinity.com/", "Explore Sitefinity"))
				sampleData.Add(New TileDataMocking("http://www.icenium.com/", "Discover Icenium"))
				RadTileList2.DataSource = sampleData
				RadTileList2.DataBind()
			End If
		End Sub
	
		Public Class TileDataMocking
			Public Sub New(tileUrls As String, tileTexts As String)
				_TileUrls = tileUrls
				_TileTexts = tileTexts
			End Sub
			Private _TileUrls As String
			Public Property TileUrls() As String
				Get
					Return _TileUrls
				End Get
				Set(value As String)
					_TileUrls = value
				End Set
			End Property
			Private _TileTexts As String
			Public Property TileTexts() As String
				Get
					Return _TileTexts
				End Get
				Set(value As String)
					_TileTexts = value
				End Set
			End Property
		End Class
	#End Region
	
	End Class


>end

# See Also

 * [Overview]({%slug tilelist/data-binding/overview%})

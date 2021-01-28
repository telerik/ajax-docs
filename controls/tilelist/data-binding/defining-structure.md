---
title: Defining Structure
page_title: Defining Structure - RadTileList
description: Check our Web Forms article about Defining Structure.
slug: tilelist/data-binding/defining-structure
tags: defining,structure
published: True
position: 1
---

# Defining Structure

This article explains how to define the structure of a data bound RadTileList control.

## Defining Groups Order

By default, when the control iterates through the datasource, a tile is created for each row/item from the collection. This means that the TileGroups are also created when they are first encountered and tiles are added to an existing group only when it is encountered for a second time.

The **order** and layout of the **RadTileList** can be controlled by generating the desired **TileGroups** in the **markup or in the code-behind**.

The **Name** property of each **TileGroup** can be used to **match a group from the datasource** (set through the DataGroupNameField databinding property) **with an already defined group in the page**.

Groups from the data source that do not already exist are appended to the current ones.

In the following example a simple DataTable is used for a dummy data source just to visualize some simple data and evaluate the results:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1">
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
````VB
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
````



If the groups from the markup and/or code-behind are removed the order of the tiles changes because it starts matching the order in which they are met in the datasource.

## Defining Tiles Order

It is possible that some tiles must always be present in the control and do not or cannot be created from the datasource. This is why the	**AppendDataBoundItems** property of the **RadTileList** allows the developer to **keep items from the markup/code-behind when databinding the control**.

When **AppendDataBoundItems** is set to **true** tiles created from the datasource will be **added** to tiles already present in the control.

The default value of `AppendDataBoundItems` is `false`.

Let's take the above code as base and add a few tiles. Toggling the AppendDataBoundItems property can show the different options:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" AppendDataBoundItems="true">
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
````VB
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
````



# See Also

 * [Overview]({%slug tilelist/data-binding/overview%})

---
title: OnSelectionChanged
page_title: OnSelectionChanged | RadTileList for ASP.NET AJAX Documentation
description: OnSelectionChanged
slug: tilelist/server-side-programming/server-side-events/onselectionchanged
tags: onselectionchanged
published: True
position: 0
---

# OnSelectionChanged





The **SelectionChanged** server-side event is fired when a new [tile is selected]({%slug tilelist/functionality/selecting%}) and **AutoPostBack** is set to **true**. It allows the developer to obtain a list of the selected tiles in order to use that information. An example is available in the [Selection online demo](https://demos.telerik.com/aspnet-ajax/TileList/Examples/selecting/defaultcs.aspx).

The event handler receives two arguments - of type **object** that is a reference to the RadTileList control that fired the event and can be cast to it, and a **System.EventArgs** object.

>tip The API of the [RadTileList object]({%slug tilelist/server-side-programming/tilelist-object%}) itself is used to obtain the tiles selection, so this can be done in any other event.	The OnSelectionChanged event only provides an immediate event that can be used by the developer.
>


````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" AutoPostBack="true" OnSelectionChanged="OnSelectionChanged"
	SelectionMode="Multiple">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="First" Text="Group 0, Tile 0">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Second" Text="Group 0, Tile 1">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Third" Text="Group 0, Tile 2">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Fourth" Text="Group 0, Tile 2">
			</telerik:RadTextTile>
		</telerik:TileGroup>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Fifth" Text="Group 1, Tile 0">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Sixth" Text="Group 1, Tile 1">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Seventh" Text="Group 1, Tile 2">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Eigth" Text="Group 1, Tile 2">
			</telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
<div runat="server" id="selectionResult">
</div>
````



Here is an example how to get all selected tiles from the control:



````C#
protected void OnSelectionChanged(object sender, EventArgs e)
{
	List<RadBaseTile> selectedTiles = (sender as RadTileList).GetSelectedTiles();
	string selectedNames = "Selected tiles names:<br />";
	foreach (RadBaseTile tile in selectedTiles)
	{
		selectedNames += tile.Name + "<br />";
	}
	selectionResult.InnerHtml = selectedNames;
}
````
````VB
Protected Sub RadTileList1_SelectionChanged(sender As Object, e As System.EventArgs) Handles RadTileList1.SelectionChanged
	Dim selectedTiles As List(Of RadBaseTile) = TryCast(sender, RadTileList).GetSelectedTiles()
	Dim selectedNames As String = "Selected tiles names:<br />"
	For Each tile As RadBaseTile In selectedTiles
		selectedNames += tile.Name + "<br />"
	Next
	selectionResult.InnerHtml = selectedNames
End Sub
````





Here is how to get the selected tiles from a given group (the second in this example):



````C#
protected void OnSelectionChanged(object sender, EventArgs e)
{
	TileGroup secondGroup = (sender as RadTileList).Groups[1];
	List<RadBaseTile> selectedTiles = secondGroup.GetSelectedTiles();
	string selectedNames = "Selected tiles names:<br />";
	foreach (RadBaseTile tile in selectedTiles)
	{
		selectedNames += tile.Name + "<br />";
	}
	selectionResult.InnerHtml = selectedNames;
}
````
````VB
Protected Sub RadTileList1_SelectionChanged(sender As Object, e As System.EventArgs) Handles RadTileList1.SelectionChanged
	Dim secondGroup As TileGroup = TryCast(sender, RadTileList).Groups(1)
	Dim selectedTiles As List(Of RadBaseTile) = secondGroup.GetSelectedTiles()
	Dim selectedNames As String = "Selected tiles names:<br />"
	For Each tile As RadBaseTile In selectedTiles
		selectedNames += tile.Name + "<br />"
	Next
	selectionResult.InnerHtml = selectedNames
End Sub
````



# See Also

 * [Selection online demo](https://demos.telerik.com/aspnet-ajax/TileList/Examples/selecting/defaultcs.aspx)

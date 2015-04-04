---
title: OnSelectionChanged
page_title: OnSelectionChanged | UI for ASP.NET AJAX Documentation
description: OnSelectionChanged
slug: tilelist/server-side-programming/server-side-events/onselectionchanged
tags: onselectionchanged
published: True
position: 0
---

# OnSelectionChanged



## 

The __SelectionChanged__ server-side event is fired when a new[tile is selected]({%slug tilelist/functionality/selecting%}) and __AutoPostBack__ is setto __true__. It allows the developer to obtain a list of the selected tiles in order to use that information.An example is available in the[Selection online demo](http://demos.telerik.com/aspnet-ajax/TileList/Examples/selecting/defaultcs.aspx).

The event handler receives two arguments - of type __object__ that is a reference to theRadTileList control that fired the event and can be cast to it, and a __System.EventArgs__object.

>tip The API of the[RadTileList object]({%slug tilelist/server-side-programming/tilelist-object%})itself is used to obtain the tiles selection, so this can be done in any other event.	The OnSelectionChanged event only provides an immediate event that can be used by the developer.
>


````ASPNET
		<telerik:RadTileList runat="server" ID="RadTileList1" AutoPostBack="true" OnSelectionChanged="OnSelectionChanged"
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

>tabbedCode

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
````VB.NET
		Protected Sub RadTileList1_SelectionChanged(sender As Object, e As System.EventArgs) Handles RadTileList1.SelectionChanged
			Dim selectedTiles As List(Of RadBaseTile) = TryCast(sender, RadTileList).GetSelectedTiles()
			Dim selectedNames As String = "Selected tiles names:<br />"
			For Each tile As RadBaseTile In selectedTiles
				selectedNames += tile.Name + "<br />"
			Next
			selectionResult.InnerHtml = selectedNames
		End Sub
	#End Region
	
	#Region "OnSelectionChanged-get-tiles-from-group-vb-0"
		Protected Sub RadTileList1_SelectionChanged(sender As Object, e As System.EventArgs) Handles RadTileList1.SelectionChanged
			Dim secondGroup As TileGroup = TryCast(sender, RadTileList).Groups(1)
			Dim selectedTiles As List(Of RadBaseTile) = secondGroup.GetSelectedTiles()
			Dim selectedNames As String = "Selected tiles names:<br />"
			For Each tile As RadBaseTile In selectedTiles
				selectedNames += tile.Name + "<br />"
			Next
			selectionResult.InnerHtml = selectedNames
		End Sub
	#End Region
	
	#Region "TileClick-get-current-tile-vb-0"
		Protected Sub RadTileList1_TileClick(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileClick
			clickResult.InnerHtml = "Clicked tile name and URL: " & e.Tile.Name & "<br />" & e.Tile.NavigateUrl
			'note: e.Tile is of type RadBaseTile
		End Sub
	#End Region
	
	#Region "OnTileDataBound-access-data-vb-0"
		Protected Sub RadTileList1_TileDataBound(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileDataBound
			'first, check for the tile type if specific properties are going to be used
			Dim tile = TryCast(e.Tile, RadImageTile)
			If tile IsNot Nothing Then
				'The DataBinder.GetPropertyValue() is one way to obtain the data
				'This example points the image to a location that depends on the project structure
				tile.ImageUrl = String.Format("../../Img/Square/{0}.jpg", DataBinder.GetPropertyValue(e.Tile.DataItem, "CustomerID", Nothing))
	
				'the DataItem field in the Tile object can be cast to a DataRowView in order to access the information
				'This does exaclty the same as the above line
				tile.ImageUrl = String.Format("../../Img/Square/{0}.jpg", TryCast(e.Tile.DataItem, System.Data.DataRowView).Row("CustomerID").ToString())
	
				'A simple example of modifying an already bound property
				tile.Title.Text = "Contact: " + tile.Title.Text
	
				'building a property value dynamically based on data from the datasource
				tile.NavigateUrl = String.Format("mailto:{0}@myCompany.com", DataBinder.GetPropertyValue(e.Tile.DataItem, "ContactName", Nothing).Replace(" "c, "."c))
			End If
		End Sub
	#End Region
	
	#Region "OnTileCreated-set-peek-settings-vb-0"
		Protected Sub RadTileList1_TileCreated(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileCreated
			e.Tile.PeekTemplateSettings.ShowInterval = 0
			e.Tile.PeekTemplateSettings.CloseDelay = 0
			e.Tile.PeekTemplateSettings.ShowPeekTemplateOnMouseOver = True
			e.Tile.PeekTemplateSettings.HidePeekTemplateOnMouseOut = True
			e.Tile.PeekTemplateSettings.Animation = PeekTemplateAnimation.Slide
			e.Tile.PeekTemplateSettings.AnimationDuration = 800
		End Sub
	#End Region
	End Class


>end



Here is how to get the selected tiles from a given group (the second in this example):

>tabbedCode

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
````VB.NET
		Protected Sub RadTileList1_SelectionChanged(sender As Object, e As System.EventArgs) Handles RadTileList1.SelectionChanged
			Dim secondGroup As TileGroup = TryCast(sender, RadTileList).Groups(1)
			Dim selectedTiles As List(Of RadBaseTile) = secondGroup.GetSelectedTiles()
			Dim selectedNames As String = "Selected tiles names:<br />"
			For Each tile As RadBaseTile In selectedTiles
				selectedNames += tile.Name + "<br />"
			Next
			selectionResult.InnerHtml = selectedNames
		End Sub
	#End Region
	
	#Region "TileClick-get-current-tile-vb-0"
		Protected Sub RadTileList1_TileClick(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileClick
			clickResult.InnerHtml = "Clicked tile name and URL: " & e.Tile.Name & "<br />" & e.Tile.NavigateUrl
			'note: e.Tile is of type RadBaseTile
		End Sub
	#End Region
	
	#Region "OnTileDataBound-access-data-vb-0"
		Protected Sub RadTileList1_TileDataBound(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileDataBound
			'first, check for the tile type if specific properties are going to be used
			Dim tile = TryCast(e.Tile, RadImageTile)
			If tile IsNot Nothing Then
				'The DataBinder.GetPropertyValue() is one way to obtain the data
				'This example points the image to a location that depends on the project structure
				tile.ImageUrl = String.Format("../../Img/Square/{0}.jpg", DataBinder.GetPropertyValue(e.Tile.DataItem, "CustomerID", Nothing))
	
				'the DataItem field in the Tile object can be cast to a DataRowView in order to access the information
				'This does exaclty the same as the above line
				tile.ImageUrl = String.Format("../../Img/Square/{0}.jpg", TryCast(e.Tile.DataItem, System.Data.DataRowView).Row("CustomerID").ToString())
	
				'A simple example of modifying an already bound property
				tile.Title.Text = "Contact: " + tile.Title.Text
	
				'building a property value dynamically based on data from the datasource
				tile.NavigateUrl = String.Format("mailto:{0}@myCompany.com", DataBinder.GetPropertyValue(e.Tile.DataItem, "ContactName", Nothing).Replace(" "c, "."c))
			End If
		End Sub
	#End Region
	
	#Region "OnTileCreated-set-peek-settings-vb-0"
		Protected Sub RadTileList1_TileCreated(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileCreated
			e.Tile.PeekTemplateSettings.ShowInterval = 0
			e.Tile.PeekTemplateSettings.CloseDelay = 0
			e.Tile.PeekTemplateSettings.ShowPeekTemplateOnMouseOver = True
			e.Tile.PeekTemplateSettings.HidePeekTemplateOnMouseOut = True
			e.Tile.PeekTemplateSettings.Animation = PeekTemplateAnimation.Slide
			e.Tile.PeekTemplateSettings.AnimationDuration = 800
		End Sub
	#End Region
	End Class


>end

# See Also

 * [Selection online demo](http://demos.telerik.com/aspnet-ajax/TileList/Examples/selecting/defaultcs.aspx)

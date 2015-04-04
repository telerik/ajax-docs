---
title: Programmatic Creation
page_title: Programmatic Creation | UI for ASP.NET AJAX Documentation
description: Programmatic Creation
slug: tilelist/server-side-programming/programmatic-creation
tags: programmatic,creation
published: True
position: 2
---

# Programmatic Creation



__RadTileList__ can be declared in the mark-up, and it can also be added programmatically from the code-behind.

When doing so, you will need to create:

1. A new __[RadTileList]({%slug tilelist/server-side-programming/tilelist-object%})__ object;

1. A new __[RadTileGroup]({%slug tilelist/server-side-programming/tilegroup-object%})__ object which will	contain the Tiles. Note, that you can create any number of Groups within one TileList as long as at least one is present;

1. Last, but not least - new __[RadTile]({%slug tilelist/tiles/server-side-programming/tile-object%})__objects of any type supported ([RadIconTile]({%slug tilelist/tiles/icon-tile%}),[RadTextTile]({%slug tilelist/tiles/text-tile%}),[RadImageTile]({%slug tilelist/tiles/image-tile%}),	[RadImageAndTextTile]({%slug tilelist/tiles/imageandtext-tile%})).	Note, that there is no limit on the number of Tiles within one Group.

## Creating a RadTileList in the Code-behind

The sample code below illustrates a possible approach to creating and defining the properties of a new RadTileList programmatically. Itexhibits both the commonly shared and the tile-specific properties, as described in the[Tile Object]({%slug tilelist/tiles/server-side-programming/tile-object%}) help article.

>important When __[Drag-and-drop]({%slug tilelist/functionality/drag-and-drop%})__ is enabled, and/or __[Data Binding]({%slug tilelist/data-binding/overview%})__ is used,tiles *must* be created in the`Page_Init`event.
>This requirement arises from the way client state is loaded for IScriptControls - between the Page_Init and Page_Load events. At this point RadTileList loads the client state of its tiles as they came in from the client and, to apply it correctly, the tiles that were present in its collection when the page was sent to the client must already be recreated by the developer.
>


>tabbedCode

````C#
	
		//Arrays storing the Tiles' properties
	
		//Sample URLs
		string[] urls = {"http://www.telerik.com", "http://www.google.com", "http://www.bing.com", "http://demos.telerik.com", 
						   "http://www.stackoverflow.com" };
	
		//Some of the pre-defined Badge Types
		TileBadgeType[] badges = { TileBadgeType.Available, TileBadgeType.Alert, TileBadgeType.Attention, 
									TileBadgeType.Error, TileBadgeType.Paused };
	
		//Sample Target property values
		string[] targets = { "_blank", "_top", "_parent", "_self", "_blank" };
	
		//Sample background colors
		string[] colors = { "red", "green", "lightblue", "orange", "yellow" };
	
		//Sample pre-defined animations 
		PeekTemplateAnimation[] animations = {PeekTemplateAnimation.Fade,PeekTemplateAnimation.Resize, 
			PeekTemplateAnimation.Slide,PeekTemplateAnimation.Fade,PeekTemplateAnimation.Resize };
	
		protected void Page_Init(object sender, System.EventArgs e)
		{
			CreateTiles();
		}
	
		protected void CreateTextTile(TileGroup group, int index)
		{
			//Initialize a new TextTile
			RadTextTile textTile = new RadTextTile();
	
			//Add TextTile-specific properties
			textTile.Text = "Sample Text";
	
			//Add Common Properties
			LoadSharedProperties(textTile, index);
	
			//Add tile to the group
			group.Tiles.Add(textTile);
		}
	
		protected void CreateIconTile(TileGroup group, int index)
		{
			//Initialize a new IconTile
			RadIconTile iconTile = new RadIconTile();
	
			//Add IconTile-specific properties
			iconTile.ImageUrl = "SampleImage.jpg";
	
			//Add Common Properties
			LoadSharedProperties(iconTile, index);
	
			//Add tile to the group
			group.Tiles.Add(iconTile);
		}
	
		protected void CreateImageTile(TileGroup group, int index)
		{
			//Initialize a new ImageTile
			RadImageTile imageTile = new RadImageTile();
	
			//Add ImageTile-specific properties
			imageTile.ImageUrl = "SampleImage.jpg";
	
			//Add Common Properties
			LoadSharedProperties(imageTile, index);
	
			//Add tile to the group
			group.Tiles.Add(imageTile);
		}
	
		public void CreateTiles()
		{
			RadTileList tileList = new RadTileList();
			tileList.SelectionMode = TileListSelectionMode.Multiple;
	
			//Create 4 tile groups
			for (int i = 0; i < 3; i++)
			{
				TileGroup tileGroup = new TileGroup();
				tileList.Groups.Add(tileGroup);
	
				//Create different tiles for each group
				//TextTile, IconTile, ImageTile
				for (int j = 0; j < 5; j++)
				{
					if (i == 0) CreateTextTile(tileGroup, j);
					else if (i == 1) CreateIconTile(tileGroup, j);
					else if (i == 2) CreateImageTile(tileGroup, j);
				}
			}
	
			form1.Controls.Add(tileList);
		}
	
		protected void LoadSharedProperties(RadBaseTile tile, int index)
		{
			//Name
			tile.Name = "Tile" + (index + 1);
	
			//Title
			//tile.Title.ImageUrl = "SampleImage.jpg";
			tile.Title.Text = "Tile Number " + (index + 1);
	
			//NavigateUrl
			tile.NavigateUrl = urls[index];
	
			//Badge
			//tile.Badge.Value = index;
			//tile.Badge.ImageUrl = "~/SampleImage.jpg";
			tile.Badge.PredefinedType = badges[index];
	
			//Target
			tile.Target = targets[index];
	
			//BackColor
			tile.BackColor = Color.FromName(colors[index]);
	
			//Selected
			tile.Selected = (index % 2 != 0);
	
			//Shape
			if (index == 0) tile.Shape = TileShape.Wide;
	
			//PeekTemplate and PeekTemplate Settings
			LiteralControl div = new LiteralControl("<div class=\"peekTemplate\">Peek Template" + index + "</div>");
			tile.PeekContentContainer.Controls.Add(div); //Add the literal control to the Peek Template Container
			tile.PeekTemplateSettings.Animation = animations[index];
			tile.PeekTemplateSettings.ShowPeekTemplateOnMouseOver = true;
			tile.PeekTemplateSettings.HidePeekTemplateOnMouseOut = true;
			tile.PeekTemplateSettings.ShowInterval = 1000; //in ms
			tile.PeekTemplateSettings.CloseDelay = 5000; //in ms
		}
	
````
````VB
	
		'Arrays storing the Tiles' properties
	
		'Sample URLs
		Private urls As String() = {"http://www.telerik.com", "http://www.google.com", "http://www.bing.com", "http://demos.telerik.com", "http://www.stackoverflow.com"}
	
		'Some of the pre-defined Badge Types
		Private badges As TileBadgeType() = {TileBadgeType.Available, TileBadgeType.Alert, TileBadgeType.Attention, TileBadgeType.[Error], TileBadgeType.Paused}
	
		'Sample Target property values
		Private targets As String() = {"_blank", "_top", "_parent", "_self", "_blank"}
	
		'Sample background colors
		Private colors As String() = {"red", "green", "lightblue", "orange", "yellow"}
	
		'Sample pre-defined animations 
		Private animations As PeekTemplateAnimation() = {PeekTemplateAnimation.Fade, PeekTemplateAnimation.Resize, PeekTemplateAnimation.Slide, PeekTemplateAnimation.Fade, PeekTemplateAnimation.Resize}
	
		Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
			CreateTiles()
		End Sub
	
		Protected Sub CreateTextTile(group As TileGroup, index As Integer)
			'Initialize a new TextTile
			Dim textTile As New RadTextTile()
	
			'Add TextTile-specific properties
			textTile.Text = "Sample Text"
	
			'Add Common Properties
			LoadSharedProperties(textTile, index)
	
			'Add tile to the group
			group.Tiles.Add(textTile)
		End Sub
	
		Protected Sub CreateIconTile(group As TileGroup, index As Integer)
			'Initialize a new IconTile
			Dim iconTile As New RadIconTile()
	
			'Add IconTile-specific properties
			iconTile.ImageUrl = "SampleImage.jpg"
	
			'Add Common Properties
			LoadSharedProperties(iconTile, index)
	
			'Add tile to the group
			group.Tiles.Add(iconTile)
		End Sub
	
		Protected Sub CreateImageTile(group As TileGroup, index As Integer)
			'Initialize a new ImageTile
			Dim imageTile As New RadImageTile()
	
			'Add ImageTile-specific properties
			imageTile.ImageUrl = "SampleImage.jpg"
	
			'Add Common Properties
			LoadSharedProperties(imageTile, index)
	
			'Add tile to the group
			group.Tiles.Add(imageTile)
		End Sub
	
		Public Sub CreateTiles()
			Dim tileList As New RadTileList()
			tileList.SelectionMode = TileListSelectionMode.Multiple
	
			'Create 4 tile groups
			For i As Integer = 0 To 2
				Dim tileGroup As New TileGroup()
				tileList.Groups.Add(tileGroup)
	
				'Create different tiles for each group
				'TextTile, IconTile, ImageTile
				For j As Integer = 0 To 4
					If i = 0 Then
						CreateTextTile(tileGroup, j)
					ElseIf i = 1 Then
						CreateIconTile(tileGroup, j)
					ElseIf i = 2 Then
						CreateImageTile(tileGroup, j)
					End If
				Next
			Next
	
			form1.Controls.Add(tileList)
		End Sub
	
		Protected Sub LoadSharedProperties(tile As RadBaseTile, index As Integer)
			'Name
			tile.Name = "Tile" + (index + 1).ToString()
	
			'Title
			'tile.Title.ImageUrl = "SampleImage.jpg";
			tile.Title.Text = "Tile Number " + (index + 1).ToString()
	
			'NavigateUrl
			tile.NavigateUrl = urls(index)
	
			'Badge
			'tile.Badge.Value = index;
			'tile.Badge.ImageUrl = "~/SampleImage.jpg";
			tile.Badge.PredefinedType = badges(index)
	
			'Target
			tile.Target = targets(index)
	
			'Background
			tile.BackColor = Color.FromName(colors(index))
	
			'Selected
			tile.Selected = (index Mod 2 <> 0)
	
			'Shape
			If index = 0 Then
				tile.Shape = TileShape.Wide
			End If
	
			'PeekTemplate and PeekTemplate Settings
			Dim div As New LiteralControl("<div class=""peekTemplate"">Peek Template" + index.ToString() + "</div>")
			tile.PeekContentContainer.Controls.Add(div)	'Add the literal control to the Peek Template Container
			tile.PeekTemplateSettings.Animation = animations(index)
			tile.PeekTemplateSettings.ShowPeekTemplateOnMouseOver = True
			tile.PeekTemplateSettings.HidePeekTemplateOnMouseOut = True
			tile.PeekTemplateSettings.ShowInterval = 1000 'in ms
			tile.PeekTemplateSettings.CloseDelay = 5000	'in ms
		End Sub
	
````
>end

# See Also

 * [RadTileGroup]({%slug tilelist/server-side-programming/tilegroup-object%})

 * [RadTileList]({%slug tilelist/server-side-programming/tilelist-object%})

 * [Tile Object]({%slug tilelist/tiles/server-side-programming/tile-object%})

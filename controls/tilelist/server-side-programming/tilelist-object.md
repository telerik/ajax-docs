---
title: TileList Object
page_title: TileList Object | RadTileList for ASP.NET AJAX Documentation
description: TileList Object
slug: tilelist/server-side-programming/tilelist-object
tags: tilelist,object
published: True
position: 0
---

# TileList Object



## Public properties


|  **Name**  |  **Type**  |  **Description**  |
| ------ | ------ | ------ |
| **AppendClientDataBoundItems** |bool|Gets or sets a bool value that indicates whether the tiles are cleared before client-side data binding.|
| **AppendDataBoundItems** |bool|Gets or sets a bool value that indicates whether the tiles are cleared before data binding. See the [Defining structure help article]({%slug tilelist/data-binding/defining-structure%}) for details.|
| **AutoPostBack** |bool|Gets or sets a value indicating whether a postback to the server automatically	occurs when the user changes the RadTileList selection or clicks on a tile.|
| **ClientDataSourceID** |string|The ID of a **RadClientDataSource** control that RadTileList will use for client-side data binding. See the [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%}) article for details.|
| **DataBindings** ||This property exposes the databinding configuration of the control. More information on using it is available in the [Databinding Basics help article]({%slug tilelist/data-binding/overview%}).|
| **DataSource** ||An *IEnumberable* collection can be passed to this property in order to databind the control. Note that theDataBind() method must be called afterwards.|
| **DataSourceID** ||The ID of a declarative datasource control that RadTileList will use for databinding.|
| **EnableDragAndDrop** |bool|Gets or sets a bool value that indicates whether a drag and drop functionality is enabled.|
| **Groups** |[TileGroupCollection]({%slug tilelist/server-side-programming/tilegroup-object%})|Gets a TileGroupCollection object that contains the tile groups of the TileList. Can be used to iterate through the collection	and add tiles to given groups' Tiles collection.|
| **CssClass** |string|The custom CSS class that is applied to the main wrapper element of the control.|
| **Height** |Unit|The height of the control. Usually it is not needed, the control will calculate it according to the number of rows	(set through the TileRows property) and the need for scrollbars.|
| **OnClientLoad** |string|Gets or sets the name of the JavaScript function that will be called after the client object of RadTileList is initialized.	See the [OnClientLoad help article]({%slug tilelist/client-side-programming/client-side-events/onclientload%}).|
| **OnClientTileClicked** |string|Gets or sets the name of the JavaScript function that will be called when a tile in a RadTileList is clicked, after the [OnClientTileClicking event]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%}).	See the [OnClientTileClicked help article]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicked%}).|
| **OnClientTileClicking** |string|Gets or sets the name of the JavaScript function that will be called when a tile in a RadTileList is clicked. The event is cancelable.	See the [OnClientTileClicking help article]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%}).|
| **OnClientTileContentTemplateDataBound** |string|Gets or sets the name of the JavaScript function that will be called when a ClientContentTemplate of a tile in a RadTileList is bound.	See the [OnClientTileContentTemplateDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilecontenttemplatedatabound%}) help article.|
| **OnClientTileCreating** |string|Gets or sets the name of the JavaScript function that will be called before a tile in a RadTileList is rendered in the browser. The event is cancelable.	See the [OnClientTileCreating]({%slug tilelist/client-side-programming/client-side-events/onclienttilecreating%}) help article.|
| **OnClientTileDataBound** |string|Gets or sets the name of the JavaScript function that will be called when a tile in a RadTileList is bound.	See the [OnClientTileDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttiledatabound%}) help article.|
| **OnClientTileDragging** |string|Gets or sets the name of the JavaScript function that will be called while a tile in a RadTileList is being dragged.The event is *not* cancelable.	See the [OnClientTileDragging help article]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragging%}).|
| **OnClientTileDragStart** |string|Gets or sets the name of the JavaScript function that will be called when a tile in a RadTileList starts being dragged.	The event is cancelable.	See the [OnClientTileDragStart help article]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragstart%}).|
| **OnClientTileDropped** |string|Gets or sets the name of the JavaScript function that will be called when a tile in a RadTileList is dropped.	The event is *not* cancelable.	See the [OnClientTileDropped help article]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropped%}).|
| **OnClientTileDropping** |string|Gets or sets the name of the JavaScript function that will be called when a tile in a RadTileList is about to be dropped.	The event is cancelable.	See the [OnClientTileDropping help article]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropping%}).|
| **OnClientTileListDataBound** |string|Gets or sets the name of the JavaScript function that will be called when the RadTileList is bound.	See the [OnClientTileListDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilelistdatabound%}) help article.|
| **OnClientTilePeekTemplateDataBound** |string|Gets or sets the name of the JavaScript function that will be called when the **ClientTilePeekTemplate** of a tile in a RadTileList is bound.	See the [OnClientTilePeekTemplateDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilepeektemplatedatabound%}) help article.|
| **OnClientTileSelected** |string|Gets or sets the name of the JavaScript function which handles the selection of a tile on the client-side.	See the[OnClientTileSelected help article]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%}).|
| **OnClientTileSelecting** |string|Gets or sets the name of the JavaScript function which handles the selecting of a tile client-side event.	Occurs before the tile is selected and is cancellable. See the [OnClientTileSelecting help article]({%slug tilelist/client-side-programming/client-side-events/onclienttileselecting%}).|
| **OnSelectionChanged** |event|The event handler for the [SelectionChanged server-side event]({%slug tilelist/server-side-programming/server-side-events/onselectionchanged%}).|
| **OnTileClick** |event|The event handler for the [TileClick server-side event]({%slug tilelist/server-side-programming/server-side-events/ontileclick%}).|
| **PostBackUrl** |string|Gets or sets the URL of the page to post to from the current page when a tile from RadTileList is clicked if AutoPostBack=true.	Defaults to an empty string, so the page posts to itself by default.|
| **RenderMode** |Telerik.Web.UI.RenderMode|Gets or sets the [Render Mode]({%slug tilelist/mobile-support/render-modes%}) of the control.This is the way to control whether the [responsive layout]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) of the control is enabled.|
| **ScrollingMode** |Telerik.Web.UI.TileListScrollingMode|Get or set the scrolling mode of the RadTileList, see the [Scrolling help article]({%slug tilelist/functionality/scrolling%}). Defaults to Auto.|
| **SelectionMode** |Telerik.Web.UI.TileListSelectionMode|Gets or sets the value indicating the TileList selection mode, giving the tiles ability to be selected.	See the [Selecting help article]({%slug tilelist/functionality/selecting%}). Defaults to None.|
| **TileRows** |int|Gets or sets in how many rows the tiles will be ordered. The height of the control depends on this value. Defaults to 3.|
| **Width** |Unit|Gets or sets the width of the RadTileList control. If this viewport is not sufficient to display all the tiles	a scrollbar will be added if the ScrollingMode is not explicitly set to None.|

>tip Properties like *BackColor, BorderColor, BorderWidth* , etc. are inherited from the *WebControl* class and can also be used in RadTileList.



## Public methods


|  **Name**  | Returned type | Description |
| ------ | ------ | ------ |
| **ClearSelection()** |none|Clears all selected tiles.|
| **GetAllTiles()** |List of [RadBaseTile]({%slug tilelist/tiles/server-side-programming/tile-object%}) objects|Get all tiles in the control.|
| **GetSelectedTiles()** |List of [RadBaseTile]({%slug tilelist/tiles/server-side-programming/tile-object%}) objects|Get all selected tiles in the control.|
| **GetTileByName(string)** |[RadBaseTile]({%slug tilelist/tiles/server-side-programming/tile-object%}) object|Get a tile by its Name property. If there are multiple tiles with the same name the first will be returned. If no tile with that name	is found null (Nothing) will be returned.|
| **GetTileGroupByName(string)** |[TileGroup]({%slug tilelist/server-side-programming/tilegroup-object%}) object|Get a tileGroup by its Name property. If there is no group with that name, null (Nothing) will be returned.|

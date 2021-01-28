---
title: TileList Object
page_title: TileList Object - RadTileList
description: Check our Web Forms article about TileList Object.
slug: tilelist/client-side-programming/tilelist-object
tags: tilelist,object
published: True
position: 0
---

# TileList Object


 

The **RadTileList** object exposes the following public methods and properties to control its behavior:


>caption Helper Methods

| Name | Parameters | ReturnType | Description |
| ------ | ------ | ------ | ------ |
|$telerik.findTileList(id, parent)|String, object|RadTileList|Finds a RadTileList instance. The first passed parameter is the string that contains ID of the RadTileList to find and the second one is the component or element that contains it.|
|$telerik.toTileList(object)||RadTileList|Casts an object to a RadTileList instance.|

To see how to work dynamically with client-side event handlers examine the [Client-side Events Overview help article]({%slug tilelist/client-side-programming/client-side-events/overview%}).


>caption RadTileList Client-Side Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|clearGroupTitles()|||Clears all group titles.|
|clearSelection(excludeIndex)|Int||Unselects all selected tiles except the excludeIndex. The first passed parameter is an integer	that contains the index of the tile in the array returned by get_allTiles method.|
|dataBind()|||Data binds RadTileList to the current dataSource array, which might be set by the clientDataSourceID, clientDataSource and dataSource properties.|
|get_allTiles()||Array|Returns Array containing all the tiles in RadTileList.|
|get_allTilesIndex(tile)|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Int|Returns the index of a tile (passed as an argument) in the Array returned by the get_allTiles method|
|get_autoPostBack()||bool|Returns a value indicating whether a postback to the server will be initiated on tile selection or tile click.|
|get_clientDataSource()||RadClientDataSource|Returns RadClientDataSource object to which the TileList is data bound|
|get_clientDataSourceID()||string|Returns the client ID of RadClientDataSource object to which the TileList is data bound.|
|get_dataSource()||Array|Returns the array to which the TileList is data bound.|
|get_element()||DOM object|Returns the TileList's main HTML element.|
|get_enableDragAndDrop()||bool|Returns a value indicating whether the [drag and drop functionality]({%slug tilelist/functionality/drag-and-drop%}) is enabled.|
|get_groups()||[TileGroupCollection]({%slug tilelist/client-side-programming/tilegroupcollection-object%})|Returns Telerik.Web.UI.TileList.TileGroupCollection collection containing all Telerik.Web.UI.TileList.TileGroup items in RadTileList.|
|get_height()||String|Returns the height of the RadTileList element.|
|get_scrollingMode()||Int|Returns RadTileList scrollbar mode, where: 1 = Auto mode, 2 = None mode, 4 = Native mode, 8 = Accelerate mode.|
|get_selectedTiles()||Array|Returns Array containing all selected tiles in RadTileList.|
|get_selectionMode()||Int|Returns selection mode of RadTileList, where: 1 = None mode, 2 = Single mode, 4 = Multiple mode.|
|get_tileByAllTilesIndex(index)|Int|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Returns a tile by the index in the Array returned by the get_allTiles method.|
|get_tileByName(name)|String|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Returns the first tile, which has Name property set equal to the name parameter.|
|get_tileRows()||int|Returns the number of tile rows in which the tiles are distributed.|
|get_width()||String|Returns the width of the RadTileList element.|
|getGroup(index)|Int|[TileGroup]({%slug tilelist/client-side-programming/tilegroup-object%})|Retuns Telerik.Web.UI.TileList.TileGroup by provided index in the collecion returned by the get_groups method.|
|getGroupIndex(group)|[TileGroup]({%slug tilelist/client-side-programming/tilegroup-object%})|Int|Returns group index in the collectoin returned by the get_groups method. Returns -1 if the group is not found.|
|set_autoPostBack(value)|bool||Sets a value indicating whether a postback will be initiated when a tile is clicked or selected.|
|set_clientDataSource(value)|RadClientDataSource||Sets RadClientDataSource object to which the TileList is data bound.|
|set_clientDataSourceID(value)|string||Sets the client ID of RadClientDataSource object to which the TileList is data bound.|
|set_dataSource(data)|Array||Sets the the array to which the TileList is data bound.|
|set_enableDragAndDrop(value)|bool||Sets a value indicating whether a drag and drop functionality is enabled.|
|set_groupTitle(group, title)|`Telerik.Web.UI.TileList.TileGroup`, `string`||Sets the title to the provided group.|
|set_height(value)|String/int||Sets the height of the RadTileList element.|
|set_scrollingMode(value)|Int||Sets the RadTileList [scrolling mode]({%slug tilelist/functionality/scrolling%}). The`Telerik.Web.UI.TileList.TileListScrollingMode` enum can be used	instead of an integer, where: 1 = Telerik.Web.UI.TileList.TileListScrollingMode.**Auto** mode, 2 = Telerik.Web.UI.TileList.TileListScrollingMode.**None** mode, 4 = Telerik.Web.UI.TileList.TileListScrollingMode.**Native** mode, 8 = Telerik.Web.UI.TileList.TileListScrollingMode.**Accelerated** mode.|
|set_selectionMode(value)|Int||Sets the [selection mode]({%slug tilelist/functionality/selecting%}) of RadTileList. The`Telerik.Web.UI.TileList.TileListSelectionMode` enum can be used	instead of an integer, where: 1 = Telerik.Web.UI.TileList.TileListSelectionMode.**None** mode, 2 = Telerik.Web.UI.TileList.TileListSelectionMode.**Single** mode, 4 = Telerik.Web.UI.TileList.TileListSelectionMode.**Multiple** mode.|
|set_width(value)|String/int||Sets the width of the RadTileList element.|
|updateTileGroupsState|||Updates the client state data regarding the visibility and the order of the tiles.|


>caption RadTileList Client-Side Methods for attaching/detaching client-side event handlers

|  **Name**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ |
|add_clientTileContentTemplateDataBound()|Function|Adds a handler for the OnClientTileContentTemplateDataBound TileList client event.|
|add_clientTileCreating()|Function|Adds a handler for the OnClientTileCreating TileList client event.|
|add_clientTileDataBound()|Function|Adds a handler for the OnClientTileDataBound TileList client event.|
|add_clientTileListDataBound()|Function|Adds a handler for the OnClientTileListDataBound TileList client event.|
|add_clientTilePeekTemplateDataBound()|Function|Adds a handler for the OnClientTilePeekTemplateDataBound TileList client event.|
|add_load()|Function|Adds a handler for the OnClientLoad TileList client event.|
|add_tileClicking()|Function|Adds a handler for the OnClientTileClicking TileList client event.|
|add_tileClicked()|Function|Adds a handler for the OnClientTileClicked TileList client event.|
|add_tileDragStart()|Function|Adds a handler for the OnClientDragStart TileList client event.|
|add_tileDragging()|Function|Adds a handler for the OnClientDragging TileList client event.|
|add_tileDropped()|Function|Adds a handler for the OnClientTileDropped TileList client event.|
|add_tileDropping()|Function|Adds a handler for the OnClientTileDropping TileList client event.|
|add_tileSelecting()|Function|Adds a handler for the OnClientTileSelecting TileList client event.|
|add_tileSelected()|Function|Adds a handler for the OnClientTileSelected TileList client event.|
|remove_clientTileContentTemplateDataBound()|Function|Removes a handler for the OnClientTileContentTemplateDataBound TileList client event.|
|remove_clientTileCreating()|Function|Removes a handler for the OnClientTileCreating TileList client event.|
|remove_clientTileDataBound()|Function|Removes a handler for the OnClientTileDataBound TileList client event.|
|remove_clientTileListDataBound()|Function|Removes a handler for the OnClientTileListDataBound TileList client event.|
|remove_clientTilePeekTemplateDataBound()|Function|Removes a handler for the OnClientTilePeekTemplateDataBound TileList client event.|
|remove_load()|Function|Removes a handler for the OnClientLoad TileList client event.|
|remove_tileClicking()|Function|Removes a handler for the OnClientTileClicking TileList client event.|
|remove_tileClicked()|Function|Removes a handler for the OnClientTileClicked TileList client event.|
|remove_tileDragStart()|Function|Removes a handler for the OnClientDragStart TileList client event.|
|remove_tileDragging()|Function|Removes a handler for the OnClientDragging TileList client event.|
|remove_tileDropped()|Function|Removes a handler for the OnClientTileDropped TileList client event.|
|remove_tileDropping()|Function|Removes a handler for the OnClientTileDropping TileList client event.|
|remove_tileSelecting()|Function|Removes a handler for the OnClientTileSelecting TileList client event.|
|remove_tileSelected()|Function|Removes a handler for the OnClientTileSelected TileList client event.|

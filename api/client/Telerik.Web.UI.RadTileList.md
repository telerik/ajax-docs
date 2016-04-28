---
title: Telerik.Web.UI.RadTileList
page_title: Client-side API Reference
description: Telerik.Web.UI.RadTileList
slug: Telerik.Web.UI.RadTileList
---

# Telerik.Web.UI.RadTileList : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadTileList]({%slug Telerik.Web.UI.RadTileList%})*


## Methods

### clearGroupTitles

Clears all group titles

#### Parameters

#### Returns

`None`

### clearSelection

Unselect all selected tiles except the excludeIndex

#### Parameters

##### excludeIndex `Number`

An int that contains the index of the tile in the array returned by get_allTiles method.

#### Returns

`None` 

### dataBind

Data binds RadTileList to the current dataSource array, which might be set by the clientDataSourceID, clientDataSource and dataSource properties.

#### Parameters

#### Returns

`None` 

### get_allTiles

Returns Array containing all the tiles in RadTileList

#### Parameters

#### Returns

`Array` 

### get_allTilesIndex

Returns the index of a tile in the Array returned by the get_allTiles method

#### Parameters

##### tile `Telerik.Web.UI.RadBaseTile`

#### Returns

`Number` 

### get_autoPostBack

Returns a value indicating whether a postback to the server will be initiated on tile selection or tile click.

#### Parameters

#### Returns

`Object` 

### get_clientDataSource

Returns RadClientDataSource object to which the TileList is data bound

#### Parameters

#### Returns

`Telerik.Web.UI.RadClientDataSource` 

### get_clientDataSourceID

Returns the client ID of RadClientDataSource object to which the TileList is data bound

#### Parameters

#### Returns

`String` 

### get_dataSource

Returns the array to which the TileList is data bound

#### Parameters

#### Returns

`Array` 

### get_element

Returns the TileList's main HTML element.

#### Parameters

#### Returns

`Element` 

### get_enableDragAndDrop

Returns a value indicating whether a drag and drop functionality is enabled.

#### Parameters

#### Returns

`Boolean` 

### get_groups

Returns Telerik.Web.UI.TileList.TileGroupCollection collection containing all Telerik.Web.UI.TileList.TileGroup items in RadTileList

#### Parameters

#### Returns

`Telerik.Web.UI.TileList.TileGroupCollection` 

### get_height

Returns the height of the RadTileList element

#### Parameters

#### Returns

`String` 

### get_scrollingMode

Returns RadTileList scrollbar mode

#### Parameters

#### Returns

`Number` returned value 

### get_selectedTiles

Returns Array containing all selected tiles in RadTileList

#### Parameters

#### Returns

`Array` 

### get_selectionMode

Returns selection mode of RadTileList

#### Parameters

#### Returns

`Number` returned value 

### get_tileByAllTilesIndex

Returns a tile by the index in the Array returned by the get_allTiles method

#### Parameters

##### index `Number`

#### Returns

`Telerik.Web.UI.RadBaseTile` 

### get_tileByName

Returns the first tile, which has Name property set equal to the name parameter

#### Parameters

##### name `String`

#### Returns

`Telerik.Web.UI.RadBaseTile` 

### get_tileRows

Returns the number of tile rows in which the tiles are distributed.

#### Parameters

#### Returns

`Object` 

### get_width

Returns the width of the RadTileList element

#### Parameters

#### Returns

`String` 

### getGroup

Retuns Telerik.Web.UI.TileList.TileGroup by provided index in the collecion returned by the get_groups method

#### Parameters

##### index `Number`

#### Returns

`Telerik.Web.UI.TileList.TileGroup` 

### getGroupIndex

Returns group index in the collectoin returned by the get_groups method. Returns -1 if group is not found

#### Parameters

##### group `Telerik.Web.UI.TileList.TileGroup`

#### Returns

`Number` 

### set_autoPostBack

Sets a value indicating whether a postback will be initiated when a tile is clicked or selected.

#### Parameters

##### value `Object`

#### Returns

`Object` 

### set_clientDataSource

Sets RadClientDataSource object to which the TileList is data bound

#### Parameters

##### value `Telerik.Web.UI.RadClientDataSource`

#### Returns

`None` 

### set_clientDataSourceID

Sets the client ID of RadClientDataSource object to which the TileList is data bound

#### Parameters

##### value `String`

#### Returns

`None` 

### set_dataSource

Sets the the array to which the TileList is data bound

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_enableDragAndDrop

Sets a value indicating whether a drag and drop functionality is enabled.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_groupTitle

Sets the title to the provided group

#### Parameters

##### group `Telerik.Web.UI.TileList.TileGroup`

##### title `String`

#### Returns

`None`

### set_height

Sets the height of the RadTileList element

#### Parameters

##### value `String`

#### Returns

`None` 

### set_scrollingMode

Sets RadTileList scrollbar mode

#### Parameters

##### value `Number`

value 

#### Returns

`None` 

### set_selectionMode

Sets selection mode of RadTileList

#### Parameters

##### value `Number`

value 

#### Returns

`None` 

### set_width

Sets the width of the RadTileList element

#### Parameters

##### value `String`

#### Returns

`None` 

### updateTileGroupsState

Updates the client state data regarding the visibility and the order of the tiles.

#### Parameters

#### Returns

`None`


## Events

### load

Adds a handler for the load TileList client event.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### tileSelected

Occurs after a tile in the TileList is selected.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.TileListEventArgs`

The arguments of the TileSelected event.

### tileClicked

Occurs after a tile is clicked and therefore after the OnClientTileClicking event and before the server-side OnTileClick event. The event cannot be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.TileListEventArgs`

The arguments of the TileClicked event.

### tileCreating

Occurs before a tile is initialized by the TileList. 

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.TileListDataCancelEventArgs`

The arguments of the TileCreating event.

### clientTileContentTemplateDataBound

Raised before rendering the Peek Template in the browser. 

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The arguments of the ClientTileContentTemplateDataBound event.
### tileClicking

Raised just before a tile is clicked and therefore before the server-side OnTileClick event as well.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.TileListCancelEventArgs`

The arguments of the TileClicking event.

### clientTilePeekTemplateDataBound

Occurs raised before the rendering of the Peek Template in the browser. 

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The arguments of the ClientTilePeekTemplateDataBound event.

### tileSelecting

Occurs when a tile in the TileList is about to be selected. The event can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.TileListCancelEventArgs`

The arguments of the TileSelecting event.

### init

Raised when the client-side object of the TileList is initialized.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### tileDataBound

Occurs when the tile is bound to the fetched data.

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Telerik.Web.UI.TileListDataEventArgs`

The arguments of the TileDataBound event.

### tileListDataBound

Occurs when the TileList data binding is finished. 

#### Event Data

##### sender `Telerik.Web.UI.RadTileList`

The RadTileList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the TileListDataBound event.



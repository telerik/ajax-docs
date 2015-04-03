---
title: TileGroup Object
page_title: TileGroup Object | UI for ASP.NET AJAX Documentation
description: TileGroup Object
slug: tilelist/client-side-programming/tilegroup-object
tags: tilegroup,object
published: True
position: 2
---

# TileGroup Object



## 

A `TileGroup` object is obtained by calling the `getItem()` method of a[TileGroupCollection]({%slug tilelist/client-side-programming/tilegroupcollection-object%}).

The __Telerik.Web.UI.TileList.TileGroup__ object exposes the following public methods and properties to control its behavior:


>caption 	TileGroup Client-Side Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addTile(item)|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})||Adds the tile passed as a parameter to the group.|
|getTile(index)|integer|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Returns the tile at the given index in the group.|
|getTileIndex(tile)|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|integer|Returns the index of the tile passed as a parameter in the given group.|
|get_tiles()||[TileCollection]({%slug tilelist/client-side-programming/tilecollection-object%})|Returns the tiles in the given group.|

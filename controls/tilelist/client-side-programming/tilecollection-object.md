---
title: TileCollection Object
page_title: TileCollection Object - RadTileList
description: Check our Web Forms article about TileCollection Object.
slug: tilelist/client-side-programming/tilecollection-object
tags: tilecollection,object
published: True
position: 3
---

# TileCollection Object





A `TileCollection` is obtained by calling the `get_tiles()` method of a [TileGroup object]({%slug tilelist/client-side-programming/tilegroup-object%}).

The **Telerik.Web.UI.TileList.TileCollection** object exposes the following public methods and properties to control its behavior:


>caption TileCollection Client-Side Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add()|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})||Adds the tile passed as a parameter to the collection.|
|forEach(function)|function||Executes the passed function for each tile in the collection. The tile is passed as an argument to the function.|
|getItem(index)|integer|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Returns tile at the index passed as a parameter.|
|get_count()||integer|Returns the number of tiles in the collection.|
|indexOf(tile)|[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})|integer|Returns the index in the collection of the tile passed as an argument.|

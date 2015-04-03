---
title: TileGroup Object
page_title: TileGroup Object | UI for ASP.NET AJAX Documentation
description: TileGroup Object
slug: tilelist/server-side-programming/tilegroup-object
tags: tilegroup,object
published: True
position: 1
---

# TileGroup Object



## 

A __TileGroup__ object is obtained from the [TileList Object]({%slug tilelist/server-side-programming/tilelist-object%})though its __Groups__ collection which offers an enumerator.


>caption Public methods

|  __Name__  |  __Return type__  |  __Description__  |
| ------ | ------ | ------ |
| __GetAllTiles__ |List<Telerik.Web.UI.RadBaseTile>|Gets all tiles inside the group.|
| __GetSelectedTiles__ |List<Telerik.Web.UI.RadBaseTile>|Gets the selected tiles from the group.|


>caption Public properties

|  __Name__  |  __Return type__  |  __Description__  |
| ------ | ------ | ------ |
| __Name__ |string|Gets or sets the Name of the group.|
| __Tiles__ |Telerik.Web.UI.BaseTileCollection|Gets the children of the group. The collection can be modified by adding/removing tiles.|

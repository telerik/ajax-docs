---
title: TileGroup Object
page_title: TileGroup Object | RadTileList for ASP.NET AJAX Documentation
description: TileGroup Object
slug: tilelist/server-side-programming/tilegroup-object
tags: tilegroup,object
published: True
position: 1
---

# TileGroup Object





A **TileGroup** object is obtained from the [TileList Object]({%slug tilelist/server-side-programming/tilelist-object%}) though its **Groups** collection which offers an enumerator.


>caption Public methods

|  **Name**  |  **Return type**  |  **Description**  |
| ------ | ------ | ------ |
| **GetAllTiles** |`List<Telerik.Web.UI.RadBaseTile>`|Gets all tiles inside the group.|
| **GetSelectedTiles** |`List<Telerik.Web.UI.RadBaseTile>`|Gets the selected tiles from the group.|


>caption Public properties

|  **Name**  |  **Return type**  |  **Description**  |
| ------ | ------ | ------ |
| **Name** |string|Gets or sets the Name of the group.|
| **Tiles** |`Telerik.Web.UI.BaseTileCollection`|Gets the children of the group. The collection can be modified by adding/removing tiles.|

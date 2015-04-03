---
title: TileGroupCollection Object
page_title: TileGroupCollection Object | UI for ASP.NET AJAX Documentation
description: TileGroupCollection Object
slug: tilelist/client-side-programming/tilegroupcollection-object
tags: tilegroupcollection,object
published: True
position: 1
---

# TileGroupCollection Object



## 

A `TileGroupCollection` is obtained by calling the `get_groups()` methodfrom the [RadTileList client-side API]({%slug tilelist/client-side-programming/tilelist-object%}).

The __Telerik.Web.UI.TileList.TileGroupCollection__ object exposes the following public methods and properties to control its behavior:


>caption 	TileGroupCollection Client-Side Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add(item)|[TileGroup]({%slug tilelist/client-side-programming/tilegroup-object%})||Adds the group passed as a parameter to the collection.|
|clear()|||Clears the tile groups in the RadTileList.|
|forEach(function)|function||Executes the passed function for each group in the collection, while passing the given group as an argument to the said function.|
|getItem(index)|integer|[RadTileGroup]({%slug tilelist/client-side-programming/tilegroup-object%})|Returns group at the passed index in the collectoin returned by the get_groups RadTileList method.|
|get_count()||integer|Returns the number of tile groups in the RadTileList|
|indexOf(item)|[RadTileGroup]({%slug tilelist/client-side-programming/tilegroup-object%})|integer|Returns the index of the group passed as a parameter. Returns -1 if there is no match.|

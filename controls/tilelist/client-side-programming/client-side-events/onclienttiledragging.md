---
title: OnClientTileDragging
page_title: OnClientTileDragging | UI for ASP.NET AJAX Documentation
description: OnClientTileDragging
slug: tilelist/client-side-programming/client-side-events/onclienttiledragging
tags: onclienttiledragging
published: True
position: 4
---

# OnClientTileDragging



## 

The __OnClientTileDragging__ event is raised while a [tile]({%slug tilelist/tiles/overview%})is being dragged by the user in the browser. It is fired continuously while the tile is being dragged.It is *not* cancellable.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileDragging event arguments object

|  __Name__  |  __Return type__  |  __Description__  |
| ------ | ------ | ------ |
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Gets a reference to the tile that is clicked.|

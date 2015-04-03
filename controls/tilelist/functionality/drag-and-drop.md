---
title: Drag and Drop
page_title: Drag and Drop | UI for ASP.NET AJAX Documentation
description: Drag and Drop
slug: tilelist/functionality/drag-and-drop
tags: drag,and,drop
published: True
position: 3
---

# Drag and Drop



## 

__RadTileList__ supports __drag-and-drop__ for __reordering of the tiles__ and for__moving tiles from one group to another__. This includes __creating a new group__. The tiles arereordered in realtime around the tile that is being dragged.

The drag-and-drop functionality is enabled by setting the TileList's __EnableDragAndDrop__ property to__true__. Its default value is *false*.

>note If the end user reorders the tiles this new order will be persisted across postbacks.
>


For desktop devices the left mouse button is pressed and held down over the tile to start dragging it.

For mobile devices press and hold over the tile for a second and an indicator will appear that shows the tile can be[selected]({%slug tilelist/functionality/selecting%}) and if it is not dragged only a little upward	or downward to trigger selection dragging will be initiated (e.g. when the selection threshold is exceeded).

To create a new tile group drag the tile to the gap between two existing groups or to the end of the control. When themouse pointer or finger is above the gap large border will appear that indicates a new group will be created there:![tile List-drag-drop-new-group-indicator](images/tileList-drag-drop-new-group-indicator.jpg)

>tip You can use the[RadPersistenceFramework](8fc21445-ae36-4444-9e27-954d3cb99750)to store the order and selected state of tiles for your end users, so they can customize the appearance of their TileList.
>


>tip If you want to capture certain events in the tiles' content (e.g., input elements in a RadContentTemplateTile),	you need to prevent the mousedown event bubbling for these elements because otherwise it will initiate a tile drag and get cancelled.	You can find examples in the[Drag and Drop with ContentTemplateTile that has input elements](http://www.telerik.com/support/kb/aspnet-ajax/tilelist/details/drag-and-drop-with-contenttemplatetile-input-elements)KB article.
>


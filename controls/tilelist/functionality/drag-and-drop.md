---
title: Drag and Drop
page_title: Drag and Drop | RadTileList for ASP.NET AJAX Documentation
description: Drag and Drop
slug: tilelist/functionality/drag-and-drop
tags: drag,and,drop
published: True
position: 3
---

# Drag and Drop




**RadTileList** supports **drag-and-drop** for **reordering of the tiles** and for **moving tiles from one group to another**. This includes **creating a new group**. The tiles are reordered in realtime around the tile that is being dragged.

The drag-and-drop functionality is enabled by setting the TileList's **EnableDragAndDrop** property to **true**. Its default value is *false*.

>note If the end user reorders the tiles this new order will be persisted across postbacks.



For desktop devices the left mouse button is pressed and held down over the tile to start dragging it.

For mobile devices press and hold over the tile for a second and an indicator will appear that shows the tile can be [selected]({%slug tilelist/functionality/selecting%}) and if it is not dragged only a little upward	or downward to trigger selection, dragging will be initiated (i.e., when the selection threshold is exceeded).

To create a new tile group drag the tile to the gap between two existing groups or to the end of the control. When the mouse pointer or finger is above the gap large border will appear that indicates a new group will be created there:

>caption Figure 1: Creating a new group by dragging a tile over the gap between the existing groups.

![tile List-drag-drop-new-group-indicator](images/tileList-drag-drop-new-group-indicator.jpg)

>tip You can use [RadPersistenceFramework]({%slug persistenceframework/overview%}) to [store and load the order and selected state of tiles]({%slug tilelist/how-to/save-and-load-state%}) for your end users, so they can customize the appearance of their TileList.



>tip If you want to capture certain events in the tiles' content (e.g., input elements in a RadContentTemplateTile), you need to prevent the mousedown event bubbling for these elements because otherwise it will initiate a tile drag and get cancelled. You can find examples in the [Drag and Drop with ContentTemplateTile that has input elements](http://www.telerik.com/support/kb/aspnet-ajax/tilelist/details/drag-and-drop-with-contenttemplatetile-input-elements) KB article.

## See Also

* [Live Demo: Persisting TileList Settings](http://demos.telerik.com/aspnet-ajax/tilelist/examples/application-scenarios/persisting-tilelist-settings/defaultcs.aspx)

* [Save and Load State]({%slug tilelist/how-to/save-and-load-state%})



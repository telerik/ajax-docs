---
title: Selecting
page_title: Selecting - RadTileList
description: Check our Web Forms article about Selecting.
slug: tilelist/functionality/selecting
tags: selecting
published: True
position: 1
---

# Selecting




To select a given tile in **RadTileList** the **right mouse button** must be used, like it is in Windows 8. The other option is to **hold down the tile and drag it a little downward or upward**. This can be done either with the mouse or with a touch screen.This is also the default behavior in Windows 8.

Once a tile is selected a small indicator will appear in its top right corner - a small triangle with a tick sign.

>caption Figure 1: The selected tile indicator.

![tile List selected tile appearance](images/tileList-selected-tile-appearance.png)

There are three **selection modes** that the control supports:

* None - selection is disabled

* Single - only one tile can be selected at any given time

* Multiple - many tiles can be selected simultaneously

The selection mode can be toggled on the **server** through the server-side **SelectionMode** property that takes a member of the **`Telerik.Web.UI.TileList.TileListSelectionMode`** enum - None, Single or Multiple. The other option is to use **JavaScript** and the `set_selectionMode()` method that also takes a member of an enum with the same name,e.g. *`set_selectionMode(Telerik.Web.UI.TileList.TileListSelectionMode.None)`*.

If selection mode is changed from multiple to single and there are multiple tiles selected only one will remain selected -	the tile that is last in the list.

See the [Selecting online demo](https://demos.telerik.com/aspnet-ajax/tilelist/examples/selecting/defaultcs.aspx) to see the feature in action.

The control also exposes the **AutoPostBack** property which indicates whether an automatic postback will be triggered once a tile is selected. It defaults to false.

The developer can react to the user's actions through the **events** the control exposes:

* **OnSelectionChanged** - raised on the server with each selection if AutoPostBack is set to true

* **OnClientTileSelecting** - raised on the client when a tile is about to be selected.Can be cancelled to prevent selection according to a desired logic

* **OnClientTileSelected** - raised after a tile is selected

A given **tile** selection status can be toggled through its **Selected** property. It can be set in the markup, the code-behind or though JavaScript through the `set_selected(isSelected)` method each tile object exposes.

>tip You can use the [RadPersistenceFramework]({%slug persistenceframework/overview%}) to store the order and selected state of tiles for your end users, so they can customize the appearance of their TileList.
>


# See Also

 * [Selecting online demo](https://demos.telerik.com/aspnet-ajax/tilelist/examples/selecting/defaultcs.aspx)

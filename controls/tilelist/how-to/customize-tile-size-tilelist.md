---
title: Customize Tile Size in TileList
page_title: Customize Tile Size in TileList | RadTileList for ASP.NET AJAX Documentation
description: Customize Tile Size in TileList
slug: tilelist/how-to/save-and-load-state
tags: custom, tile, size, dimension, wide, square, tilelist
published: True
position: 4
---

# Customize Tile Size in TileList

This article shows an approach to set up custom dimensions for the **Tiles** in a **TileList** by using only CSS and preserving the built-in drag and drop functionality.

With **RadTileList**, [drag and drop]({%slug tilelist/functionality/drag-and-drop%}) works only when **Tile** sizes (`Square` and `Wide`) and the [tile group]({%slug tilelist/functionality/group-title%}) have the same proportions as the predefined ones.

>tip If you are using [Lightweight rendering]({%slug tilelist/mobile-support/render-modes%}), tile sizes are calculated in `em` in order to provide [elastic capabilities]({%slug tilelist/mobile-support/elastic-capabilities%}). With this **RenderMode** you can easily change the tile sizes by just using a larger size font, like in this example:
>```
><div style="font-size:22px;">
>   <telerik:RadTileList runat="server" ID="RadTileList2" TileRows="4"
>	        EnableDragAndDrop="true" RenderMode="Lightweight">
>	    <Groups>
>	        <telerik:TileGroup Name="Group1" Title="Group 1">
>	            <telerik:RadTextTile runat="server" Text="Tile 1" Shape="Square" />
>	            <telerik:RadTextTile runat="server" Text="Tile 2" Shape="Wide" />
>	        </telerik:TileGroup>
>       </Groups>
>   </telerik:RadTileList>
></div>
>```

<Comment: Why isn't the example above labeled as Example 1 and why doesn't it have a caption?>

These formulas can help you determine how to calculate the size of the `Wide` tile and the tile group based on the desired `Square` tile size (in pixels):

```
x = SquareTileWidth = SquareTileHeight
```

```
WideTileWidth = 2 * x + 10
WideTileHeight = x 
```

```
TileGroupWidth = x + 20
```

 

You can also define larger tiles by using tile's `CssClass` property to decorate their `width` and `height` in a CSS rule, but you should still take into account the width of the `Wide` tile, which can be considered as the maximum width for a tile. 

In the example below, the base tile size (**SquareTileWidth** from the formulas above) is 200px. And you can examine how the other tiles and the tile group are proportionally changed according to this base.

>caption Example 1: CSS to apply custom sizes.

````ASP.NET
<style>
    .CustomSizeTiles .RadTile.rtileSquare {
        /* SquareTileWidth */
        width: 200px;
    }

    .CustomSizeTiles .RadTile.rtileWide {
        /* WideTileWidth  */
        width: 410px;
    }

    .CustomSizeTiles .RadTile.rtileWide,
    .CustomSizeTiles .RadTile.rtileSquare {
        /* SquareTileHeight and WideTileHeight */
        height: 200px;
    }

    .CustomSizeTiles.RadTileList .rtlistWrapper {
        /* TileGroupWidth */
        width: 420px;
    }

    .CustomSizeTiles .RadTile.rtileSquare.BigSquare {
        /* Bigger square sizes */
        width: 410px;
        height: 410px;
    }
</style>

<telerik:RadTileList runat="server" ID="RadTileList1" EnableDragAndDrop="true" TileRows="4" CssClass="CustomSizeTiles">
    <Groups>
        <telerik:TileGroup Name="Group1" Title="Group 1">
            <telerik:RadTextTile runat="server" Text="Tile 1" Shape="Square" />
            <telerik:RadTextTile runat="server" Text="Tile 2" Shape="Wide" />
        </telerik:TileGroup>
        <telerik:TileGroup Name="Group2" Title="Group 2">
            <telerik:RadTextTile runat="server" Text="Tile 3" Shape="Square" />
            <telerik:RadTextTile runat="server" Text="Tile 4" Shape="Wide" />
        </telerik:TileGroup>
        <telerik:TileGroup Name="Group3" Title="Group 3">
            <telerik:RadTextTile runat="server" Text="Tile 5" CssClass="BigSquare" />
        </telerik:TileGroup>
    </Groups>
</telerik:RadTileList>
````

# See Also

 * [CSS Classes]({%slug tilelist/tiles/appearance-and-styling/css-classes%})
 * [Drag and Drop]({%slug tilelist/functionality/drag-and-drop%})
 * [Group Title]({%slug tilelist/functionality/group-title%})

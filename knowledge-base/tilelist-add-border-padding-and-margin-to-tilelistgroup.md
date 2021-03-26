---
title: Add border, padding, and margin to RadTileList Groups
description: Check out how to apply border, padding, margin, and other styles to RadTileList's Groups and Tiles.
type: how-to
page_title: Add border, padding, and margin to RadTileList Groups
slug: tilelist-add-border-padding-and-margin-to-tilelistgroup
position: 
tags: RadTileList, RadTile
ticketid: 1512748
res_type: kb
---


## Description

How to apply border around RadTileList groups and modify the padding and margin of the groups and Tiles.


## Solution

All Telerik Controls come with certain default styling applied with the built-in stylesheets. Any desired modification of the built-in appearance can be achieved by adding new CSS rules and overriding the default design.

With the help of the class names, added to the elements of the Html structure rendered by the RadTileList, you can apply styles separately to the Tiles, TileGroups, entire TileList, or any internal Html tag part of the control structure.

The exact Html structure of the Tile List will depend on the specific declaration and settings of the control. You can find a list of the CSS classes applied with RadTileList in the [CSS Classes]({%slug tilelist/appearance-and-styling/css-classes%}) article.

Here is a wireframe of the usual structure with some of the class names of the elements that you can use for styling the control:

````HTML
<div class="RadTileList">
    <div class="rtlistScrollWrapper">
        <div class="rtlistGroup">
            <div class="rtlistHeader"></div>
            <div class="rtlistWrapper">
                <div class="RadTile">
                    <div>
                        <div class="rtileContent">
                            <div class="rtileTopContent">
                                <img class="rtileContentImage" />
                            </div>
                            <div class="rtileBottomContent"><!--Tile bottom content renders here--></div>
                        </div>
                        <div class="rtilePeekContent"></div>
                    </div>
                    <div class="rtileSelectedIcon"></div>
                </div>
                <!--...other Tiles...-->
                <div class="rtlistWrapper">
                    <!--...more Tiles...-->
                </div>
            </div>
            <div class="rtlistGroupSeparator">&nbsp;</div>
            <div class="rtlistGroup">
                <!--Group content here - Header, Wrappers, Tiles-->
            </div>
            <!-- ... other Groups ... -->
        </div>
    </div>
</div>
````

Based on the Html structure of the Control, below is a sample CSS for adding border, padding, and margin to the RadTileList's Groups:

````CSS
html body .RadTileList .rtlistGroup{
    border:1px solid red;
    margin:20px;
    padding:20px;
}
````

## See Also

 * [CSS Classes]({%slug tilelist/appearance-and-styling/css-classes%})

 * [RadTileList Overview demo](https://demos.telerik.com/aspnet-ajax/tilelist/examples/overview/defaultcs.aspx)

 
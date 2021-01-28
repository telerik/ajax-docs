---
title: OnClientSelected
page_title: OnClientSelected - RadTile
description: Check our Web Forms article about OnClientSelected.
slug: tilelist/tiles/client-side-programming/events/onclientselected
tags: onclientselected
published: True
position: 4
---

# OnClientSelected


The **OnClientSelected** event is raised after a [Tile]({%slug tilelist/tiles/overview%}) is [selected]({%slug tilelist/functionality/selecting%}). It is fired after the [OnClientSelecting event]({%slug tilelist/tiles/client-side-programming/events/onclientselecting%}), if the latter has not been cancelled. This event is also cancellable.

OnClientSelected can be used to cancel the postback (if AutoPostBack is true), but still allows the tile to be selected. Cancelling this event will prevent the postback, but not the selection.

The event handler receives two arguments:

1. the [Tile]({%slug tilelist/tiles/client-side-programming/basetile-object%}) object that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientSelected event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_newValue()|string||Gets the current URL the tile will navigate to. It could have been changed dynamically in the [OnClientClicking event]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%}).|
|get_oldValue()|string||Gets the original NavigateUrl of the clicked tile. It can be used to compare the current and original values.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|

The following code snippet shows how to get information about a selected tile through the methods exposed by the **OnClientSelected** event's arguments. Note that selection is performed by right-clicking on a tile.

````JavaScript
<telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"
     OnClientSelected="OnClientSelected" EnableSelection="true" NavigateUrl="https://www.telerik.com">
</telerik:RadTextTile>

<div id="myDiv"></div>

<script type="text/javascript">
    function OnClientSelected(tile, args) {
        var myDiv = document.getElementById("myDiv");

        //print tile data
        var log = String.format("Tile with name {0} has been selected; navigateUrl: {1}; selected: {2}; <br />",
                tile.get_name(), tile.get_navigateUrl(), tile.get_selected());
        myDiv.innerHTML = log;
    }
</script>
````



The example below demonstrates how the **get_selected()** method of the **Tile** object and the **set_cancel()** method exposed by the **OnClientTileSelected** event arguments can be used to determine whether a tile is selected or deselected.

````JavaScript
 <telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"
     OnClientSelected="OnClientTileSelected" EnableSelection="true" NavigateUrl="https://www.telerik.com">
</telerik:RadTextTile>

<script type="text/javascript">
    function OnClientTileSelected(tile, args) {
        var selected = tile.get_selected();

        if (selected) {
            alert("Tile is now checked.");
            var response = confirm("Do you want to post the page now that the tile is selected?");
            args.set_cancel(!response);//the postback can now be cancelled, not the tile selection
        }
        else {
            alert("Tile is now unchecked.");
        }
    }
</script>
````



---
title: OnClientClicking
page_title: OnClientClicking - RadTile
description: Check our Web Forms article about OnClientClicking.
slug: tilelist/tiles/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 0
---

# OnClientClicking




The **OnClientClicking** event is raised just before a [Tile]({%slug tilelist/tiles/overview%}) is clicked and therefore before the [server-side OnClick event]({%slug tilelist/tiles/server-side-programming/events/onclick%}) as well. It is cancellable and precedes the [OnClientClicked event]({%slug tilelist/tiles/client-side-programming/events/onclientclicked%}). If it is cancelled the OnClientClicked event is not raised, nor is a postback initiated if AutoPostBack is true.

This event can be used to prevent navigation and postbacks based on certain criteria (e.g. information for the tile that is about to be clicked). Cancelling this event will prevent the postback and the navigation. The URL that the tile navigates to can also be changed dynamically.

The event handler receives two arguments:

1. The [Tile]({%slug tilelist/tiles/client-side-programming/basetile-object%}) object that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileClicking event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_value()|string||Returns the NavigateUrl of the tile.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|
|set_value(value)||string|Sets a new NavigateUrl for the tile. If there is not going to be a postback (AutoPostback is false) this is the new URL that the tile is going to navigate to.This new URL will not be persisted in the tile, so the next time the same tile is clicked it will retain its original URL.|

The example below demonstrates how to get a tile's **NavigateUrl** in the **OnClientClicking** event. Based on the returned Url, the clicking event is cancelled or allowed.

````JavaScript
<telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" 
    Text="Lorem ipsum dolor sit amet" Title-Text="Sample" NavigateUrl="https://www.telerik.com" 
    OnClientClicking="OnClientClicking">
</telerik:RadTextTile>

<script type="text/javascript">
    function OnClientClicking(tile, args) {
        var shouldCancel = false;
        var url = args.get_value();
        var expectedUrl = "https://www.telerik.com";

        if (url != expectedUrl) {
            shouldCancel = true;
            alert("Event will be cancelled.");
        }
        else {
            shouldCancel = false;
        }
        args.set_cancel(shouldCancel);
    }
</script>
````



The following code snippet represents a simple example of how to use the **OnClientClicking** event to get a reference to the clicked tile's name and, on user request, cancel the execution of the event.

````JavaScript
<telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" 
    Text="Lorem ipsum dolor sit amet" Title-Text="Sample" NavigateUrl="https://www.telerik.com" 
    OnClientClicking="OnClientClicking">
</telerik:RadTextTile>

<script type="text/javascript">
    function OnClientClicking(tile, args) {
        var tileName = tile.get_name();
        var response = confirm(String.format("Tile with name \"{0}\" has been clicked and PostBack will be initiated.", tileName));

        //cancel PostBack on user request and show an alert
        if (!response) {
            args.set_cancel(true);
            alert('PostBack was cancelled.');
        }
    }
</script>
````



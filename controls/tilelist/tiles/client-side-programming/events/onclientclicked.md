---
title: OnClientClicked
page_title: OnClientClicked - RadTile
description: Check our Web Forms article about OnClientClicked.
slug: tilelist/tiles/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 1
---

# OnClientClicked



The **OnClientClicked** event is raised after a [Tile]({%slug tilelist/tiles/overview%}) is clicked and therefore after the [OnClientClicking event]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%}) and before the [server-side OnClick event]({%slug tilelist/tiles/server-side-programming/events/onclick%}). It is *not* cancellable. If the OnClientClicking event is cancelled it will not be fired.

This event can be used to monitor navigation and postbacks and obtain information for the tile that is clicked. If AutoPostBack is true [navigation]({%slug tilelist/functionality/navigation%}) will not be performed.

The original URL of the tile and the current one can be obtained through the event arguments object, because the URL the browser will navigate to can be changed dynamically in the OnClientClicking event.

The event handler receives two arguments:

1. the [Tile]({%slug tilelist/tiles/client-side-programming/basetile-object%}) object that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientClicked event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_newValue()|string||Gets the current URL the tile will navigate to. It could have been changed dynamically in the [OnClientClicking event]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%}).|
|get_oldValue()|string||Gets the original NavigateUrl of the clicked tile. It can be used to compare the current and original values.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|

The following example shows how to get and set the **navigateURL** property of a Tile in the **OnClientClicked** event.

````JavaScript
<telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"
    OnClientClicked="OnClientClicked">
</telerik:RadTextTile>

<script type="text/javascript">
    function OnClientClicked(tile, args) {
        var url = args.get_oldValue();

        //confirm navigation if url has been specified
        if (url != "") {
            confirm(String.format('Page will navigate to {0}', url));
        }
            //request navigation url to be set
        else {
            tile.set_navigateUrl(prompt("No url specified. Please enter a navigation url:"));
        }
    }
</script>
````



The code snippet below shows how to use the **OnClientClicked** event to check if the navigation URL of a Tile has been set to a new value.

````JavaScript
<telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"
    OnClientClicking="OnClientClicking" OnClientClicked="OnClientClicked" NavigateUrl="https://demos.telerik.com">
</telerik:RadTextTile>

<script type="text/javascript">
    function OnClientClicking(tile, args) {
        args.set_value("https://www.telerik.com");
        alert("New Navigation URL set to \'http//:www.telerik.com\'.");
    }

    function OnClientClicked(tile, args) {
        var oldValue = args.get_oldValue();
        var newValue = args.get_newValue();
        if (oldValue != newValue) {
            alert(String.format("Navigation URL changed from \'{0}\' to \'{1}\'.", oldValue, newValue));
        }
    }
</script>
````



---
title: Overview
page_title: Client-side Programming Overview | RadTile for ASP.NET AJAX Documentation
description: Overview
slug: tilelist/tiles/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview





Each **RadTile** control offers a rich set of client-side events that allow the developer to modify their behavior. You can, for example, obtain information about the selected or clicked tiles,change the page they will navigate to or prevent selection, navigation or the postback according to the desired logic:

* **[OnClientClicking]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%})**—fires when a tile is being clicked. It can be used to prevent the navigation and the postback or to change the URL.

* **[OnClientClicked]({%slug tilelist/tiles/client-side-programming/events/onclientclicked%})**—fires after a tile is clicked. Can be used to compare the original NavigateUrl with the current and to cancel the postback.

* **[OnClientLoad]({%slug tilelist/tiles/client-side-programming/events/onclientload%})**—fires after a tile is created. Can be used to store a reference or modify its object.

* **[OnClientSelecting]({%slug tilelist/tiles/client-side-programming/events/onclientselected%})**—fires just before a tile is [selected]({%slug tilelist/functionality/selecting%}) and can be used to prevent the selection and the automatic postback.

* **[OnClientSelected]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%})**—fires after a tile is selected. It can be used to prevent the postback.

The **RadLiveTile** offers additional events that are related to its load-on-demand purpose:

* **[OnClientDataLoaded]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloaded%})**—fires when data request returns the data successfully.

* **[OnClientDataLoading]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloading%})**—fires before the data request is executed. Arguments can be changed here and it can also be cancelled.

* **[OnClientDataLoadingError]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloadingerror%})**—fires when the data request returns an error so it can be handled.

* **[OnClientTemplateDataBound]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclienttemplatedatabound%})**—fires after the ClientTemplate is data bound (i.e., the information from the request is resolved in the template).

>tip If [selection]({%slug tilelist/functionality/selecting%}) is disabled the [OnClientSelecting]({%slug tilelist/tiles/client-side-programming/events/onclientselecting%}) and [OnClientSelected]({%slug tilelist/tiles/client-side-programming/events/onclientselected%}) events will not be fired at all.



## Getting the Tile Control Client-side Object

Tile creates a client-side object with the ClientID of the control.You can obtain the reference using the following JavaScript code:

````JavaScript
<telerik:RadTextTile ID="Tile1" runat="server">
</telerik:RadTextTile>
<script>
    Sys.Application.add_load(function () {
            var tile = $find("<%= Tile1.ClientID %>");
            alert(tile.get_id());
        }
    );
</script>
````



>tip All Tile types inherit the **[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})** type and has the API it provides in addition to its own specific methods.



# See Also

 * [Overview]({%slug tilelist/tiles/overview%})

 * [BaseTile Object]({%slug tilelist/tiles/client-side-programming/basetile-object%})

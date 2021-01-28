---
title: Overview
page_title: Client-side Events Overview - RadTileList
description: Check our Web Forms article about Overview.
slug: tilelist/client-side-programming/client-side-events/overview
tags: overview
published: True
position: 0
---

# Client-side Events Overview





**RadTileList** offers a rich set of client-side events that can fully control its behavior - they allow the developerto obtain information about the selected and clicked tiles, then change the page they will navigate to or prevent selection, navigation or the postbackaccording to the desired logic:

1. **[OnClientLoad]({%slug tilelist/client-side-programming/client-side-events/onclientload%})**—fires when the RadTileList [RadTileList client-side object]({%slug tilelist/client-side-programming/tilelist-object%}) isinitialized.

1. **[OnClientTileClicking]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%})**—fires when a tile is being clicked. It can be used to prevent the navigation and the postback or to change the URL.

1. **[OnClientTileClicked]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicked%})**—fires after a tile is clicked. Can be used to compare the original NavigateUrl with the current and to cancel the postback.

1. **[OnClientTileDragging]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragging%})**—fires while the user is dragging a tile.

1. **[OnClientTileDragStart]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragstart%})**—fires when the user starts dragging a tile. Can be cancelled.

1. **[OnClientTileDropped]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropped%})**—fires after a tile is dropped.

1. **[OnClientTileDropping]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropping%})**—fires just before a tile is dropped. Can be cancelled.

1. **[OnClientTileSelecting]({%slug tilelist/client-side-programming/client-side-events/onclienttileselecting%})**—fires just before a tile is [selected]({%slug tilelist/functionality/selecting%}) and can be used to prevent the selection and the automatic postback.

1. **[OnClientTileSelected]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%})**—fires after a tile is selected. It can be used to prevent the postback.

1. **[OnClientTileListDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilelistdatabound%})**—fires when the TileList data binding is finished.

1. **[OnClientTileDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttiledatabound%})**—fires when the tile is bound to the fetched data.

1. **[OnClientTileContentTemplateDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilecontenttemplatedatabound%})**—fires before rendering the **ClientContentTemplate** in the browser.

1. **[OnClientTilePeekTemplateDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilepeektemplatedatabound%})**—fires before rendering the [Peek Template]({%slug tilelist/tiles/peek-template%}) in the browser.

1. **[OnClientTileCreating]({%slug tilelist/client-side-programming/client-side-events/onclienttilecreating%})**—fires before the tile is initialized by the TileList.

>note If [selection]({%slug tilelist/functionality/selecting%}) is disabled the [OnClientTileSelecting]({%slug tilelist/client-side-programming/client-side-events/onclienttileselecting%}) and [OnClientTileSelected]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%}) events will not be fired at all.
>
>If [drag-and-drop]({%slug tilelist/functionality/drag-and-drop%}) is not enabled the related events will not fire	([OnClientTileDragging]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragging%}), [OnClientTileDragStart]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragstart%}), [OnClientTileDropped]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropped%}), [OnClientTileDropping]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropping%})).



The following example shows how to add and remove event handlers dynamically by using the methods exposed by the **TileList's** [Client-side API]({%slug tilelist/client-side-programming/tilelist-object%}).

````JavaScript
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" AutoPostBack="false" SelectionMode="Single">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
<input type="button" onclick="addClickingEventHandler()" value="Add new tileClicking client event handler" style="color:green"/><br />
<input type="button" onclick="removeClickingEventHandler()" value="Remove tileClicking client event handler" style="color:red"/>
<br /><br />
<input type="button" onclick="addSelectingEventHandler()" value="Add new tileSelecting client event handler"  style="color:green"/><br />
<input type="button" onclick="removeSelectingEventHandler()" value="Remove tileSelecting client event handler"  style="color:red"/>

<telerik:RadCodeBlock runat="server" ID="RadCodeBlock1">
	<script type="text/javascript">
		var tileList;
		function pageLoad()
		{
			tileList = $find("<%=RadTileList1.ClientID %>");
		}

		function addClickingEventHandler() {
			tileList.add_tileClicking(eventHandled);
			alert('Event handler attached to tileClicking event');
		}

		function removeClickingEventHandler() {
			tileList.remove_tileClicking(eventHandled);
			alert('Event handler has been removed from tileClicking event');
		}

		function addSelectingEventHandler() {
			tileList.add_tileSelecting(eventHandled);
			alert('Event handler attached to tileSelecting event');
		}

		function removeSelectingEventHandler() {
			tileList.remove_tileSelecting(eventHandled);
			alert('Event handler has been removed from tileSelecting event');
		}

		function eventHandled() {
			alert('An event handler has been attached to this event.');
		}
	</script>
</telerik:RadCodeBlock>
````



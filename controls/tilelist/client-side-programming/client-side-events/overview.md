---
title: Client-side Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: tilelist/client-side-programming/client-side-events/overview
tags: overview
published: True
position: 0
---

# Client-side Events Overview



## 

__RadTileList__ offers a rich set of client-side events that can fully control its behavior - they allow the developerto obtain information about the selected and clicked tiles, then change the page they will navigate to or prevent selection, navigation or the postbackaccording to the desired logic:

1. __[OnClientLoad]({%slug tilelist/client-side-programming/client-side-events/onclientload%})__—fires when the RadTileList [RadTileList client-side object]({%slug tilelist/client-side-programming/tilelist-object%}) isinitialized.

1. __[OnClientTileClicking]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%})__—fires when a tile is being clicked. It can be used to prevent the navigation and the postback or to change the URL.

1. __[OnClientTileClicked]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicked%})__—fires after a tile is clicked. Can be used to compare the original NavigateUrl with the current and to cancel the postback.

1. __[OnClientTileDragging]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragging%})__—fires while the user is dragging a tile.

1. __[OnClientTileDragStart]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragstart%})__—fires when the user starts dragging a tile. Can be cancelled.

1. __[OnClientTileDropped]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropped%})__—fires after a tile is dropped.

1. __[OnClientTileDropping]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropping%})__—fires just before a tile is dropped. Can be cancelled.

1. __[OnClientTileSelecting]({%slug tilelist/client-side-programming/client-side-events/onclienttileselecting%})__—fires just before a tile is [selected]({%slug tilelist/functionality/selecting%})and can be used to prevent the selection and the automatic postback.

1. __[OnClientTileSelected]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%})__—fires after a tile is selected. It can be used to prevent the postback.

1. __[OnClientTileListDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilelistdatabound%})__—fires when the TileList data binding is finished.

1. __[OnClientTileDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttiledatabound%})__—fires when the tile is bound to the fetched data.

1. __[OnClientTileContentTemplateDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilecontenttemplatedatabound%})__—fires before rendering the __ClientContentTemplate__ in the browser.

1. __[OnClientTilePeekTemplateDataBound]({%slug tilelist/client-side-programming/client-side-events/onclienttilepeektemplatedatabound%})__—fires before rendering the [Peek Template]({%slug tilelist/tiles/peek-template%}) in the browser.

1. __[OnClientTileCreating]({%slug tilelist/client-side-programming/client-side-events/onclienttilecreating%})__—fires before the tile is initialized by the TileList.

>note If[selection]({%slug tilelist/functionality/selecting%})is disabled the[OnClientTileSelecting]({%slug tilelist/client-side-programming/client-side-events/onclienttileselecting%})and[OnClientTileSelected]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%})events will not be fired at all.
>If[drag-and-drop]({%slug tilelist/functionality/drag-and-drop%})is not enabled the related events will not fire	([OnClientTileDragging]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragging%}),[OnClientTileDragStart]({%slug tilelist/client-side-programming/client-side-events/onclienttiledragstart%}),[OnClientTileDropped]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropped%}),[OnClientTileDropping]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropping%})).
>


The following example shows how to add and remove event handlers dynamically by using the methods exposed by the __TileList's__[Client-side API]({%slug tilelist/client-side-programming/tilelist-object%}).

````JavaScript
		<telerik:RadTileList runat="server" ID="RadTileList1" AutoPostBack="false" SelectionMode="Single">
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



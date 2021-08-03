---
title: How to persist the scrollbar position of a vertical RadDockZone
description: How to persist the scrollbar position of a vertical RadDockZone. Check it now!
type: how-to
page_title: How to persist the scrollbar position of a vertical RadDockZone
slug: dock-how-to-persist-the-scrollbar-position-of-a-vertical-raddockzone
res_type: kb
---

## How to

Persist the scrollbar position of a vertical RadDockZone when a RadDock at the bottom of the zone is dragged.  

## Description
   
When a RadDockZone is set with vertical orientation (its property **Orientation** is set to **Vertical**) and it is not high enough to display all dock controls in its content, a vertical scrollbar will appear. If a user scrolls to the bottom of the zone and starts dragging the last dock, the scrollbar will be moved towards the top.  

## Solution

This behavior can be avoided by handling the client-side dock events **OnClientDragStart** and **OnClientDragEnd** in order to add a div HTML element with height equal to the height of the scroll view of the dock zone while a dock is dragged. As a result the scrollbar will not be repositioned in the examined scenario. The sample below demonstrates this approach.  

````ASPX
<telerik:RadDockZone ID="dockZone" runat="server" Height="200px" Orientation="Vertical">
	<telerik:RadDock ID="dock1" runat="server" Title="dock1" OnClientDragStart="dockDragStart" OnClientDragEnd="dockDragEnd">
		<ContentTemplate>
			Some<br />Sample<br />Content
		</ContentTemplate>
	</telerik:RadDock>
	<telerik:RadDock ID="dock2" runat="server" Title="dock2" OnClientDragStart="dockDragStart" OnClientDragEnd="dockDragEnd">
		<ContentTemplate>
			Some<br />Sample<br />Content
		</ContentTemplate>
	</telerik:RadDock>
	<telerik:RadDock ID="dock3" runat="server" Title="dock3" OnClientDragStart="dockDragStart" OnClientDragEnd="dockDragEnd">
		<ContentTemplate>
			Some<br />Sample<br />Content
		</ContentTemplate>
	</telerik:RadDock>
	<telerik:RadDock ID="dock4" runat="server" Title="dock4" OnClientDragStart="dockDragStart" OnClientDragEnd="dockDragEnd">
		<ContentTemplate>
			Some<br />Sample<br />Content
		</ContentTemplate>
	</telerik:RadDock>
</telerik:RadDockZone>
````

````JavaScript
var $ = $telerik.$;
function dockDragEnd(dock, args)
{
   var zoneId = dock.get_dockZoneID();
   if(zoneId)
   {
      var sizeHolder = $("#"+zoneId+'_sizeHolder').get(0)

      if(sizeHolder) $(sizeHolder).remove();
   }				
}
function dockDragStart(dock, args)
{
   var zoneId = dock.get_dockZoneID();
   if(zoneId)
   {
      var sizeHolder = $("#"+zoneId+'_sizeHolder').get(0) || document.createElement("div");
      sizeHolder = $(sizeHolder);
      var zone = $("#"+zoneId);
      
      if (!sizeHolder.attr('id')) sizeHolder.attr('id', zoneId+'_sizeHolder');
      sizeHolder
         .width(1)
         .height(zone.get(0).scrollHeight)
         .css({float: 'left', marginLeft: '-1px'})

      sizeHolder.insertBefore(zone.children().get(0));
   }
}
````

 
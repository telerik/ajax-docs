---
title: OnClientDockPositionChanged
page_title: OnClientDockPositionChanged | UI for ASP.NET AJAX Documentation
description: OnClientDockPositionChanged
slug: dock/client-side-programming/events/onclientdockpositionchanged
tags: onclientdockpositionchanged
published: True
position: 7
---

# OnClientDockPositionChanged



## 

The __OnClientDockPositionChanged__ client-side event occurs when the user has just changed the position of a __RadDock__ control by dragging it to a new location.This event occurs before the server-side __OnDockPositionChanged__ event or client-side __OnClientDragEnd__ event.

The event handler receives a single parameter: the instance of the __RadDock__ control that has just been moved. It's properties have already been updated to reflect its new position.

>note Unlike the server-side __OnDockPositionChanged__ event, __OnClientDockPositionChanged__ occurs even if the __RadDock__ control is dropped in the same position that it started.
>


The following example uses the __OnClientDockPositionChanged__ event to pin a __RadDock__ control if it is dragged to a floating position:

````ASPNET
	     
	<script type="text/javascript">
	    function PinFloats(dock)
	    {
	        var id = dock.get_dockZoneID();
	        if (id == "")
	        {
	            dock.set_pinned(true);
	        }
	    }
	</script>
	<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
	 <telerik:RadDockZone ID="RadDockZone1" runat="server">
	   <telerik:RadDock
	     ID="RadDock1"
	     runat="server"
	     OnClientDockPositionChanged="PinFloats"
	     DefaultCommands="All" />   
	 </telerik:RadDockZone>
	</telerik:RadDockLayout> 
				
````





# See Also

 * [OnClientDockPositionChanging]({%slug dock/client-side-programming/events/onclientdockpositionchanging%})

 * [OnClientDragEnd]({%slug dock/client-side-programming/events/onclientdragend%})

 * [OnClientDragStart]({%slug dock/client-side-programming/events/onclientdragstart%})

 * [ DockPositionChanged]({%slug dock/server-side-programming/events/-dockpositionchanged%})

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

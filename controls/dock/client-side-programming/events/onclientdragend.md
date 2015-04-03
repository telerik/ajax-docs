---
title: OnClientDragEnd
page_title: OnClientDragEnd | UI for ASP.NET AJAX Documentation
description: OnClientDragEnd
slug: dock/client-side-programming/events/onclientdragend
tags: onclientdragend
published: True
position: 5
---

# OnClientDragEnd



## 

The __OnClientDragEnd__ client-side event occurs when the user drops a __RadDock__ control after a drag operation. This event occurs after the __OnClientDockPositionChanged__ event.

The event handler receives a single parameter: the instance of the __RadDock__ control that the user just dropped.

The following example uses the __OnClientDragEnd__ event handler to restore a __RadDock__ control to its expanded state after it was collapsed for the duration of a drag operation:

````ASPNET
	     
	<script type="text/javascript">
	    function Collapse(dock, e)
	    {
	        dock.set_collapsed(true);
	    }
	    function Expand(dock, e)
	    {
	        dock.set_collapsed(false);
	    }
	</script>
	<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
	 <telerik:RadDockZone ID="RadDockZone1" runat="server">
	   <telerik:RadDock
	     ID="RadDock1"
	     runat="server"
	     OnClientDragStart="Collapse"
	     OnClientDragEnd="Expand" />   
	 </telerik:RadDockZone>
	</telerik:RadDockLayout> 
				
````



# See Also

 * [OnClientDragStart]({%slug dock/client-side-programming/events/onclientdragstart%})

 * [OnClientDrag]({%slug dock/client-side-programming/events/onclientdrag%})

 * [OnClientDockPositionChanged]({%slug dock/client-side-programming/events/onclientdockpositionchanged%})

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

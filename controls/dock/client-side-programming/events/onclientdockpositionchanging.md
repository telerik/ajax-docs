---
title: OnClientDockPositionChanging
page_title: OnClientDockPositionChanging | RadDock for ASP.NET AJAX Documentation
description: OnClientDockPositionChanging
slug: dock/client-side-programming/events/onclientdockpositionchanging
tags: onclientdockpositionchanging
published: True
position: 6
---

# OnClientDockPositionChanging




The **OnClientDockPositionChanging** client-side event occurs when the user tries to drop the **RadDock** control in a new location. If the new location is inside a docking zone, the docking zone shows a placeholder at this point, but has not yet docked the **RadDock** control.

The event handler receives two parameters:

1. The instance of the **RadDock** control that has just been dragged.

1. An eventArgs parameter containing the following methods:
	* **set_cancel** lets you prevent the control from moving to the new location. If you call set_cancel(true), the **RadDock** control snaps back to its starting point, and no further events occur.
	* **get_cancel** returns a boolean value indicating whether the drop operation was cancelled.

The following example uses the **OnClientDockPositionChanging** event to cancel a move when a **RadDock** control is the last control in its old docking zone:

````ASP.NET
<script type="text/javascript">
    function KeepLastDock(dock, e)
    {
        var id = dock.get_dockZoneID();
        if (id != "")
        {
            var zone = $find(id);
            var docks = zone.get_docks();
            if (docks.length == 0)
                e.set_cancel(true);
        }
    }
</script>
<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
 <telerik:RadDockZone ID="RadDockZone1" runat="server">
   <telerik:RadDock
      ID="RadDock1"
      runat="server"
      OnClientDockPositionChanging="KeepLastDock" />
   <telerik:RadDock
      ID="RadDock2"
      runat="server"
      OnClientDockPositionChanging="KeepLastDock" />
   <telerik:RadDock
      ID="RadDock3"
      runat="server"
      OnClientDockPositionChanging="KeepLastDock" />         
 </telerik:RadDockZone>
 <telerik:RadDockZone ID="RadDockZone2" runat="server" >
 </telerik:RadDockZone>
</telerik:RadDockLayout> 
````



# See Also

 * [OnClientDockPositionChanged]({%slug dock/client-side-programming/events/onclientdockpositionchanged%})

 * [OnClientDragEnd]({%slug dock/client-side-programming/events/onclientdragend%})

 * [ DockPositionChanged]({%slug dock/server-side-programming/events/dockpositionchanged%})

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

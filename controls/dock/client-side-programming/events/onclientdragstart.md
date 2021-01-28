---
title: OnClientDragStart
page_title: OnClientDragStart - RadDock
description: Check our Web Forms article about OnClientDragStart.
slug: dock/client-side-programming/events/onclientdragstart
tags: onclientdragstart
published: True
position: 4
---

# OnClientDragStart




The **OnClientDragStart** client-side event occurs when the user begins to drag the **RadDock** control from its current position.

The event handler receives a single parameter: the instance of the **RadDock** control that the user is starting to drag.

The following example uses the **OnClientDragStart** event handler to make the **RadDock** control transparent for the duration of a drag operation:

````ASP.NET
<script type="text/javascript">
    function OnClientDragStart(sender)
    {
        var dockElement = sender.get_element();
        dockElement.style.opacity = "0.7";
        dockElement.style.mozOpacity = "0.7";
        dockElement.style.filter = "alpha(opacity=70)";
    }

    function OnClientDragEnd(sender)
    {
        var dockElement = sender.get_element();
        dockElement.style.opacity = "";
        dockElement.style.mozOpacity = "";
        dockElement.style.filter = "";
    }
</script>
<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
 <telerik:RadDockZone ID="RadDockZone1" runat="server">
   <telerik:RadDock
     ID="RadDock1"
     runat="server"
     OnClientDragStart="OnClientDragStart"
     OnClientDragEnd="OnClientDragEnd" />   
 </telerik:RadDockZone>
</telerik:RadDockLayout>
````



# See Also

 * [OnClientDrag]({%slug dock/client-side-programming/events/onclientdrag%})

 * [OnClientDragEnd]({%slug dock/client-side-programming/events/onclientdragend%})

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

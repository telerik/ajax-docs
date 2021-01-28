---
title: OnClientDrag
page_title: OnClientDrag - RadDock
description: Check our Web Forms article about OnClientDrag.
slug: dock/client-side-programming/events/onclientdrag
tags: onclientdrag
published: True
position: 3
---

# OnClientDrag




The **OnClientDrag** client-side event occurs when the user moves the mouse while dragging a **RadDock** control.

The event handler receives a single parameter: the instance of the **RadDock** control that is being dragged.

The following example uses the **OnClientDrag** event handler to update a label during a drag operation:

````ASP.NET     
<script type="text/javascript">
    function Drag(dock)
    {
        var label = document.getElementById("<%= Label1.ClientID %>");
        var now = new Date();
        var timeStr = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
        label.innerHTML = dock.get_uniqueID() + ": " + timeStr;
    }
</script>
<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
 <telerik:RadDockZone ID="RadDockZone1" runat="server">
   <telerik:RadDock
     ID="RadDock1"
     runat="server"
     OnClientDrag="Drag" />   
 </telerik:RadDockZone>
</telerik:RadDockLayout>
<asp:Label ID="Label1" runat="server" Text="Drag Info"></asp:Label>
````



# See Also

 * [OnClientDragStart]({%slug dock/client-side-programming/events/onclientdragstart%})

 * [OnClientDragEnd]({%slug dock/client-side-programming/events/onclientdragend%})

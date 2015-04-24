---
title: OnClientInitialize
page_title: OnClientInitialize | RadDock for ASP.NET AJAX Documentation
description: OnClientInitialize
slug: dock/client-side-programming/events/onclientinitialize
tags: onclientinitialize
published: True
position: 1
---

# OnClientInitialize


The **OnClientInitialize** client-side event occurs when when the client-side object for the **RadDock** control is initialized.

The event handler receives a single parameter: the instance of the **RadDock** control that has just been initialized.

Use an **OnClientInitialize** event handler to perform your own initialization. For example, the following event handler uses the **OnClientInitialize** event to set a dock handle for a **RadDock** control with its **DockHandle** property set to "None":

````ASP.NET
<script type="text/javascript">
    function SetHandleDock(dock, args)
    {
        dock.set_handle(document.getElementById("DragImage"));
    }
</script>
<telerik:RadDockLayout runat="server" id="RadDockLayout1">
 <telerik:RadDockZone runat="server" id="RadDockZone1"  >
   <telerik:RadDock
     id="RadDock1"
     runat="server"
     width="200px"
     DockHandle="None"
     OnClientInitialize="SetHandleDock">
     <contenttemplate>
       <div style="padding:11px;text-align:center;">
         <img id="DragImage" alt="Drag Here" src="Img/drag.gif" style="cursor: move;" />
         <br/>
         You can drag this object using the image above.
       </div>
     </contenttemplate>
   </telerik:RadDock>
 </telerik:RadDockZone>
</telerik:RadDockLayout>
````



# See Also

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

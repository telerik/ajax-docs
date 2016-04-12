---
title: OnClientResizeStart
page_title: OnClientResizeStart | RadDock for ASP.NET AJAX Documentation
description: OnClientResizeStart
slug: dock/client-side-programming/events/onclientresizestart
tags: onclientresizestart
published: True
position: 8
---

# OnClientResizeStart




The client-side event **OnClientResizeStart** fires when the RadDock's property **Resizable** is set to **true** and its resizing has started.

The event handler receives a single parameter: the instance of the RadDock control that is being resized.

The following example uses the **OnClientResizeStart** event handler to update a label when a resize operation starts:

````ASP.NET
<script type="text/javascript">
	function OnClientResizeStart(dock) {
		var label = document.getElementById("<%= lblMessage.ClientID %>");
		var now = new Date();
		var timeStr = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
		label.innerHTML = "The resizing of the RadDock with ID " + dock.get_uniqueID() + " started at " + timeStr + ".";
	}
</script>
<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
	<telerik:RadDockZone ID="RadDockZone1" runat="server" Height="200px" Width="200px">
		<telerik:RadDock RenderMode="Lightweight" ID="RadDock1" runat="server" Resizable="true" OnClientResizeStart="OnClientResizeStart"
			Height="100px" Width="200px" />
	</telerik:RadDockZone>
</telerik:RadDockLayout>
<asp:Label ID="lblMessage" runat="server"></asp:Label>
````



# See Also

 * [OnClientResizeEnd]({%slug dock/client-side-programming/events/onclientresizeend%})

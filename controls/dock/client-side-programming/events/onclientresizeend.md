---
title: OnClientResizeEnd
page_title: OnClientResizeEnd | RadDock for ASP.NET AJAX Documentation
description: OnClientResizeEnd
slug: dock/client-side-programming/events/onclientresizeend
tags: onclientresizeend
published: True
position: 9
---

# OnClientResizeEnd



The client-side event **OnClientResizeEnd** fires when the RadDock's property **Resizable** is set to **true** and its resizing has ended.

The event handler receives a single parameter: the instance of the RadDock control that is being resized.

The following example uses the **OnClientResizeEnd** event handler to update a label when a resize operation ends:

````ASP.NET
<script type="text/javascript">
	function OnClientResizeEnd(dock) {
		var label = document.getElementById("<%= lblMessage.ClientID %>");
		var now = new Date();
		var timeStr = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
		label.innerHTML = "The resizing of RadDock with ID " + dock.get_uniqueID() + " ended at " + timeStr + ".";
	}
</script>
<telerik:RadDockLayout ID="RadDockLayout1" runat="server">
	<telerik:RadDockZone ID="RadDockZone1" runat="server" Height="200px" Width="200px">
		<telerik:RadDock RenderMode="Lightweight" ID="RadDock1" runat="server" Resizable="true" OnClientResizeEnd="OnClientResizeEnd"
			Height="100px" Width="200px" />
	</telerik:RadDockZone>
</telerik:RadDockLayout>
<asp:Label ID="lblMessage" runat="server"></asp:Label>
````



# See Also

 * [OnClientResizeStart]({%slug dock/client-side-programming/events/onclientresizestart%})

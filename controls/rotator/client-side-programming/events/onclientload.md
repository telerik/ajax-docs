---
title: OnClientLoad
page_title: OnClientLoad | RadRotator for ASP.NET AJAX Documentation
description: OnClientLoad
slug: rotator/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

The **OnClientLoad** client-side event occurs after the RadRotator loads on the page.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

This event can be used for executing custom code when the RadRotator is loaded. The example below sets the ScrollDuration of the rotator control to 500.

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(sender, eventArgs) {
		sender.set_scrollDuration(500);
	}
</script>
<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
	ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientLoad="OnClientLoad">
	<ItemTemplate>
		<img src=".........." alt="" />
	</ItemTemplate>
</telerik:RadRotator>
````



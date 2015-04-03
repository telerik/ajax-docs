---
title: OnClientItemsRequested
page_title: OnClientItemsRequested | UI for ASP.NET AJAX Documentation
description: OnClientItemsRequested
slug: rotator/client-side-programming/events/onclientitemsrequested
tags: onclientitemsrequested
published: True
position: 6
---

# OnClientItemsRequested



## 

The __ItemsRequested__ event is related the[Load On Demand](http://demos.telerik.com/aspnet-ajax/rotator/examples/loadondemand/defaultcs.aspx)functionality of the RadRotator. It is fired when the items are successfully loaded.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

This event can be used for executing custom code after the items of the RadRotator are loaded. The example below demonstrates how to show a count of all items every time new ones are loaded.

````ASPNET
		<script type="text/javascript">
			function OnClientItemsRequested(sender, eventArgs) {
				var eventLog = $get("eventLog");
				eventLog.innerHTML = "A request for items had just successfully finished! The total count of the items now is: " + sender.get_items().length;
			}
		</script>
		<telerik:RadRotator ID="RadRotator1" runat="server" Width="220px" Height="135px"
			ItemHeight="135" ItemWidth="110" CssClass="positionCenter" ScrollDuration="500"
			OnClientItemsRequested="OnClientItemsRequested">
			<WebServiceSettings Path="RotatorWebService.asmx" Method="GetRotatorData" />
		</telerik:RadRotator>
		<div id="eventLog"></div>
````



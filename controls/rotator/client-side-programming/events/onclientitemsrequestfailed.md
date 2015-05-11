---
title: OnClientItemsRequestFailed
page_title: OnClientItemsRequestFailed | RadRotator for ASP.NET AJAX Documentation
description: OnClientItemsRequestFailed
slug: rotator/client-side-programming/events/onclientitemsrequestfailed
tags: onclientitemsrequestfailed
published: True
position: 7
---

# OnClientItemsRequestFailed

The **ItemsRequestFailed** event is related the [Load On Demand](http://demos.telerik.com/aspnet-ajax/rotator/examples/loadondemand/defaultcs.aspx) functionality of the RadRotator. It is fired when the request has failed.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type Telerik.Web.UI.**RadRotatorErrorEventArgs**, containing the following properties and methods:

	* get_errorMessage() - returns the error message that describes the specific problem.

	* get_cancelErrorAlert() - returns a bool value that indicates whether the error message will be displayed. True means the massage will not be shown.

	* set_cancelErrorAlert(*shouldCancel*) - sets a bool value that indicates whether the error message will be displayed. Setting true means the massage will not be shown.

This event can be used for executing custom code if there is a problem with the request for the RadRotator’s items. The example below demonstrates how to disable the error message alert and how to display the message on the page markup.

````ASP.NET
<script type="text/javascript">
	function OnClientItemsRequestFailed(sender, eventArgs) {
		var errorMessage = eventArgs.get_errorMessage();
		eventArgs.set_cancelErrorAlert(true);
		$get('eventLog').innerHTML = errorMessage;
	}
</script>
<telerik:RadRotator ID="RadRotator1" runat="server" Width="220px" Height="135px"
	ItemHeight="135" ItemWidth="110" CssClass="positionCenter" ScrollDuration="500"
	OnClientItemsRequestFailed="OnClientItemsRequestFailed">
	<WebServiceSettings Path="RotatorWebService.asmx" Method="GetRotatorData" />
</telerik:RadRotator>
<div id="eventLog"></div>
````



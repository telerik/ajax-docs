---
title: OnClientDataLoadingError
page_title: OnClientDataLoadingError | RadTileList for ASP.NET AJAX Documentation
description: OnClientDataLoadingError
slug: tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloadingerror
tags: onclientdataloadingerror
published: True
position: 2
---

# OnClientDataLoadingError



## 

The **OnClientDataLoadingError** event is fired by the **RadLiveTile** when its data request hasfailed and has returned an error. You can check the error message if one is present and prevent the alert box that will usually show it.The format of the informational alert is *"RadLiveTile data request failed :\n Exception=" + errorMessage*.

The event handler receives two arguments:

1. The **RadLiveTile** that fired the event

1. An event arguments object that exposes the following members:


>caption OnClientDataLoadingError event arguments object members

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_cancelErrorAlert()** |bool||Returns a value that indicates whether the error alert will be shown.|
| **get_errorMessage()** |string||Returns the error message sent from the server. If no such information is available the	LiveTile will return *"No error data available"* .|
| **set_cancelErrorAlert()** ||bool|Sets a flag that indicates whether the alert with the server error message will be shown to the user.	Defaults to *false* , so an alert will be shown.|

The following example shows how the error alert can be prevented based on a the condition that the server error responsecontains the `500` keyword. This is the generic status code for a server error, so we assume there is noconcrete information to show:

````JavaScript
		<script type="text/javascript">
			function OnClientDataLoadingError(sender, args)
			{
				if (args.get_errorMessage().indexOf("500") > -1)
					args.set_cancelErrorAlert(true);
			}
		</script>
		<telerik:RadLiveTile OnClientDataLoadingError="OnClientDataLoadingError" ID="RadLiveTile1"
							 runat="server" UpdateInterval="7000">
			<WebServiceSettings Path="TrafficInformation.asmx" Method="GetTrafficDataPerPerson"></WebServiceSettings>
			<ClientTemplateAnimationSettings Animation="None" AnimationDuration="1000" Easing="" />
			<ClientTemplate>
				<div style="width:150px; height: 150px;">
					<img alt="" src="Img/Customers/#= CustomerID #.jpg" />
					<div style="color:black; font-weight: bold; position: absolute; bottom: 5px;">Violations: #= Violations #</div>
					</div>
			</ClientTemplate>
		</telerik:RadLiveTile>
````



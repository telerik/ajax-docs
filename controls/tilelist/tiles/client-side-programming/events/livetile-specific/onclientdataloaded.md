---
title: OnClientDataLoaded
page_title: OnClientDataLoaded | UI for ASP.NET AJAX Documentation
description: OnClientDataLoaded
slug: tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloaded
tags: onclientdataloaded
published: True
position: 0
---

# OnClientDataLoaded



## 

The __OnClientDataLoaded__ event is fired by the __RadLiveTile__ when its data request hasreturned successfully. It can be used to change the information according to some custom logic or just for notification about the successof the operation.

The event handler receives two arguments:

1. The __RadLiveTile__ that fired the event

1. An event arguments object that exposes the following members:


>caption OnClientDataLoaded event arguments object members

|  __Name__  |  __Return type__  |  __Arguments__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_data()__ |object||Returns the data object that is received from the service request.|
| __set_data()__ ||object|Sets a new data object that will be bound to the tile's template. It can be a modification of the original data.|

The following example shows how some data can be modified according to a condition so it is presented to the user in a more	meaningful manner:

````JavaScript
		<script type="text/javascript">
			function OnClientDataLoaded(sender, args)
			{
				var data = args.get_data();
				if (data.Violations == 0)
				{
					data.Violations = "No traffic violations.";
				}
				args.set_data(data);
			}
		</script>
		<telerik:RadLiveTile OnClientDataLoaded="OnClientDataLoaded" ID="RadLiveTile1"
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



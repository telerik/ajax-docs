---
title: OnClientTemplateDataBound
page_title: OnClientTemplateDataBound | UI for ASP.NET AJAX Documentation
description: OnClientTemplateDataBound
slug: tilelist/tiles/client-side-programming/events/livetile-specific/onclienttemplatedatabound
tags: onclienttemplatedatabound
published: True
position: 3
---

# OnClientTemplateDataBound



## 

The __OnClientTemplateDataBound__ event is fired by the __RadLiveTile__ when the data from a successful requestis evaluated and placed in its __ClientTemplate__. It can be used to change the information according to some custom logic or just for notification about the successof the operation.

The event handler receives two arguments:

1. The __RadLiveTile__ that fired the event

1. An event arguments object that exposes the following members:


>caption OnClientDataLoaded event arguments object members

|  __Name__  |  __Return type__  |  __Arguments__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_dataItem()__ |object||Returns the data object that is received from the service request.|
| __get_html()__ |string||Returns the HTML the RadLiveTile is about to render.|
| __get_template()__ |string||Returns the template the RadLiveTile uses.|
| __set_html(string)__ ||string|Sets a new HTML that will be placed in the tile. It can be a modification of the original content.|

The following example shows how to obtain and how to change the HTML that will be rendered in the tile:

````JavaScript
		<script type="text/javascript">
			function OnClientTemplateDataBound(sender, args)
			{
				//modify the template that will be rendered in the tile
				var updatedHtml = "<div style=\"position: absolute; top: " + Math.floor(Math.random() * 101) + "px; left: " + Math.floor(Math.random() * 101)
					+ "\">" + args.get_html() + "</div>";
				args.set_html(updatedHtml);
			}
		</script>
		<div id="log"></div>
		<telerik:RadLiveTile OnClientTemplateDataBound="OnClientTemplateDataBound" ID="RadLiveTile1"
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



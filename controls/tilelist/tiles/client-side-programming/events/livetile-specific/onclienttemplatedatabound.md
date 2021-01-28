---
title: OnClientTemplateDataBound
page_title: OnClientTemplateDataBound - RadTile
description: Check our Web Forms article about OnClientTemplateDataBound.
slug: tilelist/tiles/client-side-programming/events/livetile-specific/onclienttemplatedatabound
tags: onclienttemplatedatabound
published: True
position: 3
---

# OnClientTemplateDataBound




The **OnClientTemplateDataBound** event is fired by the **RadLiveTile** when the data from a successful request is evaluated and placed in its **ClientTemplate**. It can be used to change the information according to some custom logic or just for notification about the success of the operation.

The event handler receives two arguments:

1. The **RadLiveTile** that fired the event

1. An event arguments object that exposes the following members:


>caption OnClientDataLoaded event arguments object members

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_dataItem()** |object||Returns the data object that is received from the service request.|
| **get_html()** |string||Returns the HTML the RadLiveTile is about to render.|
| **get_template()** |string||Returns the template the RadLiveTile uses.|
| **set_html(string)** ||string|Sets a new HTML that will be placed in the tile. It can be a modification of the original content.|

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



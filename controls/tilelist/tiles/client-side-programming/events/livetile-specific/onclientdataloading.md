---
title: OnClientDataLoading
page_title: OnClientDataLoading - RadTile
description: Check our Web Forms article about OnClientDataLoading.
slug: tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloading
tags: onclientdataloading
published: True
position: 1
---

# OnClientDataLoading



The **OnClientDataLoading** event is fired by the **RadLiveTile** when its data request is about to be initiated. You can cancel it to prevent the request. The **Value** the tile passes to the service can also be changed here.

The event handler receives two arguments:

1. The **RadLiveTile** that fired the event

1. An event arguments object that exposes the following members:


>caption OnClientDataLoading event arguments object members

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_cancel()** |bool||Returns a flag that indicates whether the request will be canceled.|
| **get_value()** |string / object||Returns the Value property of the LiveTile that will be sent to the service. It could have been changed through	the *set_value()* method.|
| **set_cancel()** ||bool|Sets a flag that indicates whether the request will be canceled.	If *true* is passed the request will not be performed.|
| **set_value()** ||string / object|Sets a new string that will be passed as an argument to the service.For OData services this is a complex object that can be used to pass/edit information about the datasource, e.g. add a filter. In this case	the Value object exposes the arguments of the [Requesting client-side event]({%slug odatadatasource/client-side-programming/events/onrequesting%}) of the **RadODataDataSource** control.	This means it is also possible to directly filter the datasource control in its own event. An example of this is available in the [Loading Data]({%slug tilelist/tiles/live-tile/loading-data%}) article. You can see how to use the RadLiveTile event in **Example 1**.|

**Example 1**: Filtering RadODataDataSource through a RadLiveTile:
````JavaScript
<script type="text/javascript">
	function OnClientDataLoading(sender, args)
	{
		args.get_value().filter.filters.push({
			field: "CategoryID",
			operator: "eq",
			value: Math.floor(Math.random() * 9)
		});
	}
</script>
````


The following code snippet shows how to cancel the request according to a custom condition which is emulated in a hardcoded flag for the purpose of this example:

````JavaScript
<script type="text/javascript">
	function OnClientDataLoading(sender, args)
	{
		var shouldCancel = true; //hardcoded to always cancel the event for demonstration purposes
		args.set_cancel(shouldCancel);
	}
</script>
<telerik:RadLiveTile OnClientDataLoading="OnClientDataLoading" ID="RadLiveTile1"
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



The code snippet below shows how to change the value for a web service request. For more information examine the *Change the Value for the Given Request* section at the end of the [Pass Data to the Web Service article]({%slug tilelist/tiles/live-tile/pass-data-to-the-web-service%}).

````JavaScript
<script type="text/javascript">
	function OnClientDataLoading(sender, args)
	{
		//Change the value of the "Value" key
		//in this example, the new string that is set is "myNewValue"
		args.set_value({
			"Key": "Value",
			"Value": "myNewValue"
		});
	}
</script>
````



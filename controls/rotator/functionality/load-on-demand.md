---
title: Load On Demand
page_title: Load On Demand | UI for ASP.NET AJAX Documentation
description: Load On Demand
slug: rotator/functionality/load-on-demand
tags: load,on,demand
published: True
position: 2
---

# Load On Demand



## 

The RadRotator supports __Load On Demand__ functionality through a WebService.To enable this feature you should create a WebService that will control the displaying items and attach it to the RadRotator control.The inner property __WebServiceSettings__ of the RadRotator has two properties for this purpose:

* __Path__ - sets the location of the WebService file;

* __Method__ - sets the WebService method that implements the RadRotator logic for displaying the items;

Since the RadRotator functionality is entirely controlled by the WebMethod, you can also return different number of items on each request.

Below you can find an example of the setup that is used with enabled __Load on Demand__:

````ASPNET
	    <telerik:RadRotator ID="RadRotator1" runat="server" Width="220px" Height="135px"
	       ItemHeight="135" ItemWidth="110" CssClass="positionCenter" ScrollDuration="500" >
	       <WebServiceSettings Path="RotatorWebService.asmx" Method="GetRotatorData" />
	    </telerik:RadRotator>
````



The attached WebService should have the following signature:



````C#
		[ScriptService]
		public class WebServiceName : WebService
		{
			[WebMethod]
			public RadRotatorItemData[] GetRotatorData(int itemIndex, string argument)
			{
				List<RadRotatorItemData> result = new List<RadRotatorItemData>();
				//.......
				RadRotatorItemData item = new RadRotatorItemData();
				item.Html = myCustomHtml;
				result.Add(item);
				//.......
				return result.ToArray();
			}
		}
	
````
````VB
		<ScriptService()> _
		Public Class WebServiceName
			Inherits WebService
			<WebMethod()> _
			Public Function GetRotatorData(itemIndex As Integer) As RadRotatorItemData()
				Dim result As New List(Of RadRotatorItemData)()
				'.......
				Dim item As New RadRotatorItemData()
				item.Html = myCustomHtml
				result.Add(item)
				'.......
				Return result.ToArray()
			End Function
		End Class
	#End Region
	
	#Region "rotator-load-on-demand-VB_1"
		<WebMethod()> _
		Public Function GetRotatorData(itemIndex As Integer, argument As String) As RadRotatorItemData()
			'.......
		End Function
	#End Region
	
	End Class
````



The HTML, which should be rendered in the item, is assigned to the Html property of the __RadRotatorItemData__ object.

There is an option for passing an argument to the WebService method. This can be achieved via the RadRotator’s client event __OnClientItemsRequesting__. The argument is sent in the handler of this event, as demonstrated below:

````ASPNET
		<script type="text/javascript">
			function OnClientItemsRequesting(sender, args) {
				args.set_argument("Item");
			}
		</script>
````



The passed argument can be accessed through the __argument__ parameter of the WebService method.



````C#
		[WebMethod]
		public RadRotatorItemData[] GetRotatorData(int itemIndex, string argument)
		{
			//.......
		}
````
````VB
		<WebMethod()> _
		Public Function GetRotatorData(itemIndex As Integer, argument As String) As RadRotatorItemData()
			'.......
		End Function
	#End Region
	
	End Class
````



There are three client events that are related to the __Load On Demand__ functionality:

* [OnClientItemsRequested]({%slug rotator/client-side-programming/events/onclientitemsrequested%}) - fires when the items of the control are successfully loaded on demand.

* [OnClientItemsRequestFailed]({%slug rotator/client-side-programming/events/onclientitemsrequestfailed%}) - fires when the request for loading items on demand fails.

* [OnClientItemsRequesting]({%slug rotator/client-side-programming/events/onclientitemsrequesting%}) - fires before the items of the control are loaded on demand.

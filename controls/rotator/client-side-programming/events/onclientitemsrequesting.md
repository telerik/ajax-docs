---
title: OnClientItemsRequesting
page_title: OnClientItemsRequesting | UI for ASP.NET AJAX Documentation
description: OnClientItemsRequesting
slug: rotator/client-side-programming/events/onclientitemsrequesting
tags: onclientitemsrequesting
published: True
position: 8
---

# OnClientItemsRequesting



## 

The __ItemsRequesting__ event is related to the[Load On Demand](http://demos.telerik.com/aspnet-ajax/rotator/examples/loadondemand/defaultcs.aspx)functionality of the RadRotator. It is fired before the items of the control are loaded, i.e. request to the server is still not sent.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type __Sys.CancelEventArgs()__, containing the following properties and methods:

* get_argument() - returns the __argument__ parameter of the WebService method that loads the items of the rotator control.

* set_argument(*argument*) - sets the __argument__ parameter of the WebService method that loads the items of the rotator control.

* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. True means the event will be canceled.

This event can be used for executing custom code before the items of the RadRotator are loaded. The example below shows how to implement a confirmation before the next set of items is loaded and how to pass a custom argument to the WebService method.

````ASPNET
		<script type="text/javascript">
			function OnClientItemsRequesting(sender, eventArgs) {
				eventArgs.set_cancel(!window.confirm("Do you want to load the next items?"));
				eventArgs.set_argument("value");
			}
		</script>
		<telerik:RadRotator ID="RadRotator1" runat="server" Width="220px" Height="135px"
			ItemHeight="135" ItemWidth="110" CssClass="positionCenter" ScrollDuration="500"
			OnClientItemsRequesting="OnClientItemsRequesting">
			<WebServiceSettings Path="RotatorWebService.asmx" Method="GetRotatorData" />
		</telerik:RadRotator>
````



The value, passed to the WebService method, can be accessed via the __argument__ parameter of that method.

>tabbedCode

````C#
		[WebMethod]
		public RadRotatorItemData[] GetRotatorData(int itemIndex, string argument)
		{
			// method body
		}
````
````VB
		<WebMethod()> _
		Public Function GetRotatorData(itemIndex As Integer, argument As String) As RadRotatorItemData()
			' method body
		End Function
	#End Region
	
	End Class


>end

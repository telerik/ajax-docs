---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: rotator/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

__RadRotator__ provides the following client-side events:

* [OnClientLoad]({%slug rotator/client-side-programming/events/onclientload%}) - fires after the RadRotator loads on the page.

* [OnClientItemClicked]({%slug rotator/client-side-programming/events/onclientitemclicked%}) - fires when an item of the RadRotator control is clicked.

* [OnClientItemClicking]({%slug rotator/client-side-programming/events/onclientitemclicking%}) - fires when an item of the the RadRotator control is clicked, immediately after the mouse button is released. It can be canceled.

* [OnClientItemShowing]({%slug rotator/client-side-programming/events/onclientitemshowing%}) - fires when an item of the RadRotator control is about to be shown. It can be canceled.

* [OnClientItemShown]({%slug rotator/client-side-programming/events/onclientitemshown%}) - fires when an item of the RadRotator control is shown.

* [OnClientItemsRequested]({%slug rotator/client-side-programming/events/onclientitemsrequested%}) - fires when the items of the control are successfully loaded on demand.

* [OnClientItemsRequestFailed]({%slug rotator/client-side-programming/events/onclientitemsrequestfailed%}) - fires when the request for loading items on demand fails.

* [OnClientItemsRequesting]({%slug rotator/client-side-programming/events/onclientitemsrequesting%}) - fires before the items of the control are loaded on demand.

* [OnClientMouseOut]({%slug rotator/client-side-programming/events/onclientmouseout%}) - fires when the mouse pointer leaves the control.

* [OnClientMouseOver]({%slug rotator/client-side-programming/events/onclientmouseover%}) - fires when the user moves the mouse pointer over the control.

The event handler method for any of the events can be set on the server and on the client.

__Server-side__

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event. Here is an example:

````ASPNET
		<script type="text/javascript">
			function OnClientItemClicked(sender, eventArgs) {
				alert("RadRotator was clicked.");
			}
		</script>
		<telerik:RadRotator ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
			ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientItemClicked="OnClientItemClicked">
			<ItemTemplate>
				<img src=".........." alt="" />
			</ItemTemplate>
		</telerik:RadRotator>
	
````



__Client-side__

To handle the desired event, the user should use the respective __add_<eventName>(handlerFunction)__ to attach the desired handler (i.e. __add_clicked__ for the clicked event), where the parameter *handlerFunction* should be of type __function__. To remove a handler that has been added previously, the respective __remove_<eventName>(handlerFunction)__ should be used. Here is an example showing how to add handler on the client:

````ASPNET
		<script type="text/javascript">
			function Click(rotator, args) {
				alert("Rotator was clicked");
			}
			function pageLoad() {
				var rotator = $find("<%=RadRotator1.ClientID %>");
				rotator.add_itemClicked(Click);
			}
		</script>
		<telerik:RadRotator ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
			ItemHeight="113px" Width="150px" ItemWidth="150px">
			<ItemTemplate>
				<img src=".........." alt="" />
			</ItemTemplate>
		</telerik:RadRotator>
````



# See Also

 * [OnClientLoad]({%slug rotator/client-side-programming/events/onclientload%})

 * [OnClientItemClicked]({%slug rotator/client-side-programming/events/onclientitemclicked%})

 * [OnClientItemClicking]({%slug rotator/client-side-programming/events/onclientitemclicking%})

 * [OnClientItemShowing]({%slug rotator/client-side-programming/events/onclientitemshowing%})

 * [OnClientItemShown]({%slug rotator/client-side-programming/events/onclientitemshown%})

 * [OnClientItemsRequested]({%slug rotator/client-side-programming/events/onclientitemsrequested%})

 * [OnClientItemsRequestFailed]({%slug rotator/client-side-programming/events/onclientitemsrequestfailed%})

 * [OnClientItemsRequesting]({%slug rotator/client-side-programming/events/onclientitemsrequesting%})

 * [OnClientMouseOut]({%slug rotator/client-side-programming/events/onclientmouseout%})

 * [OnClientMouseOver]({%slug rotator/client-side-programming/events/onclientmouseover%})

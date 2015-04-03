---
title: OnClientBeforeClose
page_title: OnClientBeforeClose | UI for ASP.NET AJAX Documentation
description: OnClientBeforeClose
slug: window/client-side-programming/events/onclientbeforeclose
tags: onclientbeforeclose
published: True
position: 4
---

# OnClientBeforeClose



## 

The __OnClientBeforeClose__ event of the __RadWindow__ control fires when it is about to close. This event can be cancelled (see __Example 1__) to prevent the closingoperation (and the [OnClientClose event]({%slug window/client-side-programming/events/onclientclose%}) from firing). The close operation can be initiated from the userby clicking or tapping on the manual close button (X) in the top right-hand side corner of the title bar, or by the developer via calling the`close(optionalArguments)`[client-side method]({%slug window/client-side-programming/radwindow-object%}) of the control.

You can also use this event to [ask the user to confirm whether the dialog should close]({%slug window/application-scenarios/confirm-closing%})(e.g., if there is no data supplied as an argument).

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that exposes the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_argument||object|This is the argument passed to the`close()`method of the RadWindow by the developer.|
|get_cancel||boolean|Gets a value indicating whether the event is going to be cancelled.|
|set_cancel|boolean||Sets a value indicating whether the event is going to be cancelled.Pass *true* to cancel the event.The method takes the following arguments:

1. boolean—a value that indicates whether the event is to be cancelled.|

__Example 1__: Cancelling the OnClientBeforeClose event of the RadWindow to prevent its closing operation.

````XML
			<telerik:RadWindow runat="server" ID="RadWindow1" OnClientBeforeClose="OnClientBeforeClose" VisibleOnPageLoad="true"></telerik:RadWindow>
			<script type="text/javascript">
				function OnClientBeforeClose(sender, args) {
					args.set_cancel(true);//you cannot close this RadWindow
				}
			</script>
````



# See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [Confirm Closing]({%slug window/application-scenarios/confirm-closing%})

---
title: OnClientBeforeShow
page_title: OnClientBeforeShow | RadWindow for ASP.NET AJAX Documentation
description: OnClientBeforeShow
slug: window/client-side-programming/events/onclientbeforeshow
tags: onclientbeforeshow
published: True
position: 5
---

# OnClientBeforeShow

The **OnClientBeforeShow** event of the **RadWindow** control fires when it is about to show.You can cancel the event to prevent the dialog from showing (**Example 1**). Doing so will prevent its markup from being generated.You cannot modify the HTML of the popup element in this event because it does not exist yet.

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that exposes the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_cancel||boolean|Gets a value indicating whether the event is going to be cancelled.|
|set_cancel|boolean||Sets a value indicating whether the event is going to be cancelled.Pass *true* to cancel the event.The method takes the following arguments: **boolean**—a value that indicates whether the event is to be cancelled.|

>caption Example 1: Cancelling the OnClientBeforeShow event of the RadWindow to prevent it from showing up.

````ASP.NET
<asp:Button ID="Button1" Text="show the dialog" runat="server" />
<telerik:RadWindow runat="server" ID="RadWindow1" OnClientBeforeShow="OnClientBeforeShowHandler" OpenerElementId="Button1"></telerik:RadWindow>
<script type="text/javascript">
	function OnClientBeforeShowHandler(sender, args) {
		var shouldShow = confirm("Should this dialog show up?");
		args.set_cancel(!shouldShow);
	}
</script>
````



## See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

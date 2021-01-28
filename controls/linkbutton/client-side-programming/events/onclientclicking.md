---
title: OnClientClicking
page_title: OnClientClicking - RadLinkButton
description: Check our Web Forms article about OnClientClicking.
slug: linkbutton/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 2
---

# OnClientClicking

The clicking event occurs when the RadLinkButton control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadLinkButton control

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonCancelEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

This event comes handy in scenarios when the user wants to cancel the page navigation, or prevent execution of the other client-side events based on a certain condition. For example we ask the user if she wants to navigate to the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

>caption Example 1: Handling OnClientClicking event in RadLinkButton.

````ASP.NET
<script type="text/javascript">
	function Clicking(sender, args) {
		args.set_cancel(!window.confirm("Are you sure you want to navigate to the '" + sender.get_navigateUrl() + "' page?"));
	}
</script>
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Navigate to Page" OnClientClicking="Clicking" NavigateUrl="https://www.telerik.com">
</telerik:RadLinkButton>
````

# See Also

 * [RadLinkButton Object]({%slug linkbutton/client-side-programming/linkbutton-object%})
 * [Telerik.Web.UI.ButtonCancelEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs)
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})

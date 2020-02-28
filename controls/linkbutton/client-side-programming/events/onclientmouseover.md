---
title: OnClientMouseOver
page_title: OnClientMouseOver | RadLinkButton for ASP.NET AJAX Documentation
description: OnClientMouseOver
slug: linkbutton/client-side-programming/events/onclientmouseover
tags: onclientmouseover
published: True
position: 4
---

# OnClientMouseOver

The **mouseOver** event is fired when the user moves the mouse pointer over the control.

The event handler receives two parameters:

1. The instance of the clicked RadLinkButton control

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs).

>caption Example 1: Handling OnClientMouseOver event in RadLinkButton.

````ASP.NET
<script type="text/javascript">
	function mouseOver(sender, args) {
		window.alert("You have moved mouse over the button");
	}
</script>
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Navigate to Page" OnClientMouseOver="mouseOver" NavigateUrl="https://www.telerik.com">
</telerik:RadLinkButton>
````

# See Also

 * [RadLinkButton Object]({%slug linkbutton/client-side-programming/linkbutton-object%})
 * [Telerik.Web.UI.ButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})

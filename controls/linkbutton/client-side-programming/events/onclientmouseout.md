---
title: OnClientMouseOut
page_title: OnClientMouseOut | RadLinkButton for ASP.NET AJAX Documentation
description: OnClientMouseOut
slug: linkbutton/client-side-programming/events/onclientmouseout
tags: onclientmouseout
published: True
position: 5
---

# OnClientMouseOut

The **mouseOut** event is fired when the user moves the mouse pointer over the control.

The event handler receives two parameters:

1. The instance of the clicked RadLinkButton control

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonEventArgs](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs).

>caption Example 1: Handling OnClientMouseOut event in RadLinkButton.

````ASP.NET
<script type="text/javascript">
	function mouseOut(sender, args) {
		window.alert("You have moved mouse out of the button");
	}
</script>
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Navigate to Page" OnClientMouseOut="mouseOut" NavigateUrl="http://www.telerik.com">
</telerik:RadLinkButton>
````

# See Also

 * [RadLinkButton Object]({%slug linkbutton/client-side-programming/linkbutton-object%})
 * [Telerik.Web.UI.ButtonEventArgs](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
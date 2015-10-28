---
title: OnClientClicked
page_title: OnClientClicked | RadLinkButton for ASP.NET AJAX Documentation
description: OnClientClicked
slug: linkbutton/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 3
---

# OnClientClicked

The **clicked** event is subsequent to the **clicking** event, and occurs when the **RadLinkButton** control is clicked. The event cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadLinkButton control

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonEventArgs](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs).

This event should be used in scenarios where the user needs to execute custom client-side code when the button is clicked. For example:

>caption Example 1: Handling OnClientClicked event in RadLinkButton.

````ASP.NET
<script type="text/javascript">
	function Clicked(sender, args) {
		window.alert("Page will navigate to '" + sender.get_navigateUrl() + "'");
	}
</script>
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Navigate to Page" OnClientClicked="Clicked" NavigateUrl="http://www.telerik.com">
</telerik:RadLinkButton>
````

# See Also

 * [RadLinkButton Object]({%slug linkbutton/client-side-programming/linkbutton-object%})
 * [Telerik.Web.UI.ButtonEventArgs](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})

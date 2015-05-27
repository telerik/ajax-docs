---
title: OnClientShow
page_title: OnClientShow | RadWindow for ASP.NET AJAX Documentation
description: OnClientShow
slug: window/client-side-programming/events/onclientshow
tags: onclientshow
published: True
position: 14
---

# OnClientShow

The **OnClientShow** event of the **RadWindow** fires when the popup shows. It follows the [OnClientBeforeShow]({%slug window/client-side-programming/events/onclientbeforeshow%}) event.

**RadWindow** renders its popup element with JavaScript when it is shown for the first time, so this is the earliest event in which you can manipulate it.

You can use this event to change settings of the **RadWindow** that will affect its behavior, e.g., making sure it is always maximized (**Example 1**) or pinned (**Example 2**). The **OnClientShow** event is commonly used for [adding dynamic handlers]({%slug window/client-side-programming/events/setting-handlers-by-using-javascript%}) for other events that may be needed only once (e.g., to [OnClientPageLoad]({%slug window/client-side-programming/events/onclientpageload%}) or to [OnClientClose]({%slug window/client-side-programming/events/onclientclose%}) - **Example 3**).

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.

>caption Example 1: How to have a RadWindow that is always maximized:

````ASP.NET
<asp:Button ID="Button4" Text="show the RadWindow" runat="server" />
<telerik:RadWindow runat="server" ID="RadWindow1" OnClientShow="OnClientShowHandler" OpenerElementId="Button1"></telerik:RadWindow>
<script type="text/javascript">
	function OnClientShowHandler(sender, args) {
		sender.maximize();
	}
</script>
````



>caption Example 2: How to have a RadWindow that is always pinned when shown:

````ASP.NET
<asp:Button ID="Button5" Text="show the RadWindow" runat="server" />
<telerik:RadWindow runat="server" ID="RadWindow1" OnClientShow="OnClientShowHandler" OpenerElementId="Button1"></telerik:RadWindow>
<script type="text/javascript">
	function OnClientShowHandler(sender, args) {
		if (!sender.isPinned()) {
			sender.togglePin();
		}
	}
</script>
````



>caption Example 3: How to add event handlers dynamically that will remove the URL from the status bar and will notify the developer that the dialog was closed by the user:

````ASP.NET
<asp:Button ID="Button6" Text="show the RadWindow" runat="server" />
<telerik:RadWindow runat="server" ID="RadWindow1" OnClientShow="OnClientShowHandler" OpenerElementId="Button1" NavigateUrl="some-page.aspx"></telerik:RadWindow>
<script type="text/javascript">
	function OnClientShowHandler(sender, args) {
		sender.add_close(OnClientCloseHandler);
		sender.add_pageLoad(OnClientPageLoadHandler);
	}
	function OnClientCloseHandler(sender, args) {
		sender.remove_close(OnClientCloseHandler);
		alert("The dialog is closed");
	}

	function OnClientPageLoadHandler(sender, args) {
		sender.remove_pageLoad(OnClientPageLoadHandler);
		sender.set_status("");
	}
</script>
````

## See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

---
title: OnClientShow
page_title: OnClientShow | UI for ASP.NET AJAX Documentation
description: OnClientShow
slug: window/client-side-programming/events/onclientshow
tags: onclientshow
published: True
position: 14
---

# OnClientShow



## 

The __OnClientShow__ event of the __RadWindow__ fires when the popup shows. It follows the[OnClientBeforeShow]({%slug window/client-side-programming/events/onclientbeforeshow%}) event.

__RadWindow__ renders its popup element with JavaScript when it is shown for the first time, so this isthe earliest event in which you can manipulate it.

You can use this event to change settings of the __RadWindow__ that will affect its behavior, e.g., making sureit is always maximized (__Example 1__) or pinned (__Example 2__).The __OnClientShow__ event is commonly used for [adding dynamic handlers]({%slug window/client-side-programming/events/setting-handlers-by-using-javascript%}) for other eventsthat may be needed only once (e.g., to [OnClientPageLoad]({%slug window/client-side-programming/events/onclientpageload%})or to [OnClientClose]({%slug window/client-side-programming/events/onclientclose%}) - __Example 3__).

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.

__Example 1:__ How to have a RadWindow that is always maximized:

````XML
			<asp:Button ID="Button4" Text="show the RadWindow" runat="server" />
			<telerik:RadWindow runat="server" ID="RadWindow1" OnClientShow="OnClientShowHandler" OpenerElementId="Button1"></telerik:RadWindow>
			<script type="text/javascript">
				function OnClientShowHandler(sender, args) {
					sender.maximize();
				}
			</script>
````



__Example 2:__ How to have a RadWindow that is always pinned when shown:

````XML
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



__Example 3:__ How to add event handlers dynamically that will remove the URL from the status bar and will notify the developer that the dialog was closed by the user:

````XML
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



# See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

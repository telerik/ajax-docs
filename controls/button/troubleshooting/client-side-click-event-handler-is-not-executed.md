---
title: Client-side Click Event Handler Is Not Executed
page_title: Client-side Click Event Handler Is Not Executed | UI for ASP.NET AJAX Documentation
description: Client-side Click Event Handler Is Not Executed
slug: button/troubleshooting/client-side-click-event-handler-is-not-executed
tags: client-side,click,event,handler,is,not,executed
published: True
position: 3
---

# Client-side Click Event Handler Is Not Executed



## 

The __RadButton__, just like the rest of the Telerik controls, only needs the *name* of the JavaScript function that will be a handler for its client-side events.

Its client-side click events are [OnClientClicking]({%slug button/client-side-programming/events/onclientclicking%}) and	[OnClientClicked]({%slug button/client-side-programming/events/onclientclicked%}) to be uniform with the rest of the controls.

The __AutoPostBack__ property, when set to __false__, hasthe same effect as adding the __return false;__ statement to the	__OnClientClick__ handler for the regular ASP button. Alternatively, youcan cancel the __OnClientClicking__ event to avoid the postback.

Below is shown a comparison between ASP button and __RadButton__ client-sideevent handling (__Example 1__ and __Example 2__).

__Example 1__: Handling client-side click event of ASP Button without performing a postback.

````ASPNET
		<script type="text/javascript">
			function ButtonClick(button) {
				alert("The Button with ID " + button.id + " was clicked.");
			}
		</script>
		<asp:Button ID="Button1" Text="Regular Button" OnClientClick="ButtonClick(this); return false;"
			runat="server" />
````



__Example 2__: Handling client-side click event of RaButton without performing a postback.

````ASPNET
		<script type="text/javascript">
			function ButtonClick(sender, args) {
				alert("The Button with ID " + sender.get_uniqueID() + " was clicked.");
			}
		</script>
		<telerik:RadButton runat="server" ID="RadButton1" Text="RadButton" OnClientClicked="ButtonClick"
			AutoPostBack="false">
		</telerik:RadButton>
````



More information is available in the [Migrating OnClientClick handlers from ASP button to Telerik’s ASP.NET AJAX Button](http://blogs.telerik.com/aspnet-ajax/posts/12-08-10/migrating-onclientclick-handlers-from-asp-button-to-telerik-s-asp-net-ajax-button.aspx) blog post.

# See Also

 * [RadButton Known Issues in IE6 and IE7]({%slug button/troubleshooting/radbutton-known-issues-in-ie6-and-ie7%})

 * [RadButton Not Performing Postback]({%slug button/troubleshooting/radbutton-not-performing-postback%})

 * [Event Handlers Are Not Raised]({%slug button/troubleshooting/event-handlers-are-not-raised%})

 * [Migrating OnClientClick handlers from ASP button to Telerik’s ASP.NET AJAX Button](http://blogs.telerik.com/aspnet-ajax/posts/12-08-10/migrating-onclientclick-handlers-from-asp-button-to-telerik-s-asp-net-ajax-button.aspx)

---
title: Client-side Click Event Handler Is Not Executed
page_title: Client-side Click Event Handler Is Not Executed | RadStandardButton for ASP.NET AJAX Documentation
description: Client-side Click Event Handler Is Not Executed
slug: standardbutton/troubleshooting/client-side-click-event-handler-is-not-executed
tags: client-side,click,event,handler,is,not,executed
published: True
position: 2
---

# Client-side Click Event Handler Is Not Executed

The **RadStandardButton**, just like the rest of the Telerik controls, only needs the *name* of the JavaScript function that will be a handler for its client-side events.

Its client-side click events are [OnClientClicking]({%slug standardbutton/client-side-programming/events/onclientclicking%}) and	[OnClientClicked]({%slug standardbutton/client-side-programming/events/onclientclicked%}) to be uniform with the rest of the controls.

The **AutoPostBack** property, when set to **false**, has the same effect as adding the **return false;** statement to the	**OnClientClick** handler for the regular ASP button. Alternatively, you can cancel the **OnClientClicking** event to avoid the postback.

Below is shown a comparison between ASP button and **RadStandardButton** client-side event handling (**Example 1** and **Example 2**).

>caption Example 1: Handling client-side click event of ASP Button without performing a postback.

````ASP.NET
<script type="text/javascript">
	function ButtonClick(button) {
		alert("The Button with ID " + button.id + " was clicked.");
	}
</script>

<asp:Button ID="Button1" Text="Regular Button" OnClientClick="ButtonClick(this); return false;"
	runat="server" />
````

>caption Example 2: Handling client-side click event of RaButton without performing a postback.

````ASP.NET
<script type="text/javascript">
	function ButtonClick(sender, args) {
		alert("The Button with ID " + sender.get_uniqueID() + " was clicked.");
	}
</script>

<telerik:RadStandardButton runat="server" ID="RadStandardButton1" Text="RadStandardButton" OnClientClicked="ButtonClick"
	AutoPostBack="false">
</telerik:RadStandardButton>
````

More information is available in the [Migrating OnClientClick handlers from ASP button to Telerik’s ASP.NET AJAX Button](http://blogs.telerik.com/aspnet-ajax/posts/12-08-10/migrating-onclientclick-handlers-from-asp-button-to-telerik-s-asp-net-ajax-button.aspx) blog post.

## See Also

 * [RadStandardButton Not Performing Postback]({%slug standardbutton/troubleshooting/radstandardbutton-not-performing-postback%})

 * [Event Handlers Are Not Raised]({%slug standardbutton/troubleshooting/event-handlers-are-not-raised%})

 * [Migrating OnClientClick handlers from ASP button to Telerik’s ASP.NET AJAX Button](http://blogs.telerik.com/aspnet-ajax/posts/12-08-10/migrating-onclientclick-handlers-from-asp-button-to-telerik-s-asp-net-ajax-button.aspx)

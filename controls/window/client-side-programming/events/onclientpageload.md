---
title: OnClientPageLoad
page_title: OnClientPageLoad | RadWindow for ASP.NET AJAX Documentation
description: OnClientPageLoad
slug: window/client-side-programming/events/onclientpageload
tags: onclientpageload
published: True
position: 10
---

# OnClientPageLoad

The **OnClientPageLoad** event of the **RadWindow** fires when the pageset through its **NavigateUrl** property finishes loading. Since this page is loaded inside an iframe, this event is fired by the iframe's `onload` event.

You can use this event to know when the page is loaded inside the popup, including pages changed dynamically	via the `setUrl()` method the [client-side API]({%slug window/client-side-programming/radwindow-object%}) of the control exposes.	At this point you can call the `autoSize()` method of the control, for example, or [call a function in the loaded page]({%slug window/how-to/calling-functions-in-windows%}) to modify it or provide data to it.

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.


>tip RadWindow takes the `<title>` of its content page and sets it as its own title in the **OnClientPageLoad** event. This will override the `Title` server property or earlier calls to the `set_status` client-side method. If you want to override the content page title, see **Examples 1-3**.

>tip When a content page is loaded in the **RadWindow**, its URL is set in the status bar of the control in this event, so if you need to modify or remove it, this is the point at which you can use the `set_status()` client-side method (see **Examples 4-5**). An alternative is to set the `VisibleStatusbar` property to `false` to avoid having the statusbar at all.


>caption Example 1: Ensure RadWindow takes the title you set with JavaScript and the content page does not override it.

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="~/some-page.aspx" VisibleOnPageLoad="true" 
	OnClientPageLoad="changeTitle"></telerik:RadWindow>
<script>
	function changeTitle(sender, args) {
		sender.set_title("my custom title");
	}
</script>
````

>caption Example 2: Ensure the RadWindow title is not overriden by an image loaded in it. Chrome and Firefox put the file name and dimensions in the `<title>` element.

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="~/images/logo.jpg" VisibleOnPageLoad="true" 
	OnClientPageLoad="changeTitle"></telerik:RadWindow>
<script>
	function changeTitle(sender, args) {
		sender.set_title("Image");
	}
</script>
````

>tip If you want the RadWindow title to come from the server, you can use a custom attribute. See **Example 3**.

>caption Example 3: Set custom title that comes from the server.

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="~/some-page.aspx" VisibleOnPageLoad="true" 
	OnClientPageLoad="changeTitle" CustomTitle="my desired title"></telerik:RadWindow>
<script>
	function changeTitle(sender, args) {
		sender.set_title(sender.get_element().getAttribute("CustomTitle"));
	}
</script>
````

>caption Example 4: Set custom text in the status bar and prevent the URL from showing.

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="~/some-page.aspx" VisibleOnPageLoad="true" 
	OnClientPageLoad="changeStatus"></telerik:RadWindow>
<script>
	function changeStatus(sender, args) {
		sender.set_status("custom status");
	}
</script>
````

>caption Example 5: Clear the status text of a RadWindow.

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="~/some-page.aspx" VisibleOnPageLoad="true" 
	OnClientPageLoad="changeStatus"></telerik:RadWindow>
<script>
	function changeStatus(sender, args) {
		sender.set_status("");
	}
</script>
````


## See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [Calling Functions in Windows]({%slug window/how-to/calling-functions-in-windows%})

---
title: Positioning a Modal RadWindow
page_title: Positioning a Modal RadWindow | RadWindow for ASP.NET AJAX Documentation
description: Positioning a Modal RadWindow
slug: window/troubleshooting/positioning-a-modal-radwindow
tags: positioning,a,modal,radwindow
published: True
position: 8
---

# Positioning a Modal RadWindow

By design, when a **RadWindow** is **Modal** (i.e. its Modal property is set to true - either in its own declaration, or in the declaration of the RadWindowManager that contains it) it always shows up positioned in the **center** of the browser window.

This means that setting its **Left** and/or **Top** properties will not have a visual effect and the desired position will not be applied.

In order to get a custom position for a modal RadWindow the **CenterIfModal** property or the **OnClientShow** client-side event must be used together with its [Client-side API]({%slug window/client-side-programming/radwindow-object%}) to move the RadWindow after it shows.

## Using Q1 2013 and newer versions

The **CenterIfModal** property is available and setting it to false will have the RadWindow honor the Left and Top. Its default value is true to preserve the original behavior of the control.

````ASP.NET
<telerik:RadWindow RenderMode="Lightweight" ID="RadWindow1" runat="server" CenterIfModal="false" Left="20"
	Top="20" Modal="true" VisibleOnPageLoad="true">
</telerik:RadWindow>
````

## All versions - using Client-side events and API

The following example shows how the Left and Top properties can be retrieved and the RadWindow moved after it shows:

````ASP.NET
<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1" Modal="true" OnClientShow="setCustomPosition"
	Left="10px" Top="10px">
</telerik:RadWindow>
<asp:Button ID="Button6" Text="text" runat="server" />
<script type="text/javascript">
	function setCustomPosition(sender, args)
	{
		sender.moveTo(sender.get_left(), sender.get_top());
	}
</script>
````

You can find more information on the sender and the moveTo method in the [Client-side API]({%slug window/client-side-programming/radwindow-object%}) of the RadWindow.

## See Also

 * [Client-side programming Overview]({%slug window/client-side-programming/overview%})
 
 * [RadWindow client-side object API]({%slug window/client-side-programming/radwindow-object%})

 * [Client-side events Overview]({%slug window/client-side-programming/events/overview%})
 

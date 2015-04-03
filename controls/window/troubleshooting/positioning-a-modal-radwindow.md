---
title: Positioning a Modal RadWindow
page_title: Positioning a Modal RadWindow | UI for ASP.NET AJAX Documentation
description: Positioning a Modal RadWindow
slug: window/troubleshooting/positioning-a-modal-radwindow
tags: positioning,a,modal,radwindow
published: True
position: 8
---

# Positioning a Modal RadWindow



## 

By design, when a __RadWindow__ is __Modal__ (i.e. its Modal property is set to true - either in its own declaration,or in the declaration of the RadWindowManager that contains it) it always shows up positioned in the __center__ of the browser window.

This means that setting its __Left__ and/or __Top__ properties will not have a visual effect and the desired positionwill not be applied.

In order to get a custom position for a modal RadWindow the __CenterIfModal__ property or the __OnClientShow__ client-side event must be used together with its[Client-side API]({%slug window/client-side-programming/radwindow-object%}) to move the RadWindow after it shows.

## Using Q1 2013 and newer versions

The __CenterIfModal__ property is available and setting it to false will have the RadWindow honor the Left and Top.Its default value is true to preserve the original behavior of the control.

````ASPNET
		<telerik:RadWindow ID="RadWindow1" runat="server" CenterIfModal="false" Left="20"
			Top="20" Modal="true" VisibleOnPageLoad="true">
		</telerik:RadWindow>
````



## All versions - using Client-side events and API

The following example shows how the Left and Top properties can be retrieved and the RadWindow moved after it shows:

````ASPNET
		<telerik:RadWindow runat="server" ID="RadWindow1" Modal="true" OnClientShow="setCustomPosition"
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



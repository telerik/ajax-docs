---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: tilelist/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



__RadTileList__ has different render modes that can change the behavior of the control under different screen resolutions.	They are exposed via the __RenderMode__ property that has four possible values - __Classic__,__Lightweight__, __Mobile__ and __Auto__.

The markup __RadTileList__ uses is as lightweight and as semantic as possible. The change that may occur is to enable its	[responsive layout]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%})—if needed, JavaScript code modifies the tiles' containers and CSS	applies a different layout to the control.

The possible options for the __RenderMode__ property are:

* __Classic__ - this mode is the rendering that is used by default. It remains without changes.

* __Lightweight__ - there are no differences from the *Classic* mode.

* __Mobile__ - this mode enables the [Responsive layout capabilities]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) of the control.

* __Auto__ - this mode makes the control choose the appropriate rendering mode according to the browser. With __RadTileList__,*Mobile* will be set only under mobile devices.

>important  __RadTileList__ , as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same __RenderMode__ on a given page. This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The __RenderMode__ property in the markup or in the code-behind that can be used for a particular instance:

````ASPNET
	    <telerik:RadTileList ID="RadTileList1" runat="server" RenderMode="Mobile">
		</telerik:RadTileList>
````





````C#
			RadTileList1.RenderMode = Telerik.Web.UI.RenderMode.Mobile;
````
````VB.NET
		RadTileList1.RenderMode = Telerik.Web.UI.RenderMode.Mobile
````


* A __global setting in the web.config__ file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.TileList.RenderMode" value="Mobile" />
			</appSettings>
````



# See Also[Render Modes](c952abb4-e952-44fa-9e05-70aac40c04d5)

 * [Responsive, Adaptive and Elastic Capabilities]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

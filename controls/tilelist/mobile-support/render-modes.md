---
title: Render Modes
page_title: Render Modes | RadTileList for ASP.NET AJAX Documentation
description: Render Modes
slug: tilelist/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



**RadTileList** has different render modes that can change the behavior of the control under different screen resolutions.	They are exposed via the **RenderMode** property that has four possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**.

The markup **RadTileList** uses is as lightweight and as semantic as possible. The change that may occur is to enable its	[responsive layout]({%slug tilelist/mobile-support/responsive-capabilities%})—if needed, JavaScript code modifies the tiles' containers and CSS	applies a different layout to the control—or to enable its [elastic design]({%slug tilelist/mobile-support/elastic-capabilities%}).

The possible options for the **RenderMode** property are:

* **Classic** - this mode is the rendering that is used by default. It remains without changes.

* **Lightweight** - the control is [elastic]({%slug tilelist/mobile-support/elastic-capabilities%}) and font-icons are used instead of image sprites for the selection indicator and predefined badges.

* **Mobile** - this mode enables the [Responsive layout capabilities]({%slug tilelist/mobile-support/responsive-capabilities%}) of the control.

* **Auto** - this mode makes the control choose the appropriate rendering mode according to the browser. With **RadTileList**, *Mobile* will be set only under mobile devices.

>important  **RadTileList**, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.



## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode** property in the markup or in the code-behind that can be used for a particular instance:

	__ASP.NET__

		<telerik:RadTileList ID="RadTileList1" runat="server" RenderMode="Mobile">
		</telerik:RadTileList>


	__C#__

		RadTileList1.RenderMode = Telerik.Web.UI.RenderMode.Mobile;

	__VB__

		RadTileList1.RenderMode = Telerik.Web.UI.RenderMode.Mobile



* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	__XML__

		<appSettings>
			<add key="Telerik.Web.UI.TileList.RenderMode" value="Mobile" />
		</appSettings>




# See Also

* [Render Modes]({%slug controls/render-modes%})

* [Responsive Capabilities]({%slug tilelist/mobile-support/responsive-capabilities%})

* [Elastic Capabilities]({%slug tilelist/mobile-support/elastic-capabilities%})

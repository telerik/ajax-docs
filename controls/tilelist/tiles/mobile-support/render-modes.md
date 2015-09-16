---
title: Render Modes
page_title: Render Modes | RadTile for ASP.NET AJAX Documentation
description: Render Modes
slug: tilelist/tiles/mobile-support/render-modes
tags: render,modes,tile
published: True
position: 3
---

# Render Modes



A **RadTile** has different render modes that can change certain aspects of the control rendering or provide certain advantages.	They are exposed via the **RenderMode** property that has four possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**.

The markup a **RadTile** uses is as lightweight and as semantic as possible. The change that may occur is to enable its [elastic design]({%slug tilelist/tiles/mobile-support/elastic-design%}).

The possible options for the **RenderMode** property are:

* **Classic** - this mode is the rendering that is used by default. It remains without changes.

* **Lightweight** - the control is [elastic]({%slug tilelist/tiles/mobile-support/elastic-design%}) and font-icons are used instead of image sprites for the selection indicator and predefined badges.

* **Mobile** - this mode will be resolved to *Lightweight*.

* **Auto** - this mode makes the control choose the appropriate rendering mode according to the browser.


>important  Each **RadTile**, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.

>note **RadTileList** uses **RadTile** controls internally, so all their instances must have the same render mode. Tiles that are children of a TileList will inherit the RenderMode of the TileList.


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode** property in the markup or in the code-behind that can be used for a particular instance:

	__ASP.NET__

		<telerik:RadTextTile ID="RadTextTile1" runat="server" RenderMode="Lightweight">
		</telerik:RadTextTile>


	__C#__

		RadTextTile1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	__VB__

		RadTextTile1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	__XML__

		<appSettings>
			<add key="Telerik.Web.UI.BaseTile.RenderMode" value="Lightweight" />
		</appSettings>

	>tip The key above will affect all RadTile instances. If you want to target specific tile types, use their name in the key instead of `BaseTile`: `TextTile`, `IconTile`, `ImageTile`, `ImageAndTextTile`, `ContentTemplateTile`, `LiveTile`.




# See Also

* [Render Modes]({%slug controls/render-modes%})

* [Elastic Capabilities]({%slug tilelist/tiles/mobile-support/elastic-design%})

* [Fluid Capabilities]({%slug tilelist/tiles/mobile-support/fluid-design%})

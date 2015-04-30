---
title: Render Modes
page_title: Render Modes | RadRating for ASP.NET AJAX Documentation
description: Render Modes
slug: rating/mobile-support/render-modes
tags: render,modes
published: True
position: 0
---

# Render Modes

**RadRating** has two different render modes that can change the way the control is rendered.	They are exposed via the **RenderMode** property that can have four	possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**.	This functionality was introduced in the **Q1 2015** version.

The possible options are:

* **Classic** — this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode background images are used to create the rating stars.

* **Lightweight** — this mode uses font icons for the rating stars, which makes it easier to customize.	This also removes the use of image sprites the control.	All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile** — this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto** — this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic** or **Lightweight**.

>important RadRating, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page.All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadRating id="RadRating1" runat="server" RenderMode="Lightweight">
		</telerik:RadRating>

	**C#**

		RadRating1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadRating1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight

* A global setting in the **web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**XML**

		<appSettings>
			<add key="Telerik.Web.UI.Rating.RenderMode" value="lightweight" />
		</appSettings>

# See Also

 * [Elastic Design]({%slug rating/mobile-support/elastic-design%})

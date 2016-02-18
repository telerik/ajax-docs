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

@[template](/_templates/common/render-mode.md#intro-all "control: RadRating, version: Q1 2015")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode background images are used to create the rating stars.

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc)

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadRating")

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

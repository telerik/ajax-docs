---
title: Render Modes
page_title: Render Modes - RadEditor
description: Check our Web Forms article about Render Modes.
slug: editor/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadEditor, version: Q3 2014")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode tables and background images (in several sprites) are used to create the layout (including rounded corners and shadows).

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* **Mobile**—as of **Q2 2015**, a [phone-optimized layout]({%slug  editor/mobile-support/phone-layout/overview%}) is available. It targets small screens, uses font-icons and the *flex*-model for positioning and sizing.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser—**Classic**, **Lightweight** or **Mobile**. This functionality was added in **Q3 2013**.

>important **RadEditor** and its child controls (**RadWindow** and **RadToolBar**, and **RadContextMenu** when `RenderMode` is `Lightweight`), as well as the other controls included in the Telerik® UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page. This includes mode being set for a standalone **RadEditor**, **RadToolBar**, **RadWindow** and **RadWindowManager**, **RadMenu** and **RadContextMenu**. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadEditor ID="RadEditor1" runat="server" RenderMode="Lightweight">
		</telerik:RadEditor>

	**C#**

		RadEditor1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadEditor1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight	


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**XML**

		<appSettings>
			<add key="Telerik.Web.UI.Editor.RenderMode" value="lightweight" />
		</appSettings>




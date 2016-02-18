---
title: Render Modes
page_title: Render Modes | RadDock for ASP.NET AJAX Documentation
description: Render Modes
slug: dock/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadDock, version: Q2 2013")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode tables and background images (in several sprites) are used to create the layout (including rounded corners and shadows).

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadDock")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property **RenderMode** of RadDock can be used to set the render mode of a particular instance of the control:

	__ASP.NET__

		<telerik:RadDock runat="server" ID="RadDock1" RenderMode="Lightweight">
		</telerik:RadDock>


	__C#__

		RadDock1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	__VB__

		RadDock1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* The render mode for the dock control can be specified globally in web.config by adding an app key:

	__XML__

		<appSettings>
		  <add key="Telerik.Web.UI.Dock.RenderMode" value="lightweight" />
		</appSettings>



---
title: Render Modes
page_title: Render Modes | RadFormDecorator for ASP.NET AJAX Documentation
description: Render Modes
slug: formdecorator/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadFormDecorator, version: Q2 2013")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode nested elements and background image sprites (whose total number is 7) are used to create the needed appearance, so widths above 800px and button heights different than 22px are difficult to achieve.

* @[template](/_templates/common/render-mode.md#lightweight-desc) Rounded corners, gradients and shadows are achieved via CSS3 effects which allows for flexible widths and heights.An image sprite is only used for checkboxes, radiobuttons and the dropdowns' arrow.

* **Native** - this mode does not apply any decoration. Acts as if **RadFormDecorator** is disabled. 

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadFormDecorator")

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property **RenderMode** of RadFormDecorator can be used to set the render mode of a particular instance of the control:

	**ASP.NET**

		<telerik:RadFormDecorator runat="server" ID="RadFormDecorator1" RenderMode="Lightweight">
		</telerik:RadFormDecorator>

	**C#**

		RadFormDecorator1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadFormDecorator1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
		
* The render mode for the form decorator control can be specified globally in web.config by adding an app key:

	**XML**

		<appSettings>
		  <add key="Telerik.Web.UI.FormDecorator.RenderMode" value="lightweight" />
		</appSettings>



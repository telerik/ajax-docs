---
title: Render Modes
page_title: Render Modes | RadColorPicker for ASP.NET AJAX Documentation
description: Render Modes
slug: colorpicker/mobile-support/render-modes
tags: render,modes,color picker
published: True
position: 3
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadColorPicker, version: Q3 2015")

* @[template](/_templates/common/render-mode.md#classic-desc)

* **Lightweight** - the control is [elastic]({%slug colorpicker/mobile-support/elastic-design%}) and CSS is used to generate colors and palettes instead of images. This mode is available as of **Q3 2015**.

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc)

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadColorPicker")

>tip Certain configurations of **RadColorPicker** use **RadSlider** controls internally, so all their instances must have the same render mode. Sliders that are children of a ColorPicker will inherit the RenderMode of the ColorPicker.


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode** property in the markup or in the code-behind that can be used for a particular instance:

	__ASP.NET__

		<telerik:RadColorPicker ID="RadColorPicker1" runat="server" RenderMode="Lightweight">
		</telerik:RadColorPicker>


	__C#__

		RadColorPicker1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	__VB__

		RadColorPicker1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	__XML__

		<appSettings>
			<add key="Telerik.Web.UI.ColorPicker.RenderMode" value="Lightweight" />
		</appSettings>

	




# See Also

* [Render Modes]({%slug controls/render-modes%})

* [Elastic Capabilities]({%slug colorpicker/mobile-support/elastic-design%})


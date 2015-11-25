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



A **RadColorPicker** has different render modes that can change certain aspects of the control rendering or provide certain advantages.	They are exposed via the **RenderMode** property that has four possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**.


The possible options for the **RenderMode** property are:

* **Classic** - this mode is the rendering that is used by default. It remains without changes.

* **Lightweight** - the control is [elastic]({%slug colorpicker/mobile-support/elastic-design%}) and CSS is used to generate colors and palettes instead of images. This mode is available as of **Q3 2015**.

* **Mobile** - this mode will be resolved to *Lightweight*.

* **Auto** - this mode makes the control choose the appropriate rendering mode according to the browser.


>important  Each **RadColorPicker**, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.

>note Certain configurations of **RadColorPicker** use **RadSlider** controls internally, so all their instances must have the same render mode. Sliders that are children of a ColorPicker will inherit the RenderMode of the ColorPicker.


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


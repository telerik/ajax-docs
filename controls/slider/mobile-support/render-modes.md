---
title: Render Modes
page_title: Render Modes - RadSlider
description: Check our Web Forms article about Render Modes.
slug: slider/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadSlider, version: Q2 2014")

* @[template](/_templates/common/render-mode.md#classic-desc)

* @[template](/_templates/common/render-mode.md#lightweight-desc) The [elastic capabilities of RadSlider]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) are enabled in this mode.

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc)

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadSlider")

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode** property in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadSlider runat="server" ID="RadSlider1" RenderMode="Lightweight">
</telerik:RadSlider>
````


````C#
RadSlider1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadSlider1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````	

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
  <add key="Telerik.Web.UI.Slider.RenderMode" value="lightweight" />
</appSettings>
````

## See Also

 * [RadSlider Responsive, Adaptive and Elastic Capabilities]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

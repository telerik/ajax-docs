---
title: Render Modes
page_title: Render Modes | RadButton for ASP.NET AJAX Documentation
description: Render Modes
slug: button/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadButton, version: Q1 2015")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode span elements and background images (in several sprites) are used to create the layout (including rounded corners, shadows, icons etc.).

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc)

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadButton")

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadButton ID="RadButton1" runat="server" RenderMode="Lightweight">
</telerik:RadButton>
````

````C#
RadButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.Button.RenderMode" value="lightweight" />
</appSettings>
````

## See Also

 * [Mobile Support Overview]({%slug button/mobile-support/overview%})

 * [Elastic Design]({%slug button/mobile-support/elastic-design%})

 * [Fluid Design]({%slug button/mobile-support/fluid-design%})

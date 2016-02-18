---
title: Render Modes
page_title: Render Modes | RadSplitter for ASP.NET AJAX Documentation
description: Render Modes
slug: splitter/mobile-support/render-modes
tags: render,modes,splitter
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadSplitter, version: Q3 2015")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode `<table>` elements and background images are used to create the layout.

* @[template](/_templates/common/render-mode.md#lightweight-desc) This mode also enables the [Elastic design]({%slug  splitter/mobile-support/elastic-design%}) of the control. The general layout of the control still uses `<table>` elements however in order to preserve the existing functionality.

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadSplitter")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadSplitter ID="RadSplitter1" runat="server" RenderMode="Lightweight"></telerik:RadSplitter>
````

````C#
RadSplitter1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadSplitter1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.Splitter.RenderMode" value="lightweight" />
</appSettings>
````


## See Also

* [Elastic design]({%slug  splitter/mobile-support/elastic-design%})
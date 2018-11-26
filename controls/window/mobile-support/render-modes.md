---
title: Render Modes
page_title: Render Modes | RadWindow for ASP.NET AJAX Documentation
description: Render Modes
slug: window/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadWindow and RadWindowManager, version: Q2 2013")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadWindow and RadWindowManager")

>tip A RadWindow that is inside the Windows collection of a RadWindowManager will inherit the manager's render mode, unless explicitly specified in the RadWindow instance.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" RenderMode="Lightweight">
</telerik:RadWindow>
<telerik:RadWindowManager ID="RadWindowManager1" runat="server" RenderMode="Lightweight">
</telerik:RadWindowManager>
````

````C#
RadWindow1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
RadWindowManager1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadWindow1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
RadWindowManager1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.Window.RenderMode" value="lightweight" />
	<add key="Telerik.Web.UI.WindowManager.RenderMode" value="lightweight" />
</appSettings>
````



---
title: Render Modes
page_title: Render Modes - RadSpell
description: Check our Web Forms article about Render Modes.
slug: spell/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadSpell, version: Q1 2016")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadSpell")

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadSpell runat="server" ID="RadSpell1" RenderMode="Lightweight" />>
````

````C#
RadSpell1.RenderMode = RenderMode.Lightweight;
````
````VB
RadSpell1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.Spell.RenderMode" value="lightweight" />
</appSettings>
````



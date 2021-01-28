---
title: Render Modes
page_title: Render Modes - RadTooltip
description: Check our Web Forms article about Render Modes.
slug: tooltip/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadToolTip and RadToolTipManager, version: Q2 2013")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* @[template](/_templates/common/render-mode.md#lightweight-desc)

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadToolTip and RadToolTipManager")

>note A RadToolTip created by a RadToolTipManager will inherit the manager's render mode.

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadToolTip ID="RadToolTip1" runat="server" RenderMode="Lightweight">
		</telerik:RadToolTip>
		<telerik:RadToolTipManager ID="RadToolTipManager1" runat="server" RenderMode="Lightweight">
		</telerik:RadToolTipManager>


	**C#**

		RadToolTip1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
		RadToolTipManager1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadToolTip1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
		RadToolTipManager1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**XML**
		
		<appSettings>
			<add key="Telerik.Web.UI.ToolTip.RenderMode" value="Lightweight" />
		</appSettings>


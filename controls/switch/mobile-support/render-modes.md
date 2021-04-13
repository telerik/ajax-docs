---
title: Render Modes
page_title: Render Modes - RadSwitch
description: Check our Web Forms article about Render Modes.
slug: switch/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadSwitch")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadSwitch")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadSwitch ID="RadSwitch1" runat="server" RenderMode="Lightweight">
		</telerik:RadSwitch>


	**C#**

		RadSwitch1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadSwitch1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.Switch.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug switch/mobile-support/overview%})


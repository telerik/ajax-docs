---
title: Render Modes
page_title: Render Modes - RadPushButton
description: Check our Web Forms article about Render Modes.
slug: pushbutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes


@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadPushButton")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadPushButton")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadPushButton ID="RadPushButton1" runat="server" RenderMode="Lightweight">
		</telerik:RadPushButton>


	**C#**

		RadPushButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadPushButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.PushButton.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug pushbutton/mobile-support/overview%})

 * [Elastic Design]({%slug pushbutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug pushbutton/mobile-support/fluid-design%})

---
title: Render Modes
page_title: Render Modes - RadImageButton
description: Check our Web Forms article about Render Modes.
slug: imagebutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadImageButton")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadImageButton")



## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadImageButton ID="RadImageButton1" runat="server" RenderMode="Lightweight">
		</telerik:RadImageButton>


	**C#**

		RadImageButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadImageButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.ImageButton.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug imagebutton/mobile-support/overview%})

 * [Elastic Design]({%slug imagebutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug imagebutton/mobile-support/fluid-design%})

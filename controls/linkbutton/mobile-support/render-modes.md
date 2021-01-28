---
title: Render Modes
page_title: Render Modes - RadLinkButton
description: Check our Web Forms article about Render Modes.
slug: linkbutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadLinkButton")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadLinkButton")



## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadLinkButton ID="RadLinkButton1" runat="server" RenderMode="Lightweight" NavigateUrl="https://www.telerik.com" Target="_blank">
		</telerik:RadLinkButton>

	**C#**

		RadLinkButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadLinkButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.linkbutton.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug linkbutton/mobile-support/overview%})

 * [Elastic Design]({%slug linkbutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug linkbutton/mobile-support/fluid-design%})

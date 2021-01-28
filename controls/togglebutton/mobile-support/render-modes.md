---
title: Render Modes
page_title: Render Modes - RadToggleButton
description: Check our Web Forms article about Render Modes.
slug: togglebutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadToggleButton")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadToggleButton")


## Setting Render Mode

There are two ways to configure the rendering mode of the **RadToggleButton**:

* The **RenderMode property** in the markup or in the code-behind can be used for a particular instance:

	**ASP.NET**

		<telerik:RadToggleButton ID="RadToggleButton1" runat="server" RenderMode="Lightweight">
			<ToggleStates>
				<telerik:ButtonToggleState Text="State 1"/>
				<telerik:ButtonToggleState Text="State 2" /> 
			</ToggleStates>
		</telerik:RadToggleButton>


	**C#**

		RadToggleButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadToggleButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.ToggleButton.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug togglebutton/mobile-support/overview%})

 * [Elastic Design]({%slug togglebutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug togglebutton/mobile-support/fluid-design%})

---
title: Render Modes
page_title: Render Modes | RadCheckBox for ASP.NET AJAX Documentation
description: Render Modes
slug: checkbox/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadCheckBox")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadCheckBox")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadCheckBox ID="RadCheckBox1" runat="server" RenderMode="Lightweight">
		</telerik:RadCheckBox>


	**C#**

		RadCheckBox1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadCheckBox1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.CheckBox.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug checkbox/mobile-support/overview%})

 * [Elastic Design]({%slug checkbox/mobile-support/elastic-design%})


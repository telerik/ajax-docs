---
title: Render Modes
page_title: Render Modes | RadFileExplorer for ASP.NET AJAX Documentation
description: Render Modes
slug: fileexplorer/mobile-support/render-modes
tags: render,modes,file explorer
published: True
position: 3
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadFileExplorer, version: Q3 2015")

* @[template](/_templates/common/render-mode.md#classic-desc)

* @[template](/_templates/common/render-mode.md#lightweight-desc) In this mode RadFileExplorer is [elastic]({%slug fileexplorer/mobile-support/elastic-design%}).

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc)

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadFileExplorer")

>tip **RadFileExplorer** uses **RadButton**, **RadSplitter**, **RadSlider**, **RadTreeView**, **RadWindowManager** and **RadGrid** or **RadListView** controls internally, so all their instances must have the same render mode. Controls that are children of a RadFileExplorer will inherit the RenderMode of the File Explorer.


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode** property in the markup or in the code-behind that can be used for a particular instance:

	__ASP.NET__

		<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" RenderMode="Lightweight">
		</telerik:RadFileExplorer>


	__C#__

		RadFileExplorer1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	__VB__

		RadFileExplorer1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	__XML__

		<appSettings>
			<add key="Telerik.Web.UI.FileExplorer.RenderMode" value="Lightweight" />
		</appSettings>

	




# See Also

* [Render Modes]({%slug controls/render-modes%})

* [Elastic Capabilities]({%slug fileexplorer/mobile-support/elastic-design%})


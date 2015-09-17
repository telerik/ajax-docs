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



A **RadFileExplorer** has different render modes that can change certain aspects of the control rendering or provide certain advantages.	They are exposed via the **RenderMode** property that has four possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**.


The possible options for the **RenderMode** property are:

* **Classic** - this mode is the rendering that is used by default. It remains without changes.

* **Lightweight** - the control makes use of more semantic HTML and CSS3 and also applies the Lightweight mode to its child controls. In this mode RadFileExplorer is [elastic]({%slug fileexplorer/mobile-support/elastic-design%}) and font icons are used for toolbar and file icons instead of image sprites. This mode is available as of **Q3 2015**.

* **Mobile** - this mode will be resolved to *Lightweight*.

* **Auto** - this mode makes the control choose the appropriate rendering mode according to the browser.


>important  Each **RadFileExplorer**, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.

>note **RadFileExplorer** uses **RadSplitter**, **RadSlider**, **RadTreeView**, **RadWindowManager** and **RadGrid** or **RadListView** controls internally, so all their instances must have the same render mode. Controls that are children of a RadFileExplorer will inherit the RenderMode of the File Explorer.


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


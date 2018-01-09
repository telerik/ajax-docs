---
title: Render Modes
page_title: Render Modes | RadCheckBoxList for ASP.NET AJAX Documentation
description: Render Modes
slug: checkboxlist/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadCheckBoxList")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadCheckBoxList")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadCheckBoxList ID="RadCheckBoxList1" runat="server" RenderMode="Lightweight">
			<Items>
				<telerik:ButtonListItem Text="English" Selected="true" />
				<telerik:ButtonListItem Text="German" />
				<telerik:ButtonListItem Text="French" />
			</Items>
		</telerik:RadCheckBoxList>


	**C#**

		RadCheckBoxList1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadCheckBoxList1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.CheckBoxList.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug checkboxlist/mobile-support/overview%})

 * [Elastic Design]({%slug checkboxlist/mobile-support/elastic-design%})


---
title: Render Modes
page_title: Render Modes | RadRadioButtonList for ASP.NET AJAX Documentation
description: Render Modes
slug: radiobuttonlist/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes

@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadRadioButtonList")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadRadioButtonList")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**

		<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" RenderMode="Lightweight">
			<Items>
				<telerik:RadioButtonListItem Text="English" Selected="true" />
				<telerik:RadioButtonListItem Text="German" />
				<telerik:RadioButtonListItem Text="French" />
			</Items>
		</telerik:RadRadioButtonList>


	**C#**

		RadRadioButtonList1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadRadioButtonList1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**web.config**

		<appSettings>
			<add key="Telerik.Web.UI.RadioButtonList.RenderMode" value="Lightweight" />
		</appSettings>


## See Also

 * [Mobile Support Overview]({%slug radiobuttonlist/mobile-support/overview%})

 * [Elastic Design]({%slug radiobuttonlist/mobile-support/elastic-design%})


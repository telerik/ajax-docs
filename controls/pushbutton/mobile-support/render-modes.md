---
title: Render Modes
page_title: Render Modes | RadPushButton for ASP.NET AJAX Documentation
description: Render Modes
slug: pushbutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes

**RadPushButton** supports only **Lightweight** render mode. Generally it is exposed via the **RenderMode** property that can have five possible values - **Classic**, **Lightweight**, **Native**, **Mobile** and **Auto**.

The possible options are:

* **Classic**, **Native**, **Mobile**—these modes are not supported. If you set them, the mode will fall back automatically to **Lightweight**.

* **Lightweight**—this is the default mode and it emphasizes on semantic HTML and CSS3 which makes the control easy to customize (including custom skins creation).

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used browser.

>important **RadPushButton**, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.



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

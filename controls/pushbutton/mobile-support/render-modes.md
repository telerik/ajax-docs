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

**RadPushButton** has two different render modes (**Lightweight** and **Native**) that can change the actual CSS that is used. They are exposed via the **RenderMode** property that can have five possible values - **Classic**, **Lightweight**, **Native**, **Mobile** and **Auto**.

The possible options are:

* **Classic**—this mode is not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Lightweight**—this is the default mode and it emphasizes on semantic HTML and CSS3 which makes the control easy to customize (including custom skins creation).

* **Native**—this mode disables the built-in styles and CSS of the button, and let the client browser apply its default styling for `<input type="submit|button" />` element.

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used browser.

>important RadPushButton, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page.This includes mode being set for a standalone RadPushButton. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.



## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadPushButton ID="RadPushButton1" runat="server" RenderMode="Native">
</telerik:RadPushButton>
````

````C#
RadPushButton1.RenderMode = Telerik.Web.UI.RenderMode.Native;
````
````VB
RadPushButton1.RenderMode = Telerik.Web.UI.RenderMode.Native
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.pushbutton.RenderMode" value="Native" />
</appSettings>
````

## See Also

 * [Mobile Support Overview]({%slug pushbutton/mobile-support/overview%})

 * [Elastic Design]({%slug pushbutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug pushbutton/mobile-support/fluid-design%})

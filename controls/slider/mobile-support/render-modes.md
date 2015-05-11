---
title: Render Modes
page_title: Render Modes | RadSlider for ASP.NET AJAX Documentation
description: Render Modes
slug: slider/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

**RadSlider** has different render modes that can change the behavior of the control under different screen resolutions. They are exposed via the **RenderMode** property that has four possible values - **Classic**,**Lightweight**, **Mobile** and **Auto**.

The possible options for the **RenderMode** property are:

* **Classic** - this mode is the rendering that is used by default. It remains without changes.

* **Lightweight** - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders and makes it easierto customize. All of this decreases the overall size and complexity of each skin, including custom ones.The [elastic capabilities of RadSlider]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) are enabled in this mode.

* **Mobile** - this mode is currently not supported. If you set it, the mode will fall back automatically to **Classic**.

* **Auto** - this mode makes the control choose the appropriate rendering mode according to the browser. Currently it is now supported and it will automatically fall back to **Classic**.

>important  **RadSlider** , as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode** property in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadSlider runat="server" ID="RadSlider1" RenderMode="Lightweight">
</telerik:RadSlider>
````


````C#
RadSlider1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadSlider1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````	

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
  <add key="Telerik.Web.UI.Slider.RenderMode" value="lightweight" />
</appSettings>
````

## See Also

 * [RadSlider Responsive, Adaptive and Elastic Capabilities]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

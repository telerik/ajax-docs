---
title: Render Modes
page_title: Render Modes | RadImageGallery for ASP.NET AJAX Documentation
description: Render Modes
slug: imagegallery/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes



**RadImageGallery** has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have the following values - **Classic**, **Lightweight**, **Mobile** and **Auto**.	This functionality was introduced in the **Q2 2015** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* **Lightweight**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Classic**. Since the control is quite new it does not render any table elements and its classic rendering is enough lightweight.

* **Mobile**—this mode is supported since **Q2 2015** release and with it, the control will change to create a user experience tailored to the device screen size. In this mode, **RadImageGallery** is mobile-friendly and its touch zones are bigger and easier to select. You can find more detailed information about this render mode in [Mobile Rendering]({%slug imagegallery/mobile-support/mobile-rendering%}) help article.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser—**Mobile** or **Lightweight**. This functionality was added in Q1 2015.

>important RadImageGallery, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page.	This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same	RenderMode on a given page. This also includes instances from user controls and master pages.
>

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASPNET
<telerik:RadImageGallery ID="ImageGallery1" runat="server" RenderMode="Mobile">
</telerik:RadImageGallery>
````

````C#
ImageGallery1.RenderMode = Telerik.Web.UI.RenderMode.Mobile;
````
````VB.NET
ImageGallery1.RenderMode = Telerik.Web.UI.RenderMode.Mobile
````


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.ImageGallery.RenderMode" value="mobile" />
</appSettings>
````

# See Also

 * [Mobile Rendering]({%slug imagegallery/mobile-support/mobile-rendering%})

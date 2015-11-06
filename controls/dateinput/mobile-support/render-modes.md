---
title: Render Modes
page_title: Render Modes | RadDateInput for ASP.NET AJAX Documentation
description: Render Modes
slug: raddateinput/mobile-support/render-modes
tags: render,modes
published: True
position: 0
---

# Render Modes



**RadInput** has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have three	possible values - **Classic**, **Lightweight** and **Auto**.	This functionality was introduced in the **Q1 2015** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* **Lightweight**—this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	and makes it easier to customize. This also reduces the number of image sprites required by the control and the other controls from the suite it uses.	All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser—**Classic** or **Lightweight**. This functionality was added in Q1 2015.

>important RadInput, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page.	This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same	RenderMode on a given page. This also includes instances from user controls and master pages.
>

**RadInputManager** also supports the **Lightweight** RenderMode.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASPNET
<telerik:RadDateInput ID="RadDateInput1" runat="server" RenderMode="Lightweight">
</telerik:RadDateInput>
````


  




````C#
RadDateInput1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB.NET
RadDateInput1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.Input.RenderMode" value="lightweight" />
</appSettings>
````

   

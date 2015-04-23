---
title: Render Modes
page_title: Render Modes | RadDock for ASP.NET AJAX Documentation
description: Render Modes
slug: dock/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



**RadDock** has two different render modes that can change the actual HTML markup that is rendered.They are exposed via the **RenderMode** property that can have threepossible values - **Classic**, **Lightweight** and **Auto**.This functionality was introduced in the **Q2 2013** version.

The possible options are:

* **Classic** - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.In this mode tables and background images (in several sprites) are used to createthe layout (including rounded corners and shadows).

* **Lightweight** - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control rendersand makes it easier to customize. This also reduces the number of image sprites the control uses to a single one for the command buttons.All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile** - this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the usedbrowser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>important RadDock, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page.This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property **RenderMode** of RadDock can be used to set the render mode of a particular instance of the control:

	__ASP.NET__

		<telerik:RadDock runat="server" ID="RadDock1" RenderMode="Lightweight">
		</telerik:RadDock>


	__C#__

		RadDock1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	__VB__

		RadDock1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* The render mode for the dock control can be specified globally in web.config by adding an app key:

	__XML__

		<appSettings>
		  <add key="Telerik.Web.UI.Dock.RenderMode" value="lightweight" />
		</appSettings>



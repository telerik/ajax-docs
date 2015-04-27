---
title: Render Modes
page_title: Render Modes | RadFormDecorator for ASP.NET AJAX Documentation
description: Render Modes
slug: formdecorator/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

**RadFormDecorator** has two different render modes that can change the actual HTML markup that is rendered.They are exposed via the **RenderMode** property that can have three possible values - **Classic**, **Lightweight** and **Auto**.This functionality was introduced in the **Q2 2013** version.

The possible options are:

* **Classic** - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.In this mode nested elements and background image sprites (whose total number is 7) are used to create the needed appearance, so widths above 800px and button heights different than 22px are difficult to achieve.

* **Lightweight** - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders(even though this happens with JavaScript) and makes it easier to customize. Rounded corners, gradients and shadows are achieved via CSS3 effects which allows for flexible widths and heights.An image sprite is only used for checkboxes, radiobuttons and the dropdowns' arrow. All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile** - this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>important RadFormDecorator, as well as the other Telerik controls that utilize render modes, support only one type of render mode per page.This includes mode being set for a programmatically created instance. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property **RenderMode** of RadFormDecorator can be used to set the render mode of a particular instance of the control:

	**ASP.NET**

		<telerik:RadFormDecorator runat="server" ID="RadFormDecorator1" RenderMode="Lightweight">
		</telerik:RadFormDecorator>

	**C#**

		RadFormDecorator1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	**VB**

		RadFormDecorator1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
		
* The render mode for the form decorator control can be specified globally in web.config by adding an app key:

	**XML**

		<appSettings>
		  <add key="Telerik.Web.UI.FormDecorator.RenderMode" value="lightweight" />
		</appSettings>



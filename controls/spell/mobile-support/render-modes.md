---
title: Render Modes
page_title: Render Modes | RadSpell for ASP.NET AJAX Documentation
description: Render Modes
slug: spell/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

**RadSpell** have two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have four	possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**. This functionality was introduced in the **Q1 2016** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* **Lightweight**—this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	(even though this happens with JavaScript) and makes it easier to customize. This also reduces the number of image sprites the control uses to a single one for the command buttons. All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic** or **Lightweight**.

>important RadSpell, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page. This includes mode being set for a standalone RadSpell. All such controls must have the same RenderMode on a given page.	This also includes instances from user controls and master pages.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadSpell runat="server" ID="RadSpell1" RenderMode="Lightweight" />>
````

````C#
RadSpell1.RenderMode = RenderMode.Lightweight;
````
````VB
RadSpell1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.Spell.RenderMode" value="lightweight" />
</appSettings>
````



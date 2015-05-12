---
title: Render Modes
page_title: Render Modes | RadTooltip for ASP.NET AJAX Documentation
description: Render Modes
slug: tooltip/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



**RadToolTip and RadToolTipManager** have two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have three	possible values - **Classic**, **Lightweight** and **Auto**.	This functionality was introduced in the **Q2 2013** version.

The possible options are:

* **Classic** - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* **Lightweight** - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	(even though this happens with JavaScript) and makes it easier to customize. This also reduces the number of image sprites the control uses to a single one for the command buttons.	All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile** - this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>important RadToolTip and RadToolTipManager, as well as the other Telerik controls that utilize render modes, support only one type of render mode per page.This includes mode being set for a standalone RadToolTip and RadToolTipManager. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.



>note A RadToolTip created by a RadToolTipManager will inherit the manager's render mode.





There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	__ASP.NET__

		<telerik:RadToolTip ID="RadToolTip1" runat="server" RenderMode="Lightweight">
		</telerik:RadToolTip>
		<telerik:RadToolTipManager ID="RadToolTipManager1" runat="server" RenderMode="Lightweight">
		</telerik:RadToolTipManager>


	__C#__

		RadToolTip1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
		RadToolTipManager1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;

	__VB__

		RadToolTip1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
		RadToolTipManager1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight



* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

	__XML__
		
		<appSettings>
			<add key="Telerik.Web.UI.ToolTip.RenderMode" value="Lightweight" />
		</appSettings>


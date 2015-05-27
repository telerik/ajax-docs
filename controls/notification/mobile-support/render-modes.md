---
title: Render Modes
page_title: Render Modes | RadNotification for ASP.NET AJAX Documentation
description: Render Modes in RadNotification for ASP.NET AJAX
slug: notification/mobile-support/render-modes
tags: mobile,support, render, mode
published: True
position: 1
---

# Render Modes


**RadNotification** has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have four	possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**. This functionality was introduced in the **Q2 2015** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property. In this mode background images and icons (in several sprites) are used to create the appearance of the controls (gradients and icons). The HTML rendering is semantic and lightweight since its inception. CSS3 is used for rounded corners and shadows.

* **Lightweight**—in this mode no images are used. The titlebar background, [icons]({%slug notification/functionality/embedded-icons%}) and command buttons are implemented via CSS (a gradient, and font-icons respectively).

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>important RadNotification, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, supports only one type of render mode per page. All such controls must have the same RenderMode on a given page.	This also includes instances from user controls and master pages.


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	__ASP.NET__

		<telerik:RadNotification ID="RadNotification" runat="server" RenderMode="Lightweight">
		</telerik:RadNotification>



	__C#__

		RadNotification1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;



	
	__VB__

		RadNotification1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	__XML__

		<appSettings>
			<add key="Telerik.Web.UI.Notification.RenderMode" value="lightweight" />
		</appSettings>




## See Also

* [Embedded Icons]({%slug notification/functionality/embedded-icons%}) 

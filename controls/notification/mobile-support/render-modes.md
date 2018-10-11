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

@[template](/_templates/common/render-mode.md#intro-all "control: RadNotification, version: Q2 2015")

* @[template](/_templates/common/render-mode.md#classic-desc) 	In this mode background images and icons (in several sprites) are used to create the appearance of the controls (gradients and icons). The HTML rendering is semantic and lightweight since its inception. CSS3 is used for rounded corners and shadows.

* @[template](/_templates/common/render-mode.md#lightweight-desc) The titlebar background, [icons]({%slug notification/functionality/embedded-icons%}) and command buttons are implemented via CSS (a gradient, and font-icons respectively).

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadNotification")

>tip RadNotification uses **RadContextMenu** internally and it inherits the notification's `RenderMode`, so it brings its stylesheets to the page and that can affect other **RadContextMenu** and **RadMenu** instances. You can remove the built-in context menu by setting the `Visible` property of the `NotificationMenu` composite tag to `false`.

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

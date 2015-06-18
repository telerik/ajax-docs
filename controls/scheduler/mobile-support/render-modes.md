---
title: Render Modes
page_title: Render Modes | RadScheduler for ASP.NET AJAX Documentation
description: Render Modes
slug: scheduler/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



**RadScheduler** has three different render modes that can change the actual HTML markup that is rendered. They are exposed via the **RenderMode** property that can have three possible values - **Classic**, **Auto**, **Lightweight** and **Mobile**. This functionality was introduced in the **Q1 2014** version.

The possible options are:

* **Classic** - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - **Classic** or **Mobile**. This functionality was added in Q1 2014.

* **Lightweight** - with this render mode, the control yields completely different markup making maximum use of CSS 3 and semantic HTML. This means that we have dropped the image gradients in favor of CSS gradients. As for the skins, the main goal of using the Lightweight render mode is that image gradients could be easily replaced by CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased. This functionality was added in **Q2 2015**.

* **[Mobile]({%slug scheduler/mobile-support/responsive-adaptive-and-elastic-capabilities%})** -It is specifically designed to be used in mobile devices where its behavior is relatively different from the one on a desktop device.This functionality was added in Q1 2014.

>important RadScheduler, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page. This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property **RenderMode** of RadScheduler can be used to set the render mode of a particular instance of the control:

````ASPNET
<telerik:RadScheduler ID="RadScheduler1" runat="server" DataStartField="start"
	DataEndField="end" DataSubjectField="subject" DataKeyField="id" RenderMode="Mobile">
</telerik:RadScheduler>
````



````C#
	
RadScheduler1.RenderMode = Telerik.Web.UI.RenderMode.Mobile;
	    
````
````VB.NET
RadScheduler1.RenderMode = Telerik.Web.UI.RenderMode.Mobile
````


* The render mode for the RadScheduler control can be specified globally in web.config by adding an app key:

````XML
<appSettings>
  <add key="Telerik.Web.UI.Scheduler.RenderMode" value="Mobile" />
</appSettings>
````



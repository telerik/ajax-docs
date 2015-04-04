---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: scheduler/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



__RadScheduler__ has two different render modes that can change the actual HTML markup that is rendered. They are exposed via the __RenderMode__ property that can have three possible values - __Classic__, __Auto__ and __Mobile__. This functionality was introduced in the __Q1 2014__ version.

The possible options are:

* __Classic__ - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.

* __Auto__ - this mode makes each control choose the appropriate rendering mode according to the used browser - __Classic__ or __Mobile__. This functionality was added in Q1 2014.

* __[Mobile]({%slug scheduler/mobile-support/responsive-adaptive-and-elastic-capabilities%})__ -It is specifically designed to be used in mobile devices where its behavior is relatively different from the one on a desktop device.This functionality was added in Q1 2014.

>important RadScheduler, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page. This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property __RenderMode__ of RadScheduler can be used to set the render mode of a particular instance of the control:

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



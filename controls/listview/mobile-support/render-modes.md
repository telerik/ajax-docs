---
title: Render Modes
page_title: Render Modes | RadListView for ASP.NET AJAX Documentation
description: Render Modes
slug: listview/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes



**RadListView** has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have the following values - **Classic**, **Lightweight**, **Mobile** and **Auto**.	This functionality was introduced in the **Q1 2016** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* **Lightweight**—this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders and makes it easier to customize. This also reduces the number of image sprites required by the control and the other controls from the suite it uses. All of this decreases the overall size and complexity of each skin, including custom ones.

* **Mobile**—this mode is supported since **Q1 2016** release and with it, the control will change to create a user experience tailored to the device screen size. In this mode, **RadListView** is mobile-friendly and its touch zones are bigger and easier to select.

* **Auto**—this option will automatically decide how to render the control on a smartphone, tablet or PC and will switch between **Classic** and **Mobile** render modes (depending on the used device).

>important RadListView, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page.	This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same	RenderMode on a given page. This also includes instances from user controls and master pages.
>

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASPNET
<telerik:RadListView ID="RadListView1" runat="server" RenderMode="Mobile">
</telerik:RadListView>
````

````C#
RadListView1.RenderMode = Telerik.Web.UI.RenderMode.Mobile;
````
````VB.NET
RadListView1.RenderMode = Telerik.Web.UI.RenderMode.Mobile
````


* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.ListView.RenderMode" value="mobile" />
</appSettings>
````


---
title: Render Modes
page_title: Render Modes | RadMenu for ASP.NET AJAX Documentation
description: Render Modes
slug: menu/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

## 

**RadMenu** has three different render modes that can change the actual HTML markup that is rendered. They are exposed via the **RenderMode** property that can have four possible values - **Classic**, **Lightweight** and **Auto**. This functionality was introduced in the **Q2 2013** version.

The possible options are:

* **Classic** - this is the default value of the RenderMode property . It preserves the original rendering of the control - unordered list and nested elements are used to create layout.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - Classic or Lightweight. This functionality was added in Q3 2013.

* Lightweight - with this render mode, the control yields completely different markup making maximum use of CSS 3 and semantic HTML. This means that we have dropped the image gradients in favor of CSS gradients. As for the skins, the main goal of using the Lightweight render mode is that image gradients could be easily replaced by CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased.

* Mobile - this render mode is specially created to be used in mobile devices like smart phones and tablets.

>important RadMenu, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page. This also includes instances from user controls and master pages.
>


More information about setting the RadMenu different render modes please check the [RenderMode section](5a6cafe3-2893-47c7-aec8-ebe8b89a892c).

## Setting the Render Modes

There are two ways to set the RenderMode for the RadMenu:

When the **RenderMode** property is set in the markup you can type in a string, when set in the code-behind it takes a member of the Telerik.Web.UI.RenderMode enum. For example:

````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" runat="server" ID="RadMenu1"> </telerik:RadMenu>	    
````

A **global setting** in the web.config file that will affect the entire application, unless a concrete value is specified for RadMenu instance:

* Change render mode for all RadMenus in your application:

````ASP.NET
<appSettings>
   <add key="Telerik.Web.UI.RenderMode" value="lightweight" />
</appSettings>
````


* Change render mode for all controls in your application:

````ASP.NET
<appSettings>
    <add key="Telerik.Web.UI.Menu.RenderMode" value="lightweight" />
</appSettings>
````



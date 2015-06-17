---
title: Render Modes
page_title: Render Modes | RadProgressArea for ASP.NET AJAX Documentation
description: Render Modes
slug: progressarea/render-modes
tags: render,modes
published: True
position: 7
---

# Render Modes

## 

**RadProgressArea** has two different render modes that can change the actual HTML markup that is rendered. They are exposed via the **RenderMode** property that can have three possible values - **Classic**, **Lightweight** and **Auto**. This functionality was introduced in the **Q2 2015** version.

The possible options are:

* **Classic** - this is the default value of the **RenderMode** property . It preserves the original rendering of the control.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - Classic or Lightweight. This functionality was added in Q2 2015.

* Lightweight - with this render mode, the control yields different markup making maximum use of CSS 3 and semantic HTML. This means that we have dropped the image gradients in favor of CSS gradients. As for the skins, the main goal of using the Lightweight render mode is that image gradients could be easily replaced by CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased.

>important **RadProgressArea**, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same **RenderMode** on a given page. This also includes instances from user controls and master pages.
>

## Setting the Render Modes

There are two ways to set the **RenderMode** for the **RadProgressArea**:

When the **RenderMode** property is set in the markup you can type in a string, when set in the code-behind it takes a member of the Telerik.Web.UI.RenderMode enum. For example:


````ASP.NET
<telerik:RadProgressArea RenderMode="Lightweight" runat="server" ID="RadProgressArea1"> </telerik:RadProgressArea>	    
````


A **global setting** in the web.config file that will affect the entire application, unless a concrete value is specified for a **RadProgressArea** instance:

* Change render mode for all **RadProgressArea** controls in your application:


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


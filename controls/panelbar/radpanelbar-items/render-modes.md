---
title: Render Modes
page_title: Render Modes | RadPanelBar for ASP.NET AJAX Documentation
description: Render Modes
slug: panelbar/radpanelbar-items/render-modes
tags: render,modes
published: True
position: 7
---

# Render Modes



Some of the Telerik controls for ASP.NET AJAX support different rendering modes. They can change the actual HTML that is created to facilitate use of CSS3, semantic tags and modern skinning mechanisms. This is controlled through their **RenderMode** property. This article provides a brief description of the different render modes that can be set to the **RadPanelBar** control.

## Render Modes

Simply by setting the **RenderMode** property of the control to either of the following values you can get different look and feel of the panel bar. Below you can find a list of the values that you can use:

* **Classic** - this is the default value of the RenderMode property . It preserves the original rendering of the control - unordered list and nested elements are used to create layout.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - Classic or Lightweight.

* **Lightweight** - with this render mode, the control yields completely different markup making maximum use of CSS 3 and semantic HTML. This means that we have dropped the image gradients in favor of CSS gradients. As for the skins, the main goal of using the Lightweight render mode is that image gradients could be easily replaced by CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased.

>important RadPanelBar, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page. This also includes instances from user controls and master pages.
>


## Setting the Render Modes

There are two ways to set the RenderMode for the RadPanelBar:

When the **RenderMode** property is set in the markup you can type in a string, when set in the code-behind it takes a member of the Telerik.Web.UI.RenderMode enum. For example:

````ASPNET
<telerik:RadPanelBar RenderMode="Lightweight" runat="server" ID="RadPanelBar1"> </telerik:RadPanelBar>	    
````



A **global setting** in the web.config file that will affect the entire application, unless a concrete value is specified for RadPanelBar instance:

* Change render mode for all RadPanelBars in your application:

````ASPNET
<appSettings>
   <add key="Telerik.Web.UI.RenderMode" value="lightweight" />
</appSettings>
````



* Change render mode for all controls in your application:

````ASPNET
<appSettings>
    <add key="Telerik.Web.UI.PanelBar.RenderMode" value="lightweight" />
</appSettings>
````



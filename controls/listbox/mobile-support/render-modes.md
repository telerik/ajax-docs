---
title: Render Modes
page_title: Render Modes | RadListBox for ASP.NET AJAX Documentation
description: Render Modes
slug: listbox/mobile-support/render-modes
tags: render,modes
published: True
position: 0
---

# Render Modes



This article demonstrates the usage and the advantages, brought you by the **RenderModes** of the **RadListBox**.

## Overview

The RadListBox **RenderMode** property accepts three values:

* **Classic** - this render mode preserves the original rendering of the control - li elements with nested span elements are used to create layout.

* **Lightweight** - this is the default **RenderMode** which yields different markup making maximum use of CSS 3 and semantic html. This means that we no longer use span element for the items and have dropped the image gradients in favor of CSS gradients. As for the skins, the main goal of using the **Lightweight** render mode is that image gradients could be easily replaced by CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased. This enhancement favors especially the mobile experience.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - **Classic** or **Lightweight**. 

>note The "RenderingMode" property of the RadListBox is now obsoleted.
>


## Setting Render Mode

There are two ways to set the **RenderMode** for the **RadListBox**:

* When the **RenderMode property** is set in the markup you can type in a string, when set in the code-behind it takes a member of the `Telerik.Web.UI.RenderMode` enum. For example:

````ASPNET
<telerik:RadListBox RenderMode="Lightweight" runat="server" ID="RadListBox1"></telerik:RadListBox>
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for **RadListBox** instance:

	* Change render mode for all **RadListBoxes** in your application
	* Change render mode for **all controls** in your application

Change render mode for all **RadListBox**:

````XML
<appSettings>
	<add key="Telerik.Web.UI.RadListBox.RenderMode" value="lightweight" />
</appSettings>
````

Change render mode for **all controls**:

````XML
<appSettings>
	<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
</appSettings>
````



# See Also

 * [RadControls for ASP.NET AJAX Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://www.telerik.com/blogs/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)

 * [The Attack of the Light-Rendered or how Lightweight beats Heavyweight with CSS3 and HTML5](http://blogs.telerik.com/aspnet-ajax/posts/13-06-13/attack-of-the-light-rendered-css3-and-html5-win)

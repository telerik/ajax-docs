---
title: Render Modes
page_title: Render Modes | RadComboBox for ASP.NET AJAX Documentation
description: Render Modes
slug: combobox/mobile-support/render-modes
tags: render,modes
published: True
position: 0
---

# Render Modes



This article demonstrates the usage and the advantages, brought you by the **RenderModes** of the **RadComboBox**.

## Overview

As from Q1 2013, RadComboBox introduces the new **RenderMode** property, which accepts four values :

* **Classic** - this is the default value of the **RenderMode** property . It preserves the original rendering of the control - tables and nested elements are used to create layout.

* **Lightweight** - with this render mode, the control yields completely different markup making maximum use of CSS 3 and semantic html. This means that we no longer use table element for the input part and have dropped the image gradients in favor of CSS gradients. As for the skins, the main goal of using the **Lightweight** render mode is that image gradients could be easily replaced by CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased. This enhancement favors especially the mobile experience.

* **Native**- this render mode corresponds to the old **Simple** mode. In other words, it renders the combo as a simple native html select. When the **Native** render mode is set, you could not make use of any skinning.

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used browser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>note The "RenderingMode" property of the RadComboBox is now obsoleted.
>


## Setting Render Mode

There are two ways to set the **RenderMode** for the **RadComboBox**:

* When the **RenderMode property** is set in the markup you can type in a string, when set in the code-behind it takes a member of the `Telerik.Web.UI.RenderMode` enum. For example:

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="RadComboBox1"></telerik:RadComboBox>
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for **RadComboBox** instance:

	* Change render mode for all **RadComboBoxes** in your application
	* Change render mode for **all controls** in your application

Change render mode for all **RadComboBoxes**:

````XML
<appSettings>
	<add key="Telerik.Web.UI.ComboBox.RenderMode" value="lightweight" />
</appSettings>
````

Change render mode for all **all controls**:

````XML
<appSettings>
	<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
</appSettings>
````



# See Also

 * [RadControls for ASP.NET AJAX Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://blogs.telerik.com/blogs/13-03-08/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)

 * [The Attack of the Light-Rendered or how Lightweight beats Heavyweight with CSS3 and HTML5](http://blogs.telerik.com/aspnet-ajax/posts/13-06-13/attack-of-the-light-rendered-css3-and-html5-win)

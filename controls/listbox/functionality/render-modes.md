---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: listbox/functionality/render-modes
tags: render,modes
published: True
position: 0
---

# Render Modes



This article demonstrates the different render modes that __RadListBox__ control offers. They are exposed via the __RenderMode__ property that can have two possible values - __Classic__ or __Lightweight__. The goal behind this functionality is to stay in line with the latest trends in the web development and make maximum use of CSS3/HTML5 features. This functionality was introduced in the __Q1 2014__ version.

* __Classic__ - this is the default value of the RenderMode property which preserves the rendering that has been used before without changes.

* __Lightweight__ - this render mode emphasizes on semantic HTML and CSS3. This means that the table elements are replaced with div elements and the image gradients with of CSS gradients. Thus, the amount of data that the client browser should request is sensibly decreased. This also reduces the number of image sprites the control uses and the overall size and complexity of each skin, including custom ones.

* __Auto__ - this mode makes each control choose the appropriate rendering mode according to the used browser - Classic or Lightweight.

## Setting the Render Mode

There are two ways to set the __RenderMode__ for __RadListBox__:

* When the __RenderMode property__ is set in the markup you can type in a string, when set in the code-behind it takes a member of the `Telerik.Web.UI.RenderMode` enum. For example:

````ASPNET
			<telerik:RadListBox RenderMode="Lightweight" runat="server" ID="RadListBox1"></telerik:RadListBox>
````



>tabbedCode








>end

* A __global setting in the web.config__ file that will affect the entire application, unless a concrete value is specified for __RadListBox__ instance:

* Change render mode for all __RadListBoxes__ in your application:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.ListBox.RenderMode" value="lightweight" />
			</appSettings>
````



* Change render mode for __all controls__ in your application:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
			</appSettings>
````



# See Also

 * [RadControls for ASP.NET AJAX Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://blogs.telerik.com/blogs/13-03-08/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)

 * [The Attack of the Light-Rendered or how Lightweight beats Heavyweight with CSS3 and HTML5](http://blogs.telerik.com/aspnet-ajax/posts/13-06-13/attack-of-the-light-rendered-css3-and-html5-win)

---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: controls/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes



Some of the Telerik controls support different rendering modes. They can change the actual __HTML__ that is created	to facilitate use of __CSS3__, semantic tags and modern skinning mechanisms. This is controlled through their	__RenderMode__ property.

The possible options are:

* __Classic__ - this is the default value. It preserves the original rendering and styling that has been used before, which	often means there are a lot of tables used to create layout, which results in nested elements and some markup that can be avoided.

* __Lightweight__ - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	(including the depth of the nested elements) and makes it easier to customize.	This also reduces the number of image sprites the control uses and the overall size and complexity of each skin, including custom ones.

* __Mobile__ - this mode is an addition to the adaptive rendering of the Telerik controls. It is intended to utilize thebest HTML, accordingly to the device on which the controls are being shown. This mode forces a layout that fits the needs of the touch environment.The differences of this mode are:

* Larger content text for devices with smaller screens, which improves the user's readability experience;

* Larger sizes of buttons, touch handles etc. for easier interaction;

* Greater padding of buttons, touch handles etc. for easier interaction;The first controls that supports this mode are [RadScheduler](7AE3E4B9-4D74-4B70-92B4-C0BBD77A5474),	[RadMenu](57F3022B-32F0-4651-A758-BBD4FFE7D683) and [RadTileList](5bb3a139-86ff-4111-8cd4-df0fadc0de69).Note that this mode is introduced in __Q1 2014__.

* __Auto__ - this mode makes each control choose the appropriate rendering mode according to the used	browser - __Classic__, __Lightweight__ or __Mobile__.The behavior of the affected controls depends also on the available render modes, for example in touch devices the mode will bechanged automatically to __Mobile__, if it is supported. If it is not, the mode will fall back until it meetsthe best mode that fits the environment. This functionality was added in Q3 2013.

You can find a list with the controls that support alternative render modes in the [Render Modes List](feabe7ca-7549-4b88-afee-0cf7e79fc8a7) help article.

>note Only one type of render mode is supported per page for each control type. For example, all RadDock controls on the page must have the same valueof the RenderMode property set. This includes instances from master pages, content pages and user controls.
>


Some controls (__RadCalendar, RadComboBox, RadDock, RadFormDecorator, RadMenu, RadToolTip, RadWindow__) have a __Lightweight__ mode.	The number of controls that offers this mode is constantly increasing. Controls that do not have a new rendering mode will keep their current rendering	regardless of the value of the RenderMode property without throwing errors.

## Setting Render Mode

There are two ways to set the __RenderMode__ of each __Telerik control__:

* Use the __RenderMode property__ each control exposes. When set in the markup you can type in a string, when set in the code-behind it takesa member of the `Telerik.Web.UI.RenderMode` enum. For example:

````ASPNET
			<telerik:RadDock RenderMode="Lightweight" runat="server" ID="RadDock1"></telerik:RadDock>
````














* A __global setting in the web.config__ file that will affect the entire application,	unless a concrete value is specified for a given control instance:

* Change render mode for __all controls__ in the application

````XML
			<appSettings>
				<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
			</appSettings>
````



* Change render mode for a __given control type__:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.Menu.RenderMode" value="lightweight" />
			</appSettings>
````

Where `Menu` can be replaced with any control name, without `Rad`.

# See Also[List of the Controls that Support Alternative Render Modes](feabe7ca-7549-4b88-afee-0cf7e79fc8a7)

 * [Telerik UI for ASP.NET AJAX Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://blogs.telerik.com/blogs/13-03-08/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)

 * [The Attack of the Light-Rendered or how Lightweight beats Heavyweight with CSS3 and HTML5](http://blogs.telerik.com/aspnet-ajax/posts/13-06-13/attack-of-the-light-rendered-css3-and-html5-win)

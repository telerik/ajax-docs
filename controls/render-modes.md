---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: controls/render-modes
tags: render,modes
published: True
position: 10
---

# Render Modes



Some of the Telerik controls support different rendering modes. They can change the actual **HTML** that is created	to facilitate use of **CSS3**, semantic tags and modern skinning mechanisms. This is controlled through their	**RenderMode** property.

The possible options are:

* **Classic** - this is the default value. It preserves the original rendering and styling that has been used before, which	often means there are a lot of tables used to create layout, which results in nested elements and some markup that can be avoided.

* **Lightweight** - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	(including the depth of the nested elements) and makes it easier to customize.	This also reduces the number of image sprites the control uses and the overall size and complexity of each skin, including custom ones.

* **Mobile** - this mode is an addition to the adaptive rendering of the Telerik controls. It is intended to utilize the best HTML, accordingly to the device on which the controls are being shown. This mode forces a layout that fits the needs of the touch environment.The differences of this mode are:

* Larger content text for devices with smaller screens, which improves the user's readability experience;

* Larger sizes of buttons, touch handles etc. for easier interaction;

<<<<<<< HEAD
* Greater padding of buttons, touch handles etc. for easier interaction; The first controls that supports this mode are [RadScheduler]({%slug scheduler/overview%}),	[RadMenu]({%slug menu/overview%}) and [RadTileList]({%slug tilelist/overview%}).Note that this mode is introduced in **Q1 2014**.
=======
* Greater padding of buttons, touch handles etc. for easier interaction;The first controls that supports this mode are [RadScheduler]({%slug scheduler/overview%}),	[RadMenu]({%slug menu/overview%}) and [RadTileList]({%slug tilelist/overview%}).Note that this mode is introduced in **Q1 2014**.
>>>>>>> origin/master

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic**, **Lightweight** or **Mobile**.The behavior of the affected controls depends also on the available render modes, for example in touch devices the mode will be changed automatically to **Mobile**, if it is supported. If it is not, the mode will fall back until it meets the best mode that fits the environment. This functionality was added in Q3 2013.

You can find a list with the controls that support alternative render modes in the [Render Modes List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%}) help article.

>note Only one type of render mode is supported per page for each control type. For example, all RadDock controls on the page must have the same valueof the RenderMode property set. This includes instances from master pages, content pages and user controls.
>


Some controls (**RadCalendar, RadComboBox, RadDock, RadFormDecorator, RadMenu, RadToolTip, RadWindow**) have a **Lightweight** mode.	The number of controls that offers this mode is constantly increasing. Controls that do not have a new rendering mode will keep their current rendering	regardless of the value of the RenderMode property without throwing errors.

## Setting Render Mode

There are two ways to set the **RenderMode** of each **Telerik control**:

* Use the **RenderMode property** each control exposes. When set in the markup you can type in a string, when set in the code-behind it takes a member of the **Telerik.Web.UI.RenderMode** enum. For example:

````ASPNET
<telerik:RadDock RenderMode="Lightweight" runat="server" ID="RadDock1"></telerik:RadDock>
````



* A **global setting in the web.config** file that will affect the entire application,	unless a concrete value is specified for a given control instance:

* Change render mode for **all controls** in the application

````ASPNET
<appSettings>
	<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
</appSettings>
````



* Change render mode for a **given control type**:

````ASPNET
<appSettings>
	<add key="Telerik.Web.UI.Menu.RenderMode" value="lightweight" />
</appSettings>
````

Where `Menu` can be replaced with any control name, without `Rad`.

# See Also
<<<<<<< HEAD
=======

 * [List of the Controls that Support Alternative Render Modes]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%})
>>>>>>> origin/master

* [List of the Controls that Support Alternative Render Modes]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%})

* [Telerik UI for ASP.NET AJAX Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://blogs.telerik.com/blogs/13-03-08/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)

* [The Attack of the Light-Rendered or how Lightweight beats Heavyweight with CSS3 and HTML5](http://blogs.telerik.com/aspnet-ajax/posts/13-06-13/attack-of-the-light-rendered-css3-and-html5-win)

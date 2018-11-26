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

This article contains the following sections:

* [RenderMode Options](#rendermode-options)
* [RenderMode Fallback Order](#rendermode-fallback-order)
	* [Classic RenderMode](#classic-rendermode)
	* [Lightweight RenderMode](#lightweight-rendermode)
	* [Mobile RenderMode](#mobile-rendermode)
	* [Auto RenderMode](#auto-rendermode)
* [Setting Render Mode](#setting-render-mode)

## RenderMode Options

* **Classic** - this is the default value. It preserves the original rendering and styling that has been used before, which	often means there are a lot of tables used to create layout, which results in nested elements and some markup that can be avoided.
	
	>tip The Classic Render Mode is in maintenance mode since Q3 2015 and only critical bug fixes are provided for it. All the new functionality, controls and features are developed for the modern Lightweight and Mobile Render Modes.

* **Lightweight** - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	(including the depth of the nested elements) and makes it easier to customize.	This also reduces the number of image sprites the control uses and the overall size and complexity of each skin, including custom ones.

* **Mobile** - this mode is an addition to the adaptive rendering of the Telerik controls. It is intended to utilize the best HTML, accordingly to the device on which the controls are being shown. This mode forces a layout that fits the needs of the touch environment.The differences of this mode are:

	* Larger content text for devices with smaller screens, which improves the user's readability experience;
	
	* Larger sizes of buttons, touch handles etc. for easier interaction;
	
	* Greater padding of buttons, touch handles etc. for easier interaction;

* **Auto** - this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic**, **Lightweight** or **Mobile**.The behavior of the affected controls depends also on the available render modes, for example in touch devices the mode will be changed automatically to **Mobile**, if it is supported. If it is not, the mode will fall back until it meets the best mode that fits the environment. This functionality was added in Q3 2013.

	>tip For the automatic RenderMode detection to work, your project must reference the [Telerik.Web.Device.Detection.dll assembly]({%slug introduction/installation/included-assemblies%}).

You can find a list with the controls that support alternative render modes in the [Render Modes List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%}) help article.

>tip Only one type of render mode is supported per page for each control type. For example, all RadDock controls on the page must have the same value set to the RenderMode property. This includes instances from master pages, content pages and user controls.


## RenderMode Fallback Order

In some cases setting one value for the RenderMode may result in another mode being used by the controls. This is affected by the UserAgent string of the browser used to request the page. Here follows a list of the various possibilities and how you can affect or predict them.

### Classic RenderMode

If you explicitly set this mode, it will never change. It is always the last fallback options available.

### Lightweight RenderMode

This mode targets modern browsers (IE8+, Chrome, Firefox, Edge). If the requesting browser is IE7, the controls will fall back to the Classic RenderMode. This often happens if IE runs in Compatibility Mode.

As of R3 2017 you can avoid this by adding the `X-UA Compatible` header with value `IE=edge` to the response:

````web.config
<system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="X-UA-Compatible" value="IE=Edge"/>
      </customHeaders>
	</httpProtocol>
</system.webServer>
````

````Code-behind
Response.AddHeader("X-UA-Compatible", "IE=Edge"); 
````

### Mobile RenderMode

If the control does not support this mode, it will attempt to use the Lightweight mode.

When set explicitly, this mode will be used even for non-mobile browsers. It is recommended to use the Auto mode for such scenarios because the Mobile modes are tested and supported only under mobile devices.

### Auto RenderMode

This mode **attempts** to fall back to **Lightweight** in the majority of cases. The exceptions are:

* The requesting browser is IE7 and the version of the controls is older than R1 2017 and the `X-UA Compatible` header with value `IE=edge` is not set. In this case it will fall back to Classic.

* The requesting browser is identified as a mobile browser and the concrete control provides mobile-specific rendering. In this case it will fall back to Mobile.



## Setting Render Mode

There are two ways to set the **RenderMode** of each **Telerik control**:

* Use the **RenderMode property** each control exposes. When set in the markup you can type in a string, when set in the code-behind it takes a member of the **Telerik.Web.UI.RenderMode** enum. For example:

	**ASP.NET**
	
		<telerik:RadDock RenderMode="Lightweight" runat="server" ID="RadDock1"></telerik:RadDock>




* A **global setting in the web.config** file that will affect the entire application,	unless a concrete value is specified for a given control instance:

	* Change render mode for **all controls** in the application
	
		**web.config**

			<appSettings>
				<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
			</appSettings>
	
	
	
	* Change render mode for a **given control type**:
	
		**web.config**

			<appSettings>
				<add key="Telerik.Web.UI.Menu.RenderMode" value="lightweight" />
			</appSettings>
	

		Where `Menu` can be replaced with any control name, without `Rad`.

# See Also

 * [List of the Controls that Support Alternative Render Modes]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%})

 * [Telerik® UI for ASP.NET AJAX Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://www.telerik.com/blogs/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)

 * [The Attack of the Light-Rendered or how Lightweight beats Heavyweight with CSS3 and HTML5](http://blogs.telerik.com/aspnet-ajax/posts/13-06-13/attack-of-the-light-rendered-css3-and-html5-win)

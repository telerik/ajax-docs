---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: button/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes



__RadButton__ has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the __RenderMode__ property that can have four	possible values - __Classic__, __Lightweight__, __Mobile__ and __Auto__.	This functionality was introduced in the __Q1 2015__ version.

The possible options are:

* __Classic__—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode span elements and background images (in several sprites) are used to create the layout (including rounded corners, shadows, icons etc.).

* __Lightweight__—this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	and makes it easier to customize. This also reduces the number of image sprites required by the control.	All of this decreases the overall size and complexity of each skin, including custom ones.

* __Mobile__—this mode is currently not supported. If you set it, the mode will fall back automatically to __Lightweight__.

* __Auto__—this mode makes each control choose the appropriate rendering mode according to the used	browser—__Classic__ or __Lightweight__. This functionality was added in Q1 2015.

>important RadButton, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page.This includes mode being set for a standalone RadButton. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The __RenderMode property__ in the markup or in the code-behind that can be used for a particular instance:

````ASPNET
			<telerik:RadButton ID="RadButton1" runat="server" RenderMode="Lightweight">
			</telerik:RadButton>
````



>tabbedCode

````C#
	
			RadButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
	
````
````VB.NET
	
			RadButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
	
````
>end

* A __global setting in the web.config__ file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.Button.RenderMode" value="lightweight" />
			</appSettings>
````



# See Also

 * [Overview]({%slug button/mobile-support/overview%})

 * [Elastic Design]({%slug button/mobile-support/elastic-design%})

 * [Fluid Design]({%slug button/mobile-support/fluid-design%})

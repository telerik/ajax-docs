---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: rating/mobile-support/render-modes
tags: render,modes
published: True
position: 0
---

# Render Modes



__RadRating__ has two different render modes that can change the way the control is rendered.	They are exposed via the __RenderMode__ property that can have four	possible values - __Classic__, __Lightweight__, __Mobile__ and __Auto__.	This functionality was introduced in the __Q1 2015__ version.

The possible options are:

* __Classic__—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode background images are used to create the rating stars.

* __Lightweight__—this mode uses font icons for the rating stars, which makes it easier to customize.	This also removes the use of image sprites the control.	All of this decreases the overall size and complexity of each skin, including custom ones.

* __Mobile__—this mode is currently not supported. If you set it, the mode will fall back automatically to __Lightweight__.

* __Auto__—this mode makes each control choose the appropriate rendering mode according to the used	browser - __Classic__ or __Lightweight__.

>important RadRating, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page.All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The __RenderMode property__ in the markup or in the code-behind that can be used for a particular instance:

````ASPNET
			<telerik:RadRating id="RadRating1" runat="server" RenderMode="Lightweight">
			</telerik:RadRating>
````





````C#
		RadRating1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB.NET
				RadRating1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
	#End Region
	End Class




* A __global setting in the web.config__ file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.Rating.RenderMode" value="lightweight" />
			</appSettings>
````



# See Also

 * [Elastic Design]({%slug rating/mobile-support/elastic-design%})

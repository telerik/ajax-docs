---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: dock/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



__RadDock__ has two different render modes that can change the actual HTML markup that is rendered.They are exposed via the __RenderMode__ property that can have threepossible values - __Classic__, __Lightweight__ and __Auto__.This functionality was introduced in the __Q2 2013__ version.

The possible options are:

* __Classic__ - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.In this mode tables and background images (in several sprites) are used to createthe layout (including rounded corners and shadows).

* __Lightweight__ - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control rendersand makes it easier to customize. This also reduces the number of image sprites the control uses to a single one for the command buttons.All of this decreases the overall size and complexity of each skin, including custom ones.

* __Mobile__ - this mode is currently not supported. If you set it, the mode will fall back automatically to __Lightweight__.

* __Auto__ - this mode makes each control choose the appropriate rendering mode according to the usedbrowser - __Classic__ or __Lightweight__. This functionality was added in Q3 2013.

>important RadDock, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page.This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property __RenderMode__ of RadDock can be used to set the render mode of a particular instance of the control:

````ASPNET
	    <telerik:RadDock runat="server" ID="RadDock1" RenderMode="Lightweight">
	    </telerik:RadDock>
````





````C#
			RadDock1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB.NET
			RadDock1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
	#End Region
	End Class




* The render mode for the dock control can be specified globally in web.config by adding an app key:

````XML
	<appSettings>
	  <add key="Telerik.Web.UI.Dock.RenderMode" value="lightweight" />
	</appSettings>
````



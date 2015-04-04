---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: formdecorator/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes



__RadFormDecorator__ has two different render modes that can change the actual HTML markup that is rendered.They are exposed via the __RenderMode__ property that can have threepossible values - __Classic__, __Lightweight__ and __Auto__.This functionality was introduced in the __Q2 2013__ version.

The possible options are:

* __Classic__ - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.In this mode nested elements and background image sprites (whose total number is 7) are used to create the needed appearance, so widths above 800px and button heights different than 22px are difficult to achieve.

* __Lightweight__ - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders(even though this happens with JavaScript) and makes it easier to customize. Rounded corners, gradients and shadows are achieved via CSS3 effects which allows for flexible widths and heights.An image sprite is only used for checkboxes, radiobuttons and the dropdowns' arrow.All of this decreases the overall size and complexity of each skin, including custom ones.

* __Mobile__ - this mode is currently not supported. If you set it, the mode will fall back automatically to __Lightweight__.

* __Auto__ - this mode makes each control choose the appropriate rendering mode according to the usedbrowser - __Classic__ or __Lightweight__. This functionality was added in Q3 2013.

>important RadFormDecorator, as well as the other Telerik controls that utilize render modes, support only one type of render mode per page.This includes mode being set for a programmatically created instance. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property __RenderMode__ of RadFormDecorator can be used to set the render mode of a particular instance of the control:

````ASPNET
	    <telerik:RadFormDecorator runat="server" ID="RadFormDecorator1" RenderMode="Lightweight">
	    </telerik:RadFormDecorator>
````





````C#
			RadFormDecorator1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB.NET
			RadFormDecorator1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
	#End Region
	End Class




* The render mode for the form decorator control can be specified globally in web.config by adding an app key:

````XML
	<appSettings>
	  <add key="Telerik.Web.UI.FormDecorator.RenderMode" value="lightweight" />
	</appSettings>
````



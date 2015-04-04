---
title: Render Mode
page_title: Render Mode | UI for ASP.NET AJAX Documentation
description: Render Mode
slug: asyncupload/mobile-support/render-mode
tags: render,mode
published: True
position: 0
---

# Render Mode



__RadAsyncUpload__ has two different render modes that can change the actual HTML markup that is rendered. They are exposed via the __RenderMode__ property that can have three possible values - __Classic__, __Lightweight__ and __Auto__. This functionality was introduced in the __Q1 2015__ version.

The possible options are:

* __Classic__ - this mode is the rendering that has been used before. It remains without changes and it is the default value of the property. In this mode image and additional nested div elements are used to create the layout.

* __Lightweight__ - this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders and makes it easier to customize. This also reduces the number of image sprites the control uses to a single one. All of this decreases the overall size and complexity of each skin, including custom ones.

* __Mobile__ - this mode is currently not supported. If you set it, the mode will fall back automatically to __Lightweight__.

* __Auto__ - this mode makes each control choose the appropriate rendering mode according to the used browser - __Classic__ or __Lightweight__.

>important RadAsyncUpload, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance, and a programmatically created instance. All such controls must have the same RenderMode on a given page. This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The property __RenderMode__ of RadAsyncUpload can be used to set the render mode of a particular instance of the control:

````ASPNET
	    <telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" RenderMode="Lightweight">
	    </telerik:RadAsyncUpload>
````



>tabbedCode

````C#
	        RadAsyncUpload1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB.NET
			RadAsyncUpload1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
	#End Region
	End Class


>end

* The render mode for the dock control can be specified globally in web.config by adding an app key:

````XML
	<appSettings>
	  <add key="Telerik.Web.UI.RadAsyncUpload.RenderMode" value="lightweight" />
	</appSettings>
````



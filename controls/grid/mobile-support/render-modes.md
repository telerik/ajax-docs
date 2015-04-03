---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: grid/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes



__RadGrid__ has three different render modes that can change the actual HTML markup that is rendered.Those render modes are exposed via the __RenderMode__ property that accepts the following values -__Classic__, __Mobile__, __Lightweight__ and __Auto__.

The possible options are:

* __Classic__ — this mode is the rendering that has been used before.It remains without changes and it is the default value of the property.	In this mode tables and background images (in several sprites) are used to create	the layout (including rounded corners and shadows).

* __Lightweight__ — this mode is supported since __Q1 2015 version__ andemphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	and makes it easier to customize. This also reduces the number of image sprites required by the control and the other controlsfrom the suite it uses. In addition, all table elements are removed from the layout of the control.	All of this decreases the overall size and complexity of each skin, including custom ones.

* __Mobile__ — this mode is supported since __Q3 2014 Beta__ release	and with it, the control will change to create a user experience tailored to the device screen size.In this mode, __RadGrid__ is mobile-friendly and its touch zones are bigger and easier to select.

* __Auto__ — this option will automatically decide how to render the control on a smartphone, tablet or PC and will switch	between __Classic__ and __Mobile__ render modes (depending on the used device).

>important RadGrid and its child controls, as well as the other controls included in the	Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page.All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
>


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* Setting the __RenderMode__ property in the markup as a string, or setting it in the code-behind with a member	of the __Telerik.Web.UI.RenderMode__ enum.Following is an example for setting the __RenderMode__ property in the markup:

````ASPNET
			<telerik:RadGrid ID="RadGrid1" runat="server" RenderMode="Lightweight">
			</telerik:RadGrid>
````



* A __global setting in the web.config__ file that will affect the entire application, unless a concrete value is specifiedfor a given control instance:

````XML
			<appSettings>
				<add key="Telerik.Web.UI.Grid.RenderMode" value="Lightweight" />
			</appSettings>
````



# See Also

 * [Overview]({%slug grid/mobile-support/overview%})

---
title: Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: formdecorator/overview
tags: overview
published: True
position: 0
---

# FormDecorator Overview



## 

__RadFormDecorator__is part of Telerik Telerik UI for ASP.NET AJAX Suite that enables CSS skinning of:

* Buttons

* CheckBoxes

* Fieldset (including *legend* tags)

* GridFormDetailsViews

* H4,H5,H6

* Label

* RadioButtons

* Scrollbars

* Textarea

* Textbox

* SELECT (dropdowns and listboxes)

elements, without generating any additional Html - hidden inputs, div's, etc. Thus it integrates seamlessly into the page and doesn't require any changes to the existing page's layout.

Here are the main features of the control:

* Hover/Out states for the buttons using pure CSS

* Caching of images for IE6 (smoother user experience)

* CSS for disabled radiobuttons, checkboxes and buttons

* Various CSS look & feel improvements

* Right to left support


>caption 

![formdecorator skins thumb](images/formdecorator_skins_thumb.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .	You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


To decorate the form elements on a webpage:

1. Register __Telerik.Web.UI__namespace tagprefix:

````ASPNET
	<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
````



2. Add the __RadFormDecorator__server tag on the webpage:

````ASPNET
	<telerik:radformdecorator id="FormDecorator1" runat="server" DecoratedControls="all" Skin="Web20"></telerik:radformdecorator>
````





Values of the __DecoratedControls__ property are:

* All

* Buttons

* CheckBoxes

* Default

* Fieldset

* H4H5H6

* Label

* None

* RadioButtons

* Select

* Scrollbars

* Textarea

* Textbox



The __Default__ value enables the decoration of the following elements: Buttons, CheckBoxes, RadioButtons and Scrollbars.

The __ControlsToSkip__ property allows you to exclude certain controls from decoration set with the __DecoratedControls__ property. For example: __DecoratedControls="All" ControlsToSkip="H4H5H6"__.




>caption 

![formdecorator contrls to skip](images/formdecorator-contrls-to-skip.gif)











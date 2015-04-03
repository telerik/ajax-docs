---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: calendar/appearance-and-styling/skins
tags: skins
published: True
position: 2
---

# Skins



The __RadCalendar__ controls use __skins__ to control their overall look-and-feel. A skin is a set of images and a CSS stylesheet that can be applied to the control elements (date cells, buttons, etc.) and defines their look and feel.To apply a skin to a __RadCalendar__, __RadDatePicker__, __RadTimePicker__, or __RadDateTimePicker__ control, set its __Skin__ property, either using the properties pane orthe control's [Smart Tag]({%slug calendar/design-time/smart-tag%}).

On __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__, the __Skin__ property value is always propagated to the child controls (the embedded __RadDateInput__ and popup __RadCalendar__ and/or __RadTimeView__ controls).

The __RadCalendar__ controls are installed with a number of preset skins. These are shown below:![RadCalendar Skins](images/calendar-skins.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Not using skins

If you do not set the __Skin__ property, the __RadCalendar__ controls automatically use the "Default" skin. If you do not want to use a skin with your control, set its __Skin__ property to an empty string. If you also want to prevent the control's base stylesheet from registering, please set __EnableEmbeddedBaseStylesheet__ to __false__. The base stylesheet contains CSS styles, which are applied to the __RadCalendar, RadDatePicker, RadTimePicker__ and __RadDateTimePicker__ control instances, regardless of their skin name, because these styles are the same for all skins. These base styles include alignment, positioning, border widths, paddings, etc.

## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own skin, it is a good idea to start with the stylesheet of an existing skin and alter that. See [Creating a Custom Skin]({%slug calendar/appearance-and-styling/creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin:

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the control to __False__.

1. If the custom skin does not contain background image styles for the calendar or picker buttons, set the __ImagesPath__property to specify the location the navigation images in the RadCalendar titlebar and the pickers' popup buttons. __RadCalendar__ will look for the following images in the specified location: __arrorRight.gif__, __fastNavRight.gif__, __arrowLeft.gif__ and __fastNavLeft.gif__. The date/time pickers will look for the following images: __datePickerPopup.gif__, __datePickerPopupHover.gif__, __clock.gif__ and __clockHover.gif__. Alternatively to using ImagesPath, you can set the location of each image separately.

The RadCalendar and pickers' base stylesheet is called __Calendar.css__ and is placed in the __...Skins/__ directory. The stylesheet for a particular skin has the name __Calendar.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/Calendar__directory. For example, the stylesheet for the "Black" skin is called Calendar.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/Calendar directory. The images are referenced by name from within the stylesheet.

The __RadCalendar__stylesheet includes the CSS class definitions that are applied to the __RadCalender__control and all aspects of the __RadDatePicker__, __RadTimePicker__and __RadDateTimePicker__controls except for the embedded __RadDateInput__control. The embedded __RadDateInput__control uses the __RadInput__stylesheet, which has the name __Input.[SkinName].css__.

For more information on the CSS File structure, see [Understanding the Skin CSS File]({%slug calendar/appearance-and-styling/html-output%}).

## Setting a custom skin from the web.config

In order to set a custom skin for all RadDatePickers, RadTimePickers and RadDateTimePickers in the website, please use the following keys and values in the web.config:

````XML
	     
	<appSettings>
	    <add key="Telerik.DatePicker.Skin" value="MyCustomSkin" />
	    <add key="Telerik.TimePicker.Skin" value="MyCustomSkin" />
	    <add key="Telerik.DateTimePicker.Skin" value="MyCustomSkin" />
	    <add key="Telerik.DatePickingInput.EnableEmbeddedSkins" value="false" />
	    <add key="Telerik.DatePickingCalendar.EnableEmbeddedSkins" value="false" />
	    <add key="Telerik.RadTimeView.EnableEmbeddedSkins" value="false" />
	</appSettings>
````



(Depending on your scenario, you may not need all of the above statements. Note that unlike the other controls, the __RadTimeView__ control requires a "Rad" prefix.)

In order to set a custom skin for standalone __RadCalendar__controls, please use a __Telerik.Calendar.Skin__ and __Telerik.Calendar.EnableEmbeddedSkins__ keys.

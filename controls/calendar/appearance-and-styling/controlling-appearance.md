---
title: Controlling Appearance
page_title: Controlling Appearance | UI for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: calendar/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



A number of properties let you set the look and feel of the __RadCalendar__ controls:

* The __Skin__ property lets you specify a [skin]({%slug calendar/appearance-and-styling/skins%}) to set the overall look and feel of any of the controls. You can even assign separate skins to the embedded controls of __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__.

* In addition to the skin, you can [set a variety of styles]({%slug calendar/appearance-and-styling/styles%}) that further customize the look and feel supplied by the skin.

* You can use templates to add controls and HTML elements to portions of the __RadCalendar__ and __RadTimeView__ controls:

* On __RadCalendar__, you can [apply templates to individual day cells]({%slug calendar/templates/radcalendar-day-templates%}) of the calendar, or to the [calendar header and footer]({%slug calendar/templates/radcalendar-header-and-footer-templates%}).

* On __RadTimeView__, you can [provide templates]({%slug calendar/templates/radtimeview-templates%}) for the individual time values and to the header and footer.

* The __ImagesPath__ property allows to specify a path for a directory that contains custom images which can replace the default ones. It is applicable for __RadCalendar__, __RadDatePicker__, __RadTimePicker__ and __RadDateTimePicker__ controls and enables versatile customization of their appearance. Note, that in order for that property to work you need to also set __EnableEmbeddedSkins="false"__.

Here is an example using the __ImagesPath__ property:

````XML
	     
	
	<telerik:RadDateTimePicker EnableEmbeddedSkins="false" ImagesPath="~/Images" ID="RadDateTimePicker1" runat="server">
	</telerik:RadDateTimePicker>
				
````



In addition to the properties mentioned above, which apply to all types of __RadCalendar__ controls, the various __RadCalendar__ controls allow further customization of their appearance.

## RadCalendar

On the __RadCalendar__ control, you can configure most aspects of its layout, including

* The [title]({%slug calendar/radcalendar/title-settings%})

* he [navigation controls]({%slug calendar/radcalendar/navigation-controls-settings%}) on the title bar

* The [column and row headers]({%slug calendar/radcalendar/column-and-row-headers-settings%})

* The [day matrix]({%slug calendar/radcalendar/customizing-the-day-matrix%})

* The number of months displayed in a single [view]({%slug calendar/radcalendar/multi-view-mode%})

## RadDatePicker, RadTimePicker, and RadDateTimePicker

* The [layout of the embedded time view]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/configuring-the-embedded-time-view%}) popup on __RadTimePicker__ and __RadDateTimePicker__ can be configured

* The [format of date and time values]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/formatting-values%}) can be customized.

## Animations

__RadCalendar__ and __RadDatePicker__/__RadDateTimePicker__ support JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the date picker popup is displayed/hidden or the fast navigation option of __RadCalendar__ is used.

In order to change the duration of the animation, use the __HideAnimation-Duration__ and __ShowAnimation-Duration__ properties of __RadDatePicker__/__RadDateTimePicker__ and __FastNavigationSettings->HideAnimation-Duration/FastNavigationSettings -> ShowAnimation-Duration__ properties of __RadCalendar__.

Here are a couple of sample configurations:

````ASPNET
	     
	<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
	    <HideAnimation Duration="4444" />
	    <ShowAnimation Duration="1111" />
	</telerik:RadDateTimePicker>	
````



````ASPNET
	     
	<telerik:RadCalendar ID="RadCalendar1" runat="server">
	    <FastNavigationSettings>
	    <HideAnimation Duration="444" />
	    <ShowAnimation Duration="111" />
	    </FastNavigationSettings>
	</telerik:RadCalendar>
````



>note If __RadDatePicker__ / __RadDateTimePicker__ postbacks automatically (AutoPostBack property set to true), the __HideAnimation-Duration__ value is 0 and cannot be altered.
>


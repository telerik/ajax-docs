---
title: Controlling Appearance
page_title: Controlling Appearance | RadCalendar for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: calendar/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance


A number of properties let you control the look and feel of the **RadCalendar** controls:

* The **Skin** property lets you specify a [skin]({%slug calendar/appearance-and-styling/skins%}) to set the overall look and feel of any of the controls. You can even assign separate skins to the embedded **RadDatePicker**, **RadTimePicker** and **RadDateTimePicker** controls.

* In addition to the skin, you can [set variety of styles]({%slug calendar/appearance-and-styling/styles%}) that further customize the look and feel supplied by the skin.

* You can use templates to add controls or HTML elements to parts of the **RadCalendar** and **RadTimeView** controls:

	* On **RadCalendar**, you can [apply templates to individual day cells]({%slug calendar/templates/radcalendar-day-templates%}) of the calendar, or to the [calendar header and footer]({%slug calendar/templates/radcalendar-header-and-footer-templates%}).

	* On **RadTimeView**, you can [provide templates]({%slug calendar/templates/radtimeview-templates%}) for the individual time values and to the header and footer.

* The **ImagesPath** property enables you to specify path to a directory that contains custom images which can replace the default ones. It is applicable for **RadCalendar**, **RadDatePicker**, **RadTimePicker** and **RadDateTimePicker** controls and enables versatile customization of their appearance. Note that in order for that property to work you need to also set **EnableEmbeddedSkins="false"**.

Here is an example using the **ImagesPath** property:

````XML
<telerik:RadDateTimePicker EnableEmbeddedSkins="false" ImagesPath="~/Images" ID="RadDateTimePicker1" runat="server">
</telerik:RadDateTimePicker>
````


In addition to the properties mentioned above, which apply to all types of **RadCalendar** controls, the various **RadCalendar** controls provide options for further customization of their appearance.


## RadCalendar

For the **RadCalendar** control, you can configure most aspects of its layout, including

* The [title]({%slug calendar/radcalendar/title-settings%})

* The [navigation controls]({%slug calendar/radcalendar/navigation-controls-settings%}) on the title bar

* The [column and row headers]({%slug calendar/radcalendar/column-and-row-headers-settings%})

* The [day matrix]({%slug calendar/radcalendar/customizing-the-day-matrix%})

* The number of months displayed in a single [view]({%slug calendar/radcalendar/multi-view-mode%})


## RadDatePicker, RadTimePicker, and RadDateTimePicker

* The [layout of the embedded time view]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/configuring-the-embedded-time-view%}) popup on **RadTimePicker** and **RadDateTimePicker** can be configured

* The [format of date and time values]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/formatting-values%}) can be customized.


## Animations

**RadCalendar** and **RadDatePicker**/**RadDateTimePicker** support JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the date picker popup is displayed/hidden or the fast navigation option of **RadCalendar** is used.

In order to change the duration of the animation, use the **HideAnimation-Duration** and **ShowAnimation-Duration** properties of **RadDatePicker**/**RadDateTimePicker** and **FastNavigationSettings->HideAnimation-Duration/FastNavigationSettings -> ShowAnimation-Duration** properties of **RadCalendar**.

Following are some sample configurations:

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


>note 
If **RadDatePicker** / **RadDateTimePicker** postbacks automatically (**AutoPostBack** property is set to **true**), the **HideAnimation-Duration** value is 0 and cannot be altered.
>


---
title: Controlling Appearance
page_title: Controlling Appearance | RadTimePicker for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: timepicker/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance


A number of properties let you control the look and feel of the **RadTimePicker** control:

* The **Skin** property lets you specify a [skin]({%slug timepicker/appearance-and-styling/skins%}) to set the overall look and feel of any of the controls. You can even assign separate skins to the embedded **RadDatePicker**, **RadTimePicker** and **RadDateTimePicker** controls.

* You can use templates to add controls or HTML elements to parts of the **RadTimeView** control:

	* On **RadTimeView**, you can [provide templates]({%slug timepicker/templates/radtimeview-templates%}) for the individual time values and to the header and footer.

* The **ImagesPath** property enables you to specify path to a directory that contains custom images which can replace the default ones. Note that in order for that property to work you need to also set **EnableEmbeddedSkins="false"**.

Here is an example using the **ImagesPath** property:

````ASPNET
<telerik:RadTimePicker RenderMode="Lightweight" EnableEmbeddedSkins="false" ImagesPath="~/Images" ID="RadTimePicker1" runat="server">
</telerik:RadTimePicker>
````


In addition to the properties mentioned above the **RadTimePicker** control provides the following options for further customization.


* The [layout of the embedded time view]({%slug timepicker/functionality/configuring-the-embedded-time-view%}) popup on **RadTimePicker** can be configured

* The [format of date and time values]({%slug timepicker/functionality/formatting-values%}) can be customized.


## Animations

**RadTimePicker** supports JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the date picker popup is displayed/hidden or the fast navigation option of **RadCalendar** is used.

In order to change the duration of the animation, use the **HideAnimation-Duration** and **ShowAnimation-Duration** properties of **RadTimePicker**.

Following are some sample configurations:

````ASPNET
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server">
    <HideAnimation Duration="4444" />
    <ShowAnimation Duration="1111" />
</telerik:RadTimePicker>	
````


>tip 
If **RadTimePicker** postbacks automatically (**AutoPostBack** property is set to **true**), the **HideAnimation-Duration** value is 0 and cannot be altered.
>



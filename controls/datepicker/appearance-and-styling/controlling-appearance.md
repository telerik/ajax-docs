---
title: Controlling Appearance
page_title: Controlling Appearance | RadDatePicker for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: datepicker/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance


A number of properties let you control the look and feel of the **RadDatePicker** control:

* The **Skin** property lets you specify a skin  to set the overall look and feel of any of the control.

* In addition to the skin, you can [set variety of styles]({%slug calendar/appearance-and-styling/styles%}) for the embedded **RadCalendar** that further customizes the look and feel supplied by the skin.

* The **ImagesPath** property enables you to specify path to a directory that contains custom images which can replace the default ones. It enables versatile customization of the appearance. Note that in order for that property to work you need to also set **EnableEmbeddedSkins="false"**. Below is an example using the **ImagesPath** property:



````ASPNET
<telerik:RadDatePicker RenderMode="Lightweight" EnableEmbeddedSkins="false" ImagesPath="~/Images" ID="RadDatePicker1" runat="server">
</telerik:RadDatePicker>
````


* The [format of date and time values]({%slug datepicker/functionality/formatting-values%}) can be customized.


## Animations

**RadDatePicker** supports JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the date picker popup is displayed or hidden.

In order to change the duration of the animation, use the **HideAnimation-Duration** and **ShowAnimation-Duration** properties of **RadDatePicker**.

Following are some sample configurations:

````ASPNET
<telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker1" runat="server">
    <HideAnimation Duration="4444" />
    <ShowAnimation Duration="1111" />
</telerik:RadDatePicker>	
````



>tip 
If **RadDatePicker** postbacks automatically (**AutoPostBack** property is set to **true**), the **HideAnimation-Duration** value is 0 and cannot be altered.
>


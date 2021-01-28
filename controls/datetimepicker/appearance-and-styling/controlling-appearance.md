---
title: Controlling Appearance
page_title: Controlling Appearance - RadDateTimePicker
description: Check our Web Forms article about Controlling Appearance.
slug: datetimepicker/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance


A number of properties let you control the look and feel of the **RadDateTimePicker** control:

* The **Skin** property lets you specify a [skin]({%slug datetimepicker/appearance-and-styling/skins%}) to set the overall look and feel of any of the control.

* The **ImagesPath** property enables you to specify path to a directory containing custom images that can replace the default ones. It enables versatile customization of the appearance. Note that in order for that property to work you need to also set **EnableEmbeddedSkins="false"**.

* The [layout of the embedded time view]({%slug datetimepicker/functionality/configuring-the-embedded-time-view%}) popup on **RadDateTimePicker** can be configured

* The [format of date and time values]({%slug datetimepicker/functionality/formatting-values%}) can be customized.


Below is an example using the **ImagesPath** property:

````ASPNET
<telerik:RadDateTimePicker RenderMode="Lightweight" EnableEmbeddedSkins="false" ImagesPath="~/Images" ID="RadDateTimePicker1" runat="server">
</telerik:RadDateTimePicker>
````



## Animations

The **RadDateTimePicker** control supports JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the picker popup is shown or hidden.

In order to change the duration of the animation, use the **HideAnimation-Duration** and **ShowAnimation-Duration** properties of **RadDateTimePicker**.

Following are some sample configurations:

````ASPNET
<telerik:RadDateTimePicker RenderMode="Lightweight" ID="RadDateTimePicker1" runat="server">
    <HideAnimation Duration="4444" />
    <ShowAnimation Duration="1111" />
</telerik:RadDateTimePicker>	
````


>note 
If **AutoPostBack** property of **RadDateTimePicker** is set to **true** the **HideAnimation-Duration** value is 0 and cannot be altered.
>



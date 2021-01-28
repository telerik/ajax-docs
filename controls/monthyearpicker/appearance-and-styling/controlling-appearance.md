---
title: Controlling Appearance
page_title: Controlling Appearance - RadMonthYearPicker
description: Check our Web Forms article about Controlling Appearance.
slug: montyearpicker/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance


You can use a number of properties to control the look and feel of the **RadMonthYearPicker** controls:

* The **Skin** property lets you specify a skin to define the overall look and feel of any of the control. 

* The **ImagesPath** property enables you to specify path to a directory that contains custom images which can replace the default ones. It is applicable for **RadMonthYearPicker** control and enables versatile customization of the appearance. Note that in order for that property to work you need to also set **EnableEmbeddedSkins="false"**.

Here is an example using the **ImagesPath** property:

````ASPNET
<telerik:RadMonthYearPicker RenderMode="Lightweight" ID="RadMonthYearPicker1" runat="server" EnableEmbeddedSkins="false" ImagesPath="~/Images"> 
</telerik:RadMonthYearPicker>
````


## Animations

**RadMonthYearPicker** supports JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the picker popup is displayed/hidden.

In order to change the duration of the animation, use the **HideAnimation-Duration** and **ShowAnimation-Duration** properties of **RadDatePicker**/**RadDateTimePicker** and **FastNavigationSettings->HideAnimation-Duration/FastNavigationSettings -> ShowAnimation-Duration** properties of **RadCalendar**.

Following are some sample configurations:

````ASPNET
<telerik:RadMonthYearPicker RenderMode="Lightweight" ID="RadMonthYearPicker1" runat="server">
    <HideAnimation Duration="4444" />
    <ShowAnimation Duration="1111" />
</telerik:RadMonthYearPicker>	
````



>note 
If **RadMonthYearPicker** postbacks automatically (**AutoPostBack** property is set to **true**), the **HideAnimation-Duration** value is 0 and cannot be altered.
>



---
title: Controlling Appearance
page_title: Controlling Appearance - RadCalendar
description: Check our Web Forms article about Controlling Appearance.
slug: calendar/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance


A number of properties let you control the look and feel of the **RadCalendar** control:

* The **Skin** property lets you specify a [Skin]({%slug calendar/appearance-and-styling/skins%}) to set the overall look and feel of any of the controls. You can even assign separate skins to the embedded **RadDatePicker**, **RadTimePicker** and **RadDateTimePicker** controls.

* In addition to the skin, you can [set variety of styles]({%slug calendar/appearance-and-styling/styles%}) that further customize the look and feel supplied by the skin.

* You can use templates to add controls or HTML elements to parts of the **RadCalendar** control:

	* On **RadCalendar**, you can [apply templates to individual day cells]({%slug calendar/functionality/templates/day-templates%}) of the calendar, or to the [calendar header and footer]({%slug calendar/functionality/templates/header-and-footer-templates%}).

* The **ImagesPath** property enables you to specify path to a directory that contains custom images which can replace the default ones. Note that in order for that property to work you need to also set **EnableEmbeddedSkins="false"**.

Here is an example using the **ImagesPath** property:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" EnableEmbeddedSkins="false" ImagesPath="~/Images" ID="RadCalendar1" runat="server">
</telerik:RadCalendar>
````


In addition you can configure most aspects of the **RadCalendar** layout :

* The [title]({%slug calendar/functionality/title-settings%})

* The [navigation controls]({%slug calendar/functionality/navigation-controls-settings%}) on the title bar

* The [column and row headers]({%slug calendar/functionality/column-and-row-headers-settings%})

* The [day matrix]({%slug calendar/functionality/customizing-the-day-matrix%})

* The number of months displayed in a single [view]({%slug calendar/functionality/multi-view-mode%})



## Animations

**RadCalendar** supports JQuery fade-in/fade-out animation with predefined duration of 300ms (switched on by default). The animation is processed when the fast navigation option of **RadCalendar** is used.

In order to change the duration of the animation, use the **FastNavigationSettings.HideAnimation-Duration** and **FastNavigationSettings.ShowAnimation-Duration** properties of **RadCalendar**.

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server">
    <FastNavigationSettings>
    <HideAnimation Duration="444" />
    <ShowAnimation Duration="111" />
    </FastNavigationSettings>
</telerik:RadCalendar>
````



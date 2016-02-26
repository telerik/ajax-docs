---
title: Fonts
page_title: Fonts | UI for ASP.NET AJAX Documentation
description: Treats font size and family used in the built-in skins and render modes, how to set font icons size
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/fonts
tags: font, font-size, font-family, font-weight, font-icon, font-style
published: True
position: 4
---

# Fonts

This article explains the how fonts are used by the Telerik UI for ASP.NET AJAX controls skins. Below you can find information about:

* [how the `font-size`, `font-family`, `font-weight` and `font-style` rules used by the controls](#general-font-css-rules)

* [the list of skins that have a `font-family` predefined](#skins-with-predefined-font-family)

* [`font-weight` specifics](#font-weight-specifics)

* [font icons size](#font-icon-size)



## General Font CSS Rules

### Lightweight Render Mode

In the [Lightweight Render Mode]({%slug controls/render-modes%}) all UI for ASP.NET AJAX controls do not have a default font as of **Q1 2016 SP1**. 

This means the controls do not have `font-size`, `font-family`, `font-weight` and `font-style` predefined and inherit the font-size of the `<body>` element if such is set. Otherwise, the default browser values apply. This provides all Telerik controls on the page with have the same look and feel by making use of their [elastic design capabilities]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%}).

In case a Telerik control is placed in a container with explicit font set, the Telerik control will inherit this font or the font of the first wrapper element that has font specified.

>tip For best look and feel we recommend to set `font-size: 14px` and `font-family: "Segoe UI", Arial, Sans-serif;` (**Example 1**) for all skins except the [Skins with Predefined Font-family](#skins-with-predefined-font-family) where you should use their preferred font family.

>caption **Example 1**: Setting font for the page which will be inherited from Telerik controls.

```CSS
body {
    font-size: 14px;
    font-family: "Segoe UI", Arial, Sans-serif;
}
````
>note
The Bootstrap, Material, Metro and (Black)MetroTouch skins have `font-family` defined. 

### Classic Render Mode

The Classic Render Mode remains unchanged and uses the 12px font-size and the Segoe UI font that have always been used. A few skins have a font-family defined, however: [Skins with Predefined Font-family](#skins-with-predefined-font-family).



## Skins with Predefined Font-family

The skins listed below have predefined font-family as follows:

* Material—font-family: "Roboto", "Noto", sans-serif;

* Bootstrap—font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

* Metro—font-family: "Segoe UI", Arial, Helvetica, sans-serif; 

>note The Material skin includes the **Roboto** font-file from the Telerik assembly. It will be used even if it is not installed on the user computer.



## Font-weight Specifics

If you increase the `font-size` to 16px, 20px or even larger, we recommended you set `font-weight: 100` on the page. This applies particularly for **BlackMetroTouch** and **MetroTouch** skins.



## Font Icon Size

For **Lightweight** RenderMode of the controls font icons are used instead of image sprites for the tool icons, selection indicators, predefined badges, etc. The default size of these font-icons is **16px**, except for the Material skin, in which it is **18px**. 


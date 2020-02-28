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

This article explains the how fonts are used by the Telerik® UI for ASP.NET AJAX controls skins. Below you can find information about:

* [how the `font-size`, `font-family`, `font-weight` and `font-style` rules used by the controls](#general-font-css-rules)

* [the list of skins that have a `font-family` predefined](#skins-with-predefined-font-family)

* [`font-weight` specifics](#font-weight-specifics)

* [font icons size](#font-icon-size)



## General Font CSS Rules

### Lightweight Render Mode

In the [Lightweight Render Mode]({%slug controls/render-modes%}) all UI for ASP.NET AJAX controls do not have a default font as of **Q1 2016 SP1**.

This means the controls do not have `font-size`, `font-family`, `font-weight` and `font-style` predefined and inherit the font-size of the `<body>` element if such is set. Otherwise, the default browser values apply. This provides all Telerik controls on the page with the same look and feel by making use of their [elastic design capabilities]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%}).

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

With the mentioned Release we have also improved the metrics of AJAX form controls. The ASP.NET AJAX skin palette is divided into three main categories: Default skins, Bootstrap skin and the Material skin. In each of the above there are established interrelated connections between width, height, font size (14px), line height (20px), paddings and borders. A dimension-orientated scheme based on line height and font size ratio is created—1.428571429 (20/14)—that keeps the main proportions of controls consistent with each other, used individually, combined in a complex data form or integrated in composite container controls. By changing just the font size, the layout of the controls can easily be adjusted to fulfill various needs. This provides convenient scalability.

### Classic Render Mode

The Classic Render Mode remains unchanged and uses the 12px font-size and the Segoe UI font that have always been used. A few skins have a font-family defined, however: [Skins with Predefined Font-family](#skins-with-predefined-font-family).



## Skins with Predefined Font-family

The skins listed below have predefined font-family as follows:

* Material—font-family: "Roboto", "Noto", sans-serif;

* Bootstrap—font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

* Metro—font-family: "Segoe UI", Arial, Helvetica, sans-serif;

>note The Material skin includes the **Roboto** font-file from the Google cloud. It will be used even if it is not installed on the user computer, but downloading it requires an active Internet connection.

The [Use Material Skin Without Active Internet Connection](https://www.telerik.com/support/kb/aspnet-ajax/details/use-material-skin-without-active-internet-connection) KB article explains a possible approach to avoid these requests.



## Font-weight Specifics

If you increase the `font-size` to 16px, 20px or even larger, we recommended you set `font-weight: 100` on the page. This applies particularly for **BlackMetroTouch** and **MetroTouch** skins.



## Font Icon Size

In **Lightweight** RenderMode of the controls font icons are used for better performance instead of image sprites for the tool icons, selection indicators, predefined badges, etc. These font-icons are designed in a **16px** grid base, so for best image quality the resizing should be in a 16-scalable size. The only exception is Material skin, in which the grid base of the icons is optimized for **18px**.

One of the greatest benefits of using font icons is the ability to scale them up and down with ease. However, if we would like to have crisp, sharp images, we need to deal with some technical limitations—especially in small sizes.

Although font icons consist of vector graphics, we should keep in mind that each icon is designed in a fixed pixel grid. A pixel grid is the minimum-scaled canvas in which our icon would look pixel-perfect. Every detail of the icon should be aligned to that grid system. Therefore, the final image-icon will have the best quality when its size equals the base pixel grid size or multiplies it.

If you'd like to use icons with a font size of 16px, 32px or 48px, you should use a font icon design in a base grid canvas scalable to 16x16. If you'd like to use an icon in 14px, 28px or 42px size, the base canvas should be 14x14, etc. So, when one uses a font with a pixel grid base of 16px and sets the font size to 17px, the browser is going to antialiase the semi-transparent pixels and render a blurred image. Have in mind that the bigger the font icon size is, the better quality the image will be.

# See Also

 * [Visual and Dimension Improvements in UI for ASP.NET AJAX](https://www.telerik.com/blogs/visual-and-dimension-improvements-in-ui-for-asp.net-ajax)
 * [Use Material Skin Without Active Internet Connection](https://www.telerik.com/support/kb/aspnet-ajax/details/use-material-skin-without-active-internet-connection)

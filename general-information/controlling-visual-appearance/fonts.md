---
title: Fonts
page_title: Fonts | UI for ASP.NET AJAX Documentation
description: Fonts
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/fonts
tags: font, font-size, font-family, font-weight, font-icon, font-style
published: True
position: 4
---

# Fonts

Since Q1 2016 SP1 release the default fonts of all UI for ASP.NET AJAX controls have been removed. This means: **font-size, font-family, font-weight** and **font-style**. The controls now inherit the font-size of the **<body>** element if such is set, which means that all Telerik controls on the page will have the same look and feel. In case the specific control is placed in a container with explicit font-size it will inherits its font or the font of its wrapper element in case it has font specified. For best look and feel we recommend to set font-size: 14px (**Example 1**). For Classic rendering of the controls decrease the size to 12px.

>caption **Example 1**: Setting font for the page which will be inherited from Telerik controls.

```CSS
body {
    font-size: 14px;
    font-family: "Segoe UI", Arial, Sans-serif;
}
````
>note
Only Bootstrap, Material, Metro and (Black)MetroTouch skins have font-family defined. 

## Skins with predefined Font-family

The skins listed below have predefined font-family as follows:

* Material -  font-family: "Roboto", "Noto", sans-serif;

* Bootstrap - font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

* Metro - font-family: "Segoe UI", Arial, Helvetica, sans-serif; 

>note
The Material skin includes the **Roboto** font-file from the Telerik assembly. It will be used even if it is not installed on the user computer.


## Font-weight specifics
Regarding the font-weight: If you increase the font-size to 16px, 20px or even larger, it is recommended to set **font-weight: 100** on the page. This applies particularly for **BlackMetroTouch** and **MetroTouch** skins.

## Font-icon size

For **Lightweight** RenderMode of the controls font-icons are used instead of image sprites for the selection indicator and predefined badges. The default size of these font-icons is **16px**, except for the Material skin which is **18px**. 


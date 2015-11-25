---
title: Elastic Design
page_title: Elastic Design | RadColorPicker for ASP.NET AJAX Documentation
description: Elastic Design
slug: colorpicker/mobile-support/elastic-design
tags: elastic,design,color picker
published: True
position: 1
---

# Elastic Design


This article explains the **elastic design capabilities RadColorPicker offers**. The [Lightweight RenderMode]({%slug colorpicker/mobile-support/render-modes%}) of RadColorPicker supports **elastic design as of Q3 2015** (**Figure 1**).

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating	the user experience. This often includes changing the font size and having dimensions set in percent.


>caption Figure 1: Comparison between the appearance of a RadColorPicker with regular font size and with increased font size.

![color-picker-elastic-design](images/color-picker-elastic-design.png)


**RadColorPicker** does not create elastic design by itself, but can fit in a page that follows this pattern. This means that its **Lightweight RenderMode** supports **changing the font size** without breaking the control's appearance - if the new size is larger than the original, the elements in the control will simply increase their size as well to accommodate the text. This fluid layout is achieved by using `em` units for setting dimensions and paddings in the control, instead of `px`because `em` units are tied to the font size. This allows dimensions and sizes to scale with the font size.


>note **RadColorPicker** takes the font-size of the page automatically. If the developer does not set it explicitly (**Example 1**), this is up to the client's browser and a common default value is 16px.


>caption **Example 1**: Setting default font for the page with the default value for the Telerik controls.

```CSS
body {
	font-size: 12px; /* 12px is the default value for Telerik controls */
	font-family: "Segoe UI", Arial, Sans-serif;
}
````


>caption **Example 2**: Changing the font-size of a RadColorPicker via page-level CSS rules. 

````CSS
body {
	font-size: 16px;
	font-family: "Segoe UI", Arial, Sans-serif;
}
````
````ASP.NET
<telerik:RadColorPicker RenderMode="Lightweight" runat="server" ID="RadColorPicker1"></telerik:RadColorPicker>
````

>tip You can apply the CSS rule to the Color Picker only, or to its container if you do not want to change the entire page.

>caption **Example 3**: Changing the font-size of the Color Picker via the control's Font-Size property. 

````ASP.NET
<telerik:RadColorPicker Font-Size="16px" RenderMode="Lightweight" runat="server" ID="RadColorPicker1"></telerik:RadColorPicker>
````


# See Also


 * [Render Modes]({%slug colorpicker/mobile-support/render-modes%})



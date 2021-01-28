---
title: Right-to-left Support
page_title: Right-to-left Support - RadColorPicker
description: Check our Web Forms article about Right-to-left Support.
slug: colorpicker/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 2
---

# Right-to-left Support




**RadColorPicker** fully supports right-to-left (RTL) language locales. In order to turn on the RTL support you should set **dir=rtl to the html or body** element or at least to its parent element. You can also use the **direction:rtl** CSS property.

````ASP.NET
<div dir="rtl">
    <telerik:RadColorPicker RenderMode="Lightweight" runat="server" ID="RadColorPicker1" PaletteModes="All">
    </telerik:RadColorPicker>
</div>
````

![radcolorpicker-rtl-screenshot](images/radcolorpicker-rtl-screenshot.png)

# See Also

 * [See this live in an online demo](https://demos.telerik.com/aspnet-ajax/colorpicker/examples/righttoleft/defaultcs.aspx)

---
title: Right-to-left Support
page_title: Right-to-left Support | UI for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: colorpicker/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 2
---

# Right-to-left Support



## 

The __RadColorPicker__ fully supports right-to-left (RTL) language locales. In order to turn on the RTL support you should set __dir=rtl to the html or body__ element or at least to its parent element. You can also use the __direction:rtl__ CSS property.

````ASPNET
	    <div dir="rtl">
	        <telerik:RadColorPicker runat="server" ID="RadColorPicker1" PaletteModes="All">
	        </telerik:RadColorPicker>
	    </div>
````

![radcolorpicker-rtl-screenshot](images/radcolorpicker-rtl-screenshot.png)

# See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/colorpicker/examples/righttoleft/defaultcs.aspx)

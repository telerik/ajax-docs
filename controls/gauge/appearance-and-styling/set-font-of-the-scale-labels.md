---
title: Set Font of the Scale Labels
page_title: Set Font of the Scale Labels | RadGauge for ASP.NET AJAX Documentation
description: Set Font of the Scale Labels
slug: gauge/appearance-and-styling/set-font-of-the-scale-labels
tags: set,font,of,the,scale,labels
published: True
position: 1
---

# Set Font of the Scale Labels

The purpose of Font property is to set the size and the font family of the Scale Labels. It has the following syntax:

SizeInPixels Font1,Font2,Font3 (e.g. **Font="10px Times New Roman,Arial,serif"**). Default Font is **12px Arial,Helvetica,sans-serif**

* The size of the Font is set in the beginning of the Font declaration, like in the example above.

* The property holds several font names which act as a "fallback" system. This means that if the browser does not support the first font, it will try the next one.

* The last font can be of [generic-family type](http://en.wikipedia.org/wiki/Font_family_%28HTML%29#Generic_font_families) (e.g. serif, sans-serif, cursive, etc.), so that the browser can pick a similar font in the generic family, in case the other one is unavailable.

The Font property can be set either in the markup, or in the code behind, for example:

````C#
RadLinearGauge1.Scale.Labels.Font = "12px Times New Roman,Helvetica,sans-serif";
````
````VB
RadLinearGauge1.Scale.Labels.Font = "12px Times New Roman,Helvetica,sans-serif"
````


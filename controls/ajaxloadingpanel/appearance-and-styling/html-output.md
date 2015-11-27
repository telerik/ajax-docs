---
title: HTML Output
page_title: HTML Output | RadAjaxLoadingPanel for ASP.NET AJAX Documentation
description: HTML Output
slug: ajaxloadingpanel/appearance-and-styling/html-output
previous_url: ajax/appearance-and-styling/html-output
tags: html,output
published: True
position: 3
---

# HTML Output



## 

When the Skin property of the RadAjaxLoadingPanel is set, its HTML output is the following:

````XML
<div class="RadAjax RadAjax_Sunset">
<div class="raDiv raTopLeft">
</div>
<div class="raColor raTransp">
</div>
</div>
````



There are three <div> elements:

* div.RadAjax.RadAjax_SkinName - this is the loading panel wrapper, which holds the skin name (e.g. Sunset)

* div.raDiv - this is the element, which holds the animated loading image. The background image's position is determined by the second CSS class (raTop, raTopLeft, raTopRight, raLeft, raRight, raBottom, raBottomLeft, raBottomRight, raNone). The second CSS class depends on the RadAjaxLoadingPanel's **BackgroundPosition** property. The raNone class appears if BackgroundPosition="None" and removes the background image. If there is no second CSS class, the background image is centered (by default BackgroundPosition="Center").

* div.raColor - this is the element, which holds the loading panel's background color. This div can be semi-transparent if the raTransp CSS class is applied. The existence of the this CSS class is determined by the control's **EnableSkinTransparency** property ("true" by default).

The two inner divs (raDiv and raColor) are 100% wide and high, so that they fill the wrapper element. The raDiv element is always on top of the raColor element. In order to achieve this, raColor is positioned absolutely and has a z-index of 1, while raDiv is positioned relatively and has a z-index of 2 (the relative positioning is only needed for the z-index style to work). The benefit of using two elements is that the background color can be semi-transparent, while the background image is completely opaque (unless the **Transparency** property is set, which is not needed when a **Skin** is used).


A typical RadAjaxLoadingPanel skin consists of only 3 CSS rules - one for the background image, one for the background color and one for the skin transparency.



````ASP.NET
.RadAjax_SkinName .raDiv 
{ 
  background-image:url(............); 
} 
.RadAjax_SkinName .raColor 
{ 
  background-color:........; 
} 
.RadAjax_SkinName .raTransp 
{ 
  opacity:0.7;
  -moz-opacity:0.7; 
  filter:alpha(opacity=70); 
}
````



The **opacity** CSS property is part of the CSS3 specification and is applied only by the browsers, which support it. **-moz-opacity** is aimed at older Gecko-based browsers, while the proprietary **filter** property is for IE. Note that while opacity is a number between 0 and 1, the filter opacity for IE should be multiplied by 100.



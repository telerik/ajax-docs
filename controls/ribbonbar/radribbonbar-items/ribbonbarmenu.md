---
title: RibbonBarMenu
page_title: RibbonBarMenu | UI for ASP.NET AJAX Documentation
description: RibbonBarMenu
slug: ribbonbar/radribbonbar-items/ribbonbarmenu
tags: ribbonbarmenu
published: True
position: 6
---

# RibbonBarMenu



## RibbonBarMenu

The __RibbonBarMenu__ has a few important properties, which are listed below:



* __Text__ is the string that the user sees displayed on the __RibbonBarMenu__.

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the button.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* __Size__ determines the size of the __RibbonBarToggleButton__. The value can be “Large”, “Medium” or “Small”.

* __ImageRenderingMode__ determines the rendering mode of the image.In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is __Auto__), it's considered as follows:- If ImageUrl is set and __ImageUrlLarge__ is not set - the mode is __Clip__;- Any other case - __Dual__.

* __CssClass__ is the name of a CSS style to be applied to the __RibbonBarMenu__. The style can be declared in the CSS file of the applied skin.

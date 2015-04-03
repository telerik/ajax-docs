---
title: RibbonBarSplitButton
page_title: RibbonBarSplitButton | UI for ASP.NET AJAX Documentation
description: RibbonBarSplitButton
slug: ribbonbar/radribbonbar-items/ribbonbarsplitbutton
tags: ribbonbarsplitbutton
published: True
position: 3
---

# RibbonBarSplitButton



## RibbonBarSplitButton

The __RibbonBarSplitButton__ has a few important properties, which are listed below:



* __Text__ is the string that the user sees displayed on the __RibbonBarSplitButton__.

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the button.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* __Size__ determines the size of the __RibbonBarSplitButton__.Use the Size property to specify the item's initial size:- For small icon - __RibbonBarItemSize.Small__- For small icon with text - __RibbonBarItemSize.Medium__- For large icon with text - __RibbonBarItemSize.Large__.

* __ImageAltText__ specifies the alternate text of the image.

* __ImageUrlLarge__ specifies a custom image that will be used when the item has __Size = RibbonBarItemSize.Large__.

* __ImageUrl__ specifies a custom image that will be used when the item has __Size = RibbonBarItemSize.Small__ or __RibbonBarItemSize.Medium__.

* __ImageRenderingMode__ determines the rendering mode of the image.In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is __Auto__), it's considered as follows:- If ImageUrl is set and __ImageUrlLarge__ is not set - the mode is __Clip__;- Any other case - __Dual__.

* __CssClass__ is the name of a CSS style to be applied to the __RibbonBarSplitButton__. The style can be declared in the CSS file of the applied skin.

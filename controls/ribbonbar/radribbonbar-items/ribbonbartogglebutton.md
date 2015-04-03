---
title: RibbonBarToggleButton
page_title: RibbonBarToggleButton | UI for ASP.NET AJAX Documentation
description: RibbonBarToggleButton
slug: ribbonbar/radribbonbar-items/ribbonbartogglebutton
tags: ribbonbartogglebutton
published: True
position: 4
---

# RibbonBarToggleButton



## RibbonBarToggleButton

The __RibbonBarToggleButton__ has a few important properties, which are listed below:



* __Text__ is the string that the user sees displayed on the __RibbonBarSplitButton__.

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the button.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* __Size__ determines the size of the __RibbonBarToggleButton__. The value can be “Large”, “Medium” or “Small”.

* __ImageAltText__ specifies the alternate text of the image.

* __ImageUrlLarge__ specifies a custom image that will be used when the item has __Size = RibbonBarItemSize.Large__.

* __ImageUrl__ specifies a custom image that will be used when the item has __Size = RibbonBarItemSize.Small__ or __RibbonBarItemSize.Medium__.

* __ImageRenderingMode__ determines the rendering mode of the image.In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is __Auto__), it's considered as follows:- If ImageUrl is set and __ImageUrlLarge__ is not set - the mode is __Clip__;- Any other case - __Dual__.

* __Toggled__ represents the state of the __RibbonBarToggleButton__ - “true” when the button is toggled and “false” when it is not.

* __CssClass__ is the name of a CSS style to be applied to the __RibbonBarSplitButton__. The style can be declared in the CSS file of the applied skin.

# See Also

 * [RibbonBar Items Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/items/defaultcs.aspx)

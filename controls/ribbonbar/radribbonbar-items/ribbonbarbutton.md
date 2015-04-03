---
title: RibbonBarButton
page_title: RibbonBarButton | UI for ASP.NET AJAX Documentation
description: RibbonBarButton
slug: ribbonbar/radribbonbar-items/ribbonbarbutton
tags: ribbonbarbutton
published: True
position: 2
---

# RibbonBarButton



## RibbonBarButton

The __RibbonBarButton__ has a few important properties, which are listed below:



* __Text__ is the string that the user sees displayed on the __RibbonBarButton__.

* __Tooltip__ is a string that appears in the tooltip window when the user hovers the mouse over the __RibbonBarButton__.

* __Size__ determines the size of the __RibbonBarButton__.Use the Size property to specify the item's initial size:- For small icon - __RibbonBarItemSize.Small__- For small icon with text - __RibbonBarItemSize.Medium__- For large icon with text - __RibbonBarItemSize.Large__.

* __ImageAltText__ specifies the alternate text of the image.

* __ImageUrlLarge__ specifies a custom image that will be used when the item has __Size = RibbonBarItemSize.Large__.

* __ImageUrl__ specifies a custom image that will be used when the item has __Size = RibbonBarItemSize.Small__ or __RibbonBarItemSize.Medium__.

* __ImageRenderingMode__ determines the rendering mode of the image.In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is __Auto__), it's considered as follows:- If ImageUrl is set and __ImageUrlLarge__ is not set - the mode is __Clip__;- Any other case - __Dual__.

* __CssClass__ is the name of a CSS style to be applied to the __RibbonBarButton__. The style can be declared in the CSS file of the applied skin.

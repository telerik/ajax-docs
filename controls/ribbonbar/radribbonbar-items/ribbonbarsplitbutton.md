---
title: RibbonBarSplitButton
page_title: RibbonBarSplitButton | RadRibbonBar for ASP.NET AJAX Documentation
description: RibbonBarSplitButton
slug: ribbonbar/radribbonbar-items/ribbonbarsplitbutton
tags: ribbonbarsplitbutton
published: True
position: 3
---

# RibbonBarSplitButton



## RibbonBarSplitButton

The **RibbonBarSplitButton** has a few important properties, which are listed below:



* **Text** is the string that the user sees displayed on the **RibbonBarSplitButton**.

* **ToolTip** is the text of the tooltip that appears when the user hovers the mouse over the button.

>tip Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* **Size** determines the size of the **RibbonBarSplitButton**. Use the Size property to specify the item's initial size:
	* For small icon: **RibbonBarItemSize.Small**
	* For small icon with text: **RibbonBarItemSize.Medium**
	* For large icon with text: **RibbonBarItemSize.Large**

* **ImageAltText** specifies the alternate text of the image.

* **ImageUrlLarge** specifies a custom image that will be used when the item has **Size = RibbonBarItemSize.Large**.

* **ImageUrl** specifies a custom image that will be used when the item has **Size = RibbonBarItemSize.Small** or **RibbonBarItemSize.Medium**.

* **ImageRenderingMode** determines the rendering mode of the image. In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is **Auto**), it's considered as follows:
	* If ImageUrl is set and **ImageUrlLarge** is not set: the mode is **Clip**
	* Any other case: **Dual**

* **CssClass** is the name of a CSS style to be applied to the **RibbonBarSplitButton**. The style can be declared in the CSS file of the applied skin.

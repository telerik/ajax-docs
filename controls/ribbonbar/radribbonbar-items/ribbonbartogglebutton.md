---
title: RibbonBarToggleButton
page_title: RibbonBarToggleButton | RadRibbonBar for ASP.NET AJAX Documentation
description: RibbonBarToggleButton
slug: ribbonbar/radribbonbar-items/ribbonbartogglebutton
tags: ribbonbartogglebutton
published: True
position: 4
---

# RibbonBarToggleButton



## RibbonBarToggleButton

The **RibbonBarToggleButton** has a few important properties, which are listed below:



* **Text** is the string that the user sees displayed on the **RibbonBarSplitButton**.

* **ToolTip** is the text of the tooltip that appears when the user hovers the mouse over the button.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* **Size** determines the size of the **RibbonBarToggleButton**. The value can be “Large”, “Medium” or “Small”.

* **ImageAltText** specifies the alternate text of the image.

* **ImageUrlLarge** specifies a custom image that will be used when the item has **Size = RibbonBarItemSize.Large**.

* **ImageUrl** specifies a custom image that will be used when the item has **Size = RibbonBarItemSize.Small** or **RibbonBarItemSize.Medium**.

* **ImageRenderingMode** determines the rendering mode of the image.In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is **Auto**), it's considered as follows:- If ImageUrl is set and **ImageUrlLarge** is not set - the mode is **Clip**;- Any other case - **Dual**.

* **Toggled** represents the state of the **RibbonBarToggleButton** - “true” when the button is toggled and “false” when it is not.

* **CssClass** is the name of a CSS style to be applied to the **RibbonBarSplitButton**. The style can be declared in the CSS file of the applied skin.

# See Also

 * [RibbonBar Items Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/items/defaultcs.aspx)

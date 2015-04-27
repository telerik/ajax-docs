---
title: RibbonBarMenu
page_title: RibbonBarMenu | RadRibbonBar for ASP.NET AJAX Documentation
description: RibbonBarMenu
slug: ribbonbar/radribbonbar-items/ribbonbarmenu
tags: ribbonbarmenu
published: True
position: 6
---

# RibbonBarMenu



## RibbonBarMenu

The **RibbonBarMenu** has a few important properties, which are listed below:



* **Text** is the string that the user sees displayed on the **RibbonBarMenu**.

* **ToolTip** is the text of the tooltip that appears when the user hovers the mouse over the button.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* **Size** determines the size of the **RibbonBarToggleButton**. The value can be “Large”, “Medium” or “Small”.

* **ImageRenderingMode** determines the rendering mode of the image.In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is **Auto**), it's considered as follows:- If ImageUrl is set and **ImageUrlLarge** is not set - the mode is **Clip**;- Any other case - **Dual**.

* **CssClass** is the name of a CSS style to be applied to the **RibbonBarMenu**. The style can be declared in the CSS file of the applied skin.
